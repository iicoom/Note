> keep in mind that it's normal for programs to be asynchronous and halt their execution until they need attention, allowing the computer to execute other things in the meantime. When a program is waiting for a response from the network, it cannot halt the processor until the request finishes.
> 通常程序执行是异步的，可以挂起使得其他代码可以执行，直到需要时再恢复执行。当一个程序在等待网络响应时却不能挂起，知道请求结束。

C, Java, C#, PHP, Go, Ruby, Swift, and Python are all synchronous by default. Some of them handle async by using threads, spawning a new process.
这些语言默认都是同步的，其中的一些通过使用线程或者spawn进程来处理异步。

JavaScript is synchronous by default and is single threaded. This means that code cannot create new threads and run in parallel.
js默认也是同步执行的并且时单线程。意味着它不能同时做两件事情。

js最初被运行在浏览器，基于这种同步编程模型它是如何响应用户的 user actions, like onClick, onMouseOver, onChange, onSubmit 这些动作呢？

The answer was in its environment. The browser provides a way to do it by providing a set of APIs that can handle this kind of functionality.
答案是它提供了很多可以处理这些功能的API

More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on.
最近Node.js又引入了 non-blocking I/O environment来扩展对文件系和统网络调用的功能。


## callback
You can't know when a user is going to click a button. So, you define an event handler for the click event.
This event handler accepts a function, which will be called when the event is triggered:
```js
document.getElementById('button').addEventListener('click', () => {
  //item clicked
})
```
This is the so-called callback.

A callback is a simple function that's passed as a value to another function, and will only be executed when the event happens. 
回调函数被当作函数的参数传入，当事件被触发时执行。called higher-order functions【可参考../JS面试题/Higher-order.js】

### Handling errors in callbacks
How do you handle errors with callbacks? One very common strategy is to use what Node.js adopted: 
the first parameter in any callback function is the error object: error-first callbacks
```js
fs.readFile('/file.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }

  //no errors, process data
  console.log(data)
})
```

但是回调函数的层级嵌套会导致callback hell,解决此问题的可供选项：

Alternatives to callbacks
Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks:
Promises (ES6) and Async/Await (ES2017).