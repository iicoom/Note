## Linux 下MySQL 配置文件有 日志路径配置
```
vi /etc/my.cnf

# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.5/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

# Recommended in standard MySQL setup
#sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

[mysqld]
max_allowed_packet=16M
innodb_file_per_table
innodb_file_format = Barracuda
```

## 一般都在 /var/log 下查找
```js
[doraemon@mxj-s log]$ sudo tail -f mysqld.log 
InnoDB: Restoring possible half-written data pages from the doublewrite
InnoDB: buffer...
200323 19:37:32  InnoDB: Waiting for the background threads to start
200323 19:37:33 InnoDB: 5.5.51 started; log sequence number 672819356
200323 19:37:33 [Note] Server hostname (bind-address): '0.0.0.0'; port: 3306
200323 19:37:33 [Note]   - '0.0.0.0' resolves to '0.0.0.0';
200323 19:37:33 [Note] Server socket created on IP: '0.0.0.0'.
200323 19:37:33 [Note] Event Scheduler: Loaded 0 events
200323 19:37:33 [Note] /usr/sbin/mysqld: ready for connections.
Version: '5.5.51'  socket: '/var/lib/mysql/mysql.sock'  port: 3306  MySQL Community Server (GPL)
```

