> Diagnostic Commands>serverStatus

[serverStatus](https://docs.mongodb.com/manual/reference/command/serverStatus/index.html)

[Replication](https://docs.mongodb.com/manual/replication/)

## repl

## 云数据库 MongoDB
阿里云数据库复制集查看状态被限制，只能通过 MongoDB管理控制台。
[查看监控信息](https://help.aliyun.com/document_detail/60518.html)


监控项	说明
CPU使用率	cpu_usage：实例的CPU使用率。
内存使用率	mem_usage：实例的内存使用率。
IOPS使用量	IOPS使用量，包括：
data_iops：数据盘IOPS
log_iops：日志盘IOPS
IOPS使用率	iops_usage：实例使用IOPS大小与最大可用IOPS的比值。
磁盘空间使用量	实例使用的磁盘空间，包括：
ins_size：总使用空间
data_size：数据磁盘使用空间
log_size：日志磁盘使用空间
磁盘空间使用率	disk_usage：实例总使用空间与规格最大可使用空间的比值。
opcounters	实例的操作QPS数，包括：
insert操作数
query操作数
delete操作数
update操作数
getmore操作数
command操作数
connections	实例当前连接数
cursors	实例当前使用的cursor数，包括：
total_open：当前cursor打开数量
timed_out：cursor超时数量
network	实例的网络流量，包括：
bytes_in：进口流量
bytes_out：出口流量
num_requests：处理的请求数
globalLock	实例当前等待全局锁的队列长度，包括：
gl_cq_readers：全局读锁的等待队列长度
gl_cq_writers：全局写锁的等待队列长度
gl_cq_total：所有全局锁的等待队列长度
wiredTiger	实例wiredTiger引擎cache层指标，包括：
bytes_read_into_cache：读入cache的数据量大小
bytes_written_from_cache：从cache写的磁盘大小
maximum_bytes_configured：配置最大可用的磁盘大小
主备延时	repl_lag：采集实例主备节点的数据同步延时信息。
WT请求队列	查看当前正在并发（out）的读写请求数以及剩余可用（available）的并发数。包括：
write_concurrent_trans_out：写并发请求数。
read_concurrent_trans_out：读并发请求数。
write_concurrent_trans_available：可用的写并发数。
read_concurrent_trans_available：可用的读并发数。
IO延迟	iocheck_cost：反映当前IO的响应性能。
监控项说明（Serverless实例）
监控项	说明
磁盘空间使用率（单位：%）	sl_disk_usage：当前实例总使用空间与当前规格最大可使用空间的比值。
操作QPS数（单位：个）	实例的操作QPS个数，包括：
insert操作数
query操作数
update操作数
delete操作数
getmore操作数
command操作数
网络流量（单位：B）	实例的网络流量，包括：
sl_bytes_in：进口流量
sl_bytes_out：出口流量
连接数（单位：个）	sl_connections：实例的当前连接数。
每秒访问次数（单位：个）	sl_qps：实例的每秒访问次数。