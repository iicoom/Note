## application.messenger

认识到egg应用的启动模式分为 single、cluster

这样应用通信就会分为local、ipc(进程间通信) 这两个模块是对 EventEmitter 的继承。

const EventEmitter = require('events');