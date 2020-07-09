### COUNT
SQL COUNT(column_name) 语法
COUNT(column_name) 函数返回指定列的值的数目（NULL 不计入）：
```sql
SELECT COUNT(column_name) FROM table_name

下面返回所有记录
SELECT COUNT(*) FROM table_name

mysql> select count(number) from qiushi;
ERROR 1054 (42S22): Unknown column 'number' in 'field list'

mysql> select count(username) from qiushi;
+-----------------+
| count(username) |
+-----------------+
|             250 |
+-----------------+
1 row in set (0.25 sec)


mysql> select count(username) from qiushi;
+-----------------+
| count(username) |
+-----------------+
|             250 |
+-----------------+
1 row in set (0.61 sec)


mysql> select count(username) as user from qiushi;
+------+
| user |
+------+
|  250 |
+------+
1 row in set (0.27 sec)
```

## 添加限制条件
```sql
mysql> select * from sales;
+----+------+-------+----------+---------------------+
| id | item | price | quantity | create_at           |
+----+------+-------+----------+---------------------+
|  1 | abc  |    10 |        2 | 2017-01-16 22:42:35 |
|  2 | jkl  |    20 |        1 | 2017-01-16 22:42:35 |
|  3 | xyz  |   100 |       10 | 2017-01-16 22:42:35 |
|  4 | xyz  |    30 |       20 | 2017-01-16 22:42:35 |
|  5 | abc  |    50 |       10 | 2017-01-16 22:42:35 |
|  6 | def  |   101 |        5 | 2017-01-16 22:42:35 |
|  7 | def  |   104 |       10 | 2017-01-16 22:42:35 |
|  8 | abc  |   151 |        5 | 2017-01-16 22:42:35 |
+----+------+-------+----------+---------------------+
8 rows in set (0.00 sec)

mysql> select count(*) total from sales where item='xyz';
+-------+
| total |
+-------+
|     2 |
+-------+
1 row in set (0.00 sec)
```