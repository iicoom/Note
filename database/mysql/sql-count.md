# SQL COUNT

> COUNT\(column\_name\) 函数返回指定列的值的数目（NULL 不计入）：

```text
SELECT COUNT(column_name) FROM table_name

COUNT(*) 函数返回表中的记录数：

SELECT COUNT(*) FROM table_name
```

SQL COUNT\(column\_name\) 实例 我们拥有下列 "Orders" 表： O\_Id OrderDate OrderPrice Customer 1 2008/12/29 1000 Bush 2 2008/11/23 1600 Carter 3 2008/10/05 700 Bush 4 2008/09/28 300 Bush 5 2008/08/06 2000 Adams 6 2008/07/21 100 Carter

现在，我们希望计算客户 "Carter" 的订单数。

我们使用如下 SQL 语句：

```text
SELECT COUNT(Customer) AS CustomerNilsen FROM Orders
WHERE Customer='Carter'
```

以上 SQL 语句的结果是 2，因为客户 Carter 共有 2 个订单：

CustomerNilsen 2

```text
SQL COUNT(*) 实例
如果我们省略 WHERE 子句，比如这样：

SELECT COUNT(*) AS NumberOfOrders FROM Orders
```

结果集类似这样：

NumberOfOrders 6 这是表中的总行数。

