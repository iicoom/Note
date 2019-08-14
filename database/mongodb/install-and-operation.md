# install&operation

## Install MongoDB Community Edition on Ubuntu

[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

Using .deb Packages \(Recommended\) 1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

1. echo "deb \[ arch=amd64 \] [https://repo.mongodb.org/apt/ubuntu](https://repo.mongodb.org/apt/ubuntu) bionic/mongodb-org/4.0 multiverse" \| sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
2. sudo apt-get update
3. sudo apt-get install -y mongodb-org

## Install MongoDB Community Edition on CentOS

[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

Configure the package management system \(yum\). Create a /etc/yum.repos.d/mongodb-org-4.0.repo file so that you can install MongoDB directly using yum: 创建repo文件 vim /etc/yum.repos.d/mongodb-org-4.0.repo 把下面的内容放进来

```text
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

然后：
sudo yum install -y mongodb-org
```

## Install MongoDB on Mac OS

```text
brew install mongodb

sudo service mongod start

然后使用 链接至数据库
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

## Run MongoDB Community Edition

> The MongoDB instance stores its data files in /var/lib/mongodb and its log files in /var/log/mongodb by default, and runs using the mongodb user account. You can specify alternate log and data file directories in /etc/mongod.conf.

1. Start MongoDB.

   ```text
   sudo service mongod start
   ```

2. Verify that MongoDB has started successfully Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading
3. Stop MongoDB.

   ```text
   sudo service mongod stop
   ```

4. Restart MongoDB.¶

   ```text
   sudo service mongod restart
   ```

5. Begin using MongoDB. Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address \(in this case 127.0.0.1\) and port that the mongod listens on:

   ```text
   mongo --host 127.0.0.1:27017
   ```

   Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.

## centos 服务器mongodb远程连接被拒绝

各种百度，远程连接mongodb失败，网上资料显示原因有两个： 提高安全性：[https://blog.csdn.net/qq\_34964399/article/details/80260782](https://blog.csdn.net/qq_34964399/article/details/80260782) 修改配置文件： /etc/mongod.conf 1、mongodb的配置文件中的bind\_ip 默认为127.0.0.1，默认只有本机可以连接。 此时，需要将bind\_ip配置为0.0.0.0，表示接受任何IP的连接。

2、防火墙阻止了27017端口。

于是，先修改mongodb配置文件，并重启mongod服务。

* Start MongoDB

  ```text
  sudo service mongod start
  ```

* Stop MongoDB

  ```text
  sudo service mongod stop
  ```

* Restart MongoDB

  ```text
  sudo service mongod restart
  ```

* Begin using MongoDB. Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address \(in this case 127.0.0.1\) and port that the mongod listens on:

  ```text
  mongo --host 127.0.0.1:27017
  ```

## Uninstall MongoDB Community Edition

## 自定义mongodb 的配置

➜ ~ mkdir mongodb\_simple ➜ ~ ls '' Documents examples.desktop Music Public Software Videos Desktop Downloads mongodb\_simple Pictures snap Templates Work ➜ ~ cd mongodb\_simple ➜ mongodb\_simple mkdir data ➜ mongodb\_simple mkdir log ➜ mongodb\_simple mkdir conf ➜ mongodb\_simple mkdir bin ➜ mongodb\_simple ls bin conf data log

➜ / which mongod /usr/bin/mongod

➜ mongodb\_simple cp /usr/bin/mongod bin/ ➜ mongodb\_simple ls bin conf data log ➜ mongodb\_simple ls bin mongod ➜ mongodb\_simple ➜ mongodb\_simple cd conf ➜ conf vim mongod.conf

```text
port = 12345
dbpath = data
logpath = log/mongod.log
fork = true
```

用配置文件启动 ➜ mongodb\_simple ./bin/mongod -f conf/mongod.conf 2018-09-28T22:20:17.902+0800 I CONTROL \[main\] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none' about to fork child process, waiting until server is ready for connections. forked process: 4719 child process started successfully, parent exiting ➜ mongodb\_simple ls log mongod.log ➜ mongodb\_simple tail -f log/mongod.log

连接数据库 ➜ mongodb\_simple cp /usr/bin/mongo bin/ ➜ mongodb\_simple ./bin/mongo 127.0.0.1:12345/test MongoDB shell version v4.0.2 connecting to: mongodb://127.0.0.1:12345/test MongoDB server version: 4.0.2 Server has startup warnings:

&gt;

停止数据库服务

> db.shutdownServer\(\) shutdown command only works with the admin database; try 'use admin' use admin switched to db admin db.shutdownServer\(\) server should be down... 2018-09-28T22:34:19.400+0800 I NETWORK \[js\] trying reconnect to 127.0.0.1:12345 failed 2018-09-28T22:34:19.400+0800 I NETWORK \[js\] reconnect 127.0.0.1:12345 failed failed ^C bye

## 基本操作

```text
> show dbs;
admin   0.000GB
config  0.000GB
local   0.000GB
> use imooc           会自动创建数据库
switched to db imooc
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db.imooc_collection.insert({name: "Jack", age: "18"})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
config  0.000GB
imooc   0.000GB
local   0.000GB
> show collections
imooc_collection
> db.imooc_collection.find()
{ "_id" : ObjectId("5baf900c2537acf61972babc"), "name" : "Jack", "age" : "18" }
>
> db.imooc_collection.count()
1

插入/查询
> db.imooc_collection.insert({name: "Tom", age: "19"})
WriteResult({ "nInserted" : 1 })
> db.imooc_collection.insert({name: "Herry", age: "20"})
WriteResult({ "nInserted" : 1 })
> db.imooc_collection.insert({name: "Dick", age: "21"})
WriteResult({ "nInserted" : 1 })
> db.imooc_collection.find()
{ "_id" : ObjectId("5baf900c2537acf61972babc"), "name" : "Jack", "age" : "18" }
{ "_id" : ObjectId("5baf91672537acf61972babd"), "name" : "Tom", "age" : "19" }
{ "_id" : ObjectId("5baf917a2537acf61972babe"), "name" : "Herry", "age" : "20" }
{ "_id" : ObjectId("5baf91872537acf61972babf"), "name" : "Dick", "age" : "21" }

> db.imooc_collection.find().skip(1).limit(2).sort({age: 1})
{ "_id" : ObjectId("5baf91672537acf61972babd"), "name" : "Tom", "age" : "19" }
{ "_id" : ObjectId("5baf917a2537acf61972babe"), "name" : "Herry", "age" : "20" }

> db.imooc_collection.find().skip(1).limit(2).sort({age: -1})
{ "_id" : ObjectId("5baf917a2537acf61972babe"), "name" : "Herry", "age" : "20" }
{ "_id" : ObjectId("5baf91672537acf61972babd"), "name" : "Tom", "age" : "19" }
>

更新
> db.imooc_collection.update({name: "Jack"},{$set: {age: 100, sex: "man"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.imooc_collection.find({name: "Jack"})
{ "_id" : ObjectId("5baf900c2537acf61972babc"), "name" : "Jack", "age" : 100, "sex" : "man" }
>
```

