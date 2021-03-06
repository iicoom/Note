AND 和 OR 运算符
AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来。

如果第一个条件和第二个条件都成立，则 AND 运算符显示一条记录。

如果第一个条件和第二个条件中只要有一个成立，则 OR 运算符显示一条记录。

原始的表 (用在例子中的)：
LastName	FirstName	Address			City
Adams		John		Oxford Street	London
Bush		George		Fifth Avenue	New York
Carter		Thomas		Changan Street	Beijing
Carter		William		Xuanwumen 10	Beijing

## AND 运算符实例
使用 AND 来显示所有姓为 "Carter" 并且名为 "Thomas" 的人：
```
SELECT * FROM Persons WHERE FirstName='Thomas' AND LastName='Carter'
```

结果：
LastName	FirstName	Address	City
Carter	Thomas	Changan Street	Beijing


## OR 运算符实例
使用 OR 来显示所有姓为 "Carter" 或者名为 "Thomas" 的人：
```
SELECT * FROM Persons WHERE firstname='Thomas' OR lastname='Carter'
```
结果：
LastName	FirstName	Address	City
Carter	Thomas	Changan Street	Beijing
Carter	William	Xuanwumen 10	Beijing

## 结合 AND 和 OR 运算符
我们也可以把 AND 和 OR 结合起来（使用圆括号来组成复杂的表达式）:
```
SELECT * FROM Persons WHERE (FirstName='Thomas' OR FirstName='William')
AND LastName='Carter'
```
结果：
LastName	FirstName	Address	City
Carter	Thomas	Changan Street	Beijing
Carter	William	Xuanwumen 10	Beijing




