https://juejin.im/post/5e520c0b6fb9a07ca5303bf5

## Redis value 类型
常用的5种：String字符串,List列表,Hash哈希,Set集合,Zset有序集合
后续增加的类型：Bitmaps,HyperLogLogs,GEO

Redis底层的数据结构包括：简单动态数组SDS、链表、字典、跳跃链表、整数集合、压缩列表、对象。

Redis为了平衡空间和时间效率，针对value的具体类型在底层会采用不同的数据结构来实现，其中哈希表和压缩列表是复用比较多的数据结构，如下图展示了对外数据类型和底层数据结构之间的映射关系：
![映射图](https://user-gold-cdn.xitu.io/2020/2/23/1707082b627445d4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### lpush & brpop
```js
return this._client.lpush(queueName, sqlStringData);

return this._client.brpop(queueName, timeout);
```

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
