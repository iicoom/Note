> 在use database 之后

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| c_spider           |
| information_schema |
| mysql              |
| performance_schema |
| spider             |
| sys                |
+--------------------+
6 rows in set (0.41 sec)

mysql> use spider;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+------------------+
| Tables_in_spider |
+------------------+
| lagou_job        |
| qiushi           |
+------------------+
2 rows in set (0.24 sec)
```

> MySQL stored all the information related to tables in a database in the information_schema database. We will use the information_schema table to find tables and databases size.

## Check ALL Databases Size in MySQL

```
mysql> SELECT table_schema "Database Name", SUM(data_length+index_length)/1024/1024
    -> "Database Size (MB)"  FROM information_schema.TABLES GROUP BY table_schema;
+--------------------+--------------------+
| Database Name      | Database Size (MB) |
+--------------------+--------------------+
| mysql              |         2.42187500 |
| sys                |         0.01562500 |
| information_schema |         0.00000000 |
| spider             |         0.15625000 |
| performance_schema |         0.00000000 |
| c_spider           |         0.17187500 |
+--------------------+--------------------+
6 rows in set (0.54 sec)
```

## Check Single Database Size in MySQL
```
mysql> SELECT table_schema "Database Name", SUM( data_length + index_length)/1024/1024
    -> "Database Size (MB)" FROM information_schema.TABLES where table_schema = 'spider';
+---------------+--------------------+
| Database Name | Database Size (MB) |
+---------------+--------------------+
| spider        |         0.15625000 |
+---------------+--------------------+
1 row in set (0.19 sec)
```

## Check Single Table Size in MySQL Database
```
mysql> SELECT table_name "Table Name", table_rows "Rows Count", round(((data_length + index_length)/1024/1024),2)
    -> "Table Size (MB)" FROM information_schema.TABLES WHERE table_schema = "spider" AND table_name ="qiushi";
+------------+------------+-----------------+
| Table Name | Rows Count | Table Size (MB) |
+------------+------------+-----------------+
| qiushi     |        225 |            0.14 |
+------------+------------+-----------------+
1 row in set (0.22 sec)
```

## Check All Table Size in MySQL Database

```
mysql> SELECT table_name "Table Name", table_rows "Rows Count", round(((data_length + index_length)/1024/1024),2)
    -> "Table Size (MB)" FROM information_schema.TABLES WHERE table_schema = "spider";
+------------+------------+-----------------+
| Table Name | Rows Count | Table Size (MB) |
+------------+------------+-----------------+
| lagou_job  |          0 |            0.02 |
| qiushi     |        225 |            0.14 |
+------------+------------+-----------------+
2 rows in set (0.32 sec)
```
