## aggregate $match $sort
```sql
db.admin.aggregate([
    {$match: {deparment: { $in: [1, 2]}}, serviceStatus: 'online'},
    {$sort: {autoAssignCount: 1, abilityValue: -1}},
    {$first: autoAssignCount}
])
```
获取被分配线索的候选人（被分配线索最少，能力值最高的-实现轮询分配）


```
> db.sales.find()
{ "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 2, "date" : ISODate("2014-03-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : 1, "date" : ISODate("2014-03-01T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : 10, "date" : ISODate("2014-03-15T09:00:00Z") }
{ "_id" : 4, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : 20, "date" : ISODate("2014-04-04T11:21:39.736Z") }
{ "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 10, "date" : ISODate("2014-04-04T21:23:13.331Z") }
{ "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 5, "date" : ISODate("2015-06-04T05:08:13Z") }
{ "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 10, "date" : ISODate("2015-09-10T08:43:00Z") }
{ "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 5, "date" : ISODate("2016-02-06T20:20:13Z") }



db.sales.aggregate([
    {$match: {price: {$gt: 5}}},
    {$sort: {quantity: -1}}
])
=>
{ "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 10, "date" : ISODate("2014-04-04T21:23:13.331Z") }
{ "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 10, "date" : ISODate("2015-09-10T08:43:00Z") }
{ "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 5, "date" : ISODate("2015-06-04T05:08:13Z") }
{ "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 5, "date" : ISODate("2016-02-06T20:20:13Z") }
{ "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 2, "date" : ISODate("2014-03-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : 1, "date" : ISODate("2014-03-01T09:00:00Z") }


db.sales.aggregate([
    {$match: {price: {$gt: 5}}},
    {$sort: {quantity: -1, price: 1}}
])
=>
{ "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 10, "date" : ISODate("2015-09-10T08:43:00Z") }
{ "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 10, "date" : ISODate("2014-04-04T21:23:13.331Z") }
{ "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 5, "date" : ISODate("2015-06-04T05:08:13Z") }
{ "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 5, "date" : ISODate("2016-02-06T20:20:13Z") }
{ "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 2, "date" : ISODate("2014-03-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : 1, "date" : ISODate("2014-03-01T09:00:00Z") }


// 返回必要字段
db.sales.aggregate([
    {$match: {price: {$gt: 5}}},
    {$sort: {quantity: -1, price: 1}},
    {$project: {item: 1, price: 1, quantity: 1}}
])
=>
{ "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 10 }
{ "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 10 }
{ "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity" : 5 }
{ "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 5 }
{ "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : 2 }
{ "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : 1 }
```
