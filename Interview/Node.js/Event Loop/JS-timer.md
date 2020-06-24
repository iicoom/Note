## setTimeout()
If you specify the timeout delay to 0, the callback function will be executed as soon as possible, but after the current function execution:

```js
setTimeout(() => {
  console.log('after ')
}, 0)

console.log(' before ')
```
will print before after.

This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler.
这种做法在避免CPU被密集型计算阻塞尤其有用，把密集的计算排到调度器，可以让其他function继续执行。

## setInterval()
setInterval is a function similar to setTimeout, with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):

```js
const interval = setInterval(() => {
  if (App.somethingIWait === 'arrived') {
    clearInterval(interval)
    return
  }
  // otherwise do things
}, 100)
```

## Q10: setTimeout/setInterval 定时器时间是否精确？ 抢购倒计时怎么做？
当实现一些定时任务的时候可能会想到使用 setTimeout/setInterval，但是它们的时间是精确的吗？其实不然，例如代码块 
```js
setTimeout(function(){}, 5)
```
虽然设置为 5，但并不能保证会在这个时间立即执行，在 JavaScript 代码执行时会在合适的时间将代码插入任务队列，真正执行是要进到事件循环以后才开始的，
在 Node.js 中每次事件循环都会经过六个阶段，当进入 timers 阶段时，开始处理 setTimeout/setInterval 这两个函数，在这个阶段主线程会检查当前时间是否满足定时器的条件，
如果满足就执行，不满足会跳过进入下一个阶段，如果在下一个阶段阻塞了，那么再进入定时器执行时，时间可能就不那么准确了。

Javascript解释器是单线程工作的，它执行任务按照任务进入队列的先后顺序执行。这会造成什么影响呢？
打个比方，设置定时器的时候，按照理想状况，下面的程序应当稳定的输出0。

```js
let start = new Date().getTime()
let count = 0
setInterval(function(){
    count++
    console.log(new Date().getTime() - (start + count * 1000))
},1000)
```
按照理想状况，下面的程序应当稳定的输出0
```
1
2
1
2
1
2
1
```


如何统计延时[同步代码的阻塞时间]时间是这个问题的关键，
```js
console.time()
setTimeout(() => {
  console.log("延时1000ms执行")
}, 1000)
console.timeEnd()
// default: 0.031005859375ms
// 延时1000ms执行

console.time()
setTimeout(() => {
  console.log("延时1000ms执行")
  console.timeEnd()
}, 1000)
// 延时1000ms执行
// default: 1001.72265625ms


console.time()
let i = 0;
while(i < 1000000) {
  i ++
}
let t1 = setTimeout(() => {
  console.log("延时1000ms执行")
  console.timeEnd()
}, 1000)
// 延时1000ms执行
// default: 1006.199951171875ms

// 可见由于while 阻塞了线程导致 倒计时延时6ms左右才被call stack 调用


console.time()
const startTime = new Date().getTime();
console.log("startTime:", startTime)
let i = 0;
while(i < 100000000) {
  i ++
}
const endTime = new Date().getTime(); 
console.log("endTime:", endTime)
const delay = endTime-startTime   
console.log("delay:", delay)
let t1 = setTimeout(() => {
  console.log("延时1000ms执行")
  console.timeEnd()
}, 1000)

// startTime: 1592991597984
// endTime: 1592991598166
// delay: 182
// 延时1000ms执行
// default: 1183.56689453125ms

console.time()
const startTime = new Date().getTime();
console.log("startTime:", startTime)
let i = 0;
while(i < 100000000) {
  i ++
}
const endTime = new Date().getTime(); 
console.log("endTime:", endTime)
const delay = endTime-startTime   
console.log("delay:", delay)
let t1 = setTimeout(() => {
  console.log("延时1000ms执行")
  console.timeEnd()
}, 1000-delay)

// startTime: 1592991737848
// endTime: 1592991738032
// delay: 184
// 延时1000ms执行
// default: 1001.468017578125ms
// 这样把同步代码的阻塞阻塞时间扣除，定时器的精度控制的1ms左右的误差
```

### 抢购倒计时
客户端获取服务器时间，和活动开始时间。计算出倒计时剩余时间，尽量不要在这里执行太多同步阻塞线程的工作，否则需要考虑时间精度


## Node.js 中的timer

> When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the setImmediate() function provided by Node.js:

https://nodejs.dev/learn/understanding-setimmediate

Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.

**How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), and from process.nextTick()?**

A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

if we run the following script which is not within an I/O cycle
the order in which the two timers are executed is non-deterministic, as it is bound by the performance of the process:
```js
// timeout_vs_immediate.js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});


$ node timeout_vs_immediate.js
timeout
immediate

$ node timeout_vs_immediate.js
immediate
timeout
```

if you move the two calls within an I/O cycle, the immediate callback is always executed first:
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

$ node timeout_vs_immediate.js
immediate
timeout

$ node timeout_vs_immediate.js
immediate
timeout
```
The main advantage to using setImmediate() over setTimeout() is setImmediate() will always be executed before any timers if scheduled within an I/O cycle, independently of how many timers are present.


## Node.js 中定时功能的顺序是怎样的？
Node.js 的定时器模块提供了在一段时间之后执行一些函数的功能。

setTimeout/clearTimeout - 用于在指定的毫秒数后执行代码块（仅执行一次）
setInterval/clearInterval - 用于在指定的毫秒数后循环执行代码块（循环执行）
setImmediate/clearImmediate - 在当前事件循环周期结束后执行代码块
process.nextTick - 在当前执行栈尾部，Event-Loop 之前触发
timer 的执行顺序

process.nextTick > setImmidate > setTimeout / SetInterval

http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/

