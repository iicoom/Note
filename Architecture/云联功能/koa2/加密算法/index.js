var RSA = require('./lib/rsa');
var MD5 = require('./lib/md5');
var SignUtil = require('./signutil');

var DEFAULT_CHARSET = 'UTF-8'; // 默认字节编码
var DEFAULT_SIGN_TYPE = 'MD5'; // 默认加密方式

/**
 * 获得待加密的字符串
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
function createLinkString(params) {
    return _.chain(params)
        .pick(notEmpty)
        .pairs()
        .filter(function(v) {
            return !_.contains(['sign', 'sign_type', 'sign_version'], v[0]);
        })
        .map(function(v) {
            return v.join('=')
        })
        .sortBy()
        .join('&')
        .value();
}

function FuckPay(options) {
	if (!(this instanceof FuckPay)) return new FuckPay(options);

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
FuckPay.prototype._getBaseParams = function(service, query) {
    var params = _.clone(this.baseParams);
    if (query) query = querystring.stringify(query);

    params['notify_url'] = this.notify_url + '/' + service;
    params['return_url'] = this.return_url + '/' + service + (!!query ? ('?' + query) : '');
    params['service'] = service;
    params['request_time'] = dateFormat(new Date(), 'yyyymmddHHMMss'); // yyyyMMddHHmmss

    return params;
}

/**
 * 2.2  设置实名信息
 * set_real_name
 * @param  {[type]} identity_id   [用户标识信息    String(50)  商户系统用户ID(字母或数字) 非空  2000011212]
 * @param  {[type]} identity_type [用户标识类型    String(16)  ID的类型，目前只包括UID  非空  UID]
 * @param  {[type]} real_name     [String(50)    密文，使用新浪支付RSA公钥加密。明文长度：50    非空  XAIDFJAASDF]
 * @param  {[type]} cert_type     [String(18)    见附录，目前只支持身份证    非空  IC]
 * @param  {[type]} cert_no       [String(18)    密文，使用新浪支付RSA公钥加密。明文长度：30    非空  XAIDFJAASDF]
 * @param  {[type]} need_confirm  [String(1) 是否需要钱包做实名认证，值为Y/N，默认Y。暂不开放外部自助实名认证。 可空  Y]
 * @param  {[type]} client_ip     [String(50) 用户在商户平台操作时候的IP地址，公网IP，不是内网IP  非空 127.0.0.1]
 * @param  {[type]} extend_param  [String(200)   业务扩展信息，参数格式：参数名1^参数值1|参数名2^参数值2|…… 可空  test^true|notify_type^sync]
 * @return {[type]}               [无业务同步响应参数]
 */
FuckPay.prototype.setRealName = function(identity_id, identity_type, real_name, cert_type, cert_no, need_confirm, client_ip, extend_param, cb) {
    var params = this._getBaseParams('set_real_name');

    real_name = this.rsa.encryptByPublicKey(real_name);
    cert_no = this.rsa.encryptByPublicKey(cert_no);

    params['identity_id'] = identity_id;
    params['identity_type'] = identity_type;
    params['real_name'] = real_name;
    params['cert_type'] = cert_type;
    params['cert_no'] = cert_no;
    params['need_confirm'] = need_confirm;
    params['client_ip'] = client_ip;
    params['extend_param'] = extend_param;

    var content = createLinkString(params);
    var sign = this.signUtil.sign(content);
    params['sign'] = sign;

    this._send(this.mgs_server, params, cb);
}
