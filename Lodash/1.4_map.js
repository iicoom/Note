var _ = require('lodash');

var users = [
  { 'user': 'barney','age':25, 'tel':15523456789},
  { 'user': 'fred','age':25, 'tel':15523456789}
];

var ownerArr = [{  
    "owner": "Colin",  
    "pets": [{"name":"dog1"}, {"name": "dog2"}]  
}, {  
    "owner": "John",  
    "pets": [{"name":"dog3"}, {"name": "dog4"}]  
}];  

/*var result = _.map(users,(item,index) => {
	item.indexTag = index;
	return
});*/
getDataSource = () => {

	return _.map(users,(item,index) => {
		item.indexTag = index;
	});
};

getDataSource();

//var result = _.map(users, 'user'); // [ 'barney', 'fred' ]


var result = _.map(ownerArr, 'pets[0].name'); //[ 'dog1', 'dog3' ]


/*88888888888888888888888888888888888888*/
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']

//buchershop-api例子
/*
order_goods=[
  {'favour_uid':'123'},
  {'favour_uid':'456'}
]
*/
/*
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
*/
/*
_.uniq([2, 1, 2]);
// => [2, 1]
*/
var favour_uid = _.uniq(_.compact(_.map(order_goods, 'favour_uid')))


