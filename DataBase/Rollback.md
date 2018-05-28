> 首先，rollback到底是什么意思呢？在关系型数据库中因为有事务的概念，
操作数据后在没有commit之前是可以执行rollback命令进行数据回退的。
而在单实例mongodb中，写入就写入了，删除就删除了，没有事务的概念，也没有rollback的操作，
所以这里要讨论的是replicaset（复制集）的rollback

https://blog.csdn.net/jianlong727/article/details/73321905

## mongodb 复制及rollback
步骤1: 客户端向Primary写入3笔数据 1、2、3, 经过oplog日志后同步到secondary节点上，此时各个节点数据一致
步骤2： 但当Primary节点再次被写入一笔数据4的时候，发生宕机，此时 数据4 还没来得及同步到从节点上
步骤3： 此时集群短时间关闭写操作开始竞选，经过一系列选举后有了新的primary节点，此时新Primary节点上是没有数据4的
步骤4： 新的primary承接了客户端的write请求，写入新数据 5，此时新primary的数据状态为1，2，3，5
步骤5： 原primary节点重新启动后申请加入replica member作为secondary节点，因为此时它与新primary数据不一致，
          所以就会发生rollback（回滚）动作，将数据状态恢复为1，2，3
步骤6：回滚完之后，将继续同步新primary节点的数据，之后数据状态变为1，2，3，5