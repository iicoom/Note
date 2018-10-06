## 创建索引
查询collection的索引情况
```
> db.books.getIndexes()
[
  {
    "v" : 2,
    "key" : {
      "_id" : 1
    },
    "name" : "_id_",
    "ns" : "students.books"
  }
]
```
给常用的查询创建索引，可以大幅提高查询速度，虽然会影响写入速度，但是数据量很大的情况下是值得的
创建索引要注意的问题：
1. 在插入数据之前就创建，否则在已有大量数据的时候创建索引会需要很长的时间，损害数据库的性能

索引的分类：
单键索引，多键索引，复合索引, 全文索引, 地理位置索引

创建索引：
db.collection.ensureIndex(keys, options)

keys：
For an ascending index on a field, specify a value of 1; for descending index, specify a value of -1.

```
> db.students.ensureIndex({sex: 1, age: 1})
{
  "createdCollectionAutomatically" : false,
  "numIndexesBefore" : 1,
  "numIndexesAfter" : 2,
  "ok" : 1
}

使用索引
> db.students.find({sex: "man", age: 18})
{ "_id" : ObjectId("5bb5fdbb37c243e75d95e149"), "grades" : [ 20, 30, 40 ], "sex" : "man", "age" : 18 }

```

创建全文索引：一个mongodb数据集合只能创建一个全文索引
```
db.articles.ensureIndex({key: "text"}) 单键全文索引
db.articles.ensureIndex({key1: "text1", key2: "text2"}) 多键全文索引
db.articles.ensureIndex("$**": "text"）

例：
db.articles.ensureIndex({"article": "text"})
```
使用全文索引：
```
> db.articles.find({$text: {$search: "aa bb"}})
Error: error: {
  "ok" : 0,
  "errmsg" : "text index required for $text query",
  "code" : 27,
  "codeName" : "IndexNotFound"
}
以上为未建立全文索引的查询情况

db.articles.find($text: {$search: "coffee"})
db.articles.find($text: {$search: "aa bb cc"})
db.articles.find($text: {$search: "aa bb -cc"})
```
全文索引的相似度：
$meta操作符: {score: {$meta: "textScore"}}
写在查询条件后面可以返回查询相似度，与sort一起使用达到较好的效果
```
> db.articles.find({$text: {$search: "aa bb"}}, {score: {$meta: "textScore"}} )
{ "_id" : ObjectId("5bb75c9d37c243e75d95e14b"), "article" : "aa bb cc rr diuleilaomu", "score" : 1.2 }
{ "_id" : ObjectId("5bb75c9d37c243e75d95e14a"), "article" : "aa bb cc 1234242", "score" : 1.25 }
{ "_id" : ObjectId("5bb75c9d37c243e75d95e14c"), "article" : "aa bb 1255yy fuck", "score" : 1.25 }

> db.articles.find({$text: {$search: "aa bb"}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}})
{ "_id" : ObjectId("5bb75c9d37c243e75d95e14a"), "article" : "aa bb cc 1234242", "score" : 1.25 }
{ "_id" : ObjectId("5bb75c9d37c243e75d95e14c"), "article" : "aa bb 1255yy fuck", "score" : 1.25 }
{ "_id" : ObjectId("5bb75c9d37c243e75d95e14b"), "article" : "aa bb cc rr diuleilaomu", "score" : 1.2 }
```

地理位置索引：（2D平面地理位置索引，2Dsphere 索引）
```
> db.location.ensureIndex({"w": "2d"})
{
  "createdCollectionAutomatically" : true,
  "numIndexesBefore" : 1,
  "numIndexesAfter" : 2,
  "ok" : 1
}
```
位置的表示方式 经纬度[经度, 纬度]
取值范围 经度[-180, 180]  纬度[-90, 90]
查询方式：
$near 查询距离某个点最近的点
$geoWithin 查询某个形状内的点

```
> db.location.find({"w": {$near: [39, 29]}})
{ "_id" : ObjectId("5bb80aa837c243e75d95e14f"), "w" : [ 40, 30 ] }
{ "_id" : ObjectId("5bb80a8d37c243e75d95e14d"), "w" : [ 10, 20 ] }
{ "_id" : ObjectId("5bb80a9a37c243e75d95e14e"), "w" : [ 100, 30 ] }
{ "_id" : ObjectId("5bb80ab337c243e75d95e150"), "w" : [ 140, 30 ] }
会默认返回100条数据

> db.location.find({"w": {$near: [39, 29], $maxDistance: 5}})
{ "_id" : ObjectId("5bb80aa837c243e75d95e14f"), "w" : [ 40, 30 ] }
```


## 索引的属性
```
db.collection.ensureIndex({param}, {param})
第二个参数就是索引的属性

比较重要的属性：
name
unique true/false
sparse 稀疏性
是否定时删除

```

## 删除索引
```
db.collection.dropIndex("name")
```

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

explain
```
> db.location.find({"w": [10, 20]}).explain()
```




