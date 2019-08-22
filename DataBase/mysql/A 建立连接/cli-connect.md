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

