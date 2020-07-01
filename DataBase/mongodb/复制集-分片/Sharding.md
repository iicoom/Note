> Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.
> 分片是一种跨多台机器分布数据的方法。MongoDB使用分片来支持大数据集和高吞吐量操作的部署。

https://docs.mongodb.com/manual/sharding/

例如，高查询率可能耗尽服务器的CPU承受能力。大于系统RAM的工作集会增加磁盘驱动器的I/O的压力,耗尽服务器内存。

水平扩展涉及到将系统数据集划分并在多个服务器上加载，添加额外的服务器以根据需要增加容量。虽然单个机器的总体速度或容量可能不高，但每台机器处理总体工作负载的一个子集，可能提供比单个高速高容量服务器更好的效率。扩展部署的容量只需要在需要时添加额外的服务器，对于一台机器来说，这比高端硬件的总体成本更低。代价是增加了部署的基础设施和维护的复杂性。

MongoDB supports horizontal scaling through sharding.

## Shard Keys
MongoDB使用shard键跨shard分发集合的文档。切分键由目标集合中每个文档中存在的一个或多个字段组成。

在对集合进行切分时选择切分键。切分后不能更改切分键的选择。切分集合只能有一个切分键