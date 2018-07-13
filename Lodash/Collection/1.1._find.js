var _ = require('lodash');

// 例1：
const originalData = [
  { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
  { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }, 
  { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }
];


_.find(originalData, function(o) { 
	//return o.age >30; 
	if (o.age>30) {
		console.log(o)
	}
	return o;
	
});
//{ name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }


// 例2：
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

const errordate = _.filter(marketPrice, (o) => { return o.price < 0; });

/*
[ { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+6%',
    date: 1528329600000,
    price: -20 },
  { product_id: '5b39dc6be27dca7261a01f1f',
    product_name: '茼蒿8%+8%',
    date: 1528502400000,
    price: -1 } ]
*/

const errordate = _.find(marketPrice, (o) => { return o.price < 0; });

/*
{ product_id: '5b39dc6be27dca7261a01f1f',
  product_name: '茼蒿8%+6%',
  date: 1528329600000,
  price: -20 }
*/
