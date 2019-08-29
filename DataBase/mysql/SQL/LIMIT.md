> In MySQL the LIMIT clause is used with the SELECT statement to restrict the number of rows in the result set. The Limit Clause accepts one or two arguments which are offset and count.

SELECT column1, column2, ...
FROM table_name
LIMIT offset, count;


To retrieve the first three rows from the table “Data”, we will use the following query:
```
SELECT * FROM Data LIMIT 3;
```

To retrieve the rows 2-3(inclusive) from the table “Data”, we will use the following query:
```
SELECT * FROM Data LIMIT 1, 2;
```

mysql> select username,sex,age from qiushi limit 3;
+--------------+-------+------+
| username     | sex   | age  |
+--------------+-------+------+
| tonoon       | man   |   20 |
| 鱼歌浅唱     | woman |   79 |
| 无书斋主     | man   |   41 |
+--------------+-------+------+
3 rows in set (1.86 sec)

mysql> select username,sex,age from qiushi limit 1,3;
+--------------------+-------+------+
| username           | sex   | age  |
+--------------------+-------+------+
| 鱼歌浅唱           | woman |   79 |
| 无书斋主           | man   |   41 |
| 夲少姓〖劉〗       | man   |   28 |
+--------------------+-------+------+
3 rows in set (0.19 sec)