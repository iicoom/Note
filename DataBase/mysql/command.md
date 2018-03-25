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

## 查看mysql是否安装
linux/mac/windows
```
[root@host]# mysqladmin --version
```

## 检查MySQL服务器是否启动
```
[xiaomao@iZ258wvzn92Z /]$ ps -ef | grep mysqld

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

## show dbs;
```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| cmfz               |
| codepush           |
| demo               |
| experience         |
| member             |
| mysql              |
| performance_schema |
| ranch-member       |
| shopnc             |
| spring-boot-dev    |
| task-scheduler     |
| test               |
| testDB             |
| user               |
+--------------------+
15 rows in set (0.00 sec)
```

## select db
```
mysql> use member;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql>

mysql> show tables;
+------------------------+
| Tables_in_member       |
+------------------------+
| activity               |
| activity_number        |
| member                 |
| member_reward          |
| member_task            |
| prize                  |
| prize_line             |
| reward                 |
| reward_history         |
| sign                   |
| sign_record            |
| statistics             |
| task                   |
| task_class             |
| win_prize_record       |
+------------------------+
25 rows in set (0.00 sec)
```

## 查询数据
```
mysql> select * from sign;
+----------------------------------+--------------------------+-------+------------+-------------+------------
| id                               | user_id                  | count | link_count | total_count | sign_time           | create_time         | last_time           |
+----------------------------------+--------------------------+-------+------------+-------------+---------------------+---------------------+---------------------+
| 07c27452081742bf998b1e89aca13b30 | 587610f631c2f9183d6cec96 |     1 |          1 |           1 | 2017-02-20 17:03:24 | 2017-02-20 17:03:24 | 2017-02-20 17:03:24 |
| 10a95e99dac949538febf44307f964ea | 574fec32a2c86b6d217898c6 |     7 |          2 |           0 | 2017-09-28 09:33:31 | 2017-01-17 17:22:50 | 2017-11-08 14:31:46 |
| 13e39fe0821f4777bffa42a5f6012ac4 | 580988313254200b3205edcb |     1 |          1 |           1 | 2017-04-06 18:31:59 | 2017-04-06 18:31:58 | 2017-04-06 18:31:58 |
+----------------------------------+--------------------------+-------+------------+-------------+------------
```

## node-mysql
[用Nodejs连接MySQL](http://blog.fens.me/nodejs-mysql-intro/)



