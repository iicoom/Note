var _ = require('lodash');

/**
 * [notEmpty description]
 * @param  {[type]}  val [description]
 * @return {Boolean}     [description]
 */
function notEmpty(val) {
    if (_.isString(val)) {
        return val.length > 0;
    } else {
        return !!val;
    }
}

var params = { 
  service: 'query_is_set_pay_password',
  version: '1.0',
  request_time: '20171012160251',
  partner_id: '200004595271',
  _input_charset: 'UTF-8',
  sign: 'eb1c75b052165d6ec5ef8b901b0260fe',
  sign_type: 'MD5',
  sign_version: '1.0',
  encrypt_version: '1.0',
  notify_url: 'http://101.201.197.163/sina_pay/api/notify/query_is_set_pay_password',
  return_url: 'http://101.201.197.163/myfarm/api/v2/weibopay/front/query_is_set_pay_password',
  memo: '',
  identity_id: '59c39a04fb79c64331d0759a',
  identity_type: 'UID',
  extend_param: null 
}

var result = notEmpty(params.service);
var result1 = notEmpty(params.memo);
var result2 = notEmpty(params.extend_param);
var result3 = notEmpty(params);

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
