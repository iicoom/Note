> ES6 的Class只是面向对象那个编程的语法糖，升级了ES5的构造函数的原型链继承的写法，
Class并没有解决模块化的问题。ES6之前，社区制订了模块加载方案，主要有CommonJS和AMD。
前者用于服务器，后者浏览器。

## 严格模式

https://www.cnblogs.com/fayin/p/6831071.html
首先我们要明白一个前提，CommonJS模块规范和ES6模块规范完全是两种不同的概念。

## CommonJS模块规范
The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. 

module is a variable that represents current module and 
exports is an object that will be exposed as a module. 
So, whatever you assign to module.exports or exports, will be exposed as a module.

> The following example exposes simple string message as a module in Message.js.
1. 模块直接导出的是一个字符串
```
// message.js
module.exports = "Hello world";

// or
exports = 'Hello world';

Now, import this message module and use it as shown below.
// app.js
var msg = require('./Messages.js');

console.log(msg);
```

> exports is an object. So, you can attach properties or methods to it. The following example exposes an object with a string property in Message.js file.
2. 模块导出一个属性变量 为字符串
···
// message.js
exports.SimpleMessage = 'Hello world';

//or
module.exports.SimpleMessage = 'Hello world';


//app.js
var msg = require('./Messages.js');

console.log(msg.SimpleMessage);
···
In the above example, require() function will return an object { SimpleMessage : 'Hello World'}

> The same way as above, you can expose an object with function. The following example exposes an object with log function as a module.
3. 导出一个function
```
// log.js
module.exports.log = function (msg) { 
    console.log(msg);
};

// app.js
var msg = require('./Log.js');
msg.log('Hello World');
```
The above module will expose an object- { log : function(msg){ console.log(msg); } } . Use the above module as shown below.

> You can also attach an object to module.exports as shown below.
4. 导出一个对象
```
// data.js
module.exports = {
    firstName: 'James',
    lastName: 'Bond'
}

// app.js
var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);
```

## ES6
```
// lib.js
export const sqrt = Math.sqrt;

export function square(x) {
    return x * x;
}

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}


// main.js
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// or
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```

Default exports (one per module)
```
// myFunc.js
export default function () { ... };

// main.js
import myFunc from 'myFunc';
myFunc();
```


