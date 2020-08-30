## 查询优化器
Mongo自带了一个查询优化器会为我们选择最合适的查询方案。
如果一个索引能够精确匹配一个查询，那么查询优化器就会使用这个索引。

如果不能精确匹配呢？可能会有几个索引都适合你的查询，那MongoDB是怎样选择的呢？

MongoDB的查询计划会将多个索引并行的去执行，最先返回第101个结果的就是胜者，其他查询计划都会被终止，执行优胜的查询计划；
这个查询计划会被缓存，接下来相同的查询条件都会使用它；

何时查询计划缓存才会变呢？
- 在计划评估之后表发生了比较大的数据波动，查询优化器就会重新挑选可行的查询计划
- 建立索引时
- 每执行1000次查询之后，查询优化器就会重新评估查询计划

联合索引的优化
当你查询条件的顺序和你索引的顺序不一致的话，mongo会自动的调整查询顺序，保证你可以使用上索引。

例如：你的查询条件是(a,c,b)但是你的索引是（a,b,c）mongo会自动将你的查询条件调整为abc，寻找最优解。


聚合管道的优化
如果管道中不需要使用一个完整的文档的全部字段的话，管道不会将多余字段进行传递
$sort 和 $limit 合并,在内存中只会维护limit个数量的文档，不需要将所有的文档维护在内存中，大大降低内存中sort的压力
然而管道中的索引使用情况是极其不佳的，在管道中，只有在管道最开始时的match sort可以使用到索引，一旦发生过project投射，group分组，lookup表关联，unwind打散等操作后，就完全无法使用索引。


