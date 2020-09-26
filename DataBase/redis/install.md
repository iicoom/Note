> Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, HyperLogLogs, Bitmaps. http://redis.io

> Redis命令十分丰富，包括的命令组有Cluster、Connection、Geo、Hashes、HyperLogLog、Keys、Lists、Pub/Sub、Scripting、Server、Sets、Sorted Sets、Strings、Transactions一共14个redis命令组两百多个redis命令，Redis中文命令大全。

[github](https://github.com/NodeRedis/node_redis)

## install
### centOS
https://www.cnblogs.com/qianxiaoruofeng/p/8046570.html
```
[root@localhost ~]# yum install redis
开启：service redis start
关闭：redis-cli  shutdown      --关闭服务
```
## 启动服务
cd 到redis安装目录中 执行 redis-server

### Mac brew安装redis
```
brew install redis

启动
brew services start redis
```
To have launchd start redis now and restart at login:
  brew services start redis
Or, if you don't want/need a background service you can just run:
  redis-server /usr/local/etc/redis.conf

Redis连接时报错：Could not connect to Redis at 127.0.0.1:6379: Connection refused

```
vi /etc/redis.conf

```
找到redis.conf 并修改 daemonize no 为 daemonize yes ，这样就可以默认启动就后台运行
或者
```
➜  redis redis-server --daemonize yes
9233:C 26 Sep 21:56:10.035 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
9233:C 26 Sep 21:56:10.038 # Redis version=4.0.1, bits=64, commit=00000000, modified=0, pid=9233, just started
9233:C 26 Sep 21:56:10.038 # Configuration loaded
```
