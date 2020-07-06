https://docs.mongodb.com/manual/aggregation/

> Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.
> 
> 聚合操作处理数据记录并返回计算结果。聚合操作将来自多个文档的值分组在一起，可以对分组的数据执行各种操作以返回单个结果。
> 
> MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single purpose aggregation methods.
> 
> MongoDB提供了三种执行聚合的方法:聚合管道、map-reduce函数和单一目的聚合方法。


### $match (aggregation)¶ 聚合管道
例1: 订单处理
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



例2: articles collection 处理
```
db.orders.find() // orders collection 有如下数据：

{ 
    "_id" : ObjectId("5f029635af07115b9442f741"), 
    "cust_id" : "A123", 
    "amount" : 500.0, 
    "status" : "A"
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5f029635af07115b9442f742"), 
    "cust_id" : "A123", 
    "amount" : 250.0, 
    "status" : "A"
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5f029635af07115b9442f743"), 
    "cust_id" : "B212", 
    "amount" : 200.0, 
    "status" : "A"
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5f029635af07115b9442f744"), 
    "cust_id" : "A123", 
    "amount" : 300.0, 
    "status" : "A"
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5f029635af07115b9442f745"), 
    "cust_id" : "A123", 
    "amount" : 600.0, 
    "status" : "B"
}

// 匹配出 { status: "A" } 传入到 $group 根据 cust_id 分组 并对各自的 amount 求和 返回字段为 total
db.orders.aggregate([
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])

// 结果如下：
{ 
    "_id" : "B212", 
    "total" : 200.0
}
// ----------------------------------------------
{ 
    "_id" : "A123", 
    "total" : 1050.0
}
```

### Map-Reduce
![oo](https://docs.mongodb.com/manual/_images/map-reduce.bakedsvg.svg)
```
db.orders.mapReduce(
function() { emit(this.cust_id, this.amount)},
function(key, values) { return Array.sum(values)},
{
	query: { status: "A"},
	out: "order_totals"
}
)

// 执行结果
{
	"result" : "order_totals",
	"timeMillis" : 35,
	"counts" : {
		"input" : 4,
		"emit" : 4,
		"reduce" : 1,
		"output" : 2
	},
	"ok" : 1
}
// 并且会在当前库生成一个order_totals 的collection
db.order_totals.find().sort( { _id: 1 } )

{ "_id" : "A123", "value" : 1050 }
{ "_id" : "B212", "value" : 200 }

上边的方法可以用aggregate代替
db.orders.aggregate([
   { $group: { _id: "$cust_id", value: { $sum: "$price" } } },
   { $out: "agg_alternative_1" }
])

{ $out: "agg_alternative_1" } 指定了输出集合的名称

db.agg_alternative_1.find().sort({ _id: 1 })
{ "_id" : "A123", "value" : 0 }
{ "_id" : "B212", "value" : 0 }
```
MongoDB supports map-reduce operations on sharded collections.
[Map-Reduce and Sharded Collections.](https://docs.mongodb.com/manual/core/map-reduce-sharded-collections/)

### Single Purpose Aggregation Operations(获得文档某字段种类)
```
db.orders.distinct("cust_id")

[ "A123", "B212" ]
```