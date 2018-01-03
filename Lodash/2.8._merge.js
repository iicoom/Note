var _ = require('lodash');

var users = {
  'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};
 
var ages = {
  'data': [{ 'age': 36 }, { 'age': 40 }]
};

var users1 = {
  'data': [{ 'user': 'barney' }, { 'age': 40 },{'email':'123@qq.com'}]
};
 
//var result = _.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
var result1 = _.merge(users, users1);
//=>{ data:[ { user: 'barney' },{ user: 'fred', age: 40 },{ email: '123@qq.com' } ] }

//console.log(result)
console.log(result1)
