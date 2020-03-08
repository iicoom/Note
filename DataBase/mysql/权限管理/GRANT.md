## 权限含义
Navicat 中查看所有用户权限
```
dkart@%
dkart@localhost
root@::1
root@127.0.0.1
root@localhost
```
dkart有在任何ip连接到数据库的权限，root用户只有在本地的连接权限
但是 dkart@%  和 dkart@localhost 两个角色同时存在，从远程ip连接时会出现下面的错误：
ERROR 1045 (28000): Access denied for user 'dkart'@'localhost' (using password: YES)
是因为dkart@%  和  dkart@localhost 冲突，选取了dkart@localhost 只能从本地连接作为验证，把dkart@localhost删除 就可以从远程连接

command line 查看
```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| dk_online          |
| dk_user            |
| mysql              |
| performance_schema |
+--------------------+
7 rows in set (0.00 sec)

mysql> use mysql;
Database changed

mysql> show tables;
+---------------------------+
| Tables_in_mysql           |
+---------------------------+
| columns_priv              |
| db                        |
| event                     |
| func                      |
| general_log               |
| help_category             |
...
| time_zone                 |
| time_zone_leap_second     |
| time_zone_name            |
| time_zone_transition      |
| time_zone_transition_type |
| user                      |
+---------------------------+
24 rows in set (0.00 sec)

mysql> SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user; 
+----------------------------+
| query                      |
+----------------------------+
| User: 'dkart'@'%';         |
| User: 'doraemonkart'@'%';  |
| User: 'root'@'127.0.0.1';  |
| User: 'root'@'::1';        |
| User: 'dkart'@'localhost'; |
| User: 'root'@'localhost';  |
+----------------------------+
```

## 使用root用户给其他用户授权
对于新建的 MySQL 用户，必须给它授权，可以用 GRANT 语句来实现对新建用户的授权。

```sql
mysql -u root -p
#e!eT5@22wRaz
grant all privileges on *.* to dkart@"%" identified by "w#uZ!cuw83eph";
flush privileges;
```
all privileges 包括所有表操作的权限，唯独没有grant权限。 要授予GRANT权限，使用下面的语句。

### GRANT 语法规则
```
mysql> GRANT SELECT,INSERT ON *.* TO Jack@"%" IDENTIFIED BY "123mao" WITH GRANT OPTION;
Query OK, 0 rows affected (0.00 sec)
```
新创建的用户 Jack 可以在任何ip 连接数据库 密码 123mao 并且拥有查询、插入、授权的权限。

这样就可以只用Jack用户登录，创建一个 root@"%" 的用户 设置自己的密码（root@"%" 和 root@localhost 并不是同一用户，他们的密码可以不同）


### flush privileges
https://www.interserver.net/tips/kb/mysql-flush-commands/

mysql> FLUSH PRIVILEGES;

when we grant some privileges for a user, running the command flush privileges will reloads the grant tables in the mysql database 
enabling the changes to take effect without reloading or restarting mysql service.

What is the use of FLUSH PRIVILEGES statement in MySQL?

Actually, we need to perform flush-privileges operation to tell the server to reload the grant tables. 
This can be done by issuing FLUSH PRIVILEGES statement or by executing a mysqladmin flush-privileges or mysqladmin reload command. 
FLUSH PRIVILEGES is really needed if we modify the grant tables directly using such as INSERT, UPDATE or DELETE, 
the changes have no effect on privileges checking until we either restart the server or tell it to reload the tables.
But, Privileges assigned through GRANT choice don't want FLUSH PRIVILEGES to take effect - 
MySQL server can notice these changes and reload the grant tables instantly.

涉及到使用FLUSH PRIVILEGES 授予新用户 INSERT, UPDATE or DELETE 的表权限需要使用 FLUSH PRIVILEGES
否则 直到下次重启服务器才会生效。
但是 授予新用户 GRANT 权限 就不需要 FLUSH PRIVILEGES，MySQL server 会检测到变化并立即刷新权限。

