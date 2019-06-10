## Aggregation
https://docs.mongodb.com/manual/aggregation/

### $project 
https://docs.mongodb.com/manual/reference/operator/aggregation/project/

假如操作user表的查询
```
_id字段会默认返回，其他字段需要单独指定

db.users.aggregate(
[
 { $project: { username:1 } },
]
)
执行结果
{ 
    "_id" : ObjectId("5c7e19f5a114086fa5490a2d"), 
    "username" : "123@qq.com"
}
{ 
    "_id" : ObjectId("5c7e58fa7a322e0694f4ce48"), 
    "username" : "1234@qq.com"
}
{ 
    "_id" : ObjectId("5c7f72577a322e0694f4ce49"), 
    "username" : "119192571@qq.com"
}

重命名返回字段
b.users.aggregate(
[
 { $project: { day: {$substr: ["$create_at", 0, 10]} } },
]
)

执行结果：提取源文档的指定字段，并且可以重命名字段
{ 
    "_id" : ObjectId("5c7e19f5a114086fa5490a2d"), 
    "day" : "2019-03-05"
}
{ 
    "_id" : ObjectId("5c7e58fa7a322e0694f4ce48"), 
    "day" : "2019-03-05"
}
{ 
    "_id" : ObjectId("5c7f72577a322e0694f4ce49"), 
    "day" : "2019-03-06"
}



db.users.aggregate(
[
 { $project: { day: {$substr: ["$create_at", 0, 10]} } },
 { $group: { _id: "$day", y: {$sum: 1} } },
 { $addFields: { x: "$_id" } },
 { $sort: { _id: -1 }}
]
)
通过$addFields 可以添加新的自定义字段
{ 
    "_id" : "2019-04-17", 
    "y" : 1.0, 
    "x" : "2019-04-17"
}
{ 
    "_id" : "2019-03-25", 
    "y" : 1.0, 
    "x" : "2019-03-25"
}
{ 
    "_id" : "2019-03-08", 
    "y" : 1.0, 
    "x" : "2019-03-08"
}

甚至可以修改字段数据
db.users.aggregate([
  { $project: { month: { $month: "$create_at" } } },
  { $group: { _id: "$month", y: {$sum: 1} } },
  { $addFields: { x: {$concat: [{$toString:"$_id"},"月"]} } },
  { $sort: { _id: 1 }}
])

{ 
    "_id" : NumberInt(3), 
    "y" : 5.0, 
    "x" : "3月"
}
{ 
    "_id" : NumberInt(4), 
    "y" : 1.0, 
    "x" : "4月"
}

```

### $group
[$group](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/index.html)
Use in $group Stage
Consider a sales collection with the following documents:
```
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }
```

Grouping the documents by the day and the year of the date field, the following operation uses the $sum accumulator to compute the total amount and the count for each group of documents.

```
db.sales.aggregate(
   [
     {
       $group:
         {
           _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
           totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           count: { $sum: 1 }
         }
     }
   ]
)
```
The operation returns the following results:
```
{ "_id" : { "day" : 46, "year" : 2014 }, "totalAmount" : 150, "count" : 2 }
{ "_id" : { "day" : 34, "year" : 2014 }, "totalAmount" : 45, "count" : 2 }
{ "_id" : { "day" : 1, "year" : 2014 }, "totalAmount" : 20, "count" : 1 }
```

### $project $group 使用特点

visitdata 集合中有以下文档

```
{ 
    "_id" : ObjectId("5cfdc67f21ff5db6df01c85e"), 
    "date" : "2019-06-10", 
    "__v" : NumberInt(0), 
    "create_at" : ISODate("2019-06-10T02:54:55.428+0000"), 
    "update_at" : ISODate("2019-06-10T02:59:57.421+0000"), 
    "visit_number" : NumberInt(5)
}
{ 
    "_id" : ObjectId("5cfdd38ab0833d016dec5630"), 
    "date" : "2019-06-09", 
    "visit_number" : NumberInt(10), 
    "create_at" : ISODate("2019-06-09T03:50:55.610+0000")
}
{ 
    "_id" : ObjectId("5cfde570b0833d016dec5631"), 
    "date" : "2019-06-08", 
    "create_at" : ISODate("2019-06-08T02:54:55.428+0000"), 
    "visit_number" : NumberInt(15)
}
// Newly added document
{ 
    "date" : "2019-06-07", 
    "create_at" : ISODate("2019-06-07T02:54:55.428+0000"), 
    "visit_number" : NumberInt(17), 
    "_id" : ObjectId("5cfde59db0833d016dec5632")
}
```

想重命名返回字段
```
db.visitdatas.aggregate(
[
 { $project: { visit_number: 1, date: 1, x: "$date", y: "$visit_number" } },
]
)
```
结果
```
{ 
    "_id" : ObjectId("5cfdc67f21ff5db6df01c85e"), 
    "date" : "2019-06-10", 
    "visit_number" : NumberInt(5), 
    "x" : "2019-06-10", 
    "y" : NumberInt(5)
}
{ 
    "_id" : ObjectId("5cfdd38ab0833d016dec5630"), 
    "date" : "2019-06-09", 
    "visit_number" : NumberInt(10), 
    "x" : "2019-06-09", 
    "y" : NumberInt(10)
}
{ 
    "_id" : ObjectId("5cfde570b0833d016dec5631"), 
    "date" : "2019-06-08", 
    "visit_number" : NumberInt(15), 
    "x" : "2019-06-08", 
    "y" : NumberInt(15)
}
{ 
    "_id" : ObjectId("5cfde59db0833d016dec5632"), 
    "date" : "2019-06-07", 
    "visit_number" : NumberInt(17), 
    "x" : "2019-06-07", 
    "y" : NumberInt(17)
}
```

想累加visit_number字段
```
db.visitdatas.aggregate(
   [
     {
       $group: { _id: null, total: { $sum: "$visit_number" } }
     }
   ]
)

```
运行结果
```
{ 
    "_id" : null, 
    "total" : NumberInt(47)
}
```






