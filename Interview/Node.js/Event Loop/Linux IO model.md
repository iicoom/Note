## 描述下 Linux/Unix 中的几种 I/O 模型?

I/O 模型的演进：同步阻塞IO -> 同步非阻塞IO -> IO多路复用 -> 信号驱动IO -> 异步IO模型，更多可参考 操作系统的轮询技术演进

## Q9: I/O 多路复用模式下 select 和 epoll 的区别？
在操作方式上 select 采用了线性遍历来查找，链接多了之后可以想象一下在一个诺大的数组中每次通过遍历来锁定一个链接，是多么的消耗性能。epoll 则不需要遍历，采用的是回调机制，可以看作一个HashTable，锁定一个对象是很快的。对于文件描述符（最大连接数）select 限制为 1024，epoll 则没有这个限制，通常在 1G 内存的机器上所能支持的连接数为 10W 左右 (cat /proc/sys/fs/file-max)。

从操作系统支持上来看，目前流行的高性能 Web 服务器 Nginx 是基于 epoll 来实现高并发，当然如果你的链接很小的情况下区别还是不大的 select 也能满足，如果是大流量、高并发情况 epoll 目前还是首选模型。

## Q10: setTimeout/setInterval 定时器时间是否精确？
当实现一些定时任务的时候可能会想到使用 setTimeout/setInterval，但是它们的时间是精确的吗？其实不然，例如代码块 setTimeout(function(){}, 5)，虽然设置为 5，但并不能保证会在这个时间立即执行，在 JavaScript 代码执行时会在合适的时间将代码插入任务队列，真正执行是要进到事件循环以后才开始的，在 Node.js 中每次事件循环都会经过六个阶段，当进入 timers 阶段时，开始处理 setTimeout/setInterval 这两个函数，在这个阶段主线程会检查当前时间是否满足定时器的条件，如果满足就执行，不满足会跳过进入下一个阶段，如果在下一个阶段阻塞了，那么再进入定时器执行时，时间可能就不那么准确了。

在官网介绍中也有这样一段话描述 however, Operating System scheduling or the running of other callbacks may delay them. 因此，setTimeout/setInterval 定时器时间并不是完全精确的（其实也在容忍范围，大部分业务是可以的），假如真的需要做一个精确的定时任务该怎么做呢？可以借助 MQ 实现，之前介绍过一篇文章 Node.js 结合 RabbitMQ 延迟队列实现定时任务 可以用于订单超时自动取消、定时重试等业务系统。


[I/O 模型如何演进及 I/O 多路复用是什么？](https://mp.weixin.qq.com/s/t8pH3xqPS5CiuyaUx-8wcA)
