## GUI 工具（Navicat for MySQL）

点击右键打开或者双击连接数据库后，就可以看到数据库各张表的信息。包括：

- 表名称
- Rows行数
- Data Length 数据大小
- Engine - InnoDB
- Created Date
- Modified Date
- Collationn
- Comment

## 命令行中查看

### 查看数据库使用端口
```
mysql> show variables like 'port';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| port          | 3306  |
+---------------+-------+
1 row in set (0.19 sec)
```

### 查看数据库编码
```
mysql>  show variables like 'character%';
+--------------------------+--------------------------------+
| Variable_name            | Value                          |
+--------------------------+--------------------------------+
| character_set_client     | utf8mb4                        |
| character_set_connection | utf8mb4                        |
| character_set_database   | utf8mb4                        |
| character_set_filesystem | binary                         |
| character_set_results    | utf8mb4                        |
| character_set_server     | utf8mb4                        |
| character_set_system     | utf8                           |
| character_sets_dir       | /usr/share/mysql-8.0/charsets/ |
+--------------------------+--------------------------------+
8 rows in set (0.21 sec)
```

### 查看collation
```
mysql> show variables like 'collation%';
+----------------------+--------------------+
| Variable_name        | Value              |
+----------------------+--------------------+
| collation_connection | utf8mb4_unicode_ci |
| collation_database   | utf8mb4_unicode_ci |
| collation_server     | utf8mb4_unicode_ci |
+----------------------+--------------------+
3 rows in set (0.20 sec)
```

### 查看最大连接数
```
mysql> show variables like '%max_connections%';
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| max_connections        | 151   |
| mysqlx_max_connections | 100   |
+------------------------+-------+
2 rows in set (0.20 sec)
```

### 产看 数据库当前连接数，并发数
```
mysql> show status like 'Threads%';
+-------------------+-------+
| Variable_name     | Value |
+-------------------+-------+
| Threads_cached    | 2     |
| Threads_connected | 1     |
| Threads_created   | 3     |
| Threads_running   | 2     |
+-------------------+-------+
4 rows in set (0.32 sec)
```
Threads_cached : 代表当前此时此刻线程缓存中有多少空闲线程。

Threads_connected :代表当前已建立连接的数量，因为一个连接就需要一个线程，所以也可以看成当前被使用的线程数。

Threads_created :代表从最近一次服务启动，已创建线程的数量。

Threads_running :代表当前激活的（非睡眠状态）线程数。并不是代表正在使用的线程数，有时候连接已建立，但是连接处于sleep状态，这里相对应的线程也是sleep状态。

### 查看数据文件存放路径
```
mysql> show variables like '%datadir%';
+---------------+-----------------+
| Variable_name | Value           |
+---------------+-----------------+
| datadir       | /var/lib/mysql/ |
+---------------+-----------------+
1 row in set (0.20 sec)
```

### 展示所有db
```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| c_spider           |
| information_schema |
| mysql              |
| performance_schema |
| spider             |
| sys                |
+--------------------+
6 rows in set (0.21 sec)
```

### use spider
```
mysql> use spider;
Database changed
mysql> select database(); // 查看当前使用的数据库
+------------+
| database() |
+------------+
| spider     |
+------------+
1 row in set (0.19 sec)
```

### select version()
```
mysql> select version();
+-----------+
| version() |
+-----------+
| 8.0.17    |
+-----------+
1 row in set (0.19 sec)
```