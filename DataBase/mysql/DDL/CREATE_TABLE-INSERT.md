## 表命名规范 (mysql table naming convention表命名约定)
1. Table names are lower case, uses underscores to separate words, and are singular (e.g. 'foo', 'foo_bar', etc.
   表名小写 有必要的话下划线隔开

2. I generally (not always) have a auto increment PK. I use the following convention: tablename_id (e.g. 'foo_id', 'foo_bar_id', etc.).
   通常要有自增的主键

3. FK(foreign key)
4. 其他
   选择合适的数据类型;表以及字段上添加合理的注释;数据库表设计时，一定要在外键字段以及合适的字段上加索引;

## table CHARSET 和 column CHARSET
在设计数据表时，一定要注意该字段存储的内容，如果允许设置表情，则一定不能使用utf8，而是使用utf8mb4。

[How to support full Unicode in MySQL databases](https://mathiasbynens.be/notes/mysql-utf8mb4#character-sets)

## SQL CREATE TABLE 语法
```sql
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


// Navicat软件导出的表结构
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `id` varchar(50) NOT NULL,
  `grade_value` int(11) NOT NULL COMMENT '等级值',
  `experience_value` bigint(20) DEFAULT NULL COMMENT '对应经验值',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='等级表';

CREATE TABLE `student` (
  `id` varchar(50) NOT NULL,
  `number` int(11) NOT NULL COMMENT '学号',
  `name` varchar(50) DEFAULT NULL COMMENT '姓名',
  `les_num` int(11) DEFAULT NULL COMMENT '课程编号',
  `les_name` varchar(50) DEFAULT NULL COMMENT '课程名称',
  `score` int(11) NOT NULL COMMENT '分数',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='学生表';

INSERT INTO `student` VALUES ('1', 2005001, '张三', '0001', '数学', 69, '2019-11-18 14:44:18', '2019-11-18 14:44:18');
INSERT INTO `student` VALUES ('2', 2005002, '李四', '0001', '数学', 89, '2019-11-18 14:45:15', '2019-11-18 14:45:15');
INSERT INTO `student` VALUES ('3', 2005001, '张三', '0001', '数学', 69, '2019-11-18 14:45:46', '2019-11-18 14:45:46');

若果插入内容有表情需要注意表的 CHARSET=utf8mb4
CREATE TABLE `qiushi` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `age` int(10) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(20) NOT NULL COMMENT '性别',
  `praise_num` int(20) DEFAULT NULL COMMENT '获赞数',
  `comment_num` int(20) DEFAULT NULL COMMENT '评论数',
  `content` varchar(500) NOT NULL COMMENT '正文',
  `avatar` varchar(200) DEFAULT '' COMMENT '头像',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='糗事百科数据';

且 服务器端也要相应配置


mysql> SHOW VARIABLES WHERE Variable_name LIKE 'character\_set\_%' OR Variable_name LIKE 'collation%';
+--------------------------+--------------------+
| Variable_name            | Value              |
+--------------------------+--------------------+
| character_set_client     | utf8mb4            |
| character_set_connection | utf8mb4            |
| character_set_database   | utf8mb4            |
| character_set_filesystem | binary             |
| character_set_results    | utf8mb4            |
| character_set_server     | utf8mb4            |
| character_set_system     | utf8               |
| collation_connection     | utf8mb4_unicode_ci |
| collation_database       | utf8mb4_unicode_ci |
| collation_server         | utf8mb4_unicode_ci |
+--------------------------+--------------------+
10 rows in set (0.00 sec)

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
COMMIT;

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
```

其他例子-注意时间字段
CREATE TABLE `article` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `content` varchar(500) NOT NULL DEFAULT '' COMMENT '正文',
  `image` varchar(200) NOT NULL DEFAULT '' COMMENT '秘籍攻略图片',
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='资料礼包秘籍攻略';

## INSERT INTO的方式
```sql
-- 一个字段都不能少，而且必须和表结构一一对应 否则 > 1136 - Column count doesn't match value count at row 1
INSERT INTO `users` VALUES ('1', '张三', '18231088177', '123456', 'http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg', '1', '2017-01-16 22:42:35', '2017-01-16 22:42:35');

INSERT INTO users (name, phone, password, avatar_url)  VALUES ('Tom', '18231088177', '123456', 'http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg')
```

## 删除表 DROP table_name

```
DROP TABLE user;
```
