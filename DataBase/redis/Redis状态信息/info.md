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


如果以cluster形式存在的可以查看更多信息：
```
127.0.0.1:6379> info
# Server
redis_version:4.0.8
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:31b86b0f9944be9e
redis_mode:standalone
os:Linux 3.10.0-957.10.1.el7.x86_64 x86_64
arch_bits:64
multiplexing_api:epoll
atomicvar_api:atomic-builtin
gcc_version:4.8.5
process_id:3035
run_id:48c301d245235582fb126b7d3183691074f23dcf
tcp_port:6379
uptime_in_seconds:193819
uptime_in_days:2
hz:10
lru_clock:7459411
executable:/usr/local/bin/redis-server
config_file:/etc/redis/redis_6379.conf

# Clients
connected_clients:85
client_longest_output_list:0
client_biggest_input_buf:504
blocked_clients:2

# Memory
used_memory:2636504
used_memory_human:2.51M
used_memory_rss:9261056
used_memory_rss_human:8.83M
used_memory_peak:3724680
used_memory_peak_human:3.55M
used_memory_peak_perc:70.78%
used_memory_overhead:2233850
used_memory_startup:765688
used_memory_dataset:402654
used_memory_dataset_perc:21.52%
total_system_memory:1927315456
total_system_memory_human:1.79G
used_memory_lua:58368
used_memory_lua_human:57.00K
maxmemory:0
maxmemory_human:0B
maxmemory_policy:noeviction
mem_fragmentation_ratio:3.51
mem_allocator:jemalloc-4.0.3
active_defrag_running:0
lazyfree_pending_objects:0

# Persistence
loading:0
rdb_changes_since_last_save:85
rdb_bgsave_in_progress:0
rdb_last_save_time:1584517666
rdb_last_bgsave_status:ok
rdb_last_bgsave_time_sec:0
rdb_current_bgsave_time_sec:-1
rdb_last_cow_size:4706304
aof_enabled:0
aof_rewrite_in_progress:0
aof_rewrite_scheduled:0
aof_last_rewrite_time_sec:-1
aof_current_rewrite_time_sec:-1
aof_last_bgrewrite_status:ok
aof_last_write_status:ok
aof_last_cow_size:0

# Stats
total_connections_received:994
total_commands_processed:852970
instantaneous_ops_per_sec:2
total_net_input_bytes:174557453
total_net_output_bytes:406640275
instantaneous_input_kbps:1.14
instantaneous_output_kbps:0.02
rejected_connections:0
sync_full:0
sync_partial_ok:0
sync_partial_err:0
expired_keys:5623
evicted_keys:0
keyspace_hits:143293
keyspace_misses:168278
pubsub_channels:12
pubsub_patterns:0
latest_fork_usec:393
migrate_cached_sockets:0
slave_expires_tracked_keys:0
active_defrag_hits:0
active_defrag_misses:0
active_defrag_key_hits:0
active_defrag_key_misses:0

# Replication
role:master
connected_slaves:0
master_replid:375844a84fe8a9ba0b01708cb0243b75144d40be
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:0
second_repl_offset:-1
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0

# CPU
used_cpu_sys:130.57
used_cpu_user:91.19
used_cpu_sys_children:2.28
used_cpu_user_children:1.72

# Cluster
cluster_enabled:0

# Keyspace
db0:keys=31,expires=3,avg_ttl=472260
```