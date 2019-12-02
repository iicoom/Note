## delete
DELETE FROM table_name
WHERE some_column=some_value;

DELETE 语句用于删除表中的行。

## 删除所有数据
您可以在不删除表的情况下，删除表中所有的行。这意味着表结构、属性、索引将保持不变：
```sql
DELETE FROM table_name;

or

DELETE * FROM table_name;
```

注释：在删除记录时要格外小心！因为您不能重来！

## drop table
```sql
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
```
