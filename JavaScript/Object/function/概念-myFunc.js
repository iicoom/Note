/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 * 
 * 通常说的function就是一个可以被外部代码调用的子程序
 * 
 * 一个function是由一系列的语句组成 被称作 函数体
 * 
 * 可以给function传入参数，然后它会返回一个值
 * 
 * 在JavaScript中，function是first-class objects. 因为他们可以有属性和方法
 * 
 * 和其他objects不同的是functions可以被调用，简而言之，它们是 Function objects.
 */

 // 声明 一个function ’myFunc'
 function myFunc(theObject) {
     theObject.brand = "Toyota";
 }

 /*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);

// Defining functionsSection
// function name([param[, param[, ... param]]]) {
//   statements
// }

var myFunction = function() {
  statements
}

// When functions are used only once, a common pattern is an IIFE (Immediately Invokable Function Expression).

(function() {
  statements
})();



/**
 * 函数的形参仍然可以时函数，传入的回调函数就是一种
 */
// 参考Promise/并发框架/frameElement.js