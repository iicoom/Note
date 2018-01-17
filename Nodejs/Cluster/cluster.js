/*
http://blog.csdn.net/eckotan/article/details/46854507

1.线程概述
一个操作系统里可以有多个进程，而一个进程里可以有多个线程。
==线程（Thread）==也被称作 ==轻量级进程（Lightweight Process）==。
线程（Thread）是进程（Process）的执行单元。就像进程在操作系统中的地位一样，线程在程序中是独立的、并发的执行流。
当进程被初始化之后，主线程就被创建了。
对于大多数的应用程序来说，通常仅要求有一个主线程，但我们也可以在该进程内创建多条顺序执行流，
这些顺序执行流就是Thread，每条Thread也是互相独立的。

线程是进程的组成部分，一个进程可以有多个线程，一个线程必须有一个父进程。

一个线程可以拥有自己的堆、栈、自己的程序计数器（PC）和自己的局部变量，但不再拥有系统资源，
它与父进程的其他线程共享该进程（Process）所拥有的全部资源。==

因为多个线程共享父进程的全部资源，因此编程更加方便；但必须注意的是：==必须确保一个线程不会妨碍同一进程里的其他线程！==

线程可以完成一定的任务，可与其他线程共享父进程中的共享变量及部分环境，相互之间协同来完成进程所要完成的任务。

线程是独立运行的，==它并不知道进程中是否还有其他线程的存在==。线程的运行是==抢占式==的 ———> 当前运行的线程在任何时候都可能被挂起，
以便另一个线程可以运行。

一个线程可以创建和撤销另一个线程（例如在main方法这个主线程里创建另一个线程），
同一个进程（Process）的多个线程（Thread）之间可以并发执行（concurrency，多个线程之间快速切换，快到让人感觉是在同时执行）

总结：一个程序运行后至少有一个进程，一个进程里可以包含多个线程，但至少要有一个线程（主线程）


2.进程
几乎所有操作系统都支持==进程==的概念，所有运行中的任务通常对应这一条进程（Process）。
当一个程序进入内存（存储正在运行的程序和数据）运行时，就变成了一个进程。
进程是处于运行过程中的程序，并具有一定独立功能，是系统进行资源分配和调度的一个独立单位。

3.多线程的优势
线程的划分尺度小于进程，使得多线程程序的==并发性高==。进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大的提高了程序的效率。

线程比进程具有更高的性能，这是由于同一个进程中的线程都有共性：多个线程经共享同一个进程的虚拟空间。线程共享的环境包括：进程代码段、进程的公有数据等。

系统创建进程必须为该进程分配独立的内存空间，并分配大量相关资源，但创建一个线程则简单的得多。

*/
/*
A single instance of Node.js runs in a single thread. 
To take advantage of multi-core systems, 
the user will sometimes want to launch a cluster of Node.js processes to handle the load.

The cluster module allows easy creation of child processes that all share server ports.
*/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

console.log(numCPUs)

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
/*
Master 5978 is running
Worker 5979 started
Worker 5980 started
Worker 5981 started
Worker 5982 started
*/

