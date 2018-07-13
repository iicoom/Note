var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];


_.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']
 
// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
 
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// => []


var marketPrice = [ 
  { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+4%',
    date: 1528156800000,
    price: 1.1 },
  { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+5%',
    date: 1528243200000,
    price: 1.1 },
  { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+6%',
    date: 1528329600000,
    price: -20 },
  { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+7%',
    date: 1528416000000,
    price: 0 },
  { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+8%',
    date: 1528502400000,
    price: -1 } 
]

const errorname = _.takeWhile(marketPrice, (o) => { return o.product_name !== name; });

// 做数值判断会有问题
const errordate = _.takeWhile(marketPrice, (o) => { return o.price < 0; });

console.log(errordate)
// => []
