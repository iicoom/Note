> Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, HyperLogLogs, Bitmaps. http://redis.io

> Redis命令十分丰富，包括的命令组有Cluster、Connection、Geo、Hashes、HyperLogLog、Keys、Lists、Pub/Sub、Scripting、Server、Sets、Sorted Sets、Strings、Transactions一共14个redis命令组两百多个redis命令，Redis中文命令大全。

[github](https://github.com/NodeRedis/node_redis)

## 启动服务
cd 到redis安装目录中 执行 redis-server

## 连接服务器登录
### 无密码连接
如果全局安装的 执行redis-cli
显示下面信息 连接成功
101.201.197.163:6379>

### 有密码验证
redis-cli -h 101.201.194.165 -p 6379

101.201.194.165:6379> auth eGd3cEn38tYCQisafx7PTWwO
OK

## 查看数据库信息
101.201.194.165:6379> info
```
# Server
redis_version:3.2.0
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:a8ede3354183419d
redis_mode:standalone
os:Linux 2.6.32-431.23.3.el6.x86_64 x86_64
arch_bits:64
multiplexing_api:epoll
gcc_version:4.4.7
process_id:1596
run_id:bcb3de8dd85cd502857e7a7c1a988f9665e1f87d
tcp_port:6379
uptime_in_seconds:15893662
uptime_in_days:183
hz:10
lru_clock:5604385
executable:/usr/local/bin/redis-server
config_file:/usr/local/redis32/redis.conf

# Clients
connected_clients:1392
client_longest_output_list:0
client_biggest_input_buf:296
blocked_clients:111

# Memory
used_memory:33698616
used_memory_human:32.14M
used_memory_rss:31633408
used_memory_rss_human:30.17M
used_memory_peak:34186328
used_memory_peak_human:32.60M
total_system_memory:4018876416
total_system_memory_human:3.74G
used_memory_lua:44032
used_memory_lua_human:43.00K
maxmemory:0
maxmemory_human:0B
maxmemory_policy:noeviction
mem_fragmentation_ratio:0.94
mem_allocator:jemalloc-4.0.3
```
可以查看到 config_file:/usr/local/redis32/redis.conf 配置文件的位置

## Redis Select
redis默认有db0~db15之多。
Redis Select 命令用于切换到指定的数据库，数据库索引号 index 用数字值指定，以 0 作为起始索引值。
```
127.0.0.1:6379> select 5
OK
127.0.0.1:6379[5]> keys *
1) "queue:job:1"
2) "queue:jobs:inactive"
3) "queue:job:types"
4) "queue:job:2"
5) "queue:ids"
6) "queue:jobs"
7) "queue:order/line-0:jobs"
8) "queue:jobs:order/line-0:inactive"
```

```
// 消息队列
var queue = kue.createQueue({
    prefix: 'queue',
    redis: {
        db: 5,
        port: rcc.port,
        host: rcc.host,
        auth: rcc.auth_pass
    }
});
```

## redis.conf
[redis密码设置、访问权限控制等安全设置](https://www.cnblogs.com/langtianya/p/5189234.html)

## key 命令

0. TYPE key
127.0.0.1:6379[5]> type queue:job:14
hash

127.0.0.1:6379[5]> type "queue:job:14"
hash
返回key所存储的value的数据结构类型，它可以返回string, list, set, zset 和 hash等不同的类型。

1. keys pattern  拿出数据库中匹配的键的值
如： keys *
=>

2896) "sid:It6jw6BB78gW-SxPlFti3sM4KegYv-QK"
2897) "e45a659da57789ff6da1a2e3d9d758f3"
2898) "sid:4X9_881oAr8SnbmL224SIiFIJ2QzjHn1"
2899) "sid:Ud-HkGtaHEcKZtr_pbmAVrxf0tqDyA1_"
2900) "7f2ba083-a655-4fc2-95cf-4a619a7a63e8"
2901) "task_consume_registerFinish:370024fc96ffeae22fac94e83bb1cc06::1634"
2902) "13522689508_modify_pwd_SMS_201711021434"
2903) "115.34.153.112_signup_SMS_201709261627"
2904) "task_consume_registerFinish:47791965e364175fe8c344747f7c7aea"
2905) "sid:uz50NSXXKgZkPKuA7uQl8ckntYsLI8Bm"

2. get key
```
101.201.197.163:6379> get sid:-_D4KmjM7bd79KpH1ECoMWrViyu6CQ_z
"{\"cookie\":{\"httpOnly\":true,\"path\":\"/\",\"overwrite\":true,\"signed\":true,\"maxage\":86400000},\"user-agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36\"}"


127.0.0.1:6379[5]> type "queue:ids"
string
127.0.0.1:6379[5]> get "queue:ids"
"8"
```

3. HGET key field
返回 key 指定的哈希集中该字段所关联的值
```
127.0.0.1:6379[5]> hget queue:job:14 data
"{\"user_id\":\"uid\",\"batch_id\":\"batch_id\",\"sheep_num\":\"sheep_num\",\"presentInfo\":{}}"
```

