## mysqldump

mysqldump -u root -p --databases DB_NAME >databasename.sql

```
- To export a MySQL database to a dump file without any data, you can use —no-data in mysqldump:
mysqldump -u <user_name> -h <server> -p --no-data <db_name> > schema.sql

- Or you can use -d to empty all the tables before dumping:
mysqldump -u <user_name> -h <server> -p -d <db_name> > schema.sql

- If you want to extract a specific table with schema only:
mysqldump -u <user_name> -h <server> -p --no-data <db_name> <table_name> > schema.sql
```

## npm mysqldump
https://www.npmjs.com/package/mysqldump

## 其他导出数据的方式
```
SELECT * FROM gm_cdkey_rule INTO DUMPFILE '/var/lib/mysql/gm_cdkey_rule.text';
SELECT * FROM gm_cdkey_rule INTO OUTFILE '/var/lib/mysql/gm_cdkey_rule.text';
```
格式可能比较乱
