# 数据类型

[https://www.runoob.com/python3/python3-data-type.html](https://www.runoob.com/python3/python3-data-type.html)

Python3 的六个标准数据类型中：

* 不可变数据（3 个）：Number（数字）、String（字符串）、Tuple（元组）；
* 可变数据（3 个）：List（列表）、Dictionary（字典）、Set（集合）。

```text
>>> a, b, c, d = 20, 5.5, True, 4+3j
>>> print(type(a), type(b), type(c), type(d))
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

## List（列表）

List（列表） 是 Python 中使用最频繁的数据类型。

list = \[ 'abcd', 786 , 2.23, 'runoob', 70.2 \]

print \(list\[1:3\]\) \# 从第二个开始输出到第三个元素 \[786, 2.23\]

## Set（集合）

student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}

print\(student\) \# 输出集合，重复的元素被自动去掉 {'Rose', 'Mary', 'Jack', 'Tom', 'Jim'}

> > > print\('Rose' in student\) True

## Dictionary（字典）

tinydict = {'name': 'runoob','code':1, 'site': 'www.runoob.com'}

字典类型也有一些内置的函数，例如clear\(\)、keys\(\)、values\(\)等。

> > > print\(tinydict.name\) Traceback \(most recent call last\): File "", line 1, in  AttributeError: 'dict' object has no attribute 'name' print\(tinydict\['name'\]\) runoob print\(tinydict.keys\(\)\) dict\_keys\(\['name', 'code', 'site'\]\) print\(tinydict.values\(\)\) dict\_values\(\['runoob', 1, 'www.runoob.com'\]\)

