
## 查看数据库;
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

## create database
```
mysql> create database Java;
Query OK, 1 row affected (0.01 sec)
```

### create table
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    (create_definition,...)
    [table_options]
    [partition_options]

```
mysql> create table user(
    -> id INT PRIMARY KEY AUTO_INCREMENT,
    -> name VARCHAR(16) NOT NULL,
    -> create_date TIMESTAMP NULL DEFAULT now()
    -> )ENGINE=InnoDB DEFAULT CHARSET=utf8;
Query OK, 0 rows affected (0.02 sec)
```
查看表结构：
```
mysql> desc user;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int(11)      | NO   | PRI | NULL    |       |
| email | varchar(255) | YES  |     | NULL    |       |
| name  | varchar(255) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
```

例子：
```
mysql> create table student(
	-> id int not null auto_increment,
	-> name varchar(20) not null,
	-> age int not null,
	-> primary key(id);
	)
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

### 查询数据
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

### limit
select * from table limit m,n

/*当没有指定位置偏移量时，只取4条时，可以这样写*/
SELECT * FROM YourTableName LIMIT 4;
 
/*当指定了位置偏移量时，从第3条起取4条时，可以这样写*/
/*因为索引是从0开始计数的，所以第3条对应的索引就是2*/
SELECT * FROM YourTableName LIMIT 2,4;

### count
```
mysql> select * from user;
+----+---------------------------------+--------+
| id | email                           | name   |
+----+---------------------------------+--------+
|  1 | someemail@someemailprovider.com | First  |
|  2 | fuck@nimei.com                  | Second |
|  3 | luckin@nimei.com                | Second |
+----+---------------------------------+--------+
3 rows in set (0.00 sec)

mysql> select count(name) from user where name='Second';
+-------------+
| count(name) |
+-------------+
|           2 |
+-------------+
1 row in set (0.01 sec)
```

## MySQL 删除数据表
以下为删除MySQL数据表的通用语法：
```
DROP TABLE table_name ;
```
如果遇到 卡死状态 重启数据库服务即可解决


