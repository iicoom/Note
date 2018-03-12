/**
 * rsa
 */
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var constants = require('constants');


// var fs = require('fs');

// var rsaKeyPem = fs.readFileSync('./private_key.pem', 'ascii');
// var rsaPubPem = fs.readFileSync('./public_key.pem', 'ascii');

// var input = 'I AM THE WALRUS';
// var bufferToEncrypt = new Buffer(input);

// var encryptedBuffer = crypto.publicEncrypt(rsaPubPem, bufferToEncrypt);
// console.log(encryptedBuffer.toString('base64'))
// var decryptedBuffer = crypto.privateDecrypt(rsaKeyPem, encryptedBuffer);
// console.log(input === decryptedBuffer.toString())


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

    // try {
    //     this.rsaPriPem = fs.readFileSync(options.private_key, 'ascii');
    // } catch (e) {
    //     console.error('RSA加密私钥加载失败['+ options.private_key + ']');
    // };

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


/**
 * 公钥加密
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
RSA.prototype.encryptByPublicKey = function(data) {
    return crypto.publicEncrypt({
        key: this.rsaPubPem,
        padding: constants.RSA_PKCS1_PADDING
    }, new Buffer(data)).toString('base64');
}


/**
 * 私钥解密
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
// RSA.prototype.decryptByPrivateKey = function(data) {
//     return crypto.privateDecrypt({
//         key: this.rsaPriPem,
//         padding: constants.RSA_PKCS1_PADDING
//     }, new Buffer(data)).toString();
// }


/**
 * 签名字符串
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
RSA.prototype.sign = function(text, charset) {
    if (!charset) charset = this._charset;

    var privateKey;
    if (this.signPassphrase) {
        privateKey = {
            key: this.rsaSignPriPem,
            passphrase: this.signPassphrase
        };
    } else {
        privateKey = this.rsaSignPriPem;
    }

    return crypto
        .createSign('sha1WithRSAEncryption')
        .update(text, charset)
        .sign(privateKey, 'base64');
}


/**
 * 验证签名
 * @param  {[type]} text [description]
 * @param  {[type]} sign [description]
 * @return {[type]}      [description]
 */
RSA.prototype.verify = function(text, sign, charset) {
    if (!this.rsaSignPubPem) return false;
    if (!charset) charset = this._charset;

    return crypto.createVerify('sha1WithRSAEncryption')
        .update(text, charset)
        .verify(this.rsaSignPubPem, sign, 'base64');
}


module.exports = RSA;

var rsa = new RSA({
    public_key: path.join(__dirname, '../../../certs/weibopay/test/rsa_public.pem'),
    sign_private_key: path.join(__dirname, '../../../certs/weibopay/test/rsa_sign_private.pem'),
    sign_public_key: path.join(__dirname, '../../../certs/weibopay/test/rsa_sign_public.pem'),
    _charset: 'UTF-8'
});

// var str = '你好，中国。Hello, World.';

// var sign = rsa.sign(str);
// console.log(sign);
// console.log(rsa.verify(str, sign));

// var str = "_input_charset=UTF-8&available_balance=995.36&balance=995.36&bonus=0.09^12.52^12.52&partner_id=200004595271&response_code=APPLY_SUCCESS&response_message=提交成功&response_time=20160223170547";
// var sign = "0NIU8tmp8s+MeFwiFijiWCs7RD3daW5c7XkBJI0D9yVcXQnNxNFUG6XbE6lwXIiu84dJsAChwXtooqyaJYOQ2vH0ceR4wd8+Wqjb09Vgz7fC9Sh9abkfgaI7Aup4JSRaza459RrSZx+2/AnxHMjK6J1N6I6zcabtik97oKFuvOo=";
// console.log(rsa.verify(str, sign)); // false
