var request = require('request');
var querystring = require('querystring');

// request('https://www.baidu.com/',function(error, response, body) {
// 	console.log('error:', error); // Print the error if one occurred 
// 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// 	console.log('body:', body); // Print the HTML for the Google homepage. 
// })

// querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// returns 'foo=bar&baz=qux&baz=quux&corge='

const nimei = querystring.stringify('signTime=1524412800000') // 这样写不对
console.log(nimei)