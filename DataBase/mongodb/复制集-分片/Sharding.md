> Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.
> 分片是一种跨多台机器分布数据的方法。MongoDB使用分片来支持大数据集和高吞吐量操作的部署。

https://docs.mongodb.com/manual/sharding/

为什么要分片？可以从单机所面临的问题说起：
例如，高查询率可能导致服务器的CPU高的占用率，而且也会耗尽服务器内存，出现前面的情况磁盘驱动器的I/O的压力就会很大，反应出的现象就是对客户端请求响应慢。

水平扩展涉及到将系统数据集划分并在多个服务器上加载，添加额外的服务器以根据需要增加容量。虽然单个机器的总体速度或容量可能不高，但每台机器处理总体工作负载的一个子集，可能提供比单个高速高容量服务器更好的效率。扩展部署的容量只需要在需要时添加额外的服务器，对于一台机器来说，这比高端硬件的总体成本更低。代价是增加了部署的基础设施和维护的复杂性。

MongoDB supports horizontal scaling through sharding.

## Sharded Cluster
A MongoDB sharded cluster consists of the following components:
- shard: Each shard contains a subset of the sharded data. Each shard can be deployed as a replica set.
- mongos: The mongos acts as a query router, providing an interface between client applications and the sharded cluster.
- config servers: Config servers store metadata and configuration settings for the cluster. As of MongoDB 3.4, config servers must be deployed as a replica set (CSRS).

![oo](https://docs.mongodb.com/manual/_images/sharded-cluster-production-architecture.bakedsvg.svg)

## Shard Keys
MongoDB使用shard键跨shard分发集合的文档。切分键由目标集合中每个文档中存在的一个或多个字段组成。

在对集合进行切分时选择切分键。切分后不能更改切分键的选择。切分集合只能有一个切分键

To shard a non-empty collection, the collection must have an index that starts with the shard key. For empty collections, MongoDB creates the index if the collection does not already have an appropriate index for the specified shard key. See Shard Key Indexes.
对非空集合分片，集合必须有shard key的索引，如果没有MongoDB会创建

https://docs.mongodb.com/manual/core/sharding-shard-key/#sharding-shard-key-indexes

- If the collection is empty, sh.shardCollection() creates the index on the shard key if such an index does not already exists.
- If the collection is not empty, you must create the index first before using sh.shardCollection().

The unique index constraints mean that:

- For a to-be-sharded collection, you cannot shard the collection if the collection has other unique indexes.
- For an already-sharded collection, you cannot create unique indexes on other fields.

The choice of shard key affects the performance, efficiency, and scalability of a sharded cluster. A cluster with the best possible hardware and infrastructure can be bottlenecked by the choice of shard key. The choice of shard key and its backing index can also affect the sharding strategy that your cluster can use.
shard key 的选择会影响数据库的性能和效率，以及shard cluster 的伸缩性，同样也会成为良好硬件配置的瓶颈。shard key 的索引也会影响集群的分片策略。

## Choosing a Shard Key
The choice of shard key affects the creation and distribution of the chunks across the available shards. This affects the overall efficiency and performance of operations within the sharded cluster.

The ideal shard key allows MongoDB to distribute documents evenly throughout the cluster.
理想的shard key可以使MongoDB均匀的在cluster之间分发文档。

![oo](https://docs.mongodb.com/manual/_images/sharded-cluster-ranged-distribution-good.bakedsvg.svg)

### Shard Key Limitations
- Shard Key Size
    A shard key cannot exceed 512 bytes.

- Shard Key Index Type
    A shard key index can be an ascending index on the shard key, a compound index that start with the shard key and specify ascending order for the shard key, or a hashed index.
    切分键索引可以是切分键上的升序索引、以切分键开始并为切分键指定升序的复合索引或散列索引。

    A shard key index cannot be an index that specifies a multikey index, a text index or a geospatial index on the shard key fields.
    切分键索引不能是在切分键字段上指定多键索引、文本索引或地理空间索引的索引。

- Shard Key Selection is Immutable
    Once you shard a collection, the selection of the shard key is immutable; i.e. you cannot select a different shard key for that collection.

If you must change a shard key:
- Dump all data from MongoDB into an external format.
- Drop the original sharded collection.
- Configure sharding using the new shard key.
- Pre-split the shard key range to ensure initial even distribution.
- Restore the dumped data into MongoDB.

Monotonically Increasing Shard Keys Can Limit Insert Throughput
单调递增的 shard key 会限制插入的吞吐量

对于具有高插入量的集群，键值单调递增和递减的分片键会影响插入吞吐量。如果您的切分键是_id字段，请注意_id字段的默认值通常是具有递增值的对象。

当插入带有单调递增切分键的文档时，所有插入都属于单个切分上的同一块。系统最终将接收所有写操作并迁移其内容以更均匀地分配数据的块范围进行划分。但是，集群在任何时候都只将插入操作定向到单个碎片，这就造成了插入吞吐量瓶颈。

如果集群上的操作主要是读取操作和更新，则此限制可能不会影响集群。

To avoid this constraint, use a hashed shard key or select a field that does not increase or decrease monotonically.

## Chunks
MongoDB partitions sharded data into chunks. Each chunk has an inclusive lower and exclusive upper range based on the shard key.
MongoDB分区将数据分块。每个块基于分片键有一个包含的下限和独占的上限。

In an attempt to achieve an even distribution of chunks across all shards in the cluster, a balancer runs in the background to migrate chunks across the shards .

## Advantages of Sharding 分片的优点
- Reads / Writes 减轻读写压力
- Storage Capacity 增大数据存储容量
- High Availability
    即使一个或多个切分不可用，切分集群也可以继续执行部分读/写操作。虽然在宕机期间无法访问不可用碎片上的数据子集，但针对可用碎片的读写仍然可以成功。

## Sharding Strategy
MongoDB supports two sharding strategies for distributing data across sharded clusters.

1. Hashed Sharding
    Hashed分片涉及计算分片键字段值的散列。然后根据散列的分片键值为每个块分配一个范围。
    MongoDB automatically computes the hashes when resolving queries using hashed indexes. Applications do not need to compute hashes.

2. Ranged Sharding
    范围分片涉及到根据分片键值将数据划分为范围。然后根据分片键值为每个块分配一个范围。