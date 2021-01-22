##  SELECT 语句
SELECT 语句用于从数据库中选取数据。

结果被存储在一个结果表中，称为结果集。
SELECT column_name,column_name
FROM table_name;


## WHERE 子句
SELECT * FROM tableName WHERE condition;

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

```sql
mysql> select * from users;
+----+------------+-------------+----------+-----------------------------------------------------------------------+--------------+---------------------+---------------------+
| id | name       | phone       | password | avatar_url                                                            | reg_platform | create_time         | update_time         |
+----+------------+-------------+----------+-----------------------------------------------------------------------+--------------+---------------------+---------------------+
|  1 | Tom        | 18231088176 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 16:22:53 | 2020-06-29 17:26:11 |
|  4 | Jack       | 18231088175 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 16:34:55 | NULL                |
|  5 | Michelle   | 18231088174 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 16:37:31 | NULL                |
|  7 | niubi      | 18231088172 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 17:43:22 | NULL                |
|  8 | 123@qq.com | 18231088171 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-29 12:13:23 | 2020-06-29 17:28:46 |
| 15 | 123@qq.com | 18231088165 | 123456   |                                                                       |            0 | 2020-06-29 20:57:57 | NULL                |
| 16 | 123@qq.com | 18231088164 | 123456   |                                                                       |            0 | 2020-06-29 21:01:29 | NULL                |
+----+------------+-------------+----------+-----------------------------------------------------------------------+--------------+---------------------+---------------------+
7 rows in set (0.00 sec)

mysql> select * from users where avatar_url != '';
+----+------------+-------------+----------+-----------------------------------------------------------------------+--------------+---------------------+---------------------+
| id | name       | phone       | password | avatar_url                                                            | reg_platform | create_time         | update_time         |
+----+------------+-------------+----------+-----------------------------------------------------------------------+--------------+---------------------+---------------------+
|  1 | Tom        | 18231088176 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 16:22:53 | 2020-06-29 17:26:11 |
|  4 | Jack       | 18231088175 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 16:34:55 | NULL                |
|  5 | Michelle   | 18231088174 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 16:37:31 | NULL                |
|  7 | niubi      | 18231088172 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-28 17:43:22 | NULL                |
|  8 | 123@qq.com | 18231088171 | 123456   | http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg |            0 | 2020-06-29 12:13:23 | 2020-06-29 17:28:46 |
+----+------------+-------------+----------+-----------------------------------------------------------------------+--------------+---------------------+---------------------+
5 rows in set (0.00 sec)

-- 计数
mysql> select count(*) as total from users where avatar_url != '';
+-------+
| total |
+-------+
|     5 |
+-------+
1 row in set (0.01 sec)
```

引号的使用
请注意，我们在例子中的条件值周围使用的是单引号。

SQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）。如果是数值，请不要使用引号。

mysql> select username,age,sex from qiushi where id=66;
+--------------+------+-----+
| username     | age  | sex |
+--------------+------+-----+
| 无书斋主     |   41 | man |
+--------------+------+-----+
1 row in set (0.19 sec)

mysql> select username,age,sex from qiushi where `username`="无书斋主";
+--------------+------+-----+
| username     | age  | sex |
+--------------+------+-----+
| 无书斋主     |   41 | man |
| 无书斋主     |   41 | man |
+--------------+------+-----+
2 rows in set (0.18 sec)

### AND IN OR Operators
Sequelize
```
Project.findOne({
  where: {
    name: 'a project',
    [Op.or]: [
      { id: [1,2,3] },
      { id: { [Op.gt]: 10 } }
    ]
  }
})

Project.findOne({
  where: {
    name: 'a project',
    id: {
      [Op.or]: [
        [1,2,3],
        { [Op.gt]: 10 }
      ]
    }
  }
})

SELECT *
FROM `Projects`
WHERE (
  `Projects`.`name` = 'a project'
   AND (`Projects`.`id` IN (1,2,3) OR `Projects`.`id` > 10)
)
LIMIT 1;
```

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





