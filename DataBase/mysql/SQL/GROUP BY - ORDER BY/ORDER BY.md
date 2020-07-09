> ORDER BY 关键字用于对结果集按照一个列或者多个列进行排序。
> ORDER BY 关键字默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，您可以使用 DESC 关键字。

```sql
-- 语法
SELECT column_name,column_name
FROM table_name
ORDER BY column_name,column_name ASC|DESC;

mysql> SELECT item,    Sum(( price * quantity )) AS totalSaleAmount FROM   sales GROUP  BY item HAVING totalSaleAmount >= 100 ORDER  BY totalSaleAmount;
+------+-----------------+
| item | totalSaleAmount |
+------+-----------------+
| abc  |            1275 |
| def  |            1545 |
| xyz  |            1600 |
+------+-----------------+
3 rows in set (0.00 sec)
```
[参考例](../HAVING.md)