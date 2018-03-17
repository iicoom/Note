/**
 * md5
 */
var crypto = require('crypto');

/**
 * MD5签名/验签
 *
 * @param {[type]} key     [密钥]
 * @param {[type]} charset [编码格式]
 */
function MD5(options) {
    if (!(this instanceof MD5)) return new MD5(options);

    this.key = options.key;
    this._charset = options.charset;
}


/**
 * MD5加密
 * @param  {[type]} text [需要加密的字符串]
 * @return {[type]}      [description]
 */
MD5.prototype.md5 = function(text, charset) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(text, charset);
    text = md5sum.digest('hex');
    return text;
}


/**
 * MD5签名
 * @param  {[type]} text [需要签名的字符串]
 * @return {[type]}      [description]
 */
MD5.prototype.sign = function(text, charset) {
    charset = charset || this._charset;

    text = text + this.key;
    return this.md5(text, charset);
}


/**
 * 验证签名
 * @param  {[type]} text [需要签名的字符串]
 * @param  {[type]} sign [签名结果]
 * @return {[type]}      [description]
 */
MD5.prototype.verify = function(text, sign, charset) {
    charset = charset || this._charset;

    text = text + this.key;
    var mysign = this.md5(text, charset);
    return sign === mysign;
}

module.exports = MD5;
