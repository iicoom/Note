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

// 1. 
var tester = "hey hi";

function newFunction() {
    var hello = "hello";
    console.log(tester);
}
newFunction()       // hey hi
console.log(hello); // Uncaught ReferenceError: hello is not defined

// 2.
var greeter = "hey hi";
var greeter = "say Hello instead";

// or
// greeter = "say Hello instead";

console.log(greeter)
// say Hello instead

// 3.
console.log (greeter);
var greeter = "say hello"

// it is interpreted as this：
var greeter;
console.log(greeter);        //greeter is undefined
greeter = "say hello"

// So var variables are hoisted to the top of its scope and initialized with a value of undefined.


/**
 * 1. let is block scoped
 * A block is chunk of code bounded by {}. A block lives in curly braces. 
 * Anything within curly braces is a block. 
 * So a variable declared in a block with the let is only available for use within that block.
 * 
 * 2. let can be updated but not re-declared.
 * 
 */
// However, if the same variable is defined in different scopes, there will be no error.
let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting);//"say Hello instead"
}
console.log(greeting);//"say Hi"

// This fact makes let a better choice than var.



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
