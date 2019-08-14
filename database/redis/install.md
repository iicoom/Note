# install

> Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, HyperLogLogs, Bitmaps. [http://redis.io](http://redis.io)
>
> Redis命令十分丰富，包括的命令组有Cluster、Connection、Geo、Hashes、HyperLogLog、Keys、Lists、Pub/Sub、Scripting、Server、Sets、Sorted Sets、Strings、Transactions一共14个redis命令组两百多个redis命令，Redis中文命令大全。

[github](https://github.com/NodeRedis/node_redis)

## install

### centOS

[https://www.cnblogs.com/qianxiaoruofeng/p/8046570.html](https://www.cnblogs.com/qianxiaoruofeng/p/8046570.html)

```text
[root@localhost ~]# yum install redis
开启：service redis start
关闭：redis-cli  shutdown      --关闭服务
```

## 启动服务

cd 到redis安装目录中 执行 redis-server

### Mac brew安装redis

```text
brew install redis
```

Redis连接时报错：Could not connect to Redis at 127.0.0.1:6379: Connection refused

```text
vi /etc/redis.conf
```

找到redis.conf 并修改 daemonize no 为 daemonize yes ，这样就可以默认启动就后台运行

