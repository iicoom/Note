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

## SQL 高级
### SQL 连接(JOIN)
SQL join 用于把来自两个或多个表的行结合起来。

#### grade 与 grade_power 通过gid关联起来
```
SELECT grade.id, grade.experience_value, grade_power.sheepnumber, grade_power.create_at
FROM grade
INNER JOIN grade_power
ON grade.id=grade_power.gid;

+---------+------------------+-------------+---------------------+
| id      | experience_value | sheepnumber | create_at           |
+---------+------------------+-------------+---------------------+
| grade_1 |                0 |           1 | 2017-01-16 22:42:35 |
| grade_2 |              501 |           2 | 2017-01-16 22:42:35 |
| grade_3 |             1001 |           3 | 2017-01-16 22:42:35 |
| grade_4 |             2001 |           4 | 2017-01-16 22:42:35 |
| grade_5 |             5001 |           5 | 2017-01-16 22:42:35 |
| grade_6 |            10001 |           6 | 2017-01-16 22:42:35 |
| grade_7 |            20001 |           7 | 2017-01-16 22:42:35 |
+---------+------------------+-------------+---------------------+
7 rows in set (0.00 sec)

```
### 不同的 SQL JOIN
* INNER JOIN：如果表中有至少一个匹配，则返回行
* LEFT JOIN：即使右表中没有匹配，也从左表返回所有的行
* RIGHT JOIN：即使左表中没有匹配，也从右表返回所有的行
* FULL JOIN：只要其中一个表中存在匹配，则返回行



