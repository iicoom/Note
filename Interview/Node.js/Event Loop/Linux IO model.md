## 描述下 Linux/Unix 中的几种 I/O 模型?

I/O 模型的演进：同步阻塞IO -> 同步非阻塞IO -> IO多路复用 -> 信号驱动IO -> 异步IO模型，更多可参考 操作系统的轮询技术演进

## Q9: I/O 多路复用模式下 select 和 epoll 的区别？
在操作方式上 select 采用了线性遍历来查找，链接多了之后可以想象一下在一个诺大的数组中每次通过遍历来锁定一个链接，是多么的消耗性能。
epoll 则不需要遍历，采用的是回调机制，可以看作一个HashTable，锁定一个对象是很快的。
对于文件描述符（最大连接数）select 限制为 1024，epoll 则没有这个限制，通常在 1G 内存的机器上所能支持的连接数为 10W 左右 (cat /proc/sys/fs/file-max)。

从操作系统支持上来看，目前流行的高性能 Web 服务器 Nginx 是基于 epoll 来实现高并发，当然如果你的链接很小的情况下区别还是不大的 select 也能满足，
如果是大流量、高并发情况 epoll 目前还是首选模型。


[I/O 模型如何演进及 I/O 多路复用是什么？](https://mp.weixin.qq.com/s/t8pH3xqPS5CiuyaUx-8wcA)


[Async IO on Linux: select, poll, and epoll](https://jvns.ca/blog/2017/06/03/async-io-on-linux--select--poll--and-epoll/)
### Servers need to watch a lot of file descriptors
If you’re a web server, you might have thousands of connections open at the same time. You need to know when people send you new data on those connections, so you can process and respond to them.

You could have a loop that basically does:
```
for x in open_connections:
    if has_new_input(x):
        process_input(x)
```

#### First way: select & poll
These 2 system calls are available on any Unix system, while epoll is Linux-specific. Here’s basically how they work:

- Give them a list of file descriptors to get information about
- They tell you which ones have data available to read/write to

#### why don’t we use poll and select?
Okay, but on Linux we said that your node.js server won’t use either poll or select, it’s going to use epoll. Why?

Basically: every time you call select or poll, the kernel needs to check from scratch whether your file descriptors are available for writing. The kernel doesn’t remember the list of file descriptors it’s supposed to be monitoring!

#### level-triggered vs edge-triggered
Before we talk about epoll, we need to talk about “level-triggered” vs “edge-triggered” notifications about file descriptors. I’d never heard this terminology before (I think it comes from electrical engineering maybe?). Basically there are 2 ways to get notifications

- get a list of every file descriptor you’re interested in that is readable (“level-triggered”)
- get notifications every time a file descriptor becomes readable (“edge-triggered”)

#### what’s epoll?
Here are the steps to using epoll:

1. Call epoll_create to tell the kernel you’re gong to be epolling! It gives you an id back
2. Call epoll_ctl to tell the kernel file descriptors you’re interested in updates about. Interestingly, you can give it lots of different kinds of file descriptors (pipes, FIFOs, sockets, POSIX message queues, inotify instances, devices, & more), but not regular files. I think this makes sense – pipes & sockets have a pretty simple API (one process writes to the pipe, and another process reads!), so it makes sense to say “this pipe has new data for reading”. But files are weird! You can write to the middle of a file! So it doesn’t really make sense to say “there’s new data available for reading in this file”.
3. Call epoll_wait to wait for updates about the list of files you’re interested in.

#### performance: select & poll vs epoll
In the book there’s a table comparing the performance for 100,000 monitoring operations:
```
operations    |  poll  |  select   | epoll
10            |   0.61 |    0.73   | 0.41
100           |   2.9  |    3.0    | 0.42
1000          |  35    |   35      | 0.53
10000         | 990    |  930      | 0.66
```
