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

## setImmediate() vs setTimeout()
However, if you move the two calls within an I/O cycle, the immediate callback is always executed first:
```js
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

## [不要阻塞你的事件循环（或是工作线程池）](https://nodejs.org/zh-cn/docs/guides/dont-block-the-event-loop/)

Node.js 是用很少量的线程来处理大量客户端请求的。 在 Node.js 中，有两种类型的线程：一个事件循环线程（也被称为主循环，主线程，事件线程等）。
另外一个是在工作线程池里的 k 个工作线程（也被称为线程池）。

请记住，事件循环线程只负责协调客户端的请求，而不是独自执行完所有任务。 对一个复杂的任务，最好把它从事件循环线程转移到工作线程池上。

### 阻塞
如果一个线程执行一个回调函数（事件轮询线程）或者任务（工作线程）需要耗费很长时间，我们称之为“阻塞”。 当一个线程在处理某一个客户端请求时被阻塞了，它就无法处理其它客户端的请求了。 这里给出两个不能阻塞事件轮询线程和工作线程的理由：

- 性能：如果你在任意类型的线程上频繁处理繁重的任务，那么你的服务器的 吞吐量（请求/秒）将面临严峻考验。
- 安全性：如果对于特定的输入，你的某种类型的线程可能会被阻塞，那么恶意攻击者可以通过构造类似这样的“恶意输入”，故意让你的线程阻塞，然后使其它客户端请求得不到处理。这就是拒绝服务攻击。