[Query Plans](https://docs.mongodb.com/manual/core/query-plans/#read-operations-query-optimization)

To view the query plan information for a given query, you can use db.collection.explain() or the cursor.explain() .

## 索引构建情况分析
1. mongostat工具介绍
2. profile集合介绍
3. 日志介绍
4. explain分析

```
./bin/mongostat -h 127.0.0.1:12345
应该关心的性能参数 qr|qw 读队列和写队列 数值如果较高 说明性能有问题
如果数据库数据量较大 idx miss 未使用索引的值较高 可能会导致qr较高
➜  bin mongostat -h 127.0.0.1:27017
insert query update delete getmore command dirty used flushes vsize   res qrw arw net_in net_out conn                time
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   160b   43.4k    2 Oct  6 09:52:22.794
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.6k    2 Oct  6 09:52:23.794
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.4k    2 Oct  6 09:52:24.798
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.8k    2 Oct  6 09:52:25.795
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.6k    2 Oct  6 09:52:26.794
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.5k    2 Oct  6 09:52:27.797
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.8k    2 Oct  6 09:52:28.792
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.4k    2 Oct  6 09:52:29.797
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.8k    2 Oct  6 09:52:30.793
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.4k    2 Oct  6 09:52:31.797
```

### [explain](https://docs.mongodb.com/manual/reference/explain-results/#explain-output-covered-queries)
```
> db.location.find({"w": [10, 20]}).explain()
```
WinningPlan就是在查询计划中胜出的方案，那肯定就有被淘汰的方案，是在rejectPlan里。
```
// 查询计划中的winningPlan部分
"winningPlan": {
	"stage": "FETCH",                                            // 5. 根据内层阶段树查到的索引去抓取完整的文档
	"filter": {                                                  // 6. 再根据createdAt参数进行筛选
		"createdAt": {
			"$gte": ISODate("2019-07-22T12:00:44.000Z")
		}
	},
	"inputStage": {                                              // 1. 每个阶段将自己的查询结果传递给父阶段树，所以从里往外读Explain
		"stage": "IXSCAN",                                       // 2. IXSCAN该阶段使用了索引进行扫描
		"keyPattern": {
			"load": 1                                            // 3. 使用了 load:1 这条索引
		},
		"indexName": "load_1",
		"isMultiKey": false,
		"multiKeyPaths": {
			"load": []
		},
		"isUnique": false,
		"isSparse": false,
		"isPartial": false,
		"indexVersion": 2,
		"direction": "backward",                                       
		"indexBounds": {
			"load": [
				"[MaxKey, MinKey]"                               // 4. 边界
			]
		}
	}
},
```

### [Analyze Query Performance](https://docs.mongodb.com/manual/tutorial/analyze-query-plan/)
The cursor.explain("executionStats") and the db.collection.explain("executionStats") methods provide statistics about the performance of a query. These statistics can be useful in measuring if and how a query uses an index.

```
db.inventory.find(
   { quantity: { $gte: 100, $lte: 200 } }
).explain("executionStats")


{
   "queryPlanner" : {
         "plannerVersion" : 1,
         ...
         "winningPlan" : {
            "stage" : "COLLSCAN",
            ...
         }
   },
   "executionStats" : {
      "executionSuccess" : true,
      "nReturned" : 3,
      "executionTimeMillis" : 0,
      "totalKeysExamined" : 0,
      "totalDocsExamined" : 10,
      "executionStages" : {
         "stage" : "COLLSCAN",
         ...
      },
      ...
   },
   ...
}
```
可以看出查询使用的plan, 返回的文档数 查询的总文档数

## Profiler
To configure the database profile and set the thresholds for capturing profile data, see the Database Profiler section
若要配置数据库概要文件并设置用于捕获概要文件数据的阈值，请参阅数据库概要文件部分

The database profiler writes data in the system.profile collection, which is a capped collection. To view the profiler’s output, use normal MongoDB queries on the system.profile collection.
数据库分析器在系统中写入数据。配置文件集合，这是一个有上限的集合。要查看分析器的输出，在系统上使用普通的MongoDB查询。配置文件收集。

```
use admin

> db.system.profile.find().pretty()
{
	"op" : "command",
	"ns" : "admin.system.users",
	"command" : {
		"saslStart" : 1,
		"mechanism" : "SCRAM-SHA-1",
		"payload" : BinData(0,"biwsbj1fX2Nsb3VkX2ludGVybmFsLHI9TlRJeU5UWTBNalExT1RrMw=="),
		"autoAuthorize" : 1
	},
	"numYield" : 0,
	"locks" : {
		"Global" : {
			"acquireCount" : {
				"r" : NumberLong(2)
			},
			"acquireWaitCount" : {
				"r" : NumberLong(1)
			},
			"timeAcquiringMicros" : {
				"r" : NumberLong(543110)
			}
		},
		"Database" : {
			"acquireCount" : {
				"r" : NumberLong(1)
			}
		},
		"Collection" : {
			"acquireCount" : {
				"r" : NumberLong(1)
			}
		}
	},
	"responseLength" : 163,
	"protocol" : "op_query",
	"millis" : 543,
	"ts" : ISODate("2020-07-05T02:50:27.757Z"),
	"client" : "127.0.0.1",
	"allUsers" : [ ],
	"user" : ""
}
```

### [setting](https://docs.mongodb.com/manual/reference/command/profile/index.html)
The profiler is off by default.

Profiling can impact performance and shares settings with the system log. Carefully consider any performance and security implications before configuring and enabling the profiler on a production deployment.
分析可以影响性能，并与系统日志共享设置。在生产部署上配置和启用分析器之前，要仔细考虑任何性能和安全问题。

```
{
  profile: <level>,
  slowms: <threshold>,
  sampleRate: <rate>
}
```

profile： Configures the profiler level. The following profiler levels are available:
```
Level	Description
0	The profiler is off and does not collect any data. This is the default profiler level.
1	The profiler collects data for operations that take longer than the value of slowms.
2	The profiler collects data for all operations.
```

slowms	int	
Optional. Default: 100

The slow operation time threshold, in milliseconds. Operations that run for longer than this threshold are considered slow.

```
To enable profiling for a mongod instance, pass the following options to mongod at startup.

mongod --profile 1 --slowms 15 --slowOpSampleRate 0.5
```
This sets the profiling level to 1, defines slow operations as those that last longer than 15 milliseconds, and specifies that only 50% of slow operations should be profiled. [

由此可见慢查询分析主要来自于profile记录的日志

### [View Profiler Data](https://docs.mongodb.com/manual/tutorial/manage-the-database-profiler/#database-profiling-example-queries)
The database profiler logs information about database operations in the system.profile collection.

```
db.system.profile.find().limit(10).sort( { ts : -1 } ).pretty()
```
To return all operations except command operations ($cmd), run a query similar to the following:
```
db.system.profile.find( { op: { $ne : 'command' } } ).pretty()
```

## 下一步规划
1. 试验记录慢查询（包括单节点mongod和replica）
2. 分析db.system.profile
3. 优化查询看效果