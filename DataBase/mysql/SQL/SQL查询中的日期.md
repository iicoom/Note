[SQL Date 函数](https://www.w3school.com.cn/sql/sql_dates.asp)

## 实例
OrderId	ProductName	    OrderDate
1	    computer	    2008-12-26 16:23:55
2	    printer	        2008-12-26 10:45:26
3	    electrograph	2008-11-12 14:12:08
4	    telephone	    2008-10-19 12:56:10

```sql
SELECT * FROM Orders WHERE OrderDate > '2008-12-26 10:45:26'
```

使用datetime的日期字段，使用时间戳比较是不准的，如下
```sql
SELECT * FROM Orders WHERE OrderDate > 1611629260000
```

## 大于当前日期
[MySQL Date 函数](https://www.w3school.com.cn/sql/func_now.asp)

```sql
SELECT * 
FROM crm_contact_pending ccp
INNER JOIN crm_follow cf
ON ccp.last_follow_id = cf.id
WHERE
cf.next_contact_time >= NOW()
```

```sql
SELECT NOW()

2021-01-22 16:12:22
```
