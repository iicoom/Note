### COUNT
SQL COUNT(column_name) 语法
COUNT(column_name) 函数返回指定列的值的数目（NULL 不计入）：
```
SELECT COUNT(column_name) FROM table_name

下面返回所有记录
SELECT COUNT(*) FROM table_name
```

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