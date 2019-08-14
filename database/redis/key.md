# key

## keys pattern

127.0.0.1:6379&gt; keys api:cache:lesson\* 1\) "api:cache:lesson:33" 2\) "api:cache:lesson:36" 3\) "api:cache:lesson:34" 4\) "api:cache:lesson:32"

1. keys pattern  拿出数据库中匹配的键的值

   如： keys \*

   =&gt;

2896\) "sid:It6jw6BB78gW-SxPlFti3sM4KegYv-QK" 2897\) "e45a659da57789ff6da1a2e3d9d758f3" 2898\) "sid:4X9_881oAr8SnbmL224SIiFIJ2QzjHn1" 2899\) "sid:Ud-HkGtaHEcKZtr\_pbmAVrxf0tqDyA1_"

redis&gt; keys _o_ 1\) "four" 2\) "two" 3\) "one"

## 删除单个或多个key

127.0.0.1:6379&gt; del "uid:5a92ba9dfecffa6b1fb8f086"

127.0.0.1:6379&gt; del key1 key2

## 返回0 1 状态含义

127.0.0.1:6379&gt; keys \* 1\) "yasuo:data:token:5" 2\) "fuck" 127.0.0.1:6379&gt; get fuck "you" 127.0.0.1:6379&gt; del fuck \(integer\) 1 127.0.0.1:6379&gt; del fuck \(integer\) 0 127.0.0.1:6379&gt;

1表示成功 0表示失败

## 批量删除指定的key

注意先得退出redis-cli

```text
redis-cli keys "*" | xargs redis-cli del  
//如果redis-cli没有设置成系统变量，需要指定redis-cli的完整路径  
//如：/opt/redis/redis-cli keys "*" | xargs /opt/redis/redis-cli del  

➜  ~ redis-cli keys "*" | xargs redis-cli DEL
```

如下面查找表名下的show类型的keys keys db:table:\[a-zA-Z\_/d\]_:show:_

keys "$PATTERN" \| xargs redis-cli del

