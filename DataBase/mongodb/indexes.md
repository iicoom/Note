#### 创建索引
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
单键索引，多键索引，复合索引, 全文索引

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






