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

Fixing CPU intensive code is the first step to increase the performance and stability of your Node.js server. The metrics to watch out for are:

- CPU Usage
- CPU Load

首先修复CPU密集型的代码可以提高Node.js服务的想能和稳定性，可以监控的性能指标如下：

- CPU Usage
- CPU Load

### Memory Usage and Leaks Metrics for Node.js

To understand memory usage and potential leaks, you first need to understand what the heap and stack are. 
