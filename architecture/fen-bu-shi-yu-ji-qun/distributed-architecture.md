# Distributed Architecture

[https://www.tutorialspoint.com/software\_architecture\_design/distributed\_architecture.htm](https://www.tutorialspoint.com/software_architecture_design/distributed_architecture.htm)

> In distributed architecture, components are presented on different platforms and several components can cooperate with one another over a communication network in order to achieve a specific objective or goal.

## Advantages

* Resource sharing − Sharing of hardware and software resources.
* Openness − Flexibility of using hardware and software of different vendors.
* Concurrency − Concurrent processing to enhance performance.
* Scalability − Increased throughput by adding new resources.
* Fault tolerance − The ability to continue in operation after a fault has occurred.

## Disadvantages

* Complexity − They are more complex than centralized systems.
* Security − More susceptible to external attack.
* Manageability − More effort required for system management.
* Unpredictability − Unpredictable responses depending on the system organization and network load.

## Centralized System vs. Distributed System

| Criteria | Centralized system | Distributed System |
| :--- | :--- | :--- |
| Economics | Low | High |
| Availability | Low | High |
| Complexity | Low | High |
| Consistency | Simple | High |
| Scalability | Poor | Good |
| Technology | Homogeneous | Heterogeneous |
| Security | High | Low |

## 承载量是分布式系统存在的原因

* 高吞吐，意味着你的系统，可以同时承载大量的用户使用。这里关注的整个系统能同时服务的用户数。这个吞吐量肯定是不可能用单台服务器解决的，因此需要多台服务器协作，才能达到所需要的吞吐量。
* 高并发，是高吞吐的一个延伸需求。当我们在承载海量用户的时候，我们当然希望每个服务器都能尽其所能的工作，而不要出现无谓的消耗和等待的情况
* 低延迟，对于人数稀少的服务来说不算什么问题。然而，如果我们需要在大量用户访问的时候，也能很快的返回计算结果，这就要困难的多。 所以分布式系统会采用很多请求分拣和分发的做法，尽快的让更多的服务器来出来用户的请求。

由于分布式系统，几乎是解决互联网业务承载量问题，的最基本方法，所以作为一个服务器端程序员，掌握分布式系统技术就变得异常重要了。

## 并发模型（多线程、异步）

所以在如何同时处理多个请求的问题上，业界有2个典型的方案。一种是多线程，一种是异步。在早期的系统中，多线程或多进程是最常用的技术。

因此异步回调模型在随后比多线程更加流行，除了多线程的死锁问题外，异步还能解决多线程下，线程反复切换导致不必要的开销的问题：每个线程都需要一个独立的栈空间，在多线程并行运行的时候，这些栈的数据可能需要来回的拷贝，这额外消耗了CPU

## 缓存技术

在互联网服务中，大部分的用户交互，都是需要立刻返回结果的，所以对于延迟有一定的要求。而类似网络游戏之类服务，延迟更是要求缩短到几十毫秒以内。所以为了降低延迟，缓存是互联网服务中最常见的技术之一

## 存储技术（NoSQL）

然而，当NoSQL兴起，大家突然发现，其实很多互联网业务，其数据格式是如此的简单，很多时候根部不需要关系型数据库那种复杂的表格

