https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#stages

> In the db.collection.aggregate method, pipeline stages appear in an array. Documents pass through the stages in sequence.
> All except the $out, $merge, and $geoNear stages can appear multiple times in a pipeline.
>
db.collection.aggregate pipeline stages 以数组的形式传入。Documents按顺序通过每个stage，$out, $merge, and $geoNear只能出现一次。

## $match (aggregation)
Pipeline Optimization： Pipeline优化

Place the $match as early in the aggregation pipeline as possible. Because $match limits the total number of documents in the aggregation pipeline, earlier $match operations minimize the amount of processing down the pipe.

尽早的使用$match来限制pipeline中documents的数量

```
db.articles.aggregate( [
  { $match: { $or: [ { score: { $gt: 70, $lt: 90 } }, { views: { $gte: 1000 } } ] } },
  { $group: { _id: null, count: { $sum: 1 } } }
] );

// 返回
{ "_id" : null, "count" : 5 }
```

## $group (aggregation)
https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group
```
{
  $group:
    {
      _id: <expression>, // Group By Expression
      <field1>: { <accumulator1> : <expression1> },
      ...
    }
 }
```
### Group by null
The following aggregation operation specifies a group _id of null, calculating the total sale amount, average quantity, and count of all documents in the collection.
```
db.sales.aggregate([
  {
    $group : {
       _id : null,
       totalSaleAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
       averageQuantity: { $avg: "$quantity" },
       count: { $sum: 1 }
    }
  }
 ])

// 结果
{
  "_id" : null,
  "totalSaleAmount" : NumberDecimal("452.5"),
  "averageQuantity" : 7.875,
  "count" : 8
}
```

### Group by not null
https://docs.mongodb.com/manual/reference/operator/aggregation/group/#null-example
```
db.books.insertMany([
  { "_id" : 8751, "title" : "The Banquet", "author" : "Dante", "copies" : 2 },
  { "_id" : 8752, "title" : "Divine Comedy", "author" : "Dante", "copies" : 1 },
  { "_id" : 8645, "title" : "Eclogues", "author" : "Dante", "copies" : 2 },
  { "_id" : 7000, "title" : "The Odyssey", "author" : "Homer", "copies" : 10 },
  { "_id" : 7020, "title" : "Iliad", "author" : "Homer", "copies" : 10 }
])

Group title by author
db.books.aggregate([
   { $group : { _id : "$author", books: { $push: "$title" } } }
 ])

{ "_id" : "Homer", "books" : [ "The Odyssey", "Iliad" ] }
{ "_id" : "Dante", "books" : [ "The Banquet", "Divine Comedy", "Eclogues" ] }
```

### Group - $push: "$$ROOT"
```
db.books.aggregate([
   // First Stage
   {
     $group : { _id : "$author", books: { $push: "$$ROOT" } }
   },
   // Second Stage
   {
     $addFields:
       {
         totalCopies : { $sum: "$books.copies" }
       }
   }
 ])
 ```

### Group - Accumulator Operator
- $addToSet
- $sum
- $push
- $avg
- ...

## $addFields (aggregation)
Adds new fields to documents. $addFields outputs documents that contain all existing fields from the input documents and newly added fields.

$addFields stage的输出文档包括了所有原有的fields，还有新增的

Starting in version 4.2, MongoDB adds a new aggregation pipeline stage $set that is an alias for $addFields.

[同样的stage在aggregation中出现多次](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/#pipe._S_addFields)

Adding Fields to an Embedded Document 还可以给嵌套的结构添加filed
```
{ _id: 1, type: "car", specs: { doors: 4, wheels: 4 } }
{ _id: 2, type: "motorcycle", specs: { doors: 0, wheels: 2 } }
{ _id: 3, type: "jet ski" }

db.vehicles.aggregate( [
        {
           $addFields: {
              "specs.fuel_type": "unleaded"
           }
        }
   ] )


{ _id: 1, type: "car",
   specs: { doors: 4, wheels: 4, fuel_type: "unleaded" } }
{ _id: 2, type: "motorcycle",
   specs: { doors: 0, wheels: 2, fuel_type: "unleaded" } }
{ _id: 3, type: "jet ski",
   specs: { fuel_type: "unleaded" } }
```

## $unwind (aggregation)
https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/#pipe._S_unwind
```
db.inventory.insertOne({ "_id" : 1, "item" : "ABC1", sizes: [ "S", "M", "L"] })

db.inventory.aggregate( [ { $unwind : "$sizes" } ] )


{ "_id" : 1, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "L" }


更多流程的操作
db.inventory2.insertMany([
  { "_id" : 1, "item" : "ABC", price: NumberDecimal("80"), "sizes": [ "S", "M", "L"] },
  { "_id" : 2, "item" : "EFG", price: NumberDecimal("120"), "sizes" : [ ] },
  { "_id" : 3, "item" : "IJK", price: NumberDecimal("160"), "sizes": "M" },
  { "_id" : 4, "item" : "LMN" , price: NumberDecimal("10") },
  { "_id" : 5, "item" : "XYZ", price: NumberDecimal("5.75"), "sizes" : null }
])

db.inventory2.aggregate( [
   // First Stage
   {
     $unwind: { path: "$sizes", preserveNullAndEmptyArrays: true }
   },
   // Second Stage
   {
     $group:
       {
         _id: "$sizes",
         averagePrice: { $avg: "$price" }
       }
   },
   // Third Stage
   {
     $sort: { "averagePrice": -1 }
   }
] )

{ "_id" : "M", "averagePrice" : NumberDecimal("120") }
{ "_id" : "L", "averagePrice" : NumberDecimal("80") }
{ "_id" : "S", "averagePrice" : NumberDecimal("80") }
{ "_id" : null, "averagePrice" : NumberDecimal("45.25") }
```

## $count (aggregation)
https://docs.mongodb.com/manual/reference/operator/aggregation/count/#pipe._S_count

```
db.sales.insertMany([
  { "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("2"), "date" : ISODate("2014-03-01T08:00:00Z") },
  { "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : NumberInt("1"), "date" : ISODate("2014-03-01T09:00:00Z") },
  { "_id" : 3, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : NumberInt( "10"), "date" : ISODate("2014-03-15T09:00:00Z") },
  { "_id" : 4, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" :  NumberInt("20") , "date" : ISODate("2014-04-04T11:21:39.736Z") },
  { "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("10") , "date" : ISODate("2014-04-04T21:23:13.331Z") },
  { "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("5" ) , "date" : ISODate("2015-06-04T05:08:13Z") },
  { "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("10") , "date" : ISODate("2015-09-10T08:43:00Z") },
  { "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("5" ) , "date" : ISODate("2016-02-06T20:20:13Z") },
])

db.sales.aggregate( [
  {
    $group: {
       _id: null,
       count: { $sum: 1 }
    }
] )

// => { "_id" : null, "count" : 8 }

db.sales.aggregate( [
  { $group: { _id: null, count: { $sum: 1 } } },
  { $project: { _id: 0 } }                                // $project 可以设置field不返回
] )

// => { "count" : 8 }
```