Invocation Syntax
There are in general three ways to use mysqldump—in order to dump a set of one or more tables, a set of one or more complete databases, or an entire MySQL server—as shown here:
有3种方式用于导出一个库的一张或多张表，或者一个或多个完整的db，或者一个完整的mysql server全部数据库所有数据表。
```
shell> mysqldump [options] db_name [tbl_name ...]
shell> mysqldump [options] --databases db_name ...
shell> mysqldump [options] --all-databases
```
https://dev.mysql.com/doc/refman/5.6/en/mysqldump.html

## mysqldump

mysqldump -u root -p --databases DB_NAME >databasename.sql
这种写法需要执行命令后，再次输入密码确认

直接导出的写法：(指定一个数据库、该库下的若干张表、指定sql导出的路径)
```
[doraemon@mxj-s ~]$ mysqldump --user=dkffart --password='w#ur&3eph' --databases db_dk_user > myschema.sql

[doraemon@mxj-s ~]$ mysqldump -udkffart -p'w#ur&3eph' --databases db_dk_user > myschema.sql

[doraemon@mxj-s ~]$ mysqldump -udkffart -p'w#ur&3eph' db_dk_user gm_cdkey_rule > myschema.sql

[doraemon@mxj-s ~]$ mysqldump -udkffart -p'w#ur&3eph' db_dk_user gm_cdkey_rule > /doraemon/server/gmtool/dump.sql
```


```
- To export a MySQL database to a dump file without any data, you can use —no-data in mysqldump:
mysqldump -u <user_name> -h <server> -p --no-data <db_name> > schema.sql

- Or you can use -d to empty all the tables before dumping:
mysqldump -u <user_name> -h <server> -p -d <db_name> > schema.sql

- If you want to extract a specific table with schema only:
mysqldump -u <user_name> -h <server> -p --no-data <db_name> <table_name> > schema.sql
```

### 导出备份并压缩
```shell
mysqldump -h主机名 -P端口 -u用户名 -p密码 --database 数据库名 | gzip > 文件名.sql.gz

例如： 
mysqldump -h 192.168.1.100 -p 3306 -uroot -ppassword --database cmdb | gzip > /data/backup/cmdb.sql.gz
```

## npm mysqldump
https://www.npmjs.com/package/mysqldump

## 其他导出数据的方式
```
SELECT * FROM gm_cdkey_rule INTO DUMPFILE '/var/lib/mysql/gm_cdkey_rule.text';
SELECT * FROM gm_cdkey_rule INTO OUTFILE '/var/lib/mysql/gm_cdkey_rule.text';
```
格式可能比较乱
