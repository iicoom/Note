> When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the setImmediate() function provided by Node.js:

https://nodejs.dev/learn/understanding-setimmediate

Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.

How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), and from process.nextTick()?

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
