## SQL CREATE TABLE 语法
```
CREATE TABLE table_name (column_name column_type);

************************************************************************************

CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

*************************************************************************************

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

****************************************************************************************
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

## 删除表 DROP table_name

```
DROP TABLE user;
```
