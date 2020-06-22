https://github.com/libuv/libuv

- Full-featured event loop backed by epoll, kqueue, IOCP, event ports.
- Asynchronous TCP and UDP sockets
- Child processes
- Thread pool

[nodejs深入学习系列之libuv基础篇(一)](https://zhuanlan.zhihu.com/p/86242398)

## event-loop线程
我们都知道线程是操作系统最基本的调度单元，而进程是操作系统的最基本的资源分配单元，因此可以知道进程其实是不能运行，能运行的是进程中的线程。进程仅仅是一个容器，包含了线程运行中所需要的数据结构等信息。一个进程创建时，操作系统会创建一个线程，这就是主线程，而其他的从线程，都要在主线程的代码来创建，也就是由程序员来创建。因此每一个可执行的运用程序都至少有一个线程

于是libuv一开始便启动了event-loop线程，再在这个主线程上利用线程池去创建更多的线程。在event-loop线程中是一段while(1)的死循环代码，直到没有活跃的句柄的时候才会退出，这个时候libuv进程才被销毁掉。清楚这点对于后面的学习至关重要。

## libuv的事件循环机制
![11](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/libuv3.png)
因为Libuv处理fs I/O和网络I/O用了两套机制去实现，或者说更全面的讲应该是fs I/O和 DNS等实现的方式和网络 I/O是不一样的。为什么这么说呢？
![22](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/libuv5.png?x-oss-process=style/addWaterMarkBottom)

