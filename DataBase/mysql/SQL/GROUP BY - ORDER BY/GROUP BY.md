Summary: in this tutorial, you will learn how to use MySQL GROUP BY to group rows into subgroups based on values of columns or expressions.

You often use the GROUP BY clause with aggregate functions such as SUM, AVG, MAX, MIN, and COUNT. The aggregate function that appears in the SELECT clause provides the information about each group. 

## 创建表
```
CREATE TABLE `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL DEFAULT '' COMMENT 'name',
  `dept` varchar(40) NOT NULL DEFAULT '' COMMENT 'dept',
  `salary` int(11) NOT NULL DEFAULT '0' COMMENT 'salary',
  `edlevel` smallint(2) DEFAULT NULL COMMENT '级别',
  `hiredate` date DEFAULT NULL COMMENT '雇佣时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## 插入数据
```
BEGIN;
INSERT INTO `staff` VALUES (1, '张三', '开发部', 2000, 3, '2009-10-11', '', null);
INSERT INTO `staff` VALUES (2, '李四', '开发部', 2500, 3, '2009-10-01', '', null);
INSERT INTO `staff` VALUES (3, '王五', '设计部', 2600, 5, '2010-10-02', '', null);
INSERT INTO `staff` VALUES (4, '网六', '设计部', 2300, 4, '2010-10-03', '', null);
INSERT INTO `staff` VALUES (5, '马奇', '设计部', 2100, 4, '2010-10-06', '', null);
INSERT INTO `staff` VALUES (6, '爪八', '销售部', 3000, 5, '2010-10-05', '', null);
INSERT INTO `staff` VALUES (7, '钱就', '销售部', 3100, 7, '2010-10-07', '', null);
INSERT INTO `staff` VALUES (8, '孙氏', '销售部', 3500, 7, '2010-10-06', '', null);
COMMIT;

以上数据插入报错 字段不能留空
INSERT INTO `staff` VALUES (1, '张三', '开发部门', 3000, 2, '2018-10-12', '2019-04-09 03:20:33', NULL);

换一种格式
BEGIN;
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('张三', '开发部', 2000, 3, '2009-10-11');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('李四', '开发部', 2500, 3, '2009-10-01');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('王五', '设计部', 2600, 5, '2010-10-02');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('网六', '设计部', 2300, 4, '2010-10-03');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('马奇', '设计部', 2100, 4, '2010-10-06');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('爪八', '销售部', 3000, 5, '2010-10-05');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('钱就', '销售部', 3100, 7, '2010-10-07');
INSERT INTO `staff`(name, dept, salary, edlevel, hiredate) VALUES ('孙氏', '销售部', 3500, 7, '2010-10-06');
COMMIT;
```

## GROUP BY
我想列出每个部门最高薪水的结果，sql语句如下：
```
SELECT dept, MAX(salary) AS MAXIMUM
FROM staff
GROUP BY dept
```
结果
dept	MAXIMUM
开发部	2500
设计部	2600
销售部	3500

注意：计算的是每个部门（由 GROUP BY 子句定义的组）而不是整个公司的 MAX(SALARY)。

查询每个部门的总的薪水数
```
SELECT dept, SUM(salary) AS total FROM staff GROUP BY dept 
```
结果
dept	total
开发部	4500
设计部	7000
销售部	9600

### MIN
mysql> select * from user;
+----+----------+------+-------+
| id | username | age  | sex   |
+----+----------+------+-------+
|  1 | Jack     |   18 | man   |
|  2 | Tom      |    5 | woman |
|  3 | Harry    |   10 | man   |
+----+----------+------+-------+

mysql> select min(age) from user;
+----------+
| min(age) |
+----------+
|        5 |
+----------+
1 row in set (0.19 sec)

mysql> select sex, min(age) as minAgeUser from user group by sex;
+-------+------------+
| sex   | minAgeUser |
+-------+------------+
| man   |         10 |
| woman |          5 |
+-------+------------+
2 rows in set (0.21 sec)


mysql> select * from user;
+----+----------+------+-------+---------+
| id | username | age  | sex   | country |
+----+----------+------+-------+---------+
|  1 | Jack     |   18 | man   | USA     |
|  2 | Tom      |    5 | woman | India   |
|  3 | Harry    |   10 | man   | UK      |
|  4 | Dick     |   16 | woman | USA     |
|  5 | Joy      |   13 | man   | USA     |
+----+----------+------+-------+---------+
5 rows in set (0.18 sec)

mysql> select country,sex,min(age) as minAgeUser from user group by sex,country;
+---------+-------+------------+
| country | sex   | minAgeUser |
+---------+-------+------------+
| USA     | man   |         13 |
| India   | woman |          5 |
| UK      | man   |         10 |
| USA     | woman |         16 |
+---------+-------+------------+
4 rows in set (0.21 sec)

mysql> select country,sex,min(age) as minAgeUser from user group by sex,country order by country;
+---------+-------+------------+
| country | sex   | minAgeUser |
+---------+-------+------------+
| India   | woman |          5 |
| UK      | man   |         10 |
| USA     | man   |         13 |
| USA     | woman |         16 |
+---------+-------+------------+
4 rows in set (0.18 sec)

### AVG
mysql> select sex, avg(age) as minAgeUser from user group by sex;
+-------+------------+
| sex   | minAgeUser |
+-------+------------+
| man   |    14.0000 |
| woman |     5.0000 |
+-------+------------+
2 rows in set (0.18 sec)