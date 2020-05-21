https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## What is the Event Loop?
The event loop is what allows Node.js to perform non-blocking I/O operations
```
Event loop 是 Node.js 实现非阻塞I/O操作的机制。
```

Two types: events and event handlers：
```
涉及到 事件 和 事件处理函数
```

Events can be, for example, low-level operating system events such as "file is ready to be written" or "there's a fresh new HTTP request coming our way". 
Event handlers are pieces of program code that are meant to be executed when that specific event takes place.
```
事件可以是 操作系统事件 如 文件读写，还可以是有新的 HTTP 请求进入的事件。Event handlers 是事件触发时要执行的代码。
```

Event loop repeatedly takes events and executes event listeners.
```
事件循环就是 重复的获取这些被放入队列的事件 并且 执行事件对应的处理函数 handler
```

## Event Loop Explained: 执行过程 经历阶段
When Node.js starts, it initializes the event loop, schedule timers, or call process.nextTick()
当 Node.js 启动后，它会初始化事件轮询,它可能会调用一些异步的 API、调度定时器，或者调用 process.nextTick()，然后开始处理事件循环。

incoming connections => poll 

Since any of these operations may schedule more operations and new events processed in the poll phase are queued by the kernel

As a result, long running callbacks can allow the poll phase to run much longer than a timer's threshold

**poll**: The poll phase has two main functions:
1. Calculating how long it should block and poll for I/O, then
2. Processing events in the poll queue.

**check**:



## setImmediate() vs setTimeout()
However, if you move the two calls within an I/O cycle, the immediate callback is always executed first:
```
// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});


<!-- 
$ node timeout_vs_immediate.js
immediate
timeout 
-->
```

## process.nextTick()

You may have noticed that process.nextTick() was not displayed in the diagram, even though it's a part of the asynchronous API. 
This is because process.nextTick() is not technically part of the event loop. 

Looking back at our diagram, any time you call process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved before the event loop continues. 

process.nextTick() fires more immediately than setImmediate()

### Why use process.nextTick()?
There are two main reasons:
1. Allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues.
2. At times it's necessary to allow a callback to run after the call stack has unwound but before the event loop continues.


process.nextTick >> setImmidate >> setTimeout/SetInterval 

http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/
