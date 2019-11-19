CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户名',
  `age` int(20) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


## insert 单行数据插入
INSERT INTO `user` VALUES (1, 'Jack', 18, 'man');

## insert 多行
1. 创建表
```
create table student(
    s_id varchar(10),
    s_name varchar(20),
    s_age date,
    s_sex varchar(10)
);
这种简单的创建会导致插入中文时报错：
mysql> insert into student (s_id, s_name, s_age, s_sex)
    -> values  ('01' , '赵雷' , '1990-01-01' , '男');
ERROR 1366 (HY000): Incorrect string value: '\xE8\xB5\xB5\xE9\x9B\xB7' for column 's_name' at row 1

create table student(
    s_id varchar(10),
    s_name varchar(20),
    s_age date,
    s_sex varchar(10)
) CHARSET=utf8 COMMENT='学生表';
把整张表的字符集设置为 CHARSET=utf8，下面插入数据就不会报错：

insert into student (s_id, s_name, s_age, s_sex)
values  ('01' , '赵雷' , '1990-01-01' , '男'),
        ('02' , '钱电' , '1990-12-21' , '男'),
        ('03' , '孙风' , '1990-05-20' , '男'),
        ('04' , '李云' , '1990-08-06' , '男'),
        ('05' , '周梅' , '1991-12-01' , '女'),
        ('06' , '吴兰' , '1992-03-01' , '女'),
        ('07' , '郑竹' , '1989-07-01' , '女'),
        ('08' , '王菊' , '1990-01-20' , '女');
这样创建的表结构仍有问题：
1. 
There is no primary key here. Update will only use exact matching of the old values of the columns here. Thus, it may update more than one record.

没有主键，更新时可能会更新多条记录

2. 字段没有注释，不容易理解
```

回顾一下现在有4张表：
mysql> desc student;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| s_id   | varchar(10) | YES  |     | NULL    |       |
| s_name | varchar(20) | YES  |     | NULL    |       |
| s_age  | date        | YES  |     | NULL    |       |
| s_sex  | varchar(10) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> desc score;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| s_id  | varchar(10) | YES  |     | NULL    |       |
| c_id  | varchar(10) | YES  |     | NULL    |       |
| score | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> desc course;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| c_id   | varchar(10) | YES  |     | NULL    |       |
| c_name | varchar(20) | YES  |     | NULL    |       |
| t_id   | varchar(10) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> desc teacher;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| t_id   | varchar(10) | YES  |     | NULL    |       |
| t_name | varchar(20) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

- 左连接的使用
接下来根据4张表创建一张总表：
create table total(
  select st.s_id as s_id, st.s_name as s_name, st.s_age as s_age, st.s_sex as s_sex,
  sc.c_id as c_id, sc.score as score,
  c.t_id as t_id,
  t.t_name as t_name
   from student st 
   left join score sc on st.s_id = sc.s_id
   left join course c on sc.c_id = c.c_id
   left join teacher t on c.t_id = t.t_id
);

