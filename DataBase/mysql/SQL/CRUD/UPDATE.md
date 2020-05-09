## UPDATE
以下是 UPDATE 命令修改 MySQL 数据表数据的通用 SQL 语法：
```sql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]

mysql> UPDATE runoob_tbl SET runoob_title='学习 C++' WHERE runoob_id=3;
Query OK, 1 rows affected (0.01 sec)


mysql> UPDATE gm_function_switch SET payment=1, localPayment=1 WHERE id=1;
UPDATE gm_function_switch SET payment=1, localPayment=1 WHERE id=1
> Affected rows: 1
> 时间: 0.001s
```

```js
let deleteSql = 'UPDATE gm_cdkey_rule SET is_delete=?, update_time=? WHERE id=?;';
let parameters = [0, moment().format('YYYY-MM-DD HH:mm:ss'), id];
await sqlStringQuery(deleteSql, parameters);
```