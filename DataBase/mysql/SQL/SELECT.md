- The SQL SELECT keyword is used to query data from the database and it's the most commonly used command.
- The simplest form has the syntax "SELECT * FROM tableName;"
- The SQL SELECT command can also have other optional parameters such as WHERE, GROUP BY, HAVING, ORDER BY. They will be discussed later.

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