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

## 查询
```
> db.users.find().limit(2)
这样的输出内容被压缩

> db.users.find().limit(2).pretty()
优化输出格式
```
A limit() value of 0 (i.e. .limit(0)) is equivalent to setting no limit. 

## 删除
The following example deletes all documents from the student collection:
```
> db.student.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 7 }
```

