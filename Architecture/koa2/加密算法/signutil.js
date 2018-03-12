class SignUtil {
	
	constructor(options) {
	    this.rsa = options.rsa;
	    this.md5 = options.md5;
	    this._sign_type = options.sign_type;
	}

	/**
	 * 签名服务
	 * @param  {[type]} content  [签名内容]
	 * @return {[type]}          [description]
	 */
	sign(content, signType) {
		signType = signType || this._sign_type;
		signType = signType.toUpperCase();

		if (signType === 'MD5') {
			return this.md5.sign(content);
		} else if (signType === 'RSA') {
			return this.rsa.sign(content);
		} else {
			return null;
		}
	}

	/**
	 * 验证签名
	 * @param  {[type]} content  [签名内容]
	 * @param  {[type]} signMsg  [网关返回签名]
	 * @param  {[type]} signType [MD5/RSA]
	 * @return {[type]}          [description]
	 */
	 checkSign(content, signMsg, signType) {
	 	signType = signType || this._sign_type;
		signType = signType.toUpperCase();

		if (signType === 'MD5') {
			return this.md5.verify(content, signMsg);
		} else if (signType === 'RSA') {
			return this.rsa.verify(content, signMsg);
		} else {
			return false;
		}
	 }

}

module.exports = SignUtil;








