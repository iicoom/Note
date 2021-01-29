## [COUNT() ](https://www.runoob.com/sql/sql-func-count.html)
```sql
SELECT COUNT(column_name) FROM table_name;
```

### COUNT(*)
COUNT(*) 函数返回表中的记录数：

SELECT COUNT(*) FROM table_name;

### count(1)
count(1)的作用，就是统计在分组中，每一组对应的行数或项数。效率和作用和count(*)相同。
Count（）中的表达式是否为NULL，如果为NULL则不计数，而非NULL则会计数。
也就是说count(1) 和count（‘anything’）的效果是一样的。

## count SUM DISTINCT
```sql
SELECT salesman_no, salesman_name, total_received_fee,
count(3) orderCount,
SUM(total_fee) totalReceivedFee,
count(DISTINCT student_id) studentCount
FROM `crm_order`
GROUP BY salesman_no
HAVING total_received_fee = 0;
```