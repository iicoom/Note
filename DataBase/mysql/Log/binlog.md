几种记录MySQL操作的几种日志：

* 错误日志     log-error

* 查询日志     log

* 二进制日志    log-bin
MySQL的二进制日志可以说是MySQL最重要的日志了，它记录了所有的DDL和DML(除了数据查询语句)语句，以事件形式记录，还包含语句所执行的消耗的时间，MySQL的二进制日志是事务安全型的。
https://www.cnblogs.com/martinzhang/p/3454358.html

* 慢日志       log-slow-queries  


> 如何查看mysql数据库操作记录日志?

1. 首先确认你日志是否启用了

mysql> show variables like 'log_bin';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| log_bin       | ON    |
+---------------+-------+
1 row in set (0.18 sec)


2. 如果启用了，即ON，那日志文件就在mysql的安装目录的data目录下


3. 查看日志

mysql> show binary logs;
+---------------+-----------+-----------+
| Log_name      | File_size | Encrypted |
+---------------+-----------+-----------+
| binlog.000007 |     94640 | No        |
| binlog.000008 |       419 | No        |
| binlog.000009 |    121547 | No        |
| binlog.000010 |       155 | No        |
| binlog.000011 |       178 | No        |
| binlog.000012 |       155 | No        |
+---------------+-----------+-----------+
6 rows in set (0.19 sec)

查看正在使用的binlog

mysql> show master status;
+---------------+----------+--------------+------------------+-------------------+
| File          | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+---------------+----------+--------------+------------------+-------------------+
| binlog.000012 |      155 |              |                  |                   |
+---------------+----------+--------------+------------------+-------------------+
1 row in set (0.64 sec)


4. 看二进制日志文件用mysqlbinlog    （MySQL 5.X版本）

shell>mysqlbinlog mail-bin.000001 或者

shell>mysqlbinlog mail-bin.000001 | tail


https://blog.csdn.net/vkingnew/article/details/81170290
查看binlog中的全部内容 MySQL(8.X 版本)

mysql> show binlog events in 'node1_bin.000001';

| binlog.000007 |   427 | Query          |         1 |         541 | CREATE DATABASE `spider` /* xid=110 */



