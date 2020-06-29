mysql -h$ip -P$port -u$user -p
输完命令之后，你就需要在交互对话里面输入密码。虽然密码也可以直接跟在-p后面写在命令行中，但这样可能会导致你的密码泄露。如果你连的是生产服务器，强烈建议你不要这么做。

## 链接本地
mysql -u root -p 
输入密码

## 链接远程
如：MySQL 连接远程数据库（192.168.5.116），端口“3306”，用户名为“root”，密码“123456”

mysql -h 192.168.5.116 -P 3306 -u root -p123456

默认端口则不用加 -P
mysql -h 192.168.5.116 3306 -u root -p123456


➜  ~ mysql -h 4p.77.1xx.2o8 -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 416
Server version: 8.0.17 MySQL Community Server - GPL

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>

## npm-mysql 使用用户名密码连接MySQL 8.0 报错
MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client

MySQL 8 has supports pluggable authentication methods. By default, one of them named caching_sha2_password is used rather than our good old mysql_native_password (source). It should be obvious that using a crypto algorithm with several handshakes is more secure than plain password passing that has been there for 24 years!
MySQL 8支持可插入的身份验证方法。默认情况下，使用其中一个名为caching_sha2_password的密码，而不是我们原来的mysql_native_password (source)。显然，使用多次握手的加密算法比使用24年的简单密码传递更安全!

- Option 1)
Downgrade "MySQL" to authenticate using good old "native_password"
That's what everybody suggests here (e.g. top answer above). You just get into mysql and run a query saying root is fine using old native_password method for authnetication:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```
Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:
```sql
flush privileges;
```
Try connecting using node after you do so.

也可以尝试在GUI navicat - 用户 - 编辑 - 常规 - 插件 中修改 这种方式好像有点问题会提示你需要先重置密码(可能是因为出于安全性考虑，修改认证方式后需要重置密码) 
还是直接执行上边的ALTER比价靠谱，结果证明也不用flush privileges; 就已经生效了

- Option 2) 
Replace "Node" package with MySQL Connecter X DevAPI
使用更高级的支持新的认证方式的客户端

