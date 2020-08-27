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
```
A limit() value of 0 (i.e. .limit(0)) is equivalent to setting no limit. 

## 删除
The following example deletes all documents from the student collection:
```
> db.student.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 7 }
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

### 更多参数
使用 mongo --help 查看
```
--port arg                          port to connect to
--host arg                          server to connect to

指定连接端口
mongo --port 12345
```

## 修改默认端口
```
vim /etc/mongod.conf

修改
net:
	port: 27017
	bindIp: 0.0.0.0
```

ps -ef | grep mongod
kill process_id

重启MongoDB
```
service mongod start
```

链接测试：
```
本地链接 
mongo --port 28015

远程链接
mongo mongodb://mongodb0.example.com:28015

也可以
mongo --host mongodb0.example.com --port 28015
```

如果仍然无法远程连接，报错
[thread1] Error: couldn't connect to server 45.77.oo8.23x:27220, connection attempt failed :

是应为CentOS7 防火墙拦截了

查看防火墙状态
```
[root@vultr etc]# firewall-cmd --state
running
```

查看已经开放的端口：
```
[root@vultr etc]# firewall-cmd --list-ports
8070/tcp 8070/udp 3306/tcp
```

端口放行
```
firewall-cmd --zone=public --add-port=80/tcp --permanent

命令含义：

–zone #作用域

–add-port=80/tcp #添加端口，格式为：端口/通讯协议

–permanent #永久生效，没有此参数重启后失效

```

重启防火墙
```
firewall-cmd --reload #重启firewall
systemctl stop firewalld.service #停止firewall
systemctl disable firewalld.service #禁止firewall开机启动
```

## 增加链接验证 MongoDB Instance with Authentication
//指定用户名和密码连接到指定的MongoDB数据库test
mongo 192.168.1.200:27017/test -u user -p password

[使用用户管理员帐户连接和授权](https://www.jianshu.com/p/27fffcd68afe)
➜  ~ mongo 47.92.153.154:90100/Ranch -u Ranch -p yunfarm_000 --authenticationDatabase "admin"
MongoDB shell version v3.4.6
connecting to: mongodb://47.94.154.154:9011/Ranch
MongoDB server version: 2.6.5
WARNING: shell and server versions do not match
