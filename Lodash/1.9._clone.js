var _ = require('lodash');


var base_params = {
	service: '', 
    version: '1.0', 
    request_time: '', 
    partner_id: '', 
    _input_charset: '',
    sign: '', //  签名  String(256) 参见“签名机制”。   非空  e8qdwl9caset5zugii2r7q0k8ikopxor
    sign_type: '', //  签名方式    String(10)  签名方式支持RSA、MD5。建议使用MD5   非空  MD5
    sign_version: '1.0', //  签名版本号   Number(5)   签名密钥版本，默认1.0    可空  1
    encrypt_version: '1.0', //  加密版本号   Number(5)   加密密钥版本，默认1.0    可空  1
    notify_url: '', //  系统异步回调通知地址  String(1000)    钱包处理发生状态变迁后异步通知结果，响应结果为“success”，全部小写   可空  http://www.test.com/receive_notify.htm
    return_url: '', //  页面跳转同步返回页面路径    String(1000)    钱包处理完请求后，当前页面自动跳转到商户网站里指定页面的http路径。 可空  http://www.test.com/receive_return.htm
    memo: '' //  备注  
}

var params = _.clone(base_params);
console.log(params)