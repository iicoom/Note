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
insert
db.getCollection('accounts').insert({
    "uid" : "5a28d8877d72587761cae36a",
    "balance" : 1000000,
    "income" : 1.0,
    "isRebuild" : true,
    "create_at" : 1429789134274.0,
    "__v" : 0})

find
db.getCollection('users').find({ "_id" : ObjectId("54af3b6a48e6cd1c1be333e8") })

remove
db.getCollection('batches').remove({"batch_code" : "030503"})

update
db.getCollection('users').update({"mobile":"18231088178"},{$set:{"username":"嘿嘿嘿"}})

```
2. Oprator
```
db.getCollection('jifens').find({ uid: {'$in': [ '54df318e1c701cc40b708d89', '54df318e1c701cc40b708d89' ]} })
```

