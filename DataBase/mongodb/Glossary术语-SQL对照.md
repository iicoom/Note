[Glossary](https://docs.mongodb.com/master/reference/glossary/#term-cursor)

## admin database
A privileged database. Users must have access to the admin database to run certain administrative commands. For a list of administrative commands, see Administration Commands.

## aggregation
Any of a variety of operations that reduces and summarizes large sets of data. MongoDB’s aggregate() and mapReduce() methods are two examples of aggregation operations. For more information, see Aggregation.

## B-tree
A data structure commonly used by database management systems to store indexes. MongoDB uses B-trees for its indexes.

## BSON
A serialization format used to store documents and make remote procedure calls in MongoDB. “BSON” is a portmanteau of the words “binary” and “JSON”. Think of BSON as a binary representation of JSON (JavaScript Object Notation) documents.

用于RPC的序列化格式

## collection
A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. 

## cursor
A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity. See Iterate a Cursor in the mongo Shell.

### [Iterate a Cursor in the mongo Shell](https://docs.mongodb.com/master/tutorial/iterate-a-cursor/#read-operations-cursors)
```
var myCursor = db.users.find( { type: 2 } );

while (myCursor.hasNext()) {
   print(tojson(myCursor.next()));
}
```


## 对照
![MongoDB和关系型数据库术语对比图](https://pic1.zhimg.com/80/v2-4cb3078a802ff118ae39b901e101e754_720w.jpg)

[SQL to MongoDB Mapping Chart](https://docs.mongodb.com/manual/reference/sql-comparison/)
```
1. DISTINCT
SELECT DISTINCT(status)
FROM people

上面的sql和mongdb的
db.people.aggregate( [ { $group : { _id : "$status" } } ] ) 或者

db.people.distinct( "status" )

2. EXPLAIN
EXPLAIN SELECT *
FROM people
WHERE status = "A"

等价于
db.people.find( { status: "A" } ).explain()
```


> 装逼精粹
## 什么是MongoDB
MongoDB是一个文档数据库，提供好的性能，领先的非关系型数据库。采用BSON存储文档数据。
BSON（）是一种类json的一种二进制形式的存储格式，简称Binary JSON. 相对于json多了date类型和二进制数组。

## .MongoDB的优势有哪些
- 没有复杂的连接
- 深度查询能力,MongoDB支持动态查询。
- 容易扩展
- 不需要转化/映射应用对象到数据库对象
- 使用内部内存作为存储工作区,以便更快的存取数据。

## 在哪些场景使用MongoDB
- 大数据
- 内容管理系统
- 移动端Apps
- 数据管理

## 11 monogodb 中的分片什么意思
　　分片是将数据水平切分到不同的物理节点。当应用数据越来越大的时候，数据量也会越来越大。当数据量增长
时，单台机器有可能无法存储数据或可接受的读取写入吞吐量。利用分片技术可以添加更多的机器来应对数据量增加
以及读写操作的要求。

## 12 为什么要在MongoDB中使用分析器
　　mongodb中包括了一个可以显示数据库中每个操作性能特点的数据库分析器.通过这个分析器你可以找到比预期慢
的查询(或写操作);利用这一信息,比如,可以确定是否需要添加索引.


## 14 MongoDB支持哪些数据类型
String
Integer
Double
Boolean
Object
Object ID
Arrays
Min/Max Keys
Datetime
Code
Regular Expression等

## 18"ObjectID"有哪些部分组成
一共有四部分组成:时间戳、客户端ID、客户进程ID、三个字节的增量计数器

## 22用什么方法可以格式化输出结果
db.collectionName.find().pretty()

## 28 在MongoDB中什么是副本集（避免单点故障）
在MongoDB中副本集由一组MongoDB实例组成，包括一个主节点多个次节点，MongoDB客户端的所有数据都
写入主节点(Primary),副节点从主节点同步写入数据，以保持所有复制集内存储相同的数据，提高数据可用性。

## 30 MongoDB支持存储过程吗？如果支持的话，怎么用？
MongoDB支持存储过程，它是javascript写的，保存在db.system.js表中。

## 31如何理解MongoDB中的GridFS机制，MongoDB为何使用GridFS来存储文件？
　　GridFS是一种将大型文件存储在MongoDB中的文件规范。使用GridFS可以将大文件分隔成多个小文档存放，这样我们能够有效的保存大文档，而且解决了BSON对象有限制的问题。

## 34 MongoDB在A:{B,C}上建立索引，查询A:{B,C}和A:{C,B}都会使用索引吗？
　不会，只会在A:{B,C}上使用索引。

## 38 更新操作立刻fsync到磁盘?
　　不会,磁盘写操作默认是延迟执行的.写操作可能在两三秒(默认在60秒内)后到达磁盘.例如,如果一秒内数据库收到一千个对一个对象递增的操作,仅刷新磁盘一次.

## 39 如何执行事务/加锁?
　　mongodb没有使用传统的锁或者复杂的带回滚的事务,因为它设计的宗旨是轻量,快速以及可预计的高性能.可以把它类比成mysql mylsam的自动提交模式.通过精简对事务的支持,性能得到了提升,特别是在一个可能会穿过多个服务器的系统里.

## 41 什么是master或primary?
　　它是当前备份集群(replica set)中负责处理所有写入操作的主要节点/成员.在一个备份集群中,当失效备援(failover)事件发生时,一个另外的成员会变成primary.

## 42 我应该启动一个集群分片(sharded)还是一个非集群分片的 mongodb 环境?
　　(数据量大用集群分片,数据量小用非集群)

　　为开发便捷起见,我们建议以非集群分片(unsharded)方式开始一个 mongodb 环境,除非一台服务器不足以存放你的初始数据集.从非集群分片升级到集群分片(sharding)是无缝的,所以在你的数据集还不是很大的时候没必要考虑集群分片(sharding).