4. hgetall key
返回 key 指定的哈希集中所有的字段和值。返回值中，每个字段名的下一个是它的值，所以返回值的长度是哈希集大小的两倍
```
127.0.0.1:6379[5]> hgetall q:job:2
 1) "type"
 2) "order/line-0"
 3) "promote_at"
 4) "1516591572310"
 5) "priority"
 6) "0"
 7) "state"
 8) "failed"
 9) "error"
10) "TTL exceeded"
11) "ttl"
12) "5000"
13) "data"
14) "{\"user_id\":\"uid\",\"batch_id\":\"batch_id\",\"sheep_num\":\"sheep_num\",\"presentInfo\":{}}"
15) "started_at"
16) "1516591584774"
17) "attempts"
18) "3"
19) "created_at"
20) "1516591572310"
21) "failed_at"
22) "1516591589788"
23) "workerId"
24) "kue:MXJdeMacBook-Pro.local:25730:order/line-0:1"
25) "max_attempts"
26) "3"
27) "backoff"
28) "true"
29) "updated_at"
30) "1516591589788"
127.0.0.1:6379[5]>
```

5. 查看key数量及清空key
```
127.0.0.1:6379[5]> dbsize
(integer) 27
127.0.0.1:6379[5]> flushall
OK
127.0.0.1:6379[5]> dbsize
(integer) 0
127.0.0.1:6379[5]>
```

### Set
```
SADD myset "Hello"
(integer) 1

返回集合存储的key的基数 (集合元素的数量).
127.0.0.1:6379[5]> scard q:job:types
(integer) 1

127.0.0.1:6379[5]> smembers q:job:types
1) "order/line-0"
```

### List
1. LLEN key
返回存储在 key 里的list的长度。 如果 key 不存在，那么就被看作是空list，并且返回长度为 0。 当存储在 key 里的值不是一个list的话，会返回error。
```
127.0.0.1:6379[5]> llen queue:order/line-0:jobs
(integer) 21
```

2. LPOP key
移除并且返回 key 对应的 list 的第一个元素。

3. LRANGE key start stop
返回存储在 key 的列表里指定范围内的元素。 start 和 end 偏移量都是基于0的下标，即list的第一个元素下标是0（list的表头），第二个元素下标是1，以此类推。

偏移量也可以是负数，表示偏移量是从list尾部开始计数。 例如， -1 表示列表的最后一个元素，-2 是倒数第二个，以此类推。
```
127.0.0.1:6379[5]> lrange q:job:2:log 0 -1
1) "TTL exceeded"
2) "TTL exceeded"
3) "TTL exceeded"
```

5. LPUSH key value [value ...]
将所有指定的值插入到存于 key 的列表的头部。如果 key 不存在，那么在进行 push 操作前会创建一个空列表。 如果 key 对应的值不是一个 list 的话，那么会返回一个错误。
```
redis> LPUSH mylist "world"
(integer) 1
redis> LPUSH mylist "hello"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "world"
```

### ZRANGE key start stop [WITHSCORES]
Zset:有序的set，在集合的基础上进行延伸有序，其K是sring  V是一个键值对，这个键值对是分数score：V，并默认从小到大排序
```
127.0.0.1:6379[5]> type queue:jobs:order/line-0:inactive
zset

127.0.0.1:6379[5]> zrange queue:jobs:order/line-0:inactive 0 -1
 1) "01|1"
 2) "01|2"
 3) "01|3"
 4) "01|4"
 5) "01|5"
 6) "01|6"
 7) "01|7"
 8) "01|8"
 9) "01|9"
10) "02|10"
11) "02|11"
12) "02|12"
13) "02|13"
14) "02|14"
15) "02|15"
16) "02|16"
17) "02|17"
18) "02|18"
19) "02|19"
20) "02|20"
21) "02|21"
```

[官网-事务处理](http://www.redis.cn/topics/transactions.html)
## 事务处理
> MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。事务可以一次执行多个命令， 并且带有以下两个重要的保证：

事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。

事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。

### MULTI 
标记一个事务块的开始。 随后的指令将在执行EXEC时作为一个原子执行。
返回值

simple-string-reply: 始终为OK

### EXEC
执行事务中所有在排队等待的指令并将链接状态恢复到正常 当使用WATCH 时，只有当被监视的键没有被修改，且允许检查设定机制时，EXEC会被执行
返回值

multi-bulk-reply: 每个元素与原子事务中的指令一一对应 当使用WATCH时，如果被终止，EXEC 则返回一个空的应答集合


## EXPIRE key seconds
[expire][http://www.redis.cn/commands/expire.html]
设置key的过期时间，超过时间后，将会自动删除该key。在Redis的术语中一个key的相关超时是不确定的。

对已经有过期时间的key执行EXPIRE操作，将会更新它的过期时间。有很多应用有这种业务场景，例如记录会话的session。

## TTL key
返回key剩余的过期时间。 这种反射能力允许Redis客户端检查指定key在数据集里面剩余的有效期。

在Redis 2.6和之前版本，如果key不存在或者已过期时返回-1。

从Redis2.8开始，错误返回值的结果有如下改变：

如果key不存在或者已过期，返回 -2
如果key存在并且没有设置过期时间（永久有效），返回 -1 。
另见PTTL命令返回相同的信息，只不过他的时间单位是毫秒（仅适用于Redis 2.6及更高版本）
```
127.0.0.1:6379> TTL 5a571794895754e248000001
(integer) -2

127.0.0.1:6379> TTL 5a571794895754e248000001
(integer) 590
```


