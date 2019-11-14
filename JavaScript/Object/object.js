// Note: You call this method directly on the Object constructor rather than on an instance of type Object.

// JavaScript Demo: Object.defineProperty()
// Object.defineProperty(obj, prop, descriptor)

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42



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


/**
 * 在js中经常需要知道Object中的所有属性及值，然而若是直接弹出Object，则是直接显示一个对象，它的属性和值没有显示出来，
   不是我们想要的结果，从而需要遍历Object的所有属性。
 */
var obj = { name: "Jack", age: 28, sex: "man" }

var str="";
for (var key in obj){
	// console.log(key)
	str += (key +": "+obj[key] + "\n");	
}
console.log(str);

// 也可以用 JSON.stringify()
var temp = JSON.stringify(obj)
// "{"name":"Jack","age":28,"sex":"man"}"
JSON.parse(temp)
// {name: "Jack", age: 28, sex: "man"}



/**
 * 实现对象的改造
 */
const ProductType_F = { 6: '果蔬类', 7: '叶菜类' }

this.state.ProductList = Object.keys(ProductType_F).map((key) => {
      return { key: parseInt(key, 0), value: ProductType_F[key] };
    });


Object.keys(ProductType_F)
// =>
["6", "7"]

[{key: 6, value: "果蔬类"},{key: 7, value: "叶菜类"}]











