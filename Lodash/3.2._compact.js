var _ = require('lodash');

_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]


//concat合并数组
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]


_.difference([2, 1], [2, 3]);
// => [1]