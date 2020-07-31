[Query Plans](https://docs.mongodb.com/manual/core/query-plans/#read-operations-query-optimization)

To view the query plan information for a given query, you can use db.collection.explain() or the cursor.explain() .

## 索引构建情况分析
1. mongostat工具介绍
2. profile集合介绍
3. 日志介绍
4. explain分析

```
./bin/mongostat -h 127.0.0.1:12345
应该关心的性能参数 qr|qw 读队列和写队列 数值如果较高 说明性能有问题
如果数据库数据量较大 idx miss 未使用索引的值较高 可能会导致qr较高
➜  bin mongostat -h 127.0.0.1:27017
insert query update delete getmore command dirty used flushes vsize   res qrw arw net_in net_out conn                time
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   160b   43.4k    2 Oct  6 09:52:22.794
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.6k    2 Oct  6 09:52:23.794
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.4k    2 Oct  6 09:52:24.798
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.8k    2 Oct  6 09:52:25.795
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.6k    2 Oct  6 09:52:26.794
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.5k    2 Oct  6 09:52:27.797
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.8k    2 Oct  6 09:52:28.792
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.4k    2 Oct  6 09:52:29.797
    *0    *0     *0     *0       0     2|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   158b   42.8k    2 Oct  6 09:52:30.793
    *0    *0     *0     *0       0     1|0  0.0% 0.0%       0 3.13G 11.0M 0|0 0|0   157b   42.4k    2 Oct  6 09:52:31.797
```

explain
```
> db.location.find({"w": [10, 20]}).explain()
```