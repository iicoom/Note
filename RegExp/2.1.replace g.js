// ## 替换特殊符号
'dafa++fasdf+'.replace(/\+/g, ' ')
// "dafa  fasdf "
'dafa++fasdf+'.replace(/\+/g, '')
// "dafafasdf"
'dafa++fasdf+'.replace(/\+/, '')
// "dafa+fasdf+"


// trim 字符串空白字符
let str = '[  {"id":11111  23,"count":123}, {   "id":1111123,"count":213}]';
function trim(str) {
 str.replace(/\s+/g, "")
}
// [{"id":1111123,"count":123},{"id":1111123,"count":213}]


// 替换字符串中的特殊符号
string.replace(/\r\n/g,"")  
