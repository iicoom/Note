## 并发和并行的区别
[What is the difference between concurrency and parallelism?](https://stackoverflow.com/questions/1050222/what-is-the-difference-between-concurrency-and-parallelism)

- Concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. For example, multitasking on a single-core machine.

- Parallelism is when tasks literally run at the same time, e.g., on a multicore processor.

并发是指两个或多个任务可以在重叠的时间段内启动、运行和完成。这并不一定意味着它们会同时运行。例如，单核机器上的多任务处理

并行性是指任务实际上同时运行，例如，在多核处理器上。

[进程线程并发并行](./进程线程并发并行.md)

## 并发和高并发的概念
1. 单核处理器：同时有两个或多个线程在单核处理器上运行，多个线程将交替的换入或换出内存，每个线程都处于执行过程的某个状态
2. 多核处理器：程序中的每个线程都会分配到一个处理器的核上，可以同时运行

### 高并发
High Concurrency 是互联网分布式架构中必须考虑的，只系统可以并行处理很多请求。

> 并发会导致多个线程操作相同的资源，这是应考虑线程安全，合理使用资源。

## 高并发语言层面实现
1. 线程安全
2. 线程封闭
3. 线程调度
4. 同步容器
5. 并发容器

## 高并发解决思路-架构实现
1. 扩容
2. 缓存
3. 队列
4. 拆分
5. 服务降级与熔断
6. 数据库切库，分库分表

## 实现高并发技术架构
1. 总体架构：Spring Boot, Maven, JDK8, MySql
2. 基础组件：Mybatis, Guava, Lombok, Redis, Kafaka
3. 高级组件：Joda-Time, Atomic, J.U.C, AQS, ThreadLocal, RateLimiter, threadPoll

## Java内存模型
主内存 -> Save/Load -> 工作内存 -> Java线程

## 并发模拟
1. Postman
2. Apache Bench
3. JMeter
4. 代码 Semphore，cutdownlatch