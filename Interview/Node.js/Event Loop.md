https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## What is the Event Loop?
The event loop is what allows Node.js to perform non-blocking I/O operations

Two types: events and event handlers：

Events can be, for example, low-level operating system events such as "file is ready to be written" or "there's a fresh new HTTP request coming our way". 
Event handlers are pieces of program code that are meant to be executed when that specific event takes place.

Event loop repeatedly takes events and executes event listeners.

Event Loop Explained:
When Node.js starts, it initializes the event loop, schedule timers, or call process.nextTick()

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

