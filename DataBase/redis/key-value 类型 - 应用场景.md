[底层原理](https://juejin.im/post/5e520c0b6fb9a07ca5303bf5)

## Redis value 类型
常用的5种：String字符串,List列表,Hash哈希,Set集合,Zset有序集合
后续增加的类型：Bitmaps,HyperLogLogs,GEO

Redis底层的数据结构包括：简单动态数组SDS、链表、字典、跳跃链表、整数集合、压缩列表、对象。

Redis为了平衡空间和时间效率，针对value的具体类型在底层会采用不同的数据结构来实现，其中哈希表和压缩列表是复用比较多的数据结构，如下图展示了对外数据类型和底层数据结构之间的映射关系：
![映射图](https://user-gold-cdn.xitu.io/2020/2/23/1707082b627445d4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
![映射图](https://user-gold-cdn.xitu.io/2020/2/23/1707082f6c59a697?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### String
字符串类型是redis最基础的数据结构，首先键是字符串类型，而且其他几种结构都是在字符串类型基础上构建的，
所以字符串类型能为其他四种数据结构的学习奠定基础。

使用场景：
```
缓存功能：字符串最经典的使用场景，redis最为缓存层，Mysql作为储存层，绝大部分请求数据都是
         redis中获取，由于redis具有支撑高并发特性，所以缓存通常能起到加速读写和降低 后端压力的作用。
        （redis为何具备支撑高并发的特性，下次文章讲解）。
计数器：许多运用都会使用redis作为计数的基础工具，他可以实现快速计数、查询缓存的功能，
        同时数据可以一步落地到其他的数据源。
        如：视频播放数系统就是使用redis作为视频播放数计数的基础组件。
共享session：出于负载均衡的考虑，分布式服务会将用户信息的访问均衡到不同服务器上，
        用户刷新一次访问可能会需要重新登录，为避免这个问题可以用redis将用户session集中管理，
        在这种模式下只要保证redis的高可用和扩展性的，每次获取用户更新或查询登录信息
        都直接从redis中集中获取。
限速：处于安全考虑，每次进行登录时让用户输入手机验证码，为了短信接口不被频繁访问，
```

### List

列表类型是用来储存多个有序的字符串，列表中的每个字符串成为元素（element）,一个列表最多可以储存
2的32次方-1个元素，在redis中，可以队列表两端插入（push）和弹出（pop），还可以获取指定范围的元素
列表、获取指定索引下表的元素等，列表是一种比较灵活的数据结构，它可以充当栈和队列的角色，
在实际开发中有很多应用场景。
```
优点：
    1.列表的元素是有序的，这就意味着可以通过索引下标获取某个或某个范围内的元素列表。
    2.列表内的元素是可以重复的。
使用场景：
消息队列： redis的lpush+brpop命令组合即可实现阻塞队列，生产者客户端是用lupsh从列表左侧插入元素，
         多个消费者客户端使用brpop命令阻塞时的“抢”列表尾部的元素，多个客户端保证了消费的负载均衡
         和高可用性
```         
使用列表技巧： 
lpush+lpop=Stack(栈) 
lpush+rpop=Queue（队列） 
lpush+ltrim=Capped Collection（有限集合） 
lpush+brpop=Message Queue（消息队列）
```js
return this._client.lpush(queueName, sqlStringData);

return this._client.brpop(queueName, timeout);
```

### Hash
使用场景： 
哈希结构相对于字符串序列化缓存信息更加直观，并且在更新操作上更加便捷。
所以常常用于**用户信息**等管理，但是哈希类型和关系型数据库有所不同，哈希类型是稀疏的，
而关系型数据库是完全结构化的，关系型数据库可以做复杂的关系查询，而redis去模拟关系型复杂查询
开发困难，维护成本高。


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
