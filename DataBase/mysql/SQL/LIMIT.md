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

-- 下面2种语法等价 后边的不用记忆参数顺序 这就是mysql 分页查询的思路
mysql> select * from sales limit 1, 3;

mysql> select * from sales limit 3 offset 1;
+----+------+-------+----------+---------------------+
| id | item | price | quantity | create_at           |
+----+------+-------+----------+---------------------+
|  2 | jkl  |    20 |        1 | 2017-01-16 22:42:35 |
|  3 | xyz  |   100 |       10 | 2017-01-16 22:42:35 |
|  4 | xyz  |    30 |       20 | 2017-01-16 22:42:35 |
+----+------+-------+----------+---------------------+
3 rows in set (0.00 sec)
```
OFFSET超过了查询的最大数量并不会报错，而是得到一个空的结果集。

使用LIMIT <M> OFFSET <N>可以对结果集进行分页，每次查询返回结果集的一部分；

分页查询需要先确定每页的数量和当前页数，然后确定LIMIT和OFFSET的值。

如何知道总页数?
```sql
mysql> select count(*) total from sales;
+-------+
| total |
+-------+
|     8 |
+-------+
1 row in set (0.06 sec)
```

[liaoxuefeng.com](https://www.liaoxuefeng.com/wiki/1177760294764384/1217864791925600)