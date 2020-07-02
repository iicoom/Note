> A replica set in MongoDB is a group of mongod processes that maintain the same data set. Replica sets provide redundancy and high availability, and are the basis for all production deployments. 
MongoDB中的复制集是一组mongod的进程，他们维护了同样的数据集。复制集提供了数据的冗余保证了服务的高可用，是生产环境的基础部署形式。

一些情况下，复制集可以增强读数据库的性能，因为客户端可以从不同的数据库读取。

https://docs.mongodb.com/manual/replication/
## 单点模式 
优点：
1. 部署方便
2. 节省资源

思考问题：
1. 硬盘报警，存储空间就要满了，怎么办？
2. 出现网络通信故障，服务器无法正常提供服务怎么办？
3. 进行备份时，为了保证数据一致性，要将实例关闭或者上个写锁，怎么办？

以上问题充分暴露了单点模式的不稳定性

## 复制集
传统的主从结构master/slave => 更高级的 复制集

一个副本集是一组维护相同数据集的mongod实例。一个副本集包含几个数据承载节点和一个仲裁节点。

所有的写数据都是通过Primary节点完成的，接受来自客户端的写操作
一个复制集只能拥有一个 主节点 oplog记录写操作不记录读操作
从节点 通过oplog 复制数据 实现数据的冗余 
![oo](https://docs.mongodb.com/manual/_images/replica-set-read-write-operations-primary.bakedsvg.svg)

secondaries复制主服务器的oplog并将操作应用到它们的数据集上，这样secondaries的数据集就能反映主服务器的数据集。如果主服务器不可用，一个合格的secondaries将进行一次选举，将自己选为新的主服务器。

复制延迟指的是在主服务器上复制(即复制)写操作到辅助服务器所花费的时间。一些小的延迟周期是可以接受的，但是随着复制延迟的增加，会出现严重的问题，包括在主服务器上构建缓存压力。

## Automatic Failover 自动故障转移
When a primary does not communicate with the other members of the set for more than the configured electionTimeoutMillis period (10 seconds by default), an eligible secondary calls for an election to nominate itself as the new primary. The cluster attempts to complete the election of a new primary and resume normal operations.

当出现主节点不能和其他节点通信，并且时间超过默认时间10s,那么一个新的合格的从节点将被选举为主节点，然后才能恢复正常的写操作。
![oo](https://docs.mongodb.com/manual/_images/replica-set-trigger-election.bakedsvg.svg)

在选举成功完成之前，复制集不能处理写操作。如果将读查询配置为在主服务器脱机时在辅助服务器上运行，则复制集可以继续提供读查询。

## Read Operations
By default, clients read from the primary [1]; however, clients can specify a read preference to send read operations to secondaries.
![oo](https://docs.mongodb.com/manual/_images/replica-set-read-preference-secondary.bakedsvg.svg)

从节点的异步复制意味着从 从节点读取数据可能返回不反映主服务器上数据状态的数据。

Multi-document transactions that contain read operations must use read preference primary. All operations in a given transaction must route to the same member.
多文档事务必须从主节点操作。
[Read Preference](https://docs.mongodb.com/manual/core/read-preference/)

* 数据节点：存储数据，可以充当主从节点
* 投票节点：负责选取，不存储数据，不能从当主从节点

## 复制的基本架构
基本的架构由3台服务器组成，一个三成员的复制集，由三个有数据，或者两个有数据，一个作为仲裁者。

### 三个存储数据的复制集
两个从库组成，主库宕机时，这两个从库都可以被选为主库。

当主库宕机后,两个从库都会进行竞选，其中一个变为主库，当原主库恢复后，作为从库加入当前的复制集群即可。

### 当存在arbiter节点
在三个成员的复制集中，有两个正常的主从，及一台arbiter节点：

一个主库

一个从库，可以在选举中成为主库

一个aribiter节点，在选举中，只进行投票，不能成为主库

由于arbiter节点没有复制数据，因此这个架构中仅提供一个完整的数据副本。arbiter节点只需要更少的资源，代价是更有限的冗余和容错。

当主库宕机时，将会选择从库成为主，主库修复后，将其加入到现有的复制集群中即可。

## 搭建复制集
1. docker pull centos:6.9

2. ➜  ~ docker run -i -t centos:6.9
   
	[root@b95687d93741 /]#

	-i, --interactive
	-t, --tty (“allocate a pseudo-TTY”, i.e. a terminal)
	(see docker run --help for details)

3. 安装mongodb

4. 启动
	```
	[mongod@f7881fcaf265 mongodb]$ for i in 28017 28018 28019 28020
	>   do
	>     bin/mongod -f /mongodb/$i/conf/mongod.conf
	> done
	```
	about to fork child process, waiting until server is ready for connections.
	forked process: 153
	child process started successfully, parent exiting
	about to fork child process, waiting until server is ready for connections.
	forked process: 176
	child process started successfully, parent exiting
	about to fork child process, waiting until server is ready for connections.
	forked process: 199
	child process started successfully, parent exiting
	about to fork child process, waiting until server is ready for connections.
	forked process: 222
	child process started successfully, parent exiting

5. 登陆数据库，配置mongodb复制
	```
	shell> mongo --port 28017

	config = {_id: 'my_repl', members: [
														{_id: 0, host: '172.17.0.3:28017'},
														{_id: 1, host: '172.17.0.3:28018'},
														{_id: 2, host: '172.17.0.3:28019'}]
						}

	{
		"_id" : "my_repl",
		"members" : [
			{
				"_id" : 0,
				"host" : "172.17.0.3:28017"
			},
			{
				"_id" : 1,
				"host" : "172.17.0.3:28018"
			},
			{
				"_id" : 2,
				"host" : "172.17.0.3:28019"
			}
		]
	}

	> rs.initiate(config);
	{ "ok" : 1 }
	my_repl:OTHER>
	```

6. 复制集管理操作
	```
	查看复制集状态：
	rs.status();     # 查看整体复制集状态
	rs.isMaster();   #  查看当前是否是主节点

	添加删除节点
	rs.add("ip:port");    #  新增从节点
	rs.addArb("ip:port"); #  新增仲裁节点
	rs.remove("ip:port"); #  删除一个节点

	配置成功后，通过以下命令查询配置后的属性
	rs.conf();

	my_repl:PRIMARY> rs.conf();
	{
		"_id" : "my_repl",
		"version" : 1,
		"protocolVersion" : NumberLong(1),
		"members" : [
			{
				"_id" : 0,
				"host" : "172.17.0.3:28017",
				"arbiterOnly" : false,
				"buildIndexes" : true,
				"hidden" : false,
				"priority" : 1,
				"tags" : {

				},
				"slaveDelay" : NumberLong(0),
				"votes" : 1
			},
			{
				"_id" : 1,
				"host" : "172.17.0.3:28018",
				"arbiterOnly" : false,
				"buildIndexes" : true,
				"hidden" : false,
				"priority" : 1,
				"tags" : {

				},
				"slaveDelay" : NumberLong(0),
				"votes" : 1
			},
			{
				"_id" : 2,
				"host" : "172.17.0.3:28019",
				"arbiterOnly" : false,
				"buildIndexes" : true,
				"hidden" : false,
				"priority" : 1,
				"tags" : {

				},
				"slaveDelay" : NumberLong(0),
				"votes" : 1
			}
		],
		"settings" : {
			"chainingAllowed" : true,
			"heartbeatIntervalMillis" : 2000,
			"heartbeatTimeoutSecs" : 10,
			"electionTimeoutMillis" : 10000,
			"getLastErrorModes" : {

			},
			"getLastErrorDefaults" : {
				"w" : 1,
				"wtimeout" : 0
			},
			"replicaSetId" : ObjectId("5db131ade63cd004bb005bf4")
		}
	}
	```




