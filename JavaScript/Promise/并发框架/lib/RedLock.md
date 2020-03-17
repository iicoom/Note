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

让我们先把Redlock的细节放在一边，讨论一下一般情况下如何使用分布式锁(与使用的特定锁算法无关)。重要的是要记住，分布式系统中的锁与多线程应用程序中的互斥锁不同。这是一个更复杂的问题，
因为不同的节点和网络都可能以不同的方式独立地失败。

例如，假设您有一个应用程序，其中客户机需要更新共享存储中的一个文件(例如HDFS或S3)。客户端首先获取锁，然后读取文件，进行一些更改，将修改后的文件写回，最后释放锁。该锁阻止两个客户端同时执行这个读-修改-写循环，这将导致更新丢失。代码可能是这样的:
```js
// THIS CODE IS BROKEN
function writeData(filename, data) {
    var lock = lockService.acquireLock(filename);
    if (!lock) {
        throw 'Failed to acquire lock';
    }

    try {
        var file = storage.readFile(filename);
        var updated = updateContents(file, data);
        storage.writeFile(filename, updated);
    } finally {
        lock.release();
    }
}
```