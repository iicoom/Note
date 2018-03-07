var _ = require('lodash');

_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }


var orderList = [{"user_id":"123","other":"jjj"},{"user_id":"123","other":"kkk"},{"user_id":"456","other":"jjj"}];
var group = _.groupBy(orderList,"user_id")

console.log(group)

// { '123':
//    [ { user_id: '123', other: 'jjj' },
//      { user_id: '123', other: 'kkk' } ],
//   '456': [ { user_id: '456', other: 'jjj' } ] }

var ogroup = _.groupBy(orderList,"other")

console.log(ogroup)

// { jjj:
//    [ { user_id: '123', other: 'jjj' },
//      { user_id: '456', other: 'jjj' } ],
//   kkk: [ { user_id: '123', other: 'kkk' } ] }