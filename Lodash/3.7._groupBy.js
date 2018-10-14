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



const originalData = [
  { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
  { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }, 
  { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }
];

// const group = _.groupBy(originalData,'lesson');
// console.log(group)
// { math:
//    [ { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
//      { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' },
//      { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' } ],
//   english:
//    [ { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' } ] 
// }
