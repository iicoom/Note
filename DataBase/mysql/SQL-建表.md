## SQL CREATE DATABASE 语法
```
CREATE DATABASE database_name

mysql> CREATE DATABASE Example;
Query OK, 1 row affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| Example            |
| Java               |
| Nodejs             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
7 rows in set (0.00 sec)

mysql> use Example;
Database changed

mysql> show tables;
Empty set (0.00 sec)

```

## SQL CREATE TABLE 语法
```
CREATE TABLE 表名称
(
列名称1 数据类型,
列名称2 数据类型,
列名称3 数据类型,
....
)


// 软件导出的表结构
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `id` varchar(50) NOT NULL,
  `grade_value` int(11) NOT NULL COMMENT '等级值',
  `experience_value` bigint(20) DEFAULT NULL COMMENT '对应经验值',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='等级表';

mysql> show tables;
+-------------------+
| Tables_in_example |
+-------------------+
| grade             |
+-------------------+
1 row in set (0.00 sec)

mysql> desc grade;
+------------------+-------------+------+-----+-------------------+-----------------------------+
| Field            | Type        | Null | Key | Default           | Extra                       |
+------------------+-------------+------+-----+-------------------+-----------------------------+
| id               | varchar(50) | NO   | PRI | NULL              |                             |
| grade_value      | int(11)     | NO   |     | NULL              |                             |
| experience_value | bigint(20)  | YES  |     | NULL              |                             |
| create_at        | timestamp   | NO   |     | CURRENT_TIMESTAMP |                             |
| update_at        | timestamp   | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
+------------------+-------------+------+-----+-------------------+-----------------------------+
5 rows in set (0.01 sec)

// 插入数据
BEGIN;
INSERT INTO `grade` VALUES ('grade_1', 1, 0, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade` VALUES ('grade_2', 2, 501, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade` VALUES ('grade_3', 3, 1001, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade` VALUES ('grade_4', 4, 2001, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade` VALUES ('grade_5', 5, 5001, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade` VALUES ('grade_6', 6, 10001, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade` VALUES ('grade_7', 7, 20001, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
COMMIT;

mysql> select * from grade;
+---------+-------------+------------------+---------------------+---------------------+
| id      | grade_value | experience_value | create_at           | update_at           |
+---------+-------------+------------------+---------------------+---------------------+
| grade_1 |           1 |                0 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_2 |           2 |              501 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_3 |           3 |             1001 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_4 |           4 |             2001 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_5 |           5 |             5001 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_6 |           6 |            10001 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_7 |           7 |            20001 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
+---------+-------------+------------------+---------------------+---------------------+
7 rows in set (0.00 sec)

// 创建一张关联表grade_power
DROP TABLE IF EXISTS `grade_power`;
CREATE TABLE `grade_power` (
  `gid` varchar(50) NOT NULL,
  `sheepnumber` int(11) NOT NULL COMMENT '等级值',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='等级权限表';

// 插入数据
INSERT INTO `grade_power` VALUES ('grade_1', 1, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade_power` VALUES ('grade_2', 2, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade_power` VALUES ('grade_3', 3, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade_power` VALUES ('grade_4', 4, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade_power` VALUES ('grade_5', 5, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade_power` VALUES ('grade_6', 6, '2017-01-16 22:42:35', '2017-01-16 22:42:35');
INSERT INTO `grade_power` VALUES ('grade_7', 7, '2017-01-16 22:42:35', '2017-01-16 22:42:35');

mysql> select * from grade_power;
+---------+-------------+---------------------+---------------------+
| gid     | sheepnumber | create_at           | update_at           |
+---------+-------------+---------------------+---------------------+
| grade_1 |           1 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_2 |           2 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_3 |           3 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_4 |           4 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_5 |           5 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_6 |           6 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
| grade_7 |           7 | 2017-01-16 22:42:35 | 2017-01-16 22:42:35 |
+---------+-------------+---------------------+---------------------+
7 rows in set (0.00 sec)
```

## SQL 给已存在的表增加字段
alter add命令用来增加表的字段。

alter add命令格式：alter table 表名 add字段 类型 其他;

例如，在表MyClass中添加了一个字段passtest，类型为int(4)，默认值为0：
   mysql> alter table MyClass add passtest int(4) default '0';

1) 加索引
   mysql> alter table 表名 add index 索引名 (字段名1[，字段名2 …]);

例子： mysql> alter table employee add index emp_name (name);

2) 加主关键字的索引
    mysql> alter table 表名 add primary key (字段名);

例子： mysql> alter table employee add primary key(id);

3) 加唯一限制条件的索引
   mysql> alter table 表名 add unique 索引名 (字段名);

例子： mysql> alter table employee add unique emp_name2(cardnumber);

4) 删除某个索引
   mysql> alter table 表名 drop index 索引名;

例子： mysql>alter table employee drop index emp_name;

5) 增加字段
    mysql> ALTER TABLE table_name ADD field_name field_type;
```
ALTER TABLE `announcement_goods` ADD COLUMN `auc_id` varchar(255) NULL DEFAULT NULL AFTER `announcement_id`;
```

6) 修改原字段名称及类型
    mysql> ALTER TABLE table_name CHANGE old_field_name new_field_name field_type;

7) 删除字段
    MySQL ALTER TABLE table_name DROP field_name;

原文：https://blog.csdn.net/u013063153/article/details/53304325 

[各种修改表结构的情况](http://www.cnblogs.com/mr-wuxiansheng/p/6134513.html)

## 图形工具中更改Structure

## AUTO_INCREMENT
如果设置了自增主键，则从1开始，步长为1。但是有时候，比如我们创建员工编号或者学生证号的时候，希望能够从某个起始值开始自增。

建表时设置自增起始值
```
CREATE TABLE student_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sex TINYINT NOT NULL,
    name VARCHAR(10) NOT NULL
    )ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=20110000;
```

建表后设置自增起始值
```
CREATE TABLE student_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sex TINYINT NOT NULL,
    name VARCHAR(10) NOT NULL
    )ENGINE=MyISAM DEFAULT CHARSET=utf8; 

ALTER TABLE student_info SET AUTO_INCREMENT=20110000;
```




