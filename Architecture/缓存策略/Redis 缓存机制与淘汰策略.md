> Caching is the practice of storing data in or retrieval from high performance storage like memory.Caching improves the application performance by reducing the data access time,lowering latency and IO operations.When your application has to serve millions of concurrent requests,fetching data every time from disk storage like mysql,postgres can be a bottleneck.With the help of in memory storage like Redis or memcached application can server its user faster using some caching strategy.
> 缓存是在高性能存储(如内存)中存储数据或从高性能存储中检索数据的实践。缓存通过减少数据访问时间、降低延迟和IO操作来提高应用程序性能。当应用程序必须处理数百万个并发请求，每次都要从磁盘存储(如mysql,postgres)中获取数据时，可能会成为瓶颈。在内存存储的帮助下，如Redis或memcached应用程序通过使用一些缓存策略可以为用户提供更快的响应。


[Redis的缓存策略和主键失效机制](https://www.cnblogs.com/binyue/p/3726842.html)

最大缓存配置
在 redis 中，允许用户设置最大使用内存大小
```
server.maxmemory
```
默认为0，没有指定最大缓存，如果有新的数据添加，超过最大内存，则会使redis崩溃，所以一定要设置。
redis 内存数据集大小上升到一定大小的时候，就会实行数据淘汰策略。

redis 提供 6种数据淘汰策略：
- volatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰
- volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰
- volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰
- allkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰
- allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰
- no-enviction（驱逐）：禁止驱逐数据
  
注意这里的6种机制，volatile和allkeys规定了是对已设置过期时间的数据集淘汰数据还是从全部数据集淘汰数据，后面的lru、ttl以及random是三种不同的淘汰策略，再加上一种no-enviction永不回收的策略。

使用策略规则：

1. 如果数据呈现幂律分布，也就是一部分数据访问频率高，一部分数据访问频率低，则使用allkeys-lru
2. 如果数据呈现平等分布，也就是所有的数据访问频率都相同，则使用allkeys-random

https://zhuanlan.zhihu.com/p/48080173

## Redis为什么会这么快
```
1、Redis是纯内存操作，需要的时候需要我们手动持久化到硬盘中

2、Redis是单线程，从而避开了多线程中上下文频繁切换的操作。

3、Redis数据结构简单、对数据的操作也比较简单

4、使用底层模型不同，它们之间底层实现方式以及与客户端之间通信的应用协议不一样，Redis直接自己构建了VM 机制 ，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求

5、使用多路I/O复用模型，非阻塞I/O
```
多路I/O复用: I/O 多路复用技术是为了解决进程或线程阻塞到某个 I/O 系统调用而出现的技术，可以监视多个描述符，一旦某个描述符就绪（一般是读就绪或者写就绪，就是这个文件描述符进行读写操作之前），能够通知程序进行相应的读写操作

## Redis缓存的数据一致性
我们能做的只能是尽可能的保证数据的一致性。不管是先删库再删缓存 还是 先删缓存再删库，都可能出现数据不一致的情况，因为读和写操作是并发的，我们没办法保证他们的先后顺序。

## 缓存击穿
缓存只是为了缓解数据库压力而添加的一层保护层，当从缓存中查询不到我们需要的数据就要去数据库中查询了。如果被黑客利用，频繁去访问缓存中没有的数据，那么缓存就失去了存在的意义，瞬间所有请求的压力都落在了数据库上，这样会导致数据库连接异常。

解决方案：
```
1、后台设置定时任务，主动的去更新缓存数据。这种方案容易理解，但是当key比较分散的时候，操作起来还是比较复杂的

2、分级缓存。比如设置两层缓存保护层，1级缓存失效时间短，2级缓存失效时间长。有请求过来优先从1级缓存中去查找，如果在1级缓存中没有找到相应数据，则对该线程进行加锁，这个线程再从数据库中取到数据，更新至1级和2级缓存。其他线程则直接从2级线程中获取

3、提供一个拦截机制，内部维护一系列合法的key值。当请求的key不合法时，直接返回。
```

## 缓存雪崩
缓存雪崩就是指缓存由于某些原因（比如 宕机、cache服务挂了或者不响应）整体crash掉了，导致大量请求到达后端数据库，从而导致数据库崩溃，整个系统崩溃，发生灾难，也就是上面提到的缓存击穿。

## 总结
Redis的性能极高，读的速度是110000次/s,写的速度是81000次/s，支持事务，支持备份，丰富的数据类型。

任何事情都是两面性，Redis也是有缺点的：

1、由于是内存数据库，所以单台机器存储的数据量是有限的，需要开发者提前预估，需要及时删除不需要的数据。

2、当修改Redis的数据之后需要将持久化到硬盘的数据重新加入到内容中，时间比较久，这个时候Redis是无法正常运行的。

