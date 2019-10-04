https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## What is the Event Loop?
The event loop is what allows Node.js to perform non-blocking I/O operations

## setImmediate() vs setTimeout()

## process.nextTick()

### Why use process.nextTick()?
There are two main reasons:
1. Allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues.
2. At times it's necessary to allow a callback to run after the call stack has unwound but before the event loop continues.

