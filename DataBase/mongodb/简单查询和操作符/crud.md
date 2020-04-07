### show dbs
```
> show dbs
Express-api  0.000GB
admin        0.000GB
comments     0.000GB
koa-test     0.000GB
local        0.000GB
nodedb       0.000GB
```

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
不需要提前创建students表，可以直接运行插入数据
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
