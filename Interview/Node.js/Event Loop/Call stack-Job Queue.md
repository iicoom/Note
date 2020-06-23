https://nodejs.dev/learn/the-nodejs-event-loop

## The call stack
The call stack is a LIFO queue (Last In, First Out).【后进先出】

The event loop continuously checks the call stack to see if there's any function that needs to run.

```js
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
```
When this code runs, first foo() is called. Inside foo() we first call bar(), then we call baz().

At this point the call stack looks like this:

![callstack](https://nodejs.dev/static/270ebeb6dbfa7d613152b71257c72a9e/fcda8/call-stack-first-example.png)

The event loop on every iteration looks if there's something in the call stack, and executes it:
![loop](https://nodejs.dev/static/ca404c319c6fc595497d5dc097d469ff/fc1a1/execution-order-first-example.png)

until the call stack is empty.

上边的太过普通看下面这个
```js
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
// foo
// baz
// bar
```
![setTimeout](https://nodejs.dev/static/be55515b9343074d00b43de88c495331/fcda8/call-stack-second-example.png)

## The Message Queue 【先进先出】
When setTimeout() is called, the Browser or Node.js start the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.

The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.
loop 会给call stack 优先权，首先处理call stack 里的内容，直到empty就会从mq中获取来执行

We don't have to wait for functions like setTimeout, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads. For example, if you set the setTimeout timeout to 2 seconds, you don't have to wait 2 seconds - the wait happens elsewhere.

## ES6 Job Queue
ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.
ES6 引入一个新的概念，Job Queue，用于Promise。不会放入把异步方法放入call stack,而是会使它尽快执行。

看个加入promise的
```js
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()
// foo
// baz
// should be right after baz, before bar
// bar
```
Promises that resolve before the current function ends will be executed right after the current function.
That's a big difference between Promises (and Async/await, which is built on promises) and plain old asynchronous functions through setTimeout() or other platform APIs.

