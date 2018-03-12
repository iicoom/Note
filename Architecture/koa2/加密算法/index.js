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