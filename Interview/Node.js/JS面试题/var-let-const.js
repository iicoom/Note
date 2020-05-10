// https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e
// Before the advent of ES6, var declarations ruled as King. 

/**
 * Scope of var
 * Scope essentially means where these variables are available for use.
 * 作用域指的是变量变量可以在哪里被使用
 * 
 * var declarations are globally scoped or function/locally scoped. 
 * var 声明的变量 分为 全局作用域 和 函数作用域
 * 
 * 1. 作用域
 * It is globally scoped when a var variable is declared outside a function.
 * 如果在函数外声明 那就是全局作用域可以访问
 * 
 * 2. 重复声明
 * var variables can be re-declared and updated
 * 变量可以被重新赋值，但是不应该重复声明，如 var a = 1; var a = 2; 这会导致代码bug出现
 * 
 * 3. 变量提升 Hoisting of var
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to 
 * the top of their scope before code execution.
 * 变量提升是js的机制，在变量和函数被使用或执行之前，他们会被提升到作用域的顶端。
 */

// 1. JS 中变量的声明 var let 是否可以重复声明？
var greeter = "hey hi";
var greeter = "say Hello instead";
console.log(greeter)
// say Hello instead
// var 可以被重复声明 后边的会覆盖前面的

let greeter = "hey hi";
let greeter = "say Hello instead";
// Uncaught SyntaxError: Identifier 'greeter' has already been declared


// 2. 使用声明后未赋值使用时的 var let 表现相同
(function() {
    var aV;
    let aL;
    console.log(aV)  // undefined
    console.log(aL)  // undefined
}())

// 使用未声明的变量 var let 变现有差异
(function() {
    console.log(aV)  // undefined  这里有变量提升 使用未声明的变量aV 会被最顶部 aV = undefined
    console.log(aL)  // Uncaught ReferenceError: Cannot access 'aL' before initialization
    var aV = 'av';
    let aL = 'al';
}())
// var 不会报错，但是let 直接报错了


// 3. JS 中 var let 声明变量的作用域
// var 和 let 表现一致的情况：
var tester = "hey hi";

function newFunction() {
    var hello = "hello";
    console.log(tester);  // 函数内可以访问函数外声明的变量 函数外无法使用函数内定义的变量 let相同
}
newFunction()       // hey hi
console.log(hello); // Uncaught ReferenceError: hello is not defined

// var 和 let 表现不一致的情况：
var greetingV = "say Hi";
let greetL = "out if block";
if (true) {   // if 块结构
    var greetingV = "say Hello instead";
    let greetL = "in if block";
    // console.log(greetingV); //"say Hello instead"
    // console.log(greetL);    //"in if block"
}
console.log(greetingV);  //say Hello instead
console.log(greetL);  // out if block
// 总结：var 表现出的是一种全局作用域  let 表现出的是块级作用域

// 下面的例子同样说明 块级作用域var let 表现的差异
(function() {
    var varT = 'test var OK.';
    let letT = 'test let OK.';
    {
      var varT = 'varT changed.';
      let letT = 'letT changed.';
    }  
    console.log(varT); //输出"varT changed."，内部"{}"中声明的varT变量覆盖外部的letT声明
    console.log(letT); //输出"test let OK."，内部"{}"中声明的letT和外部的letT不是同一个变量
}())  


/**
 * const  Variables declared with the const maintain constant values.
 * 1. const declarations are block scoped
 * 
 * 2. const cannot be updated or re-declared
 */
const greeting = "say Hi";
greeting = "say Hello instead";//error : Assignment to constant variable. 

// or
const greeting = "say Hi";
const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared

const a; // SyntaxError: Missing initializer in const declaration  需要初始化值

// const 声明对象
const greetin = {
    words : "Hello",
    number : "five"
}

const greetin = {}  // SyntaxError: Identifier 'greetin' has already been declared

greetin.number = 2

console.log(greetin)
// {words: "Hello", number: 2}
