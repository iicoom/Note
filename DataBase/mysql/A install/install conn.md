> Mysql是最流行的关系型数据库管理系统，在WEB应用方面MySQL是最好的RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。
[菜逼教程](http://www.runoob.com/mysql/mysql-tutorial.html)

## RDBMS 术语
在我们开始学习MySQL 数据库前，让我们先了解下RDBMS的一些术语：

数据库: 数据库是一些关联表的集合。.
数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
外键：外键用于关联两个表。
复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

## 安装mysql
### Mac
[Mac 安装 MySQL](https://blog.csdn.net/catstarxcode/article/details/78940385)

### 命令行安装
在命令行输入

brew install mysql  
brew 包管理工具会自行安装 MySQL

brew services start mysql

### Ubuntu 
sudo apt-get update
sudo apt-get install mysql-server
到这一步mysql server已经启动了 root 空密码即可登录

sudo mysql_secure_installation
```
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Securing the MySQL server deployment.

Connecting to MySQL using a blank password.
The 'validate_password' plugin is installed on the server.
The subsequent steps will run with the existing configuration
of the plugin.
Please set the password for root here.

New password: 

Re-enter new password: 

Estimated strength of the password: 25 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : 

 ... skipping.
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : 

 ... skipping.
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done! 

```


按上边方式安装完成后，MySQL应该已经开始自动运行了。要测试它，请检查其状态。

测试MySQL
systemctl status mysql.service

如果MySQL没有运行，您可以启动它：

sudo systemctl mysql start

### centOS
Centos7通过yum安装最新MySQL
https://www.cnblogs.com/xiaopotian/p/8196464.html

1. 下载MySQL源安装包
```
[root@vultr ~]# wget http://dev.mysql.com/get/mysql80-community-release-el7-2.noarch.rpm
```
2. 安装MySql源
```
[root@vultr ~]# ls
mysql80-community-release-el7-2.noarch.rpm  projects  shadowsocks.log  shadowsocks.sh
[root@vultr ~]# rpm -Uvh mysql80-community-release-el7-2.noarch.rpm
```
3. 查看一下安装效果
yum repolist enabled | grep mysql.*

4. 安装MySQL服务器
yum install mysql-community-server

5. 启动MySQL服务
systemctl start mysqld.service

停止mysql：
方式一：sudo /etc/init.d/mysql stop 
方式二：sudo stop mysql
方式三：sudo service mysql stop

重启mysql:
systemctl restart mysqld.service

6. 查看服务状态
```
[root@vultr ~]# systemctl status mysqld.service
● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: active (running) since 六 2019-04-06 08:55:57 UTC; 18s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
  Process: 4794 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCESS)
 Main PID: 4862 (mysqld)
   Status: "SERVER_OPERATING"
   CGroup: /system.slice/mysqld.service
           └─4862 /usr/sbin/mysqld

4月 06 08:55:51 vultr.guest systemd[1]: Starting MySQL Server...
4月 06 08:55:57 vultr.guest systemd[1]: Started MySQL Server.
```

7. 日志目录
/var/log/mysqld.log

8. 查看初始登录密码
```
[root@vultr ~]# grep "password" /var/log/mysqld.log
2019-04-06T08:55:53.291838Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: 6oew%(3)Iz8q
```
9. 登录
mysql -uroot -p

10. 修改密码
```
mysql> show databases;
ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements

mysql默认安装了密码安全检查插件（validate_password），默认密码检查策略要求密码必须包含：大小写字母、数字和特殊符号，并且长度不能少于8位。

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456Mao.';
Query OK, 0 rows affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)
```
11. 数据库授权
数据库没有授权，只支持localhost本地访问
```
mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '1234445' WITH GRANT OPTION;
```
//远程连接数据库的时候需要输入用户名和密码
用户名：root
密码:1234445
指点ip:%代表所有Ip,此处也可以输入Ip来指定Ip
输入后使修改生效还需要下面的语句
mysql>FLUSH PRIVILEGES;

#########################################################################################################
【上面的授权提示语法和当前版本不符，8.x版本采取以下授权方式】
#########################################################################################################
mysql> use mysql;

mysql> select user,authentication_string,host from user;
+------------------+------------------------------------------------------------------------+-----------+
| user             | authentication_string                                                  | host      |
+------------------+------------------------------------------------------------------------+-----------+
| mysql.infoschema | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED | localhost |
| mysql.session    | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED | localhost |
| mysql.sys        | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED | localhost |
| root             | $A$005$=-D/(nz\q"4(+7:}Cd9cfo925Pg7HjIHrbF6Bi68WVq8HijLD8ljKw.4zED     | localhost |
+------------------+------------------------------------------------------------------------+-----------+
4 rows in set (0.01 sec)

默认都是localhost
update user set host = '%' where user = 'root';

此时root的host是所有都可以了
mysql> select user,authentication_string,host from user;
+------------------+------------------------------------------------------------------------+-----------+
| user             | authentication_string                                                  | host      |
+------------------+------------------------------------------------------------------------+-----------+
| root             | $A$005$=-D/(nz\q"4(+7:}Cd9cfo925Pg7HjIHrbF6Bi68WVq8HijLD8ljKw.4zED     | %         |
| mysql.infoschema | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED | localhost |
| mysql.session    | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED | localhost |
| mysql.sys        | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED | localhost |
+------------------+------------------------------------------------------------------------+-----------+
4 rows in set (0.00 sec)

然后刷新修改，FLUSH PRIVILEGES;
```
mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)
```
这步一定要做，否则无法生效。如果使用Navicat还是无法远程连接到3306，要检查一下centos7 的防火墙端口有没有打开

远程连接mysql8.0，Error No.2058 Plugin caching_sha2_password could not be loaded

修改加密方式


```
[root@vultr ~]# mysql -u root -p
Enter password:
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)

上面是由密码错误引起的
重置密码 https://www.cnblogs.com/gumuzi/p/5711495.html
```

### 登录连接数据库
[guanwang](https://dev.mysql.com/doc/refman/5.7/en/connecting-disconnecting.html)

```
mysql -u root -p 
```
输入密码

或者：
➜  ~ mysql -uroot -padmin
mysql: [Warning] Using a password on the command line interface can be insecure.

### 修改用户登录密码
前提是知道旧密码
mysqladmin -u root password "newpass"

5.7后的版本不适用，可用下面方法
alter user 'root'@'localhost' identified by 'newpass';


### 重置root密码
作者：Xianan Zhang
链接：https://www.zhihu.com/question/41158204/answer/226950881
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

My mysql version is 5.7.16, For those who hasn't solved the problem:  
1. Stop MYSQL Server  
2. Open terminal and enter: cd /usr/local/mysql/bin/   
3. Enter: sudo su  , then enter your mac password
4. Enter: sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables  
5. Open a new terminal tab and enter: sudo /usr/local/mysql/bin/mysql -u root  
6. Enter: UPDATE mysql.user SET authentication_string=PASSWORD('YOUR NEW MYSQL PASSWORD') WHERE User='root'; 7. Enter: FLUSH PRIVILEGES;  
8. Enter: \q  
Hope this might help you, it took me almost half a day to find the solution, and it works just fine to me.

### The MySQL Access Privilege System
https://dev.mysql.com/doc/refman/5.7/en/privilege-system.html

[Adding User Accounts](https://dev.mysql.com/doc/refman/5.7/en/adding-users.html)

mysql> CREATE USER 'cloud'@'localhost' IDENTIFIED BY '02060934Mao,.';
Query OK, 0 rows affected (0.10 sec)

mysql> GRANT ALL PRIVILEGES ON *.* TO 'cloud'@'localhost' WITH GRANT OPTION;
Query OK, 0 rows affected (0.07 sec)



### 环境变量的执行顺序
```
Mac系统的环境变量，加载顺序为：
/etc/profile
/etc/paths
~/.bash_profile
~/.bash_login
~/.profile
~/.bashrc
当然/etc/profile和/etc/paths是系统级别的，系统启动就会加载，后面几个是当前用户级的环境变量。后面3个按照从前往后的顺序读取，如果/.bash_profile文件存在，则后面的几个文件就会被忽略不读了，如果/.bash_profile文件不存在，才会以此类推读取后面的文件。~/.bashrc没有上述规则，它是bash shell打开的时候载入的。
```

### 添加环境变量
```
vim ~/.bash_profile

添加
export PATH=${PATH}:/usr/local/mysql/bin

保存退出后执行
source .bash_profile
```

### 上述不起作用可直接添加到

```
~/.zshrc中

vim ~/.zshrc

export PATH=${PATH}:/usr/local/mysql/bin
保存退出 重启terminal生效
```

## 命令行连接MySQL
```
[xiaomao@iZ258wvzn92Z /]$ mysql -u cloud -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 983
Server version: 5.6.30 MySQL Community Server (GPL)

Copyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

## node-mysql
[用Nodejs连接MySQL](http://blog.fens.me/nodejs-mysql-intro/)



