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

## 什么是 Event Loop 和 Event Emitter ?
Event Loop
Node.js 虽是单线程应用程序，但是其基于 events and callbacks 机制，可以很好的完成并发操作。Node thread 会保持一个 EventLoop（事件循环）当任何任务完成时该节点都会触发相应的回调。

Event Emitter
每当完成任何任务、发生任何错误、添加一个 listener 或删除一个 listener 时，EventEmitter 都会触发一个事件。它提供了 on 和 emit 等属性，on 用于绑定函数，emit 用于触发事件。

## 浏览器中的 Event Loop
JavaScript 是单线程的，当发起一个请求时会通过回调函数来接收后续的事件响应，不会造成阻塞，继续接收下一次请求操作。

## Event Loop Explained: 执行过程 经历阶段
When Node.js starts, it initializes the event loop, schedule timers, or call process.nextTick()
```
当 Node.js 启动后，它会初始化事件轮询,它可能会调用一些异步的 API、调度定时器，或者调用 process.nextTick()，然后开始处理事件循环。
```

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

## process.nextTick 与 setTimeout 递归调用区别？
process.nextTick 属于微任务，是在当前执行栈的尾部，Event Loop 之前触发，下面两个都是递归调用，test1 中 process.nextTick 是在当前执行栈调用，是一次性执行完，相当于 while(true){}，主线程陷入了死循环，阻断 IO 操作。

test2 方法中，setTimeout 属于宏任务，在任务队列中同样也是递归，但是它并不是一次性的执行而是会多次 Event Loop，不会阻断 IO 操作，另外注意 setTimeout 有一个最小的时间 4ms。
```js
function test1() {
    process.nextTick(() => test());
}

function test2() {
    setTimeout(() => test(), 0);
}
```

process.nextTick 将会阻塞 IO，setImmediate 不会输出
```js
function test() {
    return process.nextTick(() => test());
}

test();

setImmediate(() => {
    console.log('setImmediate');
})
```
下面使用 setTimeout 不会造成 IO 阻塞，会输出 setImmediate
```js
function test() { 
    setTimeout(() => test(), 0);
}

test()

setImmediate(() => {
    console.log('setImmediate');
})
```

## Node.js 中定时功能的顺序是怎样的？
Node.js 的定时器模块提供了在一段时间之后执行一些函数的功能。

setTimeout/clearTimeout - 用于在指定的毫秒数后执行代码块（仅执行一次）
setInterval/clearInterval - 用于在指定的毫秒数后循环执行代码块（循环执行）
setImmediate/clearImmediate - 在当前事件循环周期结束后执行代码块
process.nextTick - 在当前执行栈尾部，Event-Loop 之前触发
timer 的执行顺序

process.nextTick > setImmidate > setTimeout / SetInterval

http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/


## 主进程中的event loop阻塞
```js
const http = require('http');

const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
};

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const sum = longComputation();
    return res.end(`Sum is ${sum}`);
  } else {
    res.end('Ok')
  }
});

server.listen(3000);
```
This program has a big problem; when the the /compute endpoint is requested, 
the server will not be able to handle any other requests because the event loop is busy with the long for loop operation.

We first move the whole longComputation function into its own file and make it invoke that function when instructed via a message from the main process:

In a new compute.js file:
```js
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
};

process.on('message', (msg) => {
  const sum = longComputation();
  process.send(sum);
});
```

Now, instead of doing the long operation in the main process event loop,
we can fork the compute.js file and use the messages interface to communicate messages between the server and the forked process.
```js
const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('compute.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`);
    });
  } else {
    res.end('Ok')
  }
});

server.listen(3000);
```
When a request to /compute happens now with the above code, we simply send a message to the forked process to start executing the long operation. 
The main process’s event loop will not be blocked.