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