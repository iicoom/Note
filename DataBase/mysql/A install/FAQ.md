## mysql -uroot -p

```
[root@vultr ~]# mysql -uroot -p
Enter password:
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (111)
```

It means either the MySQL server is not installed/running, or the file mysql.sock doesn’t exist in /var/lib/mysql/.


### 检测服务状态
```
[root@vultr ~]# systemctl status mysqld.service
● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: failed (Result: exit-code) since 二 2019-07-30 06:19:15 UTC; 2 weeks 1 days ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
 Main PID: 3221 (code=exited, status=1/FAILURE)
   Status: "SERVER_BOOTING"
```

### 尝试启动服务
```
[root@vultr ~]# systemctl start mysqld.service
Job for mysqld.service failed because a fatal signal was delivered to the control process. See "systemctl status mysqld.service" and "journalctl -xe" for details.
```

### 查看日志
```
[root@vultr ~]# tail -f /var/log/mysqld.log
2019-08-14T08:02:09.388023Z 4 [System] [MY-013381] [Server] Server upgrade from '80015' to '80017' started.
2019-08-14T08:03:03.255475Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.17) starting as process 18797
2019-08-14T08:03:04.825107Z 4 [System] [MY-013381] [Server] Server upgrade from '80015' to '80017' started.
2019-08-14T08:03:08.392808Z 4 [System] [MY-013381] [Server] Server upgrade from '80015' to '80017' completed.
2019-08-14T08:04:31.646815Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.17) starting as process 18880
2019-08-14T08:04:33.129469Z 0 [System] [MY-010229] [Server] Starting crash recovery...
2019-08-14T08:04:33.164479Z 0 [System] [MY-010232] [Server] Crash recovery finished.
2019-08-14T08:04:33.327196Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2019-08-14T08:04:33.380645Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.17'  socket: '/var/lib/mysql/mysql.sock'  port: 3306  MySQL Community Server - GPL.
2019-08-14T08:04:33.601720Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Socket: '/var/run/mysqld/mysqlx.sock' bind-address: '::' port: 39960
```
貌似是由于数据库升级失败导致的启动 failed

### 尝试重启
```
[root@vultr ~]# systemctl status mysqld.service
● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: active (running) since 三 2019-08-14 08:10:37 UTC; 15s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
  Process: 18973 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCESS)
 Main PID: 18996 (mysqld)
   Status: "Server is operational"
   CGroup: /system.slice/mysqld.service
           └─18996 /usr/sbin/mysqld

8月 14 08:10:35 vultr.guest systemd[1]: Starting MySQL Server...
8月 14 08:10:37 vultr.guest systemd[1]: Started MySQL Server.
```


