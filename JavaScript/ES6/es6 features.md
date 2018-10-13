https://github.com/lukehoban/es6features#readme
## Promise
promise是异步编程的一种解决方案，比传统的解决方案 回调函数-和事件 更合理、更强大。 

## Class 类的支持

## 模块

## let/const块作用域
### let 和 var的区别

## => 操作符
### => 和 function的区别

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

