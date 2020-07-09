## SQL SELECT 语句

- The SQL SELECT keyword is used to query data from the database and it's the most commonly used command.
最常用的语句

- The simplest form has the syntax "SELECT * FROM tableName;"
最简单的用法 查询出 某个表中所有列、所有行

- The SQL SELECT command can also have other optional parameters such as WHERE, GROUP BY, HAVING, ORDER BY. They will be discussed later.
select后面还可以跟其他的语句，如 WHERE, GROUP BY, HAVING, ORDER BY

https://www.guru99.com/select-statement.html

mysql> show tables;
+------------------+
| Tables_in_spider |
+------------------+
| lagou_job        |
| qiushi           |
+------------------+
2 rows in set (0.24 sec)


## select * from `table_name`
The Star symbol is used to select all the columns in table.

```
mysql> select * from qiushi;
```
数据很多很慢 列出250条

## select column1,column2,column3 from `table_name`

mysql> select username,sex,age from qiushi;
+--------------------------------------+-------+------+
| username                             | sex   | age  |
+--------------------------------------+-------+------+
| tonoon                               | man   |   20 |
| 鱼歌浅唱                              | woman |   79 |
| 无书斋主                              | man   |   41 |
| 夲少姓〖劉〗                           | man   |   28 |
| zqwxmh                               | man   |   28 |
| 婉若い清风                             | woman |   99 |
| 哈和嗨                                | man   |   31 |
+--------------------------------------+-------+------+
250 rows in set (0.44 sec)

## select as 重命名所选字段

mysql> select username as user, age, sex from qiushi limit 4;
+--------------------+------+-------+
| user               | age  | sex   |
+--------------------+------+-------+
| tonoon             |   20 | man   |
| 鱼歌浅唱            |   79 | woman |
| 无书斋主            |   41 | man   |
| 夲少姓〖劉〗         |   28 | man   |
+--------------------+------+-------+
4 rows in set (0.29 sec)

### select distinct
```sql
mysql> select * from oauths;
+----+---------+------------+----------+---------+------------+
| id | user_id | oauth_type | oauth_id | unionid | credential |
+----+---------+------------+----------+---------+------------+
|  1 |       1 | weibo      | openid   | 123456  |            |
|  2 |       4 | weibo      | openid   | 654321  |            |
|  3 |       5 | qq         | uid      | 222222  |            |
+----+---------+------------+----------+---------+------------+
3 rows in set (0.00 sec)

mysql> select distinct oauth_type as type from oauths;
+-------+
| type  |
+-------+
| weibo |
| qq    |
+-------+
2 rows in set (0.00 sec)
```

### select count
```sql
mysql> select count(*) from oauths;
+----------+
| count(*) |
+----------+
|        3 |
+----------+
1 row in set (0.09 sec)

mysql> select count(*) as total from oauths;
+-------+
| total |
+-------+
|     3 |
+-------+
1 row in set (0.06 sec)

mysql> select count(distinct oauth_type) as type_total from oauths;
+------------+
| type_total |
+------------+
|          2 |
+------------+
1 row in set (0.00 sec)

加上where 限制
mysql> select count(*) as total from users where avatar_url != '';
+-------+
| total |
+-------+
|     5 |
+-------+
1 row in set (0.01 sec)
```
[参考](../where.md)


## 较复杂的查询语句
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

