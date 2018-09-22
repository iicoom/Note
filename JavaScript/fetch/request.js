var request = require('request');
var querystring = require('querystring'); // Node自带的模块

// request('https://www.baidu.com/',function(error, response, body) {
// 	console.log('error:', error); // Print the error if one occurred 
// 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// 	console.log('body:', body); // Print the HTML for the Google homepage. 
// })


// The querystring module provides utilities for parsing and formatting URL query strings. 
// It can be accessed using:

// querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// returns 'foo=bar&baz=qux&baz=quux&corge='

console.log(nimei)

querystring.parse('foo=bar&abc=xyz&abc=123')
{
  foo: 'bar',
  abc: ['xyz', '123']
}