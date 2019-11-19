mysql> show tables;
+------------------+
| Tables_in_school |
+------------------+
| course           |
| score            |
| student          |
| teacher          |
+------------------+
4 rows in set (0.00 sec)

mysql> drop table student;
Query OK, 0 rows affected (0.01 sec)

mysql> show tables;
+------------------+
| Tables_in_school |
+------------------+
| course           |
| score            |
| teacher          |
+------------------+
3 rows in set (0.01 sec)
