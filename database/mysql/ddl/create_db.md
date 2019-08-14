# CREATE\_DB

## 创建数据库

```text
CREATE DATABASE database_name

mysql> CREATE DATABASE Example;
Query OK, 1 row affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| Example            |
| Java               |
| Nodejs             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
7 rows in set (0.00 sec)
```

## 使用数据库

```text
mysql> use Example;
Database changed

mysql> show tables;
Empty set (0.00 sec)
```

