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

## 连接异常处理
### centos 服务器mongodb远程连接被拒绝
各种百度，远程连接mongodb失败，网上资料显示原因有两个：
提高安全性：https://blog.csdn.net/qq_34964399/article/details/80260782
修改配置文件：
/etc/mongod.conf
1、mongodb的配置文件中的bind_ip 默认为127.0.0.1，默认只有本机可以连接。  此时，需要将bind_ip配置为0.0.0.0，表示接受任何IP的连接。

2、防火墙阻止了27017端口。

于是，先修改mongodb配置文件，并重启mongod服务。

* Start MongoDB
```
sudo service mongod start
```

* Stop MongoDB
```
sudo service mongod stop
```

* Restart MongoDB
```
sudo service mongod restart
```

* Begin using MongoDB.
Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address (in this case 127.0.0.1) and port that the mongod listens on:
```
mongo --host 127.0.0.1:27017
```