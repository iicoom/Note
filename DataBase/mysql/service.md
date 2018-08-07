[KNOWLEDGEBASE](https://manage.accuwebhosting.com/knowledgebase/2342/How-to-Fix-MySQL-Error-The-server-quit-without-updating-PID-file.html)
## 查看mysql运行状态
```
➜  ~ mysql -V
mysql  Ver 14.14 Distrib 5.7.21, for macos10.13 (x86_64) using  EditLine wrapper
```
或
```
[xiaomao@iZ258wvzn92Z logs]$ service mysql status
/etc/init.d/mysql: line 352: /var/lib/mysql/iZ258wvzn92Z.pid: Permission denied
MySQL is not running, but PID file exists                  [FAILED]

[xiaomao@iZ258wvzn92Z logs]$ sudo service mysql status
[sudo] password for xiaomao:
MySQL running (30066)                                      [  OK  ]
```

```
[xiaomao@iZ258wvzn92Z ~]$ mysql -u cloud -p
Enter password:
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)

[xiaomao@iZ258wvzn92Z ~]$ service mysql restart
MySQL server PID file could not be found!                  [FAILED]
Starting MySQL.The server quit without updating PID file (/[FAILED]mysql/iZ258wvzn92Z.pid).
```

## 查看文件安装路径
```
[xiaomao@iZ258wvzn92Z usr]$ whereis mysql
mysql: /usr/bin/mysql /usr/lib64/mysql /usr/share/mysql /usr/share/man/man1/mysql.1.gz
```

查询运行文件所在路径(文件夹地址)
[xiaomao@iZ258wvzn92Z usr]$ which mysql
/usr/bin/mysql



## 重启mysql
如果在stop状态下使用sudo service mysql restart会报错：
```
[xiaomao@iZ258wvzn92Z mysql]$ sudo service mysql restart
MySQL server PID file could not be found!                  [FAILED]
Starting MySQL..The server quit without updating PID file ([FAILED]/mysql/iZ258wvzn92Z.pid).
```
必须使用sudo service mysql start
```
[xiaomao@iZ258wvzn92Z mysql]$ sudo service mysql start
[sudo] password for xiaomao:
Sorry, try again.
[sudo] password for xiaomao:
Starting MySQL.                                            [  OK  ]
```
查看状态：
```
[xiaomao@iZ258wvzn92Z mysql]$ ps aux | grep mysql
root     11139  0.0  0.0  11340  1504 pts/5    S    18:13   0:00 /bin/sh /usr/bin/mysqld_safe --datadir=/var/lib/mysql --pid-file=/var/lib/mysql/iZ258wvzn92Z.pid
mysql    11264  0.4 11.6 1539372 458128 pts/5  Sl   18:13   0:00 /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib64/mysql/plugin --user=mysql --log-error=/var/lib/mysql/iZ258wvzn92Z.err --pid-file=/var/lib/mysql/iZ258wvzn92Z.pid
xiaomao  11383  0.0  0.0 103324   892 pts/5    S+   18:17   0:00 grep mysql
```

在running状态下可以用sudo service mysql restart
```
[xiaomao@iZ258wvzn92Z mysql]$ sudo service mysql restart
[sudo] password for xiaomao:
Shutting down MySQL....                                    [  OK  ]
Starting MySQL...                                          [  OK  ]
[xiaomao@iZ258wvzn92Z mysql]$
```







