##  SELECT 语句
SELECT 语句用于从数据库中选取数据。

结果被存储在一个结果表中，称为结果集。
SELECT column_name,column_name
FROM table_name;


## WHERE 子句
如需有条件地从表中选取数据，可将 WHERE 子句添加到 SELECT 语句。

SELECT 列名称 FROM 表名称 WHERE 列 运算符 值

下面的运算符可在 WHERE 子句中使用：

操作符	描述
=		等于
<>		不等于
>		大于
<		小于
>=		大于等于
<=		小于等于
BETWEEN	在某个范围内
LIKE	搜索某种模式

注释：在某些版本的 SQL 中，操作符 <> 可以写为 !=。

如果只希望选取居住在城市 "Beijing" 中的人，我们需要向 SELECT 语句添加 WHERE 子句：
```
SELECT * FROM Persons WHERE City='Beijing'
```
"Persons" 表
LastName	FirstName	Address	City	Year
Adams	John	Oxford Street	London	1970
Bush	George	Fifth Avenue	New York	1975
Carter	Thomas	Changan Street	Beijing	1980
Gates	Bill	Xuanwumen 10	Beijing	1985

结果：
LastName	FirstName	Address			City	Year
Carter	    Thomas		Changan Street	Beijing	1980
Gates	    Bill		Xuanwumen10		Beijing	1985

引号的使用
请注意，我们在例子中的条件值周围使用的是单引号。

SQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）。如果是数值，请不要使用引号。

### SQL FOREIGN KEY
http://www.runoob.com/sql/sql-foreignkey.html
"Persons" 表：

P_Id	LastName	FirstName	Address	     City
1		HansenOla	Timoteivn   10	         Sandnes
2		Svendson	Tove	   Borgvn 23	 Sandnes
3		Pettersen	Kari	   Storgt 20	 Stavanger

"Orders" 表：

O_Id	OrderNo	P_Id
1		77895	3
2		44678	3
3		22456	2
4		24562	1

请注意，"Orders" 表中的 "P_Id" 列指向 "Persons" 表中的 "P_Id" 列。

"Persons" 表中的 "P_Id" 列是 "Persons" 表中的 PRIMARY KEY。

"Orders" 表中的 "P_Id" 列是 "Orders" 表中的 FOREIGN KEY。

FOREIGN KEY 约束用于预防破坏表之间连接的行为。

FOREIGN KEY 约束也能防止非法数据插入外键列，因为它必须是它指向的那个表中的值之一。

CREATE TABLE 时的 SQL FOREIGN KEY 约束
下面的 SQL 在 "Orders" 表创建时在 "P_Id" 列上创建 FOREIGN KEY 约束：
```
CREATE TABLE Orders
(
O_Id int NOT NULL,
OrderNo int NOT NULL,
P_Id int,
PRIMARY KEY (O_Id),
FOREIGN KEY (P_Id) REFERENCES Persons(P_Id)
)
```

### 两张表关联查询

1. analyses
2. roadmap

```
SELECT `analyses`.*,`roadmap`.* FROM `analyses`,`roadmap` WHERE `analyses`.roadmap_id=`roadmap`.id
```
结果：analyses的所有数据 和roadmap的所有字段组合

选择analyses 和 roadmap的部分字段
```
SELECT `analyses`.*,`roadmap`.sections, `roadmap`.title, `roadmap`.desc FROM `analyses`,`roadmap` WHERE `analyses`.roadmap_id=`roadmap`.id
```

只选择一条数据
```
SELECT `analyses`.*,`roadmap`.sections, `roadmap`.title, `roadmap`.desc FROM `analyses`,`roadmap` WHERE `analyses`.roadmap_id=`roadmap`.id AND `analyses`.id=1
```

### SQL LIKE 操作符
LIKE 操作符用于在 WHERE 子句中搜索列中的指定模式。

SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;

表中有2条数据
1	1	1	1	地图1			2	0	2019-04-07 17:57:11	2019-04-07 17:57:16
2	1	1	1	地图1+updated	2	0	2019-04-07 17:57:28	2019-04-07 22:21:15
```
SELECT name,power_score FROM analyses WHERE name LIKE '%ed';
```
结果：地图1+updated	2

提示："%" 符号用于在模式的前后定义通配符（缺省字母）
http://www.runoob.com/sql/sql-like.html