mysql> select * from total;
+------+--------+------------+-------+------+-------+------+--------+
| s_id | s_name | s_age      | s_sex | c_id | score | t_id | t_name |
+------+--------+------------+-------+------+-------+------+--------+
| 01   | 赵雷   | 1990-01-01 | 男    | 02   | 90    | 01   | 张三   |
| 02   | 钱电   | 1990-12-21 | 男    | 02   | 60    | 01   | 张三   |
| 03   | 孙风   | 1990-05-20 | 男    | 02   | 80    | 01   | 张三   |
| 04   | 李云   | 1990-08-06 | 男    | 02   | 30    | 01   | 张三   |
| 05   | 周梅   | 1991-12-01 | 女    | 02   | 87    | 01   | 张三   |
| 07   | 郑竹   | 1989-07-01 | 女    | 02   | 89    | 01   | 张三   |
| 01   | 赵雷   | 1990-01-01 | 男    | 01   | 80    | 02   | 李四   |
| 02   | 钱电   | 1990-12-21 | 男    | 01   | 70    | 02   | 李四   |
| 03   | 孙风   | 1990-05-20 | 男    | 01   | 80    | 02   | 李四   |
| 04   | 李云   | 1990-08-06 | 男    | 01   | 50    | 02   | 李四   |
| 05   | 周梅   | 1991-12-01 | 女    | 01   | 76    | 02   | 李四   |
| 06   | 吴兰   | 1992-03-01 | 女    | 01   | 31    | 02   | 李四   |
| 01   | 赵雷   | 1990-01-01 | 男    | 03   | 99    | 03   | 王五   |
| 02   | 钱电   | 1990-12-21 | 男    | 03   | 80    | 03   | 王五   |
| 03   | 孙风   | 1990-05-20 | 男    | 03   | 80    | 03   | 王五   |
| 04   | 李云   | 1990-08-06 | 男    | 03   | 20    | 03   | 王五   |
| 06   | 吴兰   | 1992-03-01 | 女    | 03   | 34    | 03   | 王五   |
| 07   | 郑竹   | 1989-07-01 | 女    | 03   | 98    | 03   | 王五   |
| 08   | 王菊   | 1990-01-20 | 女    | NULL | NULL  | NULL | NULL   |
+------+--------+------------+-------+------+-------+------+--------+
19 rows in set (0.00 sec)

- 查询"01"-语文 课程比"02"-数学 课程成绩高的 学生的信息 及 课程分数
要比较成绩，首先查出2张课程的成绩表
mysql> select s_id, score as 语文 from score where c_id='01';
+------+--------+
| s_id | 语文   |
+------+--------+
| 01   | 80     |
| 02   | 70     |
| 03   | 80     |
| 04   | 50     |
| 05   | 76     |
| 06   | 31     |
+------+--------+
6 rows in set (0.00 sec)

mysql> select s_id, score as 数学 from score where c_id='02';
+------+--------+
| s_id | 数学   |
+------+--------+
| 01   | 90     |
| 02   | 60     |
| 03   | 80     |
| 04   | 30     |
| 05   | 87     |
| 07   | 89     |
+------+--------+
6 rows in set (0.01 sec)

2张表做内连接，合成一张表：
select * from
(select s_id, score as 语文 from score a where c_id='01')
inner join
(select s_id, score as 数学 from score b where c_id='02')
on a.s_id = b.s_id;

这样写有问题：
ERROR 1248 (42000): Every derived table must have its own alias

改写：
select * from
(select s_id, score as 语文 from score where c_id='01') a
inner join
(select s_id, score as 数学 from score where c_id='02') b
on a.s_id = b.s_id;

+------+--------+------+--------+
| s_id | 语文   | s_id | 数学   |
+------+--------+------+--------+
| 01   | 80     | 01   | 90     |
| 02   | 70     | 02   | 60     |
| 03   | 80     | 03   | 80     |
| 04   | 50     | 04   | 30     |
| 05   | 76     | 05   | 87     |
+------+--------+------+--------+
5 rows in set (0.00 sec)

避免选出重复的s_id列
select s_id, 语文, 数学 from
(select s_id, score as 语文 from score where c_id='01') a
inner join
(select s_id, score as 数学 from score where c_id='02') b
on a.s_id = b.s_id;

这样写也会报错，应为表中有2个s_id 列
ERROR 1052 (23000): Column 's_id' in field list is ambiguous

select a.s_id as s_id, s1 as 语文, s2 as 数学
from
(select s_id, score as s1 from score where c_id='01') a
inner join
(select s_id, score as s2 from score where c_id='02') b
on a.s_id = b.s_id
where s1>s2;

+------+--------+--------+
| s_id | 语文   | 数学   |
+------+--------+--------+
| 02   | 70     | 60     |
| 04   | 50     | 30     |
+------+--------+--------+
2 rows in set (0.00 sec)