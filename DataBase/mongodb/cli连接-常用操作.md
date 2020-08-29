## 本地连接
```
➜  ~ mongo
MongoDB shell version v4.0.4
connecting to: mongodb://127.0.0.1:27017
Implicit session: session { "id" : UUID("65f9c02f-8dcd-4cca-be9b-2ca2ce0901f6") }
MongoDB server version: 4.0.4
Server has startup warnings:
2019-01-07T12:23:45.525+0800 I CONTROL  [initandlisten]
2019-01-07T12:23:45.525+0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2019-01-07T12:23:45.525+0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2019-01-07T12:23:45.525+0800 I CONTROL  [initandlisten]
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

>
```

## 连接数据库（远程）
本地命令行执行
```
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
```

## MongoDB 服务器和客户端分别查询版本号
服务器端：

mongo --version

客户端：

db.version()
<!-- 4.0.13 -->

## 查看数据库和空间占用
```
> show dbs
admin   0.000GB
config  0.000GB
cr3m     0.002GB
fak4ao   1.615GB
local   0.000GB
scho4ol  0.001GB
us2     0.005GB
```

## 查看当前锁用库
```
> db
usniubi
```

## 查询
```
> db.users.find().limit(2)
这样的输出内容被压缩

> db.users.find().limit(2).pretty()
优化输出格式

A limit() value of 0 (i.e. .limit(0)) is equivalent to setting no limit. 

findOne()方法默认做了pretty处理
> db.order.findOne({idNumber: '123'})
{
        "_id" : ObjectId("5f3e4810d895024790371e30"),
        "classDepartmentNo" : 100,
        "classYear" : "2020",
}
```

## 删除
The following example deletes all documents from the student collection:
```
> db.student.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 7 }
```

## [distinct](https://docs.mongodb.com/manual/reference/method/db.collection.distinct/#db.collection.distinct)
```
> db.order.distinct("tradeNo")
[
        "BM2020082017533331103",
        "BM2020082110095779060",
        "BM2020082110461378664",
        "BM2020082116061970038",
        "BM2020082116107464008",
        "BM2020082418362784812"
]


Specify Query with distinct
db.inventory.distinct( "item.sku", { dept: "A" } )
```

## count
```
db.orders.count( { ord_dt: { $gt: new Date('01/01/2012') } } )

The query is equivalent to the following:

db.orders.find( { ord_dt: { $gt: new Date('01/01/2012') } } ).count()
```