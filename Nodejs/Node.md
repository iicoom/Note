> Node.js is built upon libuv, a cross-platform library that abstracts apis/syscalls for asynchronous (non-blocking) input/output provided by the supported OSes (Unix, OS X and Windows at least).

## Asynchronous IO

In this programming model open/read/write operation on devices and resources (sockets, filesystem, etc.) managed by the file-system don't block the calling thread (as in the typical synchronous c-like model) and just mark the process (in kernel/OS level data structure) to be notified when new data or events are available. In case of a web-server-like app, the process is then responsible to figure out which request/context the notified event belongs to and proceed processing the request from there. Note that this will necessarily mean you'll be on a different stack frame from the one that originated the request to the OS as the latter had to yield to a process' dispatcher in order for a single threaded process to handle new events.

## Node's model (Continuation Passing Style and Event Loop)

Node tackles the problem leveraging javascript's language features to make this model a little more synchronous-looking by inducing the programmer to employ a certain programming style. Every function that requests IO has a signature like function (... parameters ..., callback) and needs to be given a callback that will be invoked when the requested operation is completed (keep in mind that most of the time is spent waiting for the OS to signal the completion - time that can be spent doing other work). Javascript's support for closures allows you to use variables you've defined in the outer (calling) function inside the body of the callback - this allows to keep state between different functions that will be invoked by the node runtime independently. See also [Continuation Passing Style](https://en.wikipedia.org/wiki/Continuation-passing_style)

## 