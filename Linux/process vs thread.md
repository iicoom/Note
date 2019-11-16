https://www.programmerinterview.com/operating-systems/thread-vs-process/

## proccess vs thread

A process is an executing instance of an application. What does that mean? Well, for example, when you double-click the Microsoft Word icon, you start a process that runs Word. A thread is a path of execution within a process. Also, a process can contain multiple threads. When you start Word, the operating system creates a process and begins executing the primary thread of that process.

一个进程就是一个正在执行的应用实例。比如，你双击MS 的Word图标，就启动了一个进程来运行Word。

线程就是在进程里的一个执行路径。 而且，一个进程可以包含多个线程。 当你运行了Word，操作系统就创建了一个进程并且开始执行这个进程的一些基础线程。

It’s important to note that a thread can do anything a process can do. But since a process can consist of multiple threads, a thread could be considered a ‘lightweight’ process. Thus, the essential difference between a thread and a process is the work that each one is used to accomplish. Threads are used for small tasks, whereas processes are used for more ‘heavyweight’ tasks – basically the execution of applications.

有一点很重要就是线程可以做任何进程可以做的事情。但是因为一个进程包含多个线程，一个线程会可以被看作一个轻量级的进程。
也就是说两者最重要的不同就是他们完成的工作不同：线程被用于做小的任务，进程被用来做更复杂的任务，大部分都是执行一些应用程序。

Another difference between a thread and a process is that threads within the same process share the same address space, whereas different processes do not. This allows threads to read from and write to the same data structures and variables, and also facilitates communication between threads. Communication between processes – also known as IPC, or inter-process communication – is quite difficult and resource-intensive.

线程和进程的另一个不同是在相同进程中的线程会共享一些地址空间，不同的进程之间则不会。这就使得线程可以在相同的数据结构和变量进行读写，
方便的在线程间交换。
进程间通信也被称作 IPC，进程内通信就比较难了 而且是 资源密集的。


## MultiThreading
Threads, of course, allow for multi-threading. A common example of the advantage of multithreading is the fact that you can have a word processor that prints a document using a background thread, but at the same time another thread is running that accepts user input, so that you can type up a new document.

多线程优势的一个例子就是 word处理器使用一个后台线程打印文档，同时用另一个线程运行接收用户的输入，这样你可以完成一个新的文档。

If we were dealing with an application that uses only one thread, then the application would only be able to do one thing at a time – so printing and responding to user input at the same time would not be possible in a single threaded application.

如果使用的应用程序只有一个线程，那这个应用只能同时处理一件事情--打印和接收用户输入就不能再一个单线程应用中同时进行。

Each process has it’s own address space, but the threads within the same process share that address space. Threads also share any other resources within that process. This means that it’s very easy to share data amongst threads, but it’s also easy for the threads to step on each other, which can lead to bad things.

每个进程有自己的地址空间，但是同一进程里的线程可以共享地址空间。线程还可以共享进程内的其他资源。也就是说线程之间共享数据很方便，但是线程之间也容易发生冲突，导致不好的结果。

Multithreaded programs must be carefully programmed to prevent those bad things from happening. Sections of code that modify data structures shared by multiple threads are called critical sections. When a critical section is running in one thread it’s extremely important that no other thread be allowed into that critical section. This is called synchronization, which we wont get into any further over here. But, the point is that multithreading requires careful programming.

多线程的程序需要很小心的处理编程避免线程冲突。共享的部分被一个线程占用时不允许其他线程访问这个称作同步化，这里不再深入探讨。