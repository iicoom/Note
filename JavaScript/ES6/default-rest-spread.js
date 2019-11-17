/**
 * ES6 gives us a way to set default function parameters. 
 * @param {*} number 
 * @param {*} increment 
 */
function inc(number, increment = 1) {
    return number + increment;
}
console.log(inc(2, 2)); // 4
console.log(inc(2));    // 3

// ## 函数的默认参数
function abc(opts={}) {console.log(opts)}
abc()
// => {}
abc({name: 'jack', age: 28})
// => {name: "jack", age: 28}


/**
 * rest
 * 传入函数分散的参数转换为数组
 */
// Let’s rewrite sum function to handle all arguments passed to it (without validation — just to be clear). 
// If we want to use ES5, we probably also want to use arguments object.
function sum() {
    var numbers = Array.prototype.slice.call(arguments),
        result = 0;
    numbers.forEach(function (number) {
        result += number;
    });
    return result;
 }
 console.log(sum(1));             // 1
 console.log(sum(1, 2, 3, 4, 5)); // 15

function sum(...numbers) {
    var result = 0;
    numbers.forEach(function (number) {
      result += number;
    });
    return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15


/**
 * spread
 * 把传入的数组参数转换为分散参数
 */
function sum(a, b, c) {
    return a + b + c;
}
var args = [1, 2, 3];
var ar = [1, 2, 3, 4];
console.log(sum(...args)); // 6
console.log(sum(...ar)); // 6

