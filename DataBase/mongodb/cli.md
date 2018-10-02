## 启动数据库
mongodb/bin/mongod 在mongodb的安装目录下运行mongod文件
[官网启动server](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)

## CLI
### 链接数据库（本地）
mongodb bin/mongo 在mongodb的安装目录下运行mongo文件

### 连接数据库（远程）
本地命令行执行
➜  ~ mongo 101.201.192.165:27017
MongoDB shell version v3.4.6
connecting to: 101.201.192.165:27017
MongoDB server version: 2.6.0
WARNING: shell and server versions do not match

//连接到指定的MongoDB数据库
➜  ~ mongo 101.201.192.165:27017/test

//指定用户名和密码连接到指定的MongoDB数据库test
mongo 192.168.1.200:27017/test -u user -p password

[使用用户管理员帐户连接和授权](https://www.jianshu.com/p/27fffcd68afe)
➜  ~ mongo 47.92.153.154:90100/Ranch -u Ranch -p yunfarm_000 --authenticationDatabase "admin"
MongoDB shell version v3.4.6
connecting to: mongodb://47.94.154.154:9011/Ranch
MongoDB server version: 2.6.5
WARNING: shell and server versions do not match


### show dbs
> show dbs
Express-api  0.000GB
admin        0.000GB
comments     0.000GB
koa-test     0.000GB
local        0.000GB
nodedb       0.000GB

### use db
> use koa-test
switched to db koa-test

### show tables
> show tables
accounts
categories
categoryitems
msgtpls
users

### 表操作

#### insert
```
> db.students.insert([
  { "_id" : 1, "grades" : [ 85, 80, 80 ] },
  { "_id" : 2, "grades" : [ 88, 90, 92 ] },
  { "_id" : 3, "grades" : [ 85, 100, 90 ] }
  ])

BulkWriteResult({
  "writeErrors" : [ ],
  "writeConcernErrors" : [ ],
  "nInserted" : 3,
  "nUpserted" : 0,
  "nMatched" : 0,
  "nModified" : 0,
  "nRemoved" : 0,
  "upserted" : [ ]
})
```

#### find
```
> db.students.find()
{ "_id" : 1, "grades" : [ 85, 80, 80 ] }
{ "_id" : 2, "grades" : [ 88, 90, 92 ] }
{ "_id" : 3, "grades" : [ 85, 100, 90 ] }
```

#### update
db.collection.updateOne(filter, update, options)
```
> db.students.updateOne({_id: 4, "grades.grade": 85}, {$set: {"grades.$.std": 6}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

表中有以下数据：
{ "_id" : 5, "grades" : 
[ { "grade" : 80, "mean" : 75, "std" : 8 }, 
  { "grade" : 85, "mean" : 90, "std" : 5 }, 
  { "grade" : 90, "mean" : 85, "std" : 3 } 
] }

> db.students.updateOne(
  {_id: 5, grades: {$elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 }}}},
  {$set: {"grades.$.std" : 9}}
  )
```

db.collection.updateMany(filter, update, options)


db.collection.update(query, update, options)
```
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ]
   }
)

> db.students.update({ name: "Andy"},{name: "Andy", rating: 1, score: 1},{ upsert: true})
WriteResult({
  "nMatched" : 0,
  "nUpserted" : 1,
  "nModified" : 0,
  "_id" : ObjectId("5bb3705102b969e8f3764603")
})

> db.books.find()
{ 
  "_id" : 1, 
  "item" : "TBD", 
  "stock" : 0, 
  "info" : { "publisher" : "1111", "pages" : 430 }, 
  "tags" : [ "technology", "computer" ], 
  "ratings" : [ { "by" : "ijk", "rating" : 4 }, { "by" : "lmn", "rating" : 5 } ], 
  "reorder" : false 
}

db.books.update(
   { _id: 1 },
   {
     $inc: { stock: 5 },
     $set: {
       item: "ABC123",
       "info.publisher": "2222",
       tags: [ "software" ],
       "ratings.1": { by: "xyz", rating: 3 }
     }
   }
)
The updated document is the following:
{
  "_id" : 1,
  "item" : "ABC123",
  "stock" : 5,
  "info" : { "publisher" : "2222", "pages" : 430 },
  "tags" : [ "software" ],
  "ratings" : [ { "by" : "ijk", "rating" : 4 }, { "by" : "xyz", "rating" : 3 } ],
  "reorder" : false
}
```

#### remove 是针对collection中的数据进行操作
db.collection.remove()
```
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)

```

#### drop
db.students.drop() 把整个students 删除


## Operators

### Comparison Query Operators
```
$eq		Matches values that are equal to a specified value.
$gt		Matches values that are greater than a specified value.
$gte	Matches values that are greater than or equal to a specified value.
$in		Matches any of the values specified in an array.
$lt		Matches values that are less than a specified value.
$lte	Matches values that are less than or equal to a specified value.
$ne		Matches all values that are not equal to a specified value.
$nin	Matches none of the values specified in an array.
```

### Logical Query Operators
Name	Description
$and	Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
$not	Inverts the effect of a query expression and returns documents that do not match the query expression.
$nor	Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
$or	Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

```
db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
```
This query will select all documents in the inventory collection where:

the price field value is not equal to 1.99 and
the price field exists.
等同于
```
db.inventory.find( { price: { $ne: 1.99, $exists: true } } )
```

多条件
```
db.inventory.find( {
    $and : [
        { $or : [ { price : 0.99 }, { price : 1.99 } ] },
        { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
    ]
} )
```
This query will select all documents where:

the price field value equals 0.99 or 1.99, and
the sale field value is equal to true or the qty field value is less than 20.
This query cannot be constructed using an implicit AND operation, because it uses the $or operator more than once.

### Evaluation Query Operators
Name	Description
$expr	Allows use of aggregation expressions within the query language.
$jsonSchema	Validate documents against the given JSON Schema.
$mod	Performs a modulo operation on the value of a field and selects documents with a specified result.
$regex	Selects documents where values match a specified regular expression.
$text	Performs text search.
$where	Matches documents that satisfy a JavaScript expression.

### aggregation 集合体 统计
Aggregate constructor used for building aggregation pipelines. Do not instantiate this class directly, use Model.aggregate() instead.


### $project (aggregation)
```
{
  "_id" : 1,
  title: "abc123",
  isbn: "0001122223334",
  author: { last: "zzz", first: "aaa" },
  copies: 5
}
The following $project stage includes only the _id, title, and the author fields in its output documents:

db.books.aggregate( [ { $project : { title : 1 , author : 1 } } ] )

The operation results in the following document:
{ "_id" : 1, "title" : "abc123", "author" : { "last" : "zzz", "first" : "aaa" } }


Suppress _id Field in the Output Documents
db.books.aggregate( [ { $project : { _id: 0, title : 1 , author : 1 } } ] )

The operation results in the following document:
{ "title" : "abc123", "author" : { "last" : "zzz", "first" : "aaa" } }
```

### $match (aggregation)¶
```
{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80, "views" : 100 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85, "views" : 521 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b257"), "author" : "ahn", "score" : 60, "views" : 1000 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b258"), "author" : "li", "score" : 55, "views" : 5000 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b259"), "author" : "annT", "score" : 60, "views" : 50 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25a"), "author" : "li", "score" : 94, "views" : 999 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25b"), "author" : "ty", "score" : 95, "views" : 1000 }

db.articles.aggregate(
    [ { $match : { author : "dave" } } ]
);

The $match selects the documents where the author field equals dave, and the aggregation returns the following:

{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80, "views" : 100 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85, "views" : 521 }

The following example selects documents to process using the $match pipeline operator and then pipes the results to the $group pipeline operator to compute a count of the documents:

db.articles.aggregate( [
  { $match: { $or: [ { score: { $gt: 70, $lt: 90 } }, { views: { $gte: 1000 } } ] } },
  { $group: { _id: null, count: { $sum: 1 } } }
] );

{ "_id" : null, "count" : 5 }
```

### $group (aggregation)¶
```
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-03-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-03-01T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-03-15T09:00:00Z") }
{ "_id" : 4, "item" : "xyz", "price" : 5, "quantity" : 20, "date" : ISODate("2014-04-04T11:21:39.736Z") }
{ "_id" : 5, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-04-04T21:23:13.331Z") }

Group by Month, Day, and Year

db.sales.aggregate(
   [
      {
        $group : {
           _id : { month: { $month: "$date" }, day: { $dayOfMonth: "$date" }, year: { $year: "$date" } },
           totalPrice: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           averageQuantity: { $avg: "$quantity" },
           count: { $sum: 1 }
        }
      }
   ]
)

{ "_id" : { "month" : 3, "day" : 15, "year" : 2014 }, "totalPrice" : 50, "averageQuantity" : 10, "count" : 1 }
{ "_id" : { "month" : 4, "day" : 4, "year" : 2014 }, "totalPrice" : 200, "averageQuantity" : 15, "count" : 2 }
{ "_id" : { "month" : 3, "day" : 1, "year" : 2014 }, "totalPrice" : 40, "averageQuantity" : 1.5, "count" : 2 }
```

## Update
```
db.getCollection.get('batches').update({ batch_type: { $exist: false }}, { $set: { batch_type: 2 }})
```
### Field Update Operators
Name	Description
$currentDate	Sets the value of a field to current date, either as a Date or a Timestamp.
$inc	Increments the value of the field by the specified amount.
$min	Only updates the field if the specified value is less than the existing field value.
$max	Only updates the field if the specified value is greater than the existing field value.
$mul	Multiplies the value of the field by the specified amount.
$rename	Renames a field.
$set	Sets the value of a field in a document.
$setOnInsert	Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
$unset	Removes the specified field from a document.

#### $inc
The $inc operator accepts positive and negative values.

Consider a collection products with the following document:

```
{
  _id: 1,
  sku: "abc123",
  quantity: 10,
  metrics: {
    orders: 2,
    ratings: 3.5
  }
}
```
The following update() operation uses the $inc operator to decrease the quantity field by 2 (i.e. increase by -2) and increase the "metrics.orders" field by 1:

```
db.products.update(
   { sku: "abc123" },
   { $inc: { quantity: -2, "metrics.orders": 1 } }
)
```
=>
```
{
   "_id" : 1,
   "sku" : "abc123",
   "quantity" : 8,
   "metrics" : {
      "orders" : 3,
      "ratings" : 3.5
   }
}
```

#### $min
Use $min to Compare Dates
```
{
  _id: 1,
  desc: "crafts",
  dateEntered: ISODate("2013-10-01T05:00:00Z"),
  dateExpired: ISODate("2013-10-01T16:38:16Z")
}
```
The following operation compares the current value of the dateEntered field, i.e. ISODate("2013-10-01T05:00:00Z"), with the specified date new Date("2013-09-25") to determine whether to update the field:
```
db.tags.update(
   { _id: 1 },
   { $min: { dateEntered: new Date("2013-09-25") } }
)
```
The operation updates the dateEntered field:
```
{
  _id: 1,
  desc: "crafts",
  dateEntered: ISODate("2013-09-25T00:00:00Z"),
  dateExpired: ISODate("2013-10-01T16:38:16Z")
}
```

#### $set
If the field does not exist, $set will add a new field with the specified value, provided that the new field does not violate a type constraint.
```
Given a books collection that includes the following documents:
{
  _id: 5,
  item: "EFG222",
  stock: 18,
  info: { publisher: "0000", pages: 70 },
  reorder: true
}
{
  _id: 6,
  item: "EFG222",
  stock: 15,
  info: { publisher: "1111", pages: 72 },
  reorder: true
}
```
The following operation specifies both the multi option and the upsert option. If matching documents exist, the operation updates all matching documents. If no matching documents exist, the operation inserts a new document.
```
db.books.update(
   { item: "EFG222" },
   { $set: { reorder: false, tags: [ "literature", "translated" ] } },
   { upsert: true, multi: true }
)

The operation updates all matching documents and results in the following:
{
   "_id" : 5,
   "item" : "EFG222",
   "stock" : 18,
   "info" : { "publisher" : "0000", "pages" : 70 },
   "reorder" : false,
   "tags" : [ "literature", "translated" ]
}
{
   "_id" : 6,
   "item" : "EFG222",
   "stock" : 15,
   "info" : { "publisher" : "1111", "pages" : 72 },
   "reorder" : false,
   "tags" : [ "literature", "translated" ]
}
```




