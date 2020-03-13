// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

// 与大多数全局对象不同，Reflect不是一个构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。
// Reflect的所有属性和方法都是静态的（就像Math对象)

// Reflect.get()方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。
// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
var x = {p: 1};
var obj = new Proxy(x, {
  get(t, k, r) { return k + "bar"; }
});
Reflect.get(obj, "foo"); // "foobar"