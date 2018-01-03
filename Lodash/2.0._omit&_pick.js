var _ = require('lodash');


var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, ['a', 'c']);
// => { 'b': '2' }

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }


 
_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

//_.isNumber返回的是bool