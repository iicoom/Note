## 为什么要用锁？
[Distributed locks with Redis](https://redis.io/topics/distlock)

[node-redlock](https://github.com/mike-marcacci/node-redlock)
This is a node.js implementation of the redlock algorithm for distributed redis locks. It provides strong guarantees in both single-redis and multi-redis environments, and provides fault tolerance through use of multiple independent redis instances or clusters.

[原理分析](https://www.cnblogs.com/rgcLOVEyaya/p/RGC_LOVE_YAYA_1003days.html)


[How to do distributed locking](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html)

## What are you using that lock for?你用锁做什么?
The purpose of a lock is to ensure that among several nodes that might try to do the same piece of work, only one actually does it (at least only one at a time). That work might be to write some data to a shared storage system, to perform some computation, to call some external API, or suchlike. At a high level, there are two reasons why you might want a lock in a distributed application: for efficiency or for correctness [2]. To distinguish these cases, you can ask what would happen if the lock failed:

锁的目的是确保在几个可能尝试执行相同工作的节点中，只有一个节点实际执行此工作(至少一次只执行一个)。
这项工作可能是将一些数据写入共享存储系统，执行一些计算，调用一些外部API，或诸如此类。
在较高的层次上，您可能希望在分布式应用程序中使用锁的原因有两个:
1. 一是为了提高效率
2. 二是为了确保[2]的正确性。
   
为了区分这些情况，你可以问如果锁失败了会发生什么:
1. 效率:使用锁可以避免不必要地做两次相同的工作(例如一些昂贵的计算)。如果锁失败和两个节点做同样的的作品,
结果是一个小成本的增加或一个小小的不便(如用户最终得到相同的电子邮件通知两次)。
2. 正确性:采用锁可以防止并发进程互相干扰并破坏系统的状态。如果锁失败，两个节点同时处理同一块数据，结果是文件损坏、数据丢失、永久不一致、给病人的药物剂量错误或其他一些严重问题。

这两种情况都是需要锁的有效情况，但是您需要非常清楚您正在处理的是这两种情况中的哪一种。

我想说的是，如果你只是为了提高效率而使用锁，那么就没有必要花费Redlock的成本和复杂性，运行5台Redis服务器并检查是否大多数服务器都获得了锁。
您最好只使用单个的Redis实例，或者在主实例崩溃时将其异步复制到一个辅助实例。

如果您使用一个单独的Redis实例，当然，如果您的Redis节点上的电源突然断电，或者出现其他问题，您将释放一些锁。但是，如果您只将锁作为一种效率优化，而崩溃又不经常发生，那就没什么大不了的。
这种“没什么大不了”的场景正是Redis的闪光点。至少，如果您依赖于一个Redis实例，那么每个查看系统的人都很清楚，这些锁是近似的，并且仅用于非关键目的。

另一方面，拥有5个副本和多数投票的Redlock算法乍一看似乎适合于您的锁定对正确性很重要的情况。我将在以下几节中论证，它不适合这个目的。对于本文的其余部分，我们将假设您的锁对于正确性很重要，
如果两个不同的节点同时认为它们持有相同的锁，这将是一个严重的错误。

## Redis分布式锁的实现原理
[原文](https://mp.weixin.qq.com/s?__biz=MzU0OTk3ODQ3Ng==&mid=2247483893&idx=1&sn=32e7051116ab60e41f72e6c6e29876d9&chksm=fba6e9f6ccd160e0c9fa2ce4ea1051891482a95b1483a63d89d71b15b33afcdc1f2bec17c03c&mpshare=1&scene=23&srcid=1121Vlt0Mey0OD5eYWt8HPyB#rd)

现在面试，一般都会聊聊分布式系统这块的东西。通常面试官都会从服务框架（Spring Cloud、Dubbo）聊起，一路聊到分布式事务、分布式锁、ZooKeeper等知识。


咱们来看上面那张图，现在某个客户端要加锁。如果该客户端面对的是一个redis cluster集群，他首先会根据hash节点选择一台机器。

紧接着，就会发送一段lua脚本到redis上，那段lua脚本如下所示：
![加锁逻辑](https://mmbiz.qpic.cn/mmbiz_jpg/1J6IbIcPCLZazheOViaR9icDhe4LQXYyx2Hu6EkUMb5fENuKdibLB7oXrkrKfMd4GayUBdLZsu8iavXtBO9hOibibdLw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

为啥要用lua脚本呢？

因为一大坨复杂的业务逻辑，可以通过封装在lua脚本中发送给redis，保证这段复杂业务逻辑执行的原子性。



那么，这段lua脚本是什么意思呢？

KEYS[1]代表的是你加锁的那个key，比如说：

RLock lock = redisson.getLock("myLock");

这里你自己设置了加锁的那个锁key就是“myLock”。

ARGV[1]代表的就是锁key的默认生存时间，默认30秒。

ARGV[2]代表的是加锁的客户端的ID，类似于下面这样：

8743c9c0-0795-4907-87fd-6c719a6b4586:1

给大家解释一下，第一段if判断语句，就是用“exists myLock”命令判断一下，如果你要加锁的那个锁key不存在的话，你就进行加锁。

如何加锁呢？很简单，用下面的命令：

hset myLock 

    8743c9c0-0795-4907-87fd-6c719a6b4586:1 1

通过这个命令设置一个hash数据结构，这行命令执行后，会出现一个类似下面的数据结构：
![结构](https://mmbiz.qpic.cn/mmbiz_png/1J6IbIcPCLZazheOViaR9icDhe4LQXYyx2rhQINXfdiaxAOOVVW02RAEOkXYdzd9wF4NpYaicDmQzwg9YBm7TmLZbQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

上述就代表“8743c9c0-0795-4907-87fd-6c719a6b4586:1”这个客户端对“myLock”这个锁key完成了加锁。

接着会执行“pexpire myLock 30000”命令，设置myLock这个锁key的生存时间是30秒。

好了，到此为止，ok，加锁完成了。


- 锁互斥机制

那么在这个时候，如果客户端2来尝试加锁，执行了同样的一段lua脚本，会咋样呢？

很简单，第一个if判断会执行“exists myLock”，发现myLock这个锁key已经存在了。

接着第二个if判断，判断一下，myLock锁key的hash数据结构中，是否包含客户端2的ID，但是明显不是的，因为那里包含的是客户端1的ID。

所以，客户端2会获取到pttl myLock返回的一个数字，这个数字代表了myLock这个锁key的剩余生存时间。比如还剩15000毫秒的生存时间。

此时客户端2会进入一个while循环，不停的尝试加锁。


- watch dog自动延期机制

客户端1加锁的锁key默认生存时间才30秒，如果超过了30秒，客户端1还想一直持有这把锁，怎么办呢？

简单！只要客户端1一旦加锁成功，就会启动一个watch dog看门狗，他是一个后台线程，会每隔10秒检查一下，如果客户端1还持有锁key，那么就会不断的延长锁key的生存时间。


### 释放锁机制

如果执行lock.unlock()，就可以释放分布式锁，此时的业务逻辑也是非常简单的。

其实说白了，就是每次都对myLock数据结构中的那个加锁次数减1。

如果发现加锁次数是0了，说明这个客户端已经不再持有锁了，此时就会用：

“del myLock”命令，从redis里删除这个key。

然后呢，另外的客户端2就可以尝试完成加锁了。

这就是所谓的分布式锁的开源Redisson框架的实现机制。

一般我们在生产系统中，可以用Redisson框架提供的这个类库来基于redis进行分布式锁的加锁与释放锁。

### 上述Redis分布式锁的缺点

其实上面那种方案最大的问题，就是如果你对某个redis master实例，写入了myLock这种锁key的value，此时会异步复制给对应的master slave实例。

但是这个过程中一旦发生redis master宕机，主备切换，redis slave变为了redis master。

接着就会导致，客户端2来尝试加锁的时候，在新的redis master上完成了加锁，而客户端1也以为自己成功加了锁。

此时就会导致多个客户端对一个分布式锁完成了加锁。

这时系统在业务语义上一定会出现问题，导致各种脏数据的产生。

所以这个就是redis cluster，或者是redis master-slave架构的主从异步复制导致的redis分布式锁的最大缺陷：在redis master实例宕机的时候，可能导致多个客户端同时完成加锁。


### 秒杀应用
[每秒上千订单的高并发场景下如何完成分布式锁的性能优化？](http://www.mobabel.net/%E8%BD%AC%E6%AF%8F%E7%A7%92%E4%B8%8A%E5%8D%83%E8%AE%A2%E5%8D%95%E7%9A%84%E9%AB%98%E5%B9%B6%E5%8F%91%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%A6%82%E4%BD%95%E5%AE%8C%E6%88%90%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81)
