### $project (aggregation)
1. 基本特性 - **设置field 是否出现在文档最终结果 默认只有_id返回**
```
{
  "_id" : 1,
  title: "abc123",
  isbn: "0001122223334",
  author: { last: "zzz", first: "aaa" },
  copies: 5
}
The following $project stage includes only the _id, title, and the author fields in its output documents:
下面的 $project stage 只会输出被处理文档的title、author

db.books.aggregate( [ { $project : { title : 1 , author : 1 } } ] )

The operation results in the following document:
{ "_id" : 1, "title" : "abc123", "author" : { "last" : "zzz", "first" : "aaa" } }


Suppress _id Field in the Output Documents
还可以抑制_id字段的输出
db.books.aggregate( [ { $project : { _id: 0, title : 1 , author : 1 } } ] )

The operation results in the following document:
{ "title" : "abc123", "author" : { "last" : "zzz", "first" : "aaa" } }
```

2. 案例：计算每个item的平均值 - **在最终文档生成新的field**
[Map-Reduce Examples](https://docs.mongodb.com/manual/tutorial/map-reduce-examples/)
假如有以下collection
```sql
db.orders2.insertMany([
   { _id: 1, cust_id: "Ant O. Knee", ord_date: new Date("2020-03-01"), price: 25, items: [ { sku: "oranges", qty: 5, price: 2.5 }, { sku: "apples", qty: 5, price: 2.5 } ], status: "A" },
   { _id: 2, cust_id: "Ant O. Knee", ord_date: new Date("2020-03-08"), price: 70, items: [ { sku: "oranges", qty: 8, price: 2.5 }, { sku: "chocolates", qty: 5, price: 10 } ], status: "A" },
   { _id: 3, cust_id: "Busby Bee", ord_date: new Date("2020-03-08"), price: 50, items: [ { sku: "oranges", qty: 10, price: 2.5 }, { sku: "pears", qty: 10, price: 2.5 } ], status: "A" },
   { _id: 4, cust_id: "Busby Bee", ord_date: new Date("2020-03-18"), price: 25, items: [ { sku: "oranges", qty: 10, price: 2.5 } ], status: "A" },
   { _id: 5, cust_id: "Busby Bee", ord_date: new Date("2020-03-19"), price: 50, items: [ { sku: "chocolates", qty: 5, price: 10 } ], status: "A"},
   { _id: 6, cust_id: "Cam Elot", ord_date: new Date("2020-03-19"), price: 35, items: [ { sku: "carrots", qty: 10, price: 1.0 }, { sku: "apples", qty: 10, price: 2.5 } ], status: "A" },
   { _id: 7, cust_id: "Cam Elot", ord_date: new Date("2020-03-20"), price: 25, items: [ { sku: "oranges", qty: 10, price: 2.5 } ], status: "A" },
   { _id: 8, cust_id: "Don Quis", ord_date: new Date("2020-03-20"), price: 75, items: [ { sku: "chocolates", qty: 5, price: 10 }, { sku: "apples", qty: 10, price: 2.5 } ], status: "A" },
   { _id: 9, cust_id: "Don Quis", ord_date: new Date("2020-03-20"), price: 55, items: [ { sku: "carrots", qty: 5, price: 1.0 }, { sku: "apples", qty: 10, price: 2.5 }, { sku: "oranges", qty: 10, price: 2.5 } ], status: "A" },
   { _id: 10, cust_id: "Don Quis", ord_date: new Date("2020-03-23"), price: 25, items: [ { sku: "oranges", qty: 10, price: 2.5 } ], status: "A" }
])

// 时间匹配 松解 items
db.orders2.aggregate( [
   { $match: { ord_date: { $gte: new Date("2020-03-01") } } },
   { $unwind: "$items" }
] )

{ "_id" : 1, "cust_id" : "Ant O. Knee", "ord_date" : ISODate("2020-03-01T00:00:00Z"), "price" : 25, "items" : { "sku" : "oranges", "qty" : 5, "price" : 2.5 }, "status" : "A" }
{ "_id" : 1, "cust_id" : "Ant O. Knee", "ord_date" : ISODate("2020-03-01T00:00:00Z"), "price" : 25, "items" : { "sku" : "apples", "qty" : 5, "price" : 2.5 }, "status" : "A" }
{ "_id" : 2, "cust_id" : "Ant O. Knee", "ord_date" : ISODate("2020-03-08T00:00:00Z"), "price" : 70, "items" : { "sku" : "oranges", "qty" : 8, "price" : 2.5 }, "status" : "A" }
{ "_id" : 2, "cust_id" : "Ant O. Knee", "ord_date" : ISODate("2020-03-08T00:00:00Z"), "price" : 70, "items" : { "sku" : "chocolates", "qty" : 5, "price" : 10 }, "status" : "A" }
{ "_id" : 3, "cust_id" : "Busby Bee", "ord_date" : ISODate("2020-03-08T00:00:00Z"), "price" : 50, "items" : { "sku" : "oranges", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 3, "cust_id" : "Busby Bee", "ord_date" : ISODate("2020-03-08T00:00:00Z"), "price" : 50, "items" : { "sku" : "pears", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 4, "cust_id" : "Busby Bee", "ord_date" : ISODate("2020-03-18T00:00:00Z"), "price" : 25, "items" : { "sku" : "oranges", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 5, "cust_id" : "Busby Bee", "ord_date" : ISODate("2020-03-19T00:00:00Z"), "price" : 50, "items" : { "sku" : "chocolates", "qty" : 5, "price" : 10 }, "status" : "A" }
{ "_id" : 6, "cust_id" : "Cam Elot", "ord_date" : ISODate("2020-03-19T00:00:00Z"), "price" : 35, "items" : { "sku" : "carrots", "qty" : 10, "price" : 1 }, "status" : "A" }
{ "_id" : 6, "cust_id" : "Cam Elot", "ord_date" : ISODate("2020-03-19T00:00:00Z"), "price" : 35, "items" : { "sku" : "apples", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 7, "cust_id" : "Cam Elot", "ord_date" : ISODate("2020-03-20T00:00:00Z"), "price" : 25, "items" : { "sku" : "oranges", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 8, "cust_id" : "Don Quis", "ord_date" : ISODate("2020-03-20T00:00:00Z"), "price" : 75, "items" : { "sku" : "chocolates", "qty" : 5, "price" : 10 }, "status" : "A" }
{ "_id" : 8, "cust_id" : "Don Quis", "ord_date" : ISODate("2020-03-20T00:00:00Z"), "price" : 75, "items" : { "sku" : "apples", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 9, "cust_id" : "Don Quis", "ord_date" : ISODate("2020-03-20T00:00:00Z"), "price" : 55, "items" : { "sku" : "carrots", "qty" : 5, "price" : 1 }, "status" : "A" }
{ "_id" : 9, "cust_id" : "Don Quis", "ord_date" : ISODate("2020-03-20T00:00:00Z"), "price" : 55, "items" : { "sku" : "apples", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 9, "cust_id" : "Don Quis", "ord_date" : ISODate("2020-03-20T00:00:00Z"), "price" : 55, "items" : { "sku" : "oranges", "qty" : 10, "price" : 2.5 }, "status" : "A" }
{ "_id" : 10, "cust_id" : "Don Quis", "ord_date" : ISODate("2020-03-23T00:00:00Z"), "price" : 25, "items" : { "sku" : "oranges", "qty" : 10, "price" : 2.5 }, "status" : "A" }

// 加入 $group 按照 "$items.sku" 分组，并且累加 $items.qty，收集订单id 到set集合 orders_ids: { $addToSet: "$_id" }
db.orders2.aggregate( [
   { $match: { ord_date: { $gte: new Date("2020-03-01") } } },
   { $unwind: "$items" },
   { $group: { _id: "$items.sku", qty: { $sum: "$items.qty" }, orders_ids: { $addToSet: "$_id" } }  }
] )

{ "_id" : "oranges", "qty" : 63, "orders_ids" : [ 10, 9, 7, 1, 2, 3, 4 ] }
{ "_id" : "carrots", "qty" : 15, "orders_ids" : [ 9, 6 ] }
{ "_id" : "apples", "qty" : 35, "orders_ids" : [ 8, 9, 6, 1 ] }
{ "_id" : "pears", "qty" : 10, "orders_ids" : [ 3 ] }
{ "_id" : "chocolates", "qty" : 15, "orders_ids" : [ 8, 5, 2 ] }
// 可见订单集合数据经过聚合操作转换为了 商品销售信息汇总

// 接下来就要加入$project
// { $project: { value: { count: { $size: "$orders_ids" }, qty: "$qty", avg: { $divide: [ "$qty", { $size: "$orders_ids" } ] } } } }
// 返回一个新的字段 value: { count } 里边的count计算了订单总数；返回商品总数；返回新的字段 avg 为  "$qty" 除以 订单数 即为 每笔订单平均卖出的数量
db.orders2.aggregate( [
   { $match: { ord_date: { $gte: new Date("2020-03-01") } } },
   { $unwind: "$items" },
   { $group: { _id: "$items.sku", qty: { $sum: "$items.qty" }, orders_ids: { $addToSet: "$_id" } }  },
   { $project: { value: { count: { $size: "$orders_ids" }, qty: "$qty", avg: { $divide: [ "$qty", { $size: "$orders_ids" } ] } } } },
] )

{ "_id" : "oranges", "value" : { "count" : 7, "qty" : 63, "avg" : 9 } }
{ "_id" : "carrots", "value" : { "count" : 2, "qty" : 15, "avg" : 7.5 } }
{ "_id" : "apples", "value" : { "count" : 4, "qty" : 35, "avg" : 8.75 } }
{ "_id" : "pears", "value" : { "count" : 1, "qty" : 10, "avg" : 10 } }
{ "_id" : "chocolates", "value" : { "count" : 3, "qty" : 15, "avg" : 5 } }

// 还可以在最后的stage 加上$out 输出结果到当前库的一个指定集合
db.orders2.aggregate( [
   { $match: { ord_date: { $gte: new Date("2020-03-01") } } },
   { $unwind: "$items" },
   { $group: { _id: "$items.sku", qty: { $sum: "$items.qty" }, orders_ids: { $addToSet: "$_id" } }  },
   { $project: { value: { count: { $size: "$orders_ids" }, qty: "$qty", avg: { $divide: [ "$qty", { $size: "$orders_ids" } ] } } } },
   { $out: "agg_alternative_3" }
] )
```

3. 其他玩法
### $project 
https://docs.mongodb.com/manual/reference/operator/aggregation/project/

假如操作user表的查询
```
_id字段会默认返回，其他字段需要单独指定

db.users.aggregate(
[
 { $project: { username: 1 } },
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
db.users.aggregate(
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

