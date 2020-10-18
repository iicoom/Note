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

### SMEMBERS key
```
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SMEMBERS myset
1) "World"
2) "Hello"
redis> 
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
MULTI 命令用于开启一个事务，它总是返回 OK 。 MULTI 执行之后， 客户端可以继续向服务器发送任意多条命令， 这些命令不会立即被执行， 而是被放到一个队列中， 当 EXEC命令被调用时， 所有队列中的命令才会被执行。

另一方面， 通过调用 DISCARD ， 客户端可以清空事务队列， 并放弃执行事务。
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

待处理
## Redis 集群

### keys pattern
127.0.0.1:6379> keys api:cache:lesson*
1) "api:cache:lesson:33"
2) "api:cache:lesson:36"
3) "api:cache:lesson:34"
4) "api:cache:lesson:32"

1. keys pattern  拿出数据库中匹配的键的值
如： keys *
=>

2896) "sid:It6jw6BB78gW-SxPlFti3sM4KegYv-QK"
2897) "e45a659da57789ff6da1a2e3d9d758f3"
2898) "sid:4X9_881oAr8SnbmL224SIiFIJ2QzjHn1"
2899) "sid:Ud-HkGtaHEcKZtr_pbmAVrxf0tqDyA1_"

redis> keys *o*
1) "four"
2) "two"
3) "one"


### 删除单个或多个key
127.0.0.1:6379> del "uid:5a92ba9dfecffa6b1fb8f086"

127.0.0.1:6379> del key1 key2

### 返回0 1 状态含义
127.0.0.1:6379> keys *
1) "yasuo:data:token:5"
2) "fuck"
127.0.0.1:6379> get fuck
"you"
127.0.0.1:6379> del fuck
(integer) 1
127.0.0.1:6379> del fuck
(integer) 0
127.0.0.1:6379>

1表示成功 0表示失败


### 批量删除指定的key
注意先得退出redis-cli

```
redis-cli keys "*" | xargs redis-cli del  
//如果redis-cli没有设置成系统变量，需要指定redis-cli的完整路径  
//如：/opt/redis/redis-cli keys "*" | xargs /opt/redis/redis-cli del  

➜  ~ redis-cli keys "*" | xargs redis-cli DEL
```

如下面查找表名下的show类型的keys 
keys db:table:[a-zA-Z_/d]*:show:* 

keys "$PATTERN" | xargs redis-cli del  

