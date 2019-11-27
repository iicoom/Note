> SQL join 用于根据两个或多个表中的列之间的关系，从这些表中查询数据。
http://www.w3school.com.cn/sql/sql_join.asp

Join 和 Key
有时为了得到完整的结果，我们需要从两个或更多的表中获取结果。我们就需要执行 join。

## Key
请看 "Persons" 表：
Id_P	LastName	FirstName	Address	        City
1	     Adams	     John	    Oxford Street	London
2	     Bush	     George	    Fifth Avenue	New York
3	     Carter	     Thomas	    Changan Street	Beijing

请注意，"Id_P" 列是 Persons 表中的的主键。这意味着没有两行能够拥有相同的 Id_P。
即使两个人的姓名完全相同，Id_P 也可以区分他们。

接下来请看 "Orders" 表：
Id_O	OrderNo	  Id_P
1	  	77895	  3
2	  	44678	  3
3	  	22456	  1
4	  	24562	  1
5	  	34764	  65

请注意，"Id_O" 列是 Orders 表中的的主键，同时，"Orders" 表中的 "Id_P" 列用于引用 "Persons" 表中的人，
而无需使用他们的确切姓名。

请留意，"Id_P" 列把上面的两个表联系了起来。

引用两个表
我们可以通过引用两个表的方式，从两个表中获取数据：

谁订购了产品，并且他们订购了什么产品？
```sql
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons, Orders
WHERE Persons.Id_P = Orders.Id_P 
```

结果集：

LastName	FirstName	OrderNo
Adams		John		22456
Adams		John		24562
Carter		Thomas		77895
Carter		Thomas		44678

## Join
除了上面的方法，我们也可以使用关键词 JOIN 来从两个表中获取数据。

如果我们希望列出所有人的定购，可以使用下面的 SELECT 语句：
```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
INNER JOIN Orders
ON Persons.Id_P = Orders.Id_P
ORDER BY Persons.LastName
```
结果集：

LastName	FirstName	OrderNo
Adams	John	22456
Adams	John	24562
Carter	Thomas	77895
Carter	Thomas	44678

## 不同的 SQL JOIN
除了我们在上面的例子中使用的 INNER JOIN（内连接），我们还可以使用其他几种连接。

下面列出了您可以使用的 JOIN 类型，以及它们之间的差异。

JOIN: 如果表中有至少一个匹配，则返回行
LEFT JOIN: 即使右表中没有匹配，也从左表返回所有的行
RIGHT JOIN: 即使左表中没有匹配，也从右表返回所有的行
FULL JOIN: 只要其中一个表中存在匹配，就返回行

### SQL LEFT JOIN 关键字
LEFT JOIN 关键字会从左表 (table_name1) 那里返回所有的行，即使在右表 (table_name2) 中没有匹配的行。

LEFT JOIN 关键字语法
SELECT column_name(s)
FROM table_name1
LEFT JOIN table_name2 
ON table_name1.column_name=table_name2.column_name
注释：在某些数据库中， LEFT JOIN 称为 LEFT OUTER JOIN。

左连接（LEFT JOIN）实例
现在，我们希望列出所有的人，以及他们的定购 - 如果有的话。

您可以使用下面的 SELECT 语句：
```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
LEFT JOIN Orders
ON Persons.Id_P=Orders.Id_P
ORDER BY Persons.LastName
```
结果集：

LastName	FirstName	OrderNo
Adams		John		22456
Adams		John		24562
Carter		Thomas		77895
Carter		Thomas		44678
Bush		George	 
LEFT JOIN 关键字会从左表 (Persons) 那里返回所有的行，即使在右表 (Orders) 中没有匹配的行。

### SQL RIGHT JOIN 关键字
RIGHT JOIN 关键字会右表 (table_name2) 那里返回所有的行，即使在左表 (table_name1) 中没有匹配的行。

```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
RIGHT JOIN Orders
ON Persons.Id_P=Orders.Id_P
ORDER BY Persons.LastName
```
结果集：

LastName	FirstName	OrderNo
Adams		John		22456
Adams		John		24562
Carter		Thomas		77895
Carter		Thomas		44678
 	 					34764
RIGHT JOIN 关键字会从右表 (Orders) 那里返回所有的行，即使在左表 (Persons) 中没有匹配的行。

### 全连接（FULL JOIN）实例
现在，我们希望列出所有的人，以及他们的定单，以及所有的定单，以及定购它们的人。

您可以使用下面的 SELECT 语句：
```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
FULL JOIN Orders
ON Persons.Id_P=Orders.Id_P
ORDER BY Persons.LastName
```
结果集：

LastName	FirstName	OrderNo
Adams		John		22456
Adams		John		24562
Carter		Thomas		77895
Carter		Thomas		44678
Bush		George	 
 	 					34764
FULL JOIN 关键字会从左表 (Persons) 和右表 (Orders) 那里返回所有的行。如果 "Persons" 中的行在表 "Orders" 中没有匹配，或者如果 "Orders" 中的行在表 "Persons" 中没有匹配，这些行同样会列出。








