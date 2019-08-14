# module

> ES6 的Class只是面向对戏那个编程的语法糖，升级了ES5的构造函数的原型链继承的写法， Class并没有解决模块化的问题。ES6之前，社区制订了模块加载方案，主要有CommonJS和AMD。 前者用于服务器，后者浏览器。

## 严格模式

[https://www.cnblogs.com/fayin/p/6831071.html](https://www.cnblogs.com/fayin/p/6831071.html) 首先我们要明白一个前提，CommonJS模块规范和ES6模块规范完全是两种不同的概念。

## CommonJS模块规范

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

```text
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

上面代码通过module.exports输出变量x和函数addX。

require方法用于加载模块。

```text
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

exports 与 module.exports 为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。

```text
var exports = module.exports;
```

于是我们可以直接在 exports 对象上添加方法，表示对外输出的接口，如同在module.exports上添加一样。

## 模块的导入导出方式

### 导出

```text
// ES5
module.exports = function send(mail) {
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('mail sent:', info.response);
  });
};

// ES6
// './app/util/email.js'
export const sendEmail = async (subject, html, attachments) => {
  console.log('开始发送邮件...');

  // 设置邮件内容
  const mailOptions = {
    from: '"Fred Foo 👻" <asdfpeng@qq.com>', // 发件地址
    to: 'maoxiaojie@yunfarm.cn', // 收件列表
    subject, // 标题
    html: '统计邮件', // html 内容
    attachments, // 添加附件
  };
  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Message has been delivered: ${JSON.stringify(response)}`);
    }
    // transporter.close(); // 如果没用，关闭连接池
  });
};

// 导出变量
//test.js
export var name = 'Rainbow'

// 输出多个变量
//test.js
var name = 'Rainbow';
var age = '24';
export {name, age};

// 导出函数
// myModule.js
export function myModule(someArg) {
  return someArg;
}
```

### 导入

```text
// ES5
// 直接加载到进程中
require('./statistics');
// 作为变量引入
const later = require('later');
// 解构的方式引入
const { sendEmail } = require('./app/util/email');

// ES6 模块引入
import nodemailer from 'nodemailer';

import { sendEmail } from './app/util/email';

// 引入重命名
import { sendEmail as sendMyLove } from './app/util/email';

// export default Utility; 类的静态方法引入时必须用import，否则静态方法获取不到
import Utility from './app/util/utils';


import {myModule} from 'myModule';// main.js
import {name,age} from 'test';// test.js

心得:一条import 语句可以同时导入默认函数和其它变量。import defaultMethod, { otherMethod } from 'xxx.js';
```

