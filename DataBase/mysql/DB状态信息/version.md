## 检查MySQL服务器是否启动
```
[xiaomao@iZ258wvzn92Z /]$ ps -ef | grep mysqld

```

## 查看mysql版本
### 已连接到数据库
```
mysql> status;
--------------
mysql  Ver 14.14 Distrib 5.7.21, for macos10.13 (x86_64) using  EditLine wrapper

Connection id:		63
Current database:
Current user:		root@localhost
SSL:			Not in use
Current pager:		less
Using outfile:		''
Using delimiter:	;
Server version:		5.7.21
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	latin1
Db     characterset:	latin1
Client characterset:	utf8
Conn.  characterset:	utf8
UNIX socket:		/tmp/mysql.sock
Uptime:			1 hour 10 min 21 sec

Threads: 1  Questions: 84  Slow queries: 0  Opens: 104  Flush tables: 1  Open tables: 99  Queries per second avg: 0.019
--------------
```

### 未连接到数据库
```
➜  ~ mysqladmin --version
mysqladmin  Ver 8.42 Distrib 5.7.21, for macos10.13 on x86_64

或
➜  ~ mysql -V
mysql  Ver 14.14 Distrib 5.7.21, for macos10.13 (x86_64) using  EditLine wrapper
```

### [Navicat都能完成上述操作](../Navicat使用技巧.md)