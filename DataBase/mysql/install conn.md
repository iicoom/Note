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



