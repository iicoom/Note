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

### Mac 下连接出现问题
```
➜ redis-cli
Could not connect to Redis at 127.0.0.1:6379: Connection refused
Could not connect to Redis at 127.0.0.1:6379: Connection refused


是因为redis-server没有启动，执行
➜ redis-server
95231:C 14 Mar 20:36:44.886 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
95231:C 14 Mar 20:36:44.886 # Redis version=4.0.1, bits=64, commit=00000000, modified=0, pid=95231, just started
95231:C 14 Mar 20:36:44.886 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
95231:M 14 Mar 20:36:44.888 * Increased maximum number of open files to 10032 (it was originally set to 256).
                _._
           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 4.0.1 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 95231
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           http://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

95231:M 14 Mar 20:36:44.892 # Server initialized
95231:M 14 Mar 20:36:44.892 * Ready to accept connections
```