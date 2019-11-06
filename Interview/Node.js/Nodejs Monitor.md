> 你认为Node.js应用程序可以拥有的最重要的功能是什么？想知道我的么？高性能和不间断服务。高性能应用程序需要做好以下三点：

- 最短的停机时间；
- 可预测的资源使用率；
- 根据负载有效扩展

## Node.js要监控的关键指标
### CPU Usage Metrics for Node.js

Node.js runtime has limits regarding CPU thread utilization. The reason behind this is the runtime’s single thread of execution, meaning it’s bound to a single core of a CPU. One instance of a Node.js application can only use one CPU core.

Node.js的运行环境对CPU的利用率是有限的，原因是一个Node.js应用的实例只能使用CPU的一个核心，因为它的运行环境就是单线程的。

However, having this in mind, Node.js applications rarely consume high amounts of CPU time. Instead, they rely on non-blocking I/O. The CPU does not have to wait for I/O requests, handling them asynchronously instead. If you are facing high CPU utilization, it may mean a lot of synchronous work is hogging the CPU and blocking the thread. This is bad! By blocking the thread it also blocks asynchronous processes.

Node.js 应用很少会有很高的CPU消耗，因为它是非阻塞I/O模型。CPU不需要等待I/O request，而是用异步的方式处理他们。如果你发现了很高的CPU占用，很可能就是有太多的同步操作阻塞了线程。这样就太糟糕了，不仅阻塞了线程而且阻塞了异步进程。

[What is the difference between a thread and a process?](https://www.programmerinterview.com/operating-systems/thread-vs-process/)
**详见 Linux 下的 proccess vs thread**

Most of the time you don’t need to worry about CPU loads. They’re rarely a deal-breaker. What you can do to lower CPU usage is to create child processes or forks to handle CPU intensive tasks. An example would be that you have a web server that handles incoming requests. To avoid blocking this thread, you can spawn a child process to handle a CPU intensive task. Pretty cool.

大多数情况你不需要担心CPU的负载。 需要做的是创建多个子进程来处理CPU密集型任务降低CPU的使用。
例如：你的web服务器处理请求。避免线程阻塞，你可以创建出子进程处理CPU密集型任务。
I/O 密集型 vs CPU 密集型 详见 ../使用场景.md

Fixing CPU intensive code is the first step to increase the performance and stability of your Node.js server. The metrics to watch out for are:
首先修复CPU密集型的代码可以提高Node.js服务的想能和稳定性，可以监控的性能指标如下：

- CPU Usage
- CPU Load

### Memory Usage and Leaks Metrics for Node.js

To understand memory usage and potential leaks, you first need to understand what the heap and stack are. 
要理解内存使用和潜在的泄漏，你首先需要理解什么是堆 和 栈。

Values can be stored in either the stack or the heap. The stack can be visually represented like a stack of books, where the books are actually functions and their context getting stored in the memory. The heap is a larger region that stores everything that is allocated dynamically.
数值可以存储在堆或栈中。栈可以形象的比喻成一摞书，每一本书就是存储在内存中的一个函数还有他们的上下文环境。 堆是一个更大的存储介质可以保存任何东西，他是动态分配的。

there’s one key thing about Node.js process memory you must know. A single process can have a maximum heap of 1.5 GB. You guessed it! Memory leaks are a common issue in Node.js. They happen when objects are referenced for too long, meaning values are stored even though they’re not needed. Because Node.js is based on the V8 engine, it uses garbage collection to reclaim memory used by variables that are no longer needed. This process of reclaiming memory stops the program execution. We’ll mention garbage collection in more detail a bit further down in the next section.

Node.js一个进程可以拥有的最大堆内存为1.5GB. 内存泄漏时Node.js很常见的一个问题。当Objects的引用太长，意味着存储了很多不再需要的数据时，就会发生这种情况。Node.js 基于V8引擎，它使用垃圾回收来重新管理内存。

Noticing memory leaks is easier than you might think. If your process memory keeps growing steadily, while not periodically being reduced by garbage collection, you most likely have a memory leak. Ideally, you’d want to focus on preventing memory leaks rather than troubleshooting and debugging them. If you come across a memory leak in your application, it’s horribly difficult to track down the root cause. The metrics you need to watch out for are:
观察内存泄漏很简单。如果你的进程内存占用持续升高，并且没有被GC减弱，那么很可能就是发生了内存泄漏。这种情况下你很难debug来追踪到问题的根源，可以关注的指标如下：

- Released memory between Garbage Collection Cycles
- Process Heap Size
- Process Heap Usage

### Garbage Collection Metrics for Node.js

Because of everything mentioned above, you should monitor the following Node.js garbage collection metrics:

- Time consumed for garbage collection
- Counters for full garbage collection cycles
- Counters for incremental garbage collection cycles
- Released memory after garbage collection


### Node.js Event Loop Metrics

Node.js is inherently fast because it can process events asynchronously. What makes it possible is the event loop. It’s a special place reserved for processing asynchronous functions that are called as responses to certain events, and are executed outside of the main thread. Such functions are also called callback functions.
Node.js 天生就是快速，因为它的事件异步处理。这个是基于event loop实现的。

A server can handle a huge amount of connections and not be blocked for I/O operations. This is called non-blocking I/O, a famous term. However, the event loop can slow down and will ultimately cause every subsequent event to take longer to process, causing something called event loop lag.
非阻塞I/O 可以处理大量的连接，然而event loop变慢会导致后续的事件需要更多的时间来处理，导致event loop延迟的发生。

Common causes of event loop lag are long-running synchronous processes and an incremental increase in tasks per loop.

1. Long-running synchronous processes
Be mindful of how you handle synchronous execution in your application. All other operations need to wait to be executed. Hence the famous rule for Node.js performance. Don’t block the event loop! You can’t avoid CPU bound work your server does but you can be smart about how to execute asynchronous vs. synchronous tasks. As mentioned above, use forks or child processes for synchronous tasks.

注意你在应用中处理同步执行的方式，所有其他的操作都在等待。你不能避免CPU密集型操作，但你可以合理使用异步和同步，同步任务使用多个子进程。

2. Incremental increase in tasks per loop
As your application scales, you will see an increase in load and number of tasks per loop. Node.js keeps track of all asynchronous functions that need to be handled by the event loop. The lag that occurs with the increase of tasks will cause an increase in response times when the count gets too high.

当应用变得复杂时，就能看到每一个loop的任务数增多，负载上升。Node.js 在追踪所有需要处理的异步方法，任务数的增多会导致响应时间的增加。

The good news is that you can alleviate this by increasing the number of processes running your application. By using the cluster module, you can utilize all the CPU cores of your server. Of course, you can also use PM2 to spawn worker processes. More about this in the next section.

好消息是你可以使用cluster module来增加运行程序的进程数，进而改善event loop延迟。当然也可以使用PM2来孵化worker进程。

That’s why you need to monitor these metrics:

- Slowest Event Handling (Max Latency)
- Fastest Event Handling (Min Latency)
- Average Event Loop Latency


### Node.js Cluster-Mode and Forking Worker Processes
By using the cluster module you can create a master process that shares sockets with forked worker processes. These processes can exchange messages. Here’s the kicker. All the forked worker processes have their own process ID and can run on a dedicated CPU core. A typical use case for web servers is forking worker processes, which operate on a shared server socket and handle the requests in round-robin fashion.

使用cluster module 可以创建一个master process 来均衡 sockets 给worker进程。这些进程可以交换message。所有forked的子进程拥有自己的process ID 可以运行在单独的 CPU内核中。典型的应用就是round-bin（轮询调度算法(Round-Robin Scheduling)）来均衡web服务器接受到的连接。

Metrics to watch here are:

- Worker count
- Event loop latency per worker


### Node.js HTTP Request/Response Latency
Keeping an eye on user-facing latencies is the most crucial step in monitoring any API. The HTTP requests hitting your server, and the responses coming back to your users in a timely manner is what will keep your customers coming back. Monitoring API routes of popular frameworks, like Express, Koa, and Hapi, is a must.

在API监控中最重要的就是用户面对的延迟。从http请求到达服务器到响应返回给用户的时间决定了用户的留存率。

When monitoring HTTP request and response metrics you have to take into account 4 key values:

- Response time
- Request rate
- Error rates
- Request/Response content size

### Node.js Monitoring Dashboard and Integrations
Your Node.js application will never run by itself without supporting services like Nginx for proxying, Redis for caching, Elasticsearch for indexing and full-text search, or persistent storage like MongoDB or PostgreSQL. Integrations with these services with Sematext is just as simple as adding Node.js metrics. When choosing a monitoring solution make sure you can create dashboards with all these metrics in one place. Having a way to show you an overview of all services and their health is crucial.

你的Node.js 应用的运行离不开代理的支持比如Nginx，高速缓存如Redis，全文检索比如Elasticsearch，或者持久化的存储比如mongodb，PostgreSQL。监控这些服务的健康状态同样很重要。

开源工具-生产环境下的Node.js——开源监控工具
https://juejin.im/post/5cf4f8bd6fb9a07ef562210c

[Pandora](https://midwayjs.org/pandora/zh-cn/)
[appmetrics-dash](https://developer.ibm.com/node/monitoring-post-mortem/application-metrics-node-js/)