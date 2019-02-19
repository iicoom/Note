https://github.com/lukehoban/es6features#readme
## Promise
promise是异步编程的一种解决方案，比传统的解决方案 回调函数-和事件 更合理、更强大。 

## Class 类的支持

## 模块化(Module)
ES5不支持原生的模块化，在ES6中模块作为重要的组成部分被添加进来。模块的功能主要由 export 和 import 组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口，通过import来引用其它模块提供的接口。同时还为模块创造了命名空间，防止函数的命名冲突。

## let/const块作用域
### let 和 var的区别
let : 变量只能声明一次
var : 变量可以多次声明

ES6 新增了let命令，用来声明局部变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效，而且有暂时性死区的约束。

```
var a = 5;
  var a = 3;
  let b = 2;
  let b = 4;  
  console.log(a);
  console.log(b);  // Identifier 'b' has already been declared

```

ES6 新增了let命令，用来声明局部变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效，而且有暂时性死区的约束。

在ES6之前，我们都是用var来声明变量，而且JS只有函数作用域和全局作用域，没有块级作用域，所以{}限定不了var声明变量的访问范围。
例如：
```
{ 
  var i = 9;
} 
console.log(i);  // 9
ES6新增的let，可以声明块级作用域的变量。

{ 
  let i = 9;     // i变量只在 花括号内有效！！！
} 
console.log(i);  // Uncaught ReferenceError: i is not defined
```

let非常适合用于 for循环内部的块级作用域。JS中的for循环体比较特殊，每次执行都是一个全新的独立的块作用域，用let声明的变量传入到 for循环体的作用域后，不会发生改变，不受外界的影响。看一个常见的面试题目：
```
for (var i = 0; i <10; i++) {  
  setTimeout(function() {  			// 同步注册回调函数到 异步的 宏任务队列。
    console.log(i);        			// 执行此代码时，同步代码for循环已经执行完成
  }, 0);
}
									// 输出结果
									10   共10个
// 这里面的知识点： JS的事件循环机制，setTimeout的机制等
如果把 var改成 let声明：

// i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
for (let i = 0; i < 10; i++) { 
  setTimeout(function() {
    console.log(i);    				//  i 是循环体内局部作用域，不受外界影响。
  }, 0);
}
									// 输出结果：
									0  1  2  3  4  5  6  7  8 9
```

## 解构

## 参数默认值

## 模板字符串

## symbol
在ES2015中，创建了一个新的（第6个）数据类型symbol。

JavaScript开发人员和ECMAScript委员会（TC39）需要一种方法来添加新的对象属性，而不会破坏现有方法像for...in循环或JavaScript方法像Object.keys。
例如，如果一个对象，
var myObject = {firstName:'raja', lastName:'rao'} 
运行Object.keys(myObject)它将返回[firstName, lastName]。

现在，如果我们添加另一个属性，为myObject设置newProperty ，如果运行Object.keys(myObject)它应该仍然返回旧值（即，以某种方式使之忽略新加入的newproperty），并且只显示[firstName, lastName]而不是[firstName, lastName, newProperty] 。这该如何做？

我们之前无法真正做到这一点，因此创建了一个名为Symbols的新数据类型。

如果作为symbol添加newProperty，那么Object.keys(myObject)会忽略它（因为它不识别它），
仍然返回[firstName, lastName] 。

```
var obj = {}

obj['prop1'] = 1
obj['prop2'] = 2

var prop3 = Symbol('prop3')
var prop4 = Symbol('prop4')
obj[prop3] = 3
obj[prop4] = 4

for(var key in obj) {console.log(key, '=', obj[key])}
prop1 = 1
prop2 = 2

console.log(obj[prop3])
3
console.log(obj[prop4])
4

console.log(obj)
{
	prop1: 1
	prop2: 2
	Symbol(prop3): 3
	Symbol(prop4): 4
}
console.log(Object.keys(obj))
["prop1", "prop2"]
```

## 私有化
Class和Symbol能否实现私有化，为什么要用闭包？
### 闭包的应用场景
```
function aaa() {
	var a = 1;
	return function(){
		a++;
		alert(a);
	}
}

var b = aaa();

b();   //2
b();   //3
alert(a);   //a找不到，是局部变量

------------------------------
/*  模块化代码，减少全局变量的污染
	var aaa = (function(){

		var a = 1;
		return function(){
			a++;
			alert(a);
		}
	})();

	aaa();
	aaa();
*/
```

