> In MongoDB, the first basic step is to have a database and collection in place. The database is used to store all of the collections, and the collection in turn is used to store all of the documents. The documents in turn will contain the relevant Field Name and Field values.
> 在MongoDB中，第一个基本步骤是准备一个数据库和集合。数据库用于存储所有集合，而集合又用于存储所有文档。这些文档将依次包含相关的字段名和字段值。

## How to Create Database & Collection in MongoDB
### Creating a database using “use” command
The "use" command is used to create a database in MongoDB. If the database does not exist a new one will be created.
```
use NextJoyDB

switched to db NextJoyDB

这时NextJoyDB中并没有Collection，执行show dbs
RECOVERY   0.000GB
admin      0.000GB
config     0.000GB
koa-test   0.002GB
local      0.000GB
```

### Creating a Collection/Table using insert()
在NextJoyDB中的Employee集合中年插入一条数据
```
db.Employee.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)

show dbs; 显示NextJoyDB
NextJoyDB  0.000GB
RECOVERY   0.000GB
admin      0.000GB
config     0.000GB
koa-test   0.002GB
local      0.000GB
```

## use db
> use koa-test
switched to db koa-test

### show tables
> show tables
accounts
categories
categoryitems
msgtpls
users

#### insert
不需要提前创建students表，可以直接运行插入数据
```
db.users.insert([
  { "name" : "a", "age" : 15, "status": "pending" },
  { "name" : "b", "age" : 18, "status": "pending" },
  { "name" : "c", "age" : 20, "status": "pending" }
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

#### count
Count all Documents that Match a Query¶
```
db.orders.count( { ord_dt: { $gt: new Date('01/01/2012') } } )

The query is equivalent to the following:

db.orders.find( { ord_dt: { $gt: new Date('01/01/2012') } } ).count()
```
IMPORTANT

Avoid using the db.collection.count() method without a query predicate since without the query predicate, the method returns results based on the collection’s metadata, which may result in an approximate count. In particular,

避免使用没有查询条件的count

#### update
db.collection.updateOne(filter, update, options)
```
> db.users.update({age: {$lt: 18}}, {$set: {status: "reject"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })

> db.users.findOne({name: "a"}})
{ 
    "_id" : ObjectId("5efc3ca79a4816c93b72841b"), 
    "name" : "a", 
    "age" : 15.0, 
    "status" : "reject"
}


在students表中插入下面这条较复杂数据：
> db.students.insert({ "_id" : 5, "grades" : [
  { "grade" : 80, "mean" : 75, "std" : 8 }, 
  { "grade" : 85, "mean" : 90, "std" : 5 }, 
  { "grade" : 90, "mean" : 85, "std" : 3 } 
]})

做一个_id=5 的document grades数组元素匹配的和数组元素的更新操作
> db.students.updateOne(
  {_id: 5, grades: {$elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 }}}},
  {$set: {"grades.$.std" : 9}}
  )

结果{ "grade" : 85, "mean" : 90, "std" : 5 }, 被更新为 { "grade" : 85, "mean" : 90, "std" : 9 }, 
```

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

更新图书collection多个字段的复杂情形
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

#### deleteMany 是针对collection中的数据进行操作
db.collection.deleteMany() 需要传入条件 传入{}删除全部文档
```
> db.adminHabits.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 5 }

db.students.deleteOne({_id: 3})
```

#### drop
db.students.drop() 把整个students 删除
