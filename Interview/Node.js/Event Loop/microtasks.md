> Tasks, microtasks, queues and schedules

Actually, if video's more your thing, Philip Roberts gave a great talk at JSConf on the event loop - microtasks aren't covered, but it's a great introduction to the rest. Anyway, on with the show…

## Philip Roberts 


## Jake
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly

Take this little bit of JavaScript:
```
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```
In what order should the logs appear?

script start
script end
promise1
promise2
setTimeout

To understand this you need to know how the event loop handles tasks and microtasks.
如果想要了解为什么是这个顺序，就要知道event loop是如何处理 宏任务 和 微任务

这篇文章好像什么都没讲明白，只是提出宏任务微任务的概念，比较了不同浏览器之间的差异，作者是Chrome的倡导者

https://segmentfault.com/a/1190000011198232 反而是这篇文章给出了一个清晰的划分


### 任务队列
Js 中，有两类任务队列：宏任务队列（macro tasks）和微任务队列（micro tasks）。宏任务队列可以有多个，微任务队列只有一个。
那么什么任务，会分到哪个队列呢？

- 宏任务：script（全局任务）, setTimeout, setInterval, setImmediate, I/O, UI rendering.
- 微任务：process.nextTick, Promise, Object.observer, MutationObserver.

### 浏览器的 Event Loop
浏览器的 Event Loop 遵循的是 HTML5 标准，而 NodeJs 的 Event Loop 遵循的是 libuv。 区别较大，分开讲。

我们上面讲到，当stack空的时候，就会从任务队列中，取任务来执行。浏览器这边，共分3步：

1. 取一个宏任务来执行。执行完毕后，下一步。
2. 取一个微任务来执行，执行完毕后，再取一个微任务来执行。直到微任务队列为空，执行下一步。
3. 更新UI渲染。
Event Loop 会无限循环执行上面3步，这就是Event Loop的主要控制逻辑。其中，第3步（更新UI渲染）会根据浏览器的逻辑，决定要不要马上执行更新。

```
console.log('script start');

// 微任务
Promise.resolve().then(() => {
    console.log('p 1');
});

// 宏任务
setTimeout(() => {
    console.log('setTimeout');
}, 0);

var s = new Date();
while(new Date() - s < 50); // 阻塞50ms

// 微任务
Promise.resolve().then(() => {
    console.log('p 2');
});

console.log('script ent');


/*** output ***/

// one macro task
script start
script ent

// all micro tasks
p 1
p 2

// one macro task again
setTimeout
```

### NodeJs 的 Event Loop
NodeJs 的运行是这样的：

1. 初始化 Event Loop
2. 执行您的主代码。这里同样，遇到异步处理，就会分配给对应的队列。直到主代码执行完毕。
3. 执行主代码中出现的所有微任务：先执行完所有nextTick()，然后在执行其它所有微任务。
4. 开始 Event Loop
┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

