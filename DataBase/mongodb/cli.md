## 启动数据库
mongodb/bin/mongod
[官网启动server](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)

## CLI
### 链接数据库
mongodb bin/mongo

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
> db.users.find()

#### id查询
```
> db.users.find({"_id" : ObjectId("5a93e047765b59282e21e872")})
{ "_id" : ObjectId("5a93e047765b59282e21e872"), "update_at" : ISODate("2018-02-26T10:24:07.376Z"), "create_at" : ISODate("2018-02-26T10:24:07.376Z"), "username" : "as@qq.com", "password" : "feca52c6f90bdc90f3b1e157acb36975dd1efa3660aaedf01763d3882230cc07", "salt" : "rOqh5Mo7WSQZXVUs7zbfJODW", "modify_mobile" : false, "is_set_pay_password" : false, "is_binding_verify" : false, "is_real_name" : false, "is_activate" : false, "need_upgrade" : false, "verified" : false, "__v" : 0 }
```


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

## robo 3t GUI

1. _id查询
```
#########################################
#############  insert()  ################
#########################################
db.getCollection('accounts').insert({
    "uid" : "5a28d8877d72587761cae36a",
    "balance" : 1000000,
    "income" : 1.0,
    "isRebuild" : true,
    "create_at" : 1429789134274.0,
    "__v" : 0})

#########################################
############   find()  sort() ###########
#########################################
db.getCollection('users').find({ "_id" : ObjectId("54af3b6a48e6cd1c1be333e8") })
db.getCollection('msgs').find({'to_user':'5a28d8877d72587761cae36a', "create_time":{ $gt:1521417600000}})

按create_time降序
*********** 排序 **************************
在MongoDB中使用使用sort()方法对数据进行排序，sort()方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而-1是用于降序排列。

db.getCollection('msgs').find({'to_user':'5a28d8877d72587761cae36a', "create_time":{ $gt:1521417600000}}).sort( { "create_time": -1 } )

db.getCollection('jifens').find({ uid: {'$in': [ '54df318e1c701cc40b708d89', '54df318e1c701cc40b708d89' ]} })


#########################################
#############   remove()  ################
#########################################

db.getCollection('batches').remove({"batch_code" : "030503"})


#########################################
#############   update()  ################
#########################################

db.getCollection('users').update({"mobile":"18231088178"},{$set:{"username":"嘿嘿嘿"}})

更新操作
Then, the following update() operation will set the sale field value to true where the tags field holds an array with at least one element matching either "appliances" or "school".

db.inventory.update(
                     { tags: { $in: ["appliances", "school"] } },
                     { $set: { sale:true } }
                   )


```
2. Oprator

## Query 
### Comparison Query Operators

Name	Description
$eq	Matches values that are equal to a specified value.
$gt	Matches values that are greater than a specified value.
$gte	Matches values that are greater than or equal to a specified value.
$in	Matches any of the values specified in an array.
$lt	Matches values that are less than a specified value.
$lte	Matches values that are less than or equal to a specified value.
$ne	Matches all values that are not equal to a specified value.
$nin	Matches none of the values specified in an array.

#### $in
```
// 6种
const userids = [ 
  '54af3b6a48e6cd1c1be333e8',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '5a1667a32acb47cb135d5b0a',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '54af3b6a48e6cd1c1be333e8',
  '54af3b6a48e6cd1c1be333e8',
  '54df318e1c701cc40b708d89',
  '5a28d8877d72587761cae36a',
  '54af3b6a48e6cd1c1be333e8',
  '54af3b6a48e6cd1c1be333e8',
  '5a1667a32acb47cb135d5b0a',
  '58b91199386bef4f3b7f3ad3',
  '58b91199386bef4f3b7f3ad3',
  '551e45eb6c5ac465b3cf5f0c',
  '5a1667a32acb47cb135d5b0a',
]

qFindUsers({ _id: { $in: userids } });

// 5种 因为数据库中 并没有 58b91199386bef4f3b7f3ad3的用户信息
[ { _id: 54af3b6a48e6cd1c1be333e8,
    nickname: '6112',
    mobile: '13930196112',
    role_type: 3,
    __v: 2,
    is_bindwx: true,
    companies: [] },
  { _id: 54df318e1c701cc40b708d89,
    mobile: '13522689508',
    role_type: 3,
    is_activate: true,
    need_upgrade: true,
    create_time: 1423913358000 },
  { _id: 551e45eb6c5ac465b3cf5f0c,
    username: '云联牧场',
    role_type: 3,
    create_time: 1429789134092,
    companies: [] },
  { _id: 5a1667a32acb47cb135d5b0a,
    mobile: '13717579101',
    role_type: 3,
    __v: 0,
    is_set_pay_password: true,
    is_binding_verify: true,
    is_real_name: true,
    is_activate: true,
    need_upgrade: false,
    create_time: 1511417763916,
    companies: [] },
  { _id: 5a28d8877d72587761cae36a,
    mobile: '18231088178',
    role_type: 3,
    __v: 0,
    is_activate: true,
    need_upgrade: false,
    create_time: 1512626311900,
    companies: [] } ]

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



### aggregation 集合体
Aggregate constructor used for building aggregation pipelines. Do not instantiate this class directly, use Model.aggregate() instead.

```
q.nfcall(sheepService.aggregate,
	[
		{
			$match:{ batch_id:batchId, user_id:{ $ne:config.yunfarm_uid} }
		},
		{
			$group:{ _id:"$user_id", sheepIds:{ $addToSet:"$_id" } }
		}
	]
)


sheepService.aggregate,[{$match:{user_id:userId,batch_id:{$nin:idArrys},is_presenting:false}},{$group:{_id:"$batch_id",sheepNum:{$sum:1},sheepStatus:{$addToSet:"$sheep_status"}}}])

Sheep.aggregate([
  {
    $match:{
      user_id: userId,
      batch_id: { $nin:idArrys },
      is_presenting: false
    }
  },
  {
    $group:{
      _id: "$batch_id",
      sheepNum: {$sum:1},
      sheepStatus:{$addToSet:"$sheep_status"}
    }
  }
]);
```

## Update
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


