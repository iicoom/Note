## Redis 列表(List)
http://redisdoc.com/list/index.html

### LPUSH key value [value …]
http://redisdoc.com/list/lpush.html

可用版本： >= 1.0.0
时间复杂度： O(1)
将一个或多个值 value 插入到列表 key 的表头

如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表头： 比如说，对空列表 mylist 执行命令 LPUSH mylist a b c ，列表的值将是 c b a ，这等同于原子性地执行 LPUSH mylist a 、 LPUSH mylist b 和 LPUSH mylist c 三个命令。

如果 key 不存在，一个空列表会被创建并执行 LPUSH 操作。

当 key 存在但不是列表类型时，返回一个错误。
```
redis> LPUSH mylist a b c
(integer) 3

redis> LRANGE mylist 0 -1
1) "c"
2) "b"
3) "a
```
列表允许重复元素
redis> LPUSH lang golang c# python

### RPUSH key value [value …]
将一个或多个值 value 插入到列表 key 的表尾(最右边)。
如果 key 不存在，一个空列表会被创建并执行 RPUSH 操作。
redis> RPUSH lang1 golang c# python

1) "golang"
2) "c#"
3) "python"

### LPUSHX和RPUSHX 
与上述的区别是 操作的key不存在时不执行任何操作

### LRANGE key start stop
127.0.0.1:6379> lrange lang 0 -1
1) "python"
2) "c#"
3) "golang"

### LPOP和RPOP
分别是从左侧和右侧弹出一个元素

### BRPOP key [key …] timeout
BRPOP 是列表的阻塞式(blocking)弹出原语。

它是 RPOP key 命令的阻塞版本，当给定列表内没有任何元素可供弹出的时候，连接将被 BRPOP 命令阻塞，直到等待超时或发现可弹出元素为止。

假如在指定时间内没有任何元素被弹出，则返回一个 nil 和等待时长。 反之，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key ，第二个元素是被弹出元素的值。
```
redis> LLEN course
(integer) 0

redis> RPUSH course algorithm001
(integer) 1

redis> RPUSH course c++101
(integer) 2

redis> BRPOP course 30
1) "course"             # 被弹出元素所属的列表键
2) "c++101"             # 被弹出的元素
```

### LLEN key
可用版本： >= 1.0.0
时间复杂度： O(1)
返回列表 key 的长度。

如果 key 不存在，则 key 被解释为一个空列表，返回 0 .

如果 key 不是列表类型，返回一个错误。
```
127.0.0.1:6379> llen lang
(integer) 6
```

### LTRIM key start stop
情况 1： 常见情况， start 和 stop 都在列表的索引范围之内
```
redis> LRANGE alpha 0 -1       # alpha 是一个包含 5 个字符串的列表
1) "h"
2) "e"
3) "l"
4) "l"
5) "o"

redis> LTRIM alpha 1 -1        # 删除 alpha 列表索引为 0 的元素
OK

redis> LRANGE alpha 0 -1       # "h" 被删除了
1) "e"
2) "l"
3) "l"
4) "o"
```



