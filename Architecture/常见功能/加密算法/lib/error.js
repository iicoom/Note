/**
 * WeiboPayError constructor
 *
 * @param {String} msg Error message
 */
var inherits = require('util').inherits;


function WeiboPayError(code, msg, cause) {
    Error.call(this);
    Error.captureStackTrace(this, WeiboPayError);
    this.name = 'WeiboPayError';
    this.code = code;
    this.cause = cause;
    this.message = msg;
};

/*!
 * Inherits from Error.
 */
inherits(WeiboPayError, Error);

WeiboPayError.prototype.toJSON = function() {
    return JSON.stringify({
        name: this.name,
        code: this.code || '',
        message: this.message,
        cause: this.cause || '',
        stack: this.stack
    });
}

/*!
 * Module exports.
 */

module.exports = exports = WeiboPayError;

// var err = new WeiboPayError('100000', '用户名或者密码错误', '用户名错误');

// console.log(err);
// console.log(err.stack)
// console.log(JSON.stringify(err));

// 1000 网络请求错误
// 1001', '验签失败'
// '1002', '处理失败'