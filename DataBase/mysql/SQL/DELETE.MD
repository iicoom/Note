## 语法
DELETE FROM table_name;

或

DELETE * FROM table_name;


## 具体操作
mysql> select * from student;
+----+---------+--------+---------+----------+-------+---------------------+---------------------+
| id | number  | name   | les_num | les_name | score | create_at           | update_at           |
+----+---------+--------+---------+----------+-------+---------------------+---------------------+
| 1  | 2005001 | 张三   | 0001    | 数学     |    69 | 2019-11-18 14:44:18 | 2019-11-18 14:44:18 |
| 2  | 2005002 | 李四   | 0001    | 数学     |    89 | 2019-11-18 14:45:15 | 2019-11-18 14:45:15 |
| 3  | 2005001 | 张三   | 0001    | 数学     |    69 | 2019-11-18 14:45:46 | 2019-11-18 14:45:46 |
| 4  | 2005001 | 张三   | 0001    | 数学     |    69 | 2019-11-18 14:45:46 | 2019-11-18 14:45:46 |
+----+---------+--------+---------+----------+-------+---------------------+---------------------+
4 rows in set (0.00 sec)

删掉了自增id不同其他字段都相同的重复数据：
mysql> select min(id) from student;
+---------+
| min(id) |
+---------+
| 1       |
+---------+
1 row in set (0.00 sec)

复习一下分组的用法：
mysql> select name from student group by name;
+--------+
| name   |
+--------+
| 张三   |
| 李四   |
+--------+
2 rows in set (0.00 sec)

mysql> select name, number from student group by name, number;
+--------+---------+
| name   | number  |
+--------+---------+
| 张三   | 2005001 |
| 李四   | 2005002 |
+--------+---------+
2 rows in set (0.00 sec)

mysql> select name, number, les_name, les_num from student group by name, number, les_name, les_num;
+--------+---------+----------+---------+
| name   | number  | les_name | les_num |
+--------+---------+----------+---------+
| 张三   | 2005001 | 数学     | 0001    |
| 李四   | 2005002 | 数学     | 0001    |
+--------+---------+----------+---------+
2 rows in set (0.00 sec)

进一步: 按照除id外的所有字段分组 选出最小的id
mysql> select min(id) from student group by number, name, les_num, les_name, score;
+---------+
| min(id) |
+---------+
| 1       |
| 2       |
+---------+
2 rows in set (0.00 sec)

复习一下select的用法：
mysql> select id, name from student where id not in (select min(id) from student group by number, name, les_num, les_name, score);
+----+--------+
| id | name   |
+----+--------+
| 3  | 张三   |
| 4  | 张三   |
+----+--------+
2 rows in set (0.00 sec)

```
mysql> delete from student where id not in (select min(id) from student group by number, name, les_num, les_name, score);
这种写法是不可以的

mysql> delete from student where id not in (1, 2, 3);
Query OK, 1 row affected (0.01 sec)
这样可以
```
删除一条：
mysql> delete from student where id = 4;
Query OK, 1 row affected (0.01 sec)