var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]


// Array destructuring
//Basic variable assignment
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//Assignment separate from declaration
//A variable can be assigned its value via destructuring separate from the variable's declaration.
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Default values
// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7


// 数组元素为对象 Object.assign 第三个数据源会覆盖前面的
const defaultConfig = {NODE_ENV: 'dev', port: 3008}
const configList = [defaultConfig]

const customConfig = {NODE_ENV: 'test', port: 3009, db_host: '127.0.0.1'}
configList.push(customConfig)

const finalConfig = Object.assign({}, ...configList)
console.log(finalConfig)
// {NODE_ENV: "test", port: 3009, db_host: "127.0.0.1"}
