## [select、poll、epoll 是什么？有什么作用？](https://zhuanlan.zhihu.com/p/129089001)
通常来说，实现处理tcp请求，为一个连接一个线程，在高并发的场景，这种多线程模型与Epoll相比就显得相形见绌了。epoll是linux2.6内核的一个新的系统调用，epoll在设计之初，就是为了替代select, poll线性复杂度的模型，epoll的时间复杂度为O(1), 也就意味着，epoll在高并发场景，随着文件描述符的增长，有良好的可扩展性。

select 和 poll 监听文件描述符list，进行一个线性的查找 O(n)
epoll: 使用了内核文件级别的回调机制O(1)
https://zhuanlan.zhihu.com/p/93609693

直观来说，I/O 复用的作用就是：让程序能够在单进程、单线程的模式下，同时处理 socket_fd 和 connection_fd 这两个文件。select 函数为这个想法提供了支持：当 socket_fd 和 connection_fd 中有一个已经“准备好”时，就会返回。进程首先检查 socket_fd 和 connection_fd 中的哪个已经准备好，对已经准备好的文件描述符再执行相应的操作。如果 connection_fd 准备好，就处理数据；如果 socket_fd 准备好，就接受连接并产生新的 connection_fd。

select 和 poll 都有一个缺点，就是只知道有多少个文件描述符已准备好，却不知道具体是哪些，因此需要使用线性扫描来确定，效率较低。试想：有没有别的函数，能不仅仅返回数量，并且一并返回已经准备好的文件描述符呢？

Linux 的 epoll 函数解决了这个问题。epoll 的用法和 select、poll 是类似的：将 socket_fd 加入监视，将新生成的连接加入监视，将已完成的连接退出监视。参考 Linux 控制台命令 man epoll，可继续将上述服务器的代码“改造”如下：