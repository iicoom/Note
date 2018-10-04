问题：
```
c.query(
   'SELECT SLEEP(20);',
   function (err, results, fields) {
     if (err) {
       throw err;
     }
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end('<html><head><title>Hello</title></head><body><h1>Return from async DB query</h1></body></html>');
     c.end();
    }
);
```
Here comes a question. When there are two request A(comes first) and B, since there is only a single thread, the server side program will handle the request A firstly: doing sql querying which is a sleep statement standing for I/O waiting. And The program is stucked at the I/O waiting, and cannot execute the code which renders the web page behind. Will the program switch to request B during the waiting? In my opinion, because of the single thread model, there is no way to switch one request from another. But the title of the example code says that "everything runs in parallel except your code". (P.S I'm not sure if I misunderstand the code or not since I have never used Node.)How Node switch A to B during the waiting? And can you explain the single threaded non blocking IO model of Node in a simple way? I would appreciate if you could help me. :)


> Node.js is built upon libuv, a cross-platform library that abstracts apis/syscalls for asynchronous (non-blocking) input/output provided by the supported OSes (Unix, OS X and Windows at least).

## Asynchronous IO

In this programming model open/read/write operation on devices and resources (sockets, filesystem, etc.) managed by the file-system don't block the calling thread (as in the typical synchronous c-like model) and just mark the process (in kernel/OS level data structure) to be notified when new data or events are available. In case of a web-server-like app, the process is then responsible to figure out which request/context the notified event belongs to and proceed processing the request from there. Note that this will necessarily mean you'll be on a different stack frame from the one that originated the request to the OS as the latter had to yield to a process' dispatcher in order for a single threaded process to handle new events.

## Node's model (Continuation Passing Style and Event Loop)

Node tackles the problem leveraging javascript's language features to make this model a little more synchronous-looking by inducing the programmer to employ a certain programming style. Every function that requests IO has a signature like function (... parameters ..., callback) and needs to be given a callback that will be invoked when the requested operation is completed (keep in mind that most of the time is spent waiting for the OS to signal the completion - time that can be spent doing other work). Javascript's support for closures allows you to use variables you've defined in the outer (calling) function inside the body of the callback - this allows to keep state between different functions that will be invoked by the node runtime independently. See also [Continuation Passing Style](https://en.wikipedia.org/wiki/Continuation-passing_style)

Moreover, after invoking a function spawning an IO operation the calling function will usually return control to node's event loop. This loop will invoke the next callback or function that was scheduled for execution (most likely because the corresponding event was notified by the OS) - this allows the concurrent processing of multiple requests.

You can think of node's event loop as somewhat similar to the kernel's dispatcher: the kernel would schedule for execution a blocked thread once its pending IO is completed while node will schedule a callback when the corresponding event has occured.

## Highly concurrent, no parallelism
As a final remark, the phrase "everything runs in parallel except your code" does a decent job of capturing the point that node allows your code to handle requests from hundreds of thousands open socket with a single thread concurrently by multiplexing and sequencing all your js logic in a single stream of execution (even though saying "everything runs in parallel" is probably not correct here - see Concurrency vs Parallelism - What is the difference?). This works pretty well for webapp servers as most of the time is actually spent on waiting for network or disk (database / sockets) and the logic is not really CPU intensive - that is to say: this works well for IO-bound workloads.

**Concurrency** is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. For example, multitasking on a single-core machine.

**Parallelism** is when tasks literally run at the same time, e.g., on a multicore processor.






