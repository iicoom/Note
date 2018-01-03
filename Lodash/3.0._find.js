var _ = require('lodash');

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'
 
// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'

//只输入第一个
var a = _.find([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});

var b = _.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
console.log(a)
console.log(b)