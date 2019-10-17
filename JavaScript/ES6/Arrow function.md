## => 操作符
### => 和 function的区别
=>不只是关键字function的简写，它还带来了其它好处。箭头函数与包围它的代码共享同一个this,能帮你很好的解决this的指向问题。有经验的JavaScript开发者都熟悉诸如
var self = this;
或var that = this这种引用外围this的模式。但借助=>，就不需要这种模式了。

语法：
(参数1, 参数2, …, 参数N) => { 函数声明 }

//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
(参数1, 参数2, …, 参数N) => 表达式（单一）

### this 指向问题
见 JavaScript 根目录 JS-this-call-apply-bind.md


[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functionsv)

```
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // this statement returns the array: [8, 6, 7, 9]

// The regular function above can be written as the arrow function below
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// When there is only one parameter, we can remove the surrounding parenthesies:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
elements.map(element => element.length); // [8, 6, 7, 9]

// In this case, because we only need the length property, we can use destructuring parameter:
// Notice that the string `"length"` corresponds to the property we want to get whereas the
// obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
// to any valid variable name you want
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// This destructuring parameter assignment can be written as seen below. However, note that there
// is no specific `"length"` to select which property we want to get. Instead, the literal name
// itself of the variable `length` is used as the property we want to retrieve from the object.
elements.map(({ length }) => length); // [8, 6, 7, 9]

```

