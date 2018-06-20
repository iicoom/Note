> ES6 的Class只是面向对戏那个编程的语法糖，升级了ES5的构造函数的原型链继承的写法，
Class并没有解决模块化的问题。ES6之前，社区制订了模块加载方案，主要有CommonJS和AMD。
前者用于服务器，后者浏览器。

## 严格模式

## 模块的导入导出方式
### 导入
```
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


```

### 导出

```
module.exports = function send(mail) {
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('mail sent:', info.response);
  });
};

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



/////
```
