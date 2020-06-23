https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

> 涉及事件循环和 libuv,"I/O" 主要指由libuv支持的，与系统磁盘和网络之间的交互。

## Blocking
Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.
这是因为当 阻塞 发生时，事件循环无法继续运行 JavaScript

In Node.js, JavaScript that exhibits poor performance due to being CPU intensive. Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. 
由于执行 CPU 密集型操作, 使得I/O表现不佳，称为阻塞。

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.
在 Node.js 标准库中的所有 I/O 方法都提供异步版本，非阻塞，并且接受回调函数。某些方法也有对应的 阻塞 版本，名字以 Sync 结尾。

阻塞 方法 同步 执行，非阻塞 方法 异步 执行
```js
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log


const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
	if (err) throw err;
	console.log(data);
});
moreWork(); // will run before console.log
```
在同步版本中，如果错误被抛出，它需要被捕获否则整个程序都会崩溃。在异步版本中，由作者来决定错误是否如上所示抛出。

The ability to run moreWork() without waiting for the file read to complete is a key design choice that allows for higher throughput.
执行moreWork()是否需要等待文件读取完毕是高吞吐量的关键选择。

## 并发和吞吐量
在 Node.js 中 JavaScript 的执行是单线程的，因此并发性是指事件循环在完成其他工作后执行 JavaScript 回调函数的能力。

我们思考这样一种情况：每个对 Web 服务器的请求需要 50 毫秒完成，而那 50 毫秒中的 45 毫秒是可以异步执行的数据库 I/O。选择 非阻塞 异步操作可以释放每个请求的 45 毫秒来处理其它请求。仅仅是选择使用 非阻塞 方法而不是 阻塞 方法，就能造成并发的显著差异。

事件循环不同于许多其他语言的模型，其它语言创建额外线程来处理并发工作。