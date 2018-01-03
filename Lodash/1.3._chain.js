var _ = require('lodash');
var querystring = require('querystring');

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();


function notEmpty(val) {
    if (_.isString(val)) {
        return val.length > 0;
    } else {
        return !!val;
    }
}

/**
 * [urlEncode description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function urlEncode(str) {
    return querystring.escape(str);
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

var baby = _
  .chain(params)
  .pickBy(_.isEmpty)    //{ memo: '', extend_param: null }
  //.map(notEmpty)
  .value()

var boy = _
  .chain(params)
  .pickBy(notEmpty)
  .value()

// { service: 'query_is_set_pay_password',
//   version: '1.0',
//   request_time: '20171012160251',
//   partner_id: '200004595271',
//   _input_charset: 'UTF-8',
//   sign: 'eb1c75b052165d6ec5ef8b901b0260fe',
//   sign_type: 'MD5',
//   sign_version: '1.0',
//   encrypt_version: '1.0',
//   notify_url: 'http://101.201.197.163/sina_pay/api/notify/query_is_set_pay_password',
//   return_url: 'http://101.201.197.163/myfarm/api/v2/weibopay/front/query_is_set_pay_password',
//   identity_id: '59c39a04fb79c64331d0759a',
//   identity_type: 'UID' }
var boy = _
  .chain(params)
  .pickBy(notEmpty)
  .mapValues(urlEncode)  //字符转义
  .value()
//这里受_.map()的启发
// { service: 'query_is_set_pay_password',
//   version: '1.0',
//   request_time: '20171012160251',
//   partner_id: '200004595271',
//   _input_charset: 'UTF-8',
//   sign: 'eb1c75b052165d6ec5ef8b901b0260fe',
//   sign_type: 'MD5',
//   sign_version: '1.0',
//   encrypt_version: '1.0',
//   notify_url: 'http%3A%2F%2F101.201.197.163%2Fsina_pay%2Fapi%2Fnotify%2Fquery_is_set_pay_password',
//   return_url: 'http%3A%2F%2F101.201.197.163%2Fmyfarm%2Fapi%2Fv2%2Fweibopay%2Ffront%2Fquery_is_set_pay_password',
//   identity_id: '59c39a04fb79c64331d0759a',
//   identity_type: 'UID' }

console.log(boy)
//console.log(baby);
//console.log(youngest);