## 启动服务
cd 到redis安装目录中 执行 redis-server

## 连接服务器
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

## redis.conf


## key 命令
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
```

## node-redis
[github](https://github.com/NodeRedis/node_redis)


