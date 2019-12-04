## 错误引入
```
[redis2db_server] [2019-12-04 10:47:54]-[ERROR]-[pid=28570]-[db.js-119] Mysql error: [
[redis2db_server]   `UPDATE 1001_data_account set recentPlayers='[]',pvpLog='{"character":[{"characterId":2050002,
"rankTimes":[4,1,0,1,0,1]}],"vehicle":[{"vehicleWheelId":2141020,"vehicleHoloId":2103016,"vehicleStar":0,｝...

Error: ER_TOO_BIG_ROWSIZE: Row size too large (> 8126). 
Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. 
In current row format, BLOB prefix of 768 bytes is stored inline.
```

## MySQL 5.7 Reference Manual
https://dev.mysql.com/doc/refman/5.7/en/innodb-file-format.html

The following file format configuration parameters are deprecated in and may be removed in a future release:

- innodb_file_format

- innodb_file_format_check

- innodb_file_format_max

- innodb_large_prefix



```sql
Just give a try!!!

mysql> select version();
+------------+
| version()  |
+------------+
| 5.5.21-log |
+------------+
1 row in set (0.00 sec)

mysql> show variables like "%innodb_file%";
+--------------------------+----------+
| Variable_name            | Value    |
+--------------------------+----------+
| innodb_file_format       | Antelope |
| innodb_file_format_check | ON       |
| innodb_file_format_max   | Antelope |
| innodb_file_per_table    | ON       |
+--------------------------+----------+
4 rows in set (0.00 sec)

mysql> SET GLOBAL innodb_file_format = barracuda;
Query OK, 0 rows affected (0.00 sec)

mysql> show variables like "%innodb_file%";
+--------------------------+-----------+
| Variable_name            | Value     |
+--------------------------+-----------+
| innodb_file_format       | Barracuda |
| innodb_file_format_check | ON        |
| innodb_file_format_max   | Antelope  |
| innodb_file_per_table    | ON        |
+--------------------------+-----------+
4 rows in set (0.00 sec)
```

然后
ALTER TABLE 1001_data_account ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPRESSED;
