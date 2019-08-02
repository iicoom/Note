/**
 * RSA签名/验签 加密/解密
 * @param {[type]} public_key        [商户加密公钥]
 * @param {[type]} sign_private_key  [商户签名私钥]
 * @param {[type]} sign_public_key   [商户回调签名验证公钥]
 */
function RSA(options) {
    if (!(this instanceof RSA)) return new RSA(options);

    // 加密/解密
    // this.privateKey = options.private_key;
    this.publicKey = options.public_key;

    // 签名/验签
    this.signPrivateKey = options.sign_private_key;
    this.signPassphrase = options.sign_passphrase;
    this.signPublicKey = options.sign_public_key;
    this._charset = options.charset;

    try {
        this.rsaPubPem = fs.readFileSync(options.public_key, 'ascii');
    } catch (e) {
        console.error(e);
        console.error('RSA解密公钥加载失败[' + options.public_key + ']');
    };

    try {
        this.rsaSignPriPem = fs.readFileSync(options.sign_private_key, 'ascii');
    } catch (e) {
        console.error('RSA签名私钥加载失败[' + options.sign_private_key + ']');
    };

    try {
        this.rsaSignPubPem = fs.readFileSync(options.sign_public_key, 'ascii');
    } catch (e) {
        console.error('RSA验签公钥加载失败[' + options.sign_public_key + ']');
    };
}


function WeiboPay(options) {
    if (!(this instanceof WeiboPay)) return new WeiboPay(options);

    var partnerId = this.partnerId = options.partner_id; // 合作者身份ID
    var signType = this.signType = options.sign_type || DEFAULT_SIGN_TYPE; // 签名方式
    var key = this.key = options.key; // md5 密钥
    var _inputCharset = this._inputCharset = options._input_charset || DEFAULT_CHARSET; // 编码

    // 加密/解密
    // var privateKey = this.privateKey = options.private_key;
    var publicKey = this.publicKey = options.public_key;

    // 签名/验签
    var signPrivateKey = this.signPrivateKey = options.sign_private_key;
    var signPassphrase = this.signPassphrase = options.sign_passphrase;
    var signPublicKey = this.signPublicKey = options.sign_public_key;

    this.mgs_server = options.mgs_server; // 会员网关
    this.mas_server = options.mas_server; // 收单网关
    this.notify_url = options.notify_url; // 系统异步回调通知地址(基础URL) url/service_name
    this.return_url = options.return_url; // 页面跳转同步返回页面路径(基础URL) url/service_name


    // 基础参数
    var params = _.clone(BASE_PARAMS);
    params['partner_id'] = partnerId;
    params['sign_type'] = signType;
    params['_input_charset'] = _inputCharset;
    this.baseParams = params;

    // RSA/MD5
    var rsa = new RSA({
        // private_key: privateKey,
        public_key: publicKey,
        sign_private_key: signPrivateKey,
        sign_passphrase: signPassphrase,
        sign_public_key: signPublicKey,
        charset: _inputCharset
    });

    var md5 = new MD5({
        key: key,
        charset: _inputCharset
    });

    var signUtil = new SignUtil({
        rsa: rsa,
        md5: md5,
        sign_type: signType
    });

    this.rsa = rsa;
    this.md5 = md5;
    this.signUtil = signUtil;
}

/**
 * 封装基础数据
 * @private
 * @param  {[type]} service [服务名]
 * @return {[type]}         [description]
 */
WeiboPay.prototype._getBaseParams = function(service, query) {
    var params = _.clone(this.baseParams);
    if (query) query = querystring.stringify(query);

    params['notify_url'] = this.notify_url + '/' + service;
    params['return_url'] = this.return_url + '/' + service + (!!query ? ('?' + query) : '');
    params['service'] = service;
    params['request_time'] = dateFormat(new Date(), 'yyyymmddHHMMss'); // yyyyMMddHHmmss

    return params;
}


/**
 * 发送请求
 * @private
 * @return {[type]} [description]
 */
WeiboPay.prototype._send = function(url, params, cb) {
    var self = this;
    logger.info(params);

    // 过滤掉继承信息
    var _cb = function(err, data) {
        if (err) {
            logger.error(err);
            return cb(err);
        }
        data = _.omit(data, 'response_time', 'partner_id', '_input_charset', 'sign', 'sign_type', 'sign_version', 'response_code', 'response_message', 'memo');
        cb(null, data);
    }

    params = _.chain(params)
        .pick(notEmpty)
        .mapValues(urlEncode)
        .value();

    var options = {
        method: 'POST',
        url: url,
        timeout: 60 * 1000,
        form: params
    };

    function callback(err, response, body) {
        if (err) return _cb(err);
        if (response['statusCode'] !== 200) return _cb(new WeiboPayError('999', '请求错误', {
            statusCode: response['statusCode']
        }));
        logger.info('==========response body=========')
        logger.info(body)
        var contentType = response.headers['content-type'];
        if (-1 !== contentType.indexOf('application/json') || -1 !== contentType.indexOf('text/plain')) {
            try {
              if(body instanceof Array) {
                body.forEach(function(item, index) {
                  body[index] = querystring.unescape(item.replace(/\+/g, ' '))
                })
              } else {
                body = querystring.unescape(body.replace(/\+/g, ' '))
              }
              body = JSON.parse(body);
            } catch (e) {
                logger.error(body);
                return _cb(new WeiboPayError('999', '响应无法解析', {
                    body: body
                }));
            }
            logger.info(body);
            var sign_result = body['sign'];
            var sign_type_result = body['sign_type'];
            var _input_charset_result = body['_input_charset'];

            var response_code = body['response_code']; // 响应码
            if (response_code === 'APPLY_SUCCESS') {
                var content = createLinkString(body);
                var checked = self.signUtil.checkSign(content, sign_result, sign_type_result);
                if (checked) {
                    return _cb(null, body);
                } else {
                    return _cb(new WeiboPayError('1001', '验签失败', {
                        content: content,
                        signMsg: sign_result,
                        signType: sign_type_result
                    }));
                }
            } else {
                // 处理失败
                return _cb(new WeiboPayError('1002', (body['response_message'] + '-' + response_code) || '处理失败', {
                    response_code: response_code,
                    response_message: body['response_message']
                }));
            }
        } else if (-1 !== contentType.indexOf('text/html')) {
            logger.info(body);
            try {
                body = resolveHtml(body);
            } catch (e) {
                logger.error(e);
                body = null;
            };
            _cb(null, body);
        }
    }

    request(options, callback);
}