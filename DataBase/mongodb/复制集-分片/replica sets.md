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
传统的主从结构master/slave => 复制集
复制集是由一组拥有 相同数据集 的 mongod实例所组成的集群。

所有的写数据都是通过Primary节点完成的，接受来自客户端的写操作
一个复制集只能拥有一个 主节点 oplog记录写操作不记录读操作
从节点 通过oplog 复制数据 实现数据的冗余 

默认复制集的读操作也是指向 primary 节点，因为复制集是异步复制，
对于对实时性要求不高的情形 如 日志信息 也可以把读操作指向从节点 

* 数据节点：存储数据，可以充当主从节点
* 投票节点：负责选取，不存储数据，不能从当主从节点

replica sets ➜   复制集 提供数据冗余 增加高可用

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




