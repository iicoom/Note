/**
 * 1. Object.keys(obj)
 */
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); 
// console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); 
// console: ['2', '7', '100']

var obj = {'a':'123','b':'345'};
console.log(Object.keys(obj));  
//['a','b']


/**
 * 2. Object.value(obj)
 */
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); 
// ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); 
// ['a', 'b', 'c']

// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); 
// ['b', 'c', 'a']


/**
 * 3. Object.entries(obj)
 */
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); 
// [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); 
// [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
	console.log(`${key} ${value}`); 
	// "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
	console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});


// 对象到collection的转换
/**
 * 实现对象的改造
 */
const ProductType_F = { 6: '果蔬类', 7: '叶菜类' }

this.state.ProductList = Object.keys(ProductType_F).map((key) => {
      return { key: parseInt(key, 0), value: ProductType_F[key] };
    });

// Object.keys(ProductType_F)
// // =>
// ["6", "7"]

[{key: 6, value: "果蔬类"},{key: 7, value: "叶菜类"}]
