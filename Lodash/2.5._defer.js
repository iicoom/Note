var _ = require('lodash');


//_.defer(func, [args])

_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.

_.delay(function(text) {
  console.log(text);
}, 2000, 'later');
// => Logs 'later' after one second.