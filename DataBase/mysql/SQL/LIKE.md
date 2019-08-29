### SQL LIKE 操作符
LIKE 操作符用于在 WHERE 子句中搜索列中的指定模式。

SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;

提示："%" 符号用于在模式的前后定义通配符（缺省字母）
http://www.runoob.com/sql/sql-like.html


下面的 SQL 语句选取 name 以字母 "G" 开始的所有客户：
SELECT * FROM Websites
WHERE name LIKE 'G%';


下面的 SQL 语句选取 name 以字母 "k" 结尾的所有客户：
SELECT * FROM Websites
WHERE name LIKE '%k';


下面的 SQL 语句选取 name 包含模式 "oo" 的所有客户：
SELECT * FROM Websites
WHERE name LIKE '%oo%';


下面的 SQL 语句选取 name 不包含模式 "oo" 的所有客户：
SELECT * FROM Websites
WHERE name NOT LIKE '%oo%';


mysql> select username,age,sex from qiushi where username like '无%';
+-----------------+------+-------+
| username        | age  | sex   |
+-----------------+------+-------+
| 无书斋主        |   41 | man   |
| 无颜。颜        |   22 | man   |
| 无名无牵挂      |   30 | woman |
| 无书斋主        |   41 | man   |
+-----------------+------+-------+
4 rows in set (0.18 sec)

mysql> select username,age,sex from qiushi where username like '%颜%';
+-------------------+------+-------+
| username          | age  | sex   |
+-------------------+------+-------+
| *笑颜，如花*      |   28 | woman |
| 无颜。颜          |   22 | man   |
+-------------------+------+-------+
2 rows in set (0.18 sec)