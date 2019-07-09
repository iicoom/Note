> Python is a programming language that lets you work quickly
and integrate systems more effectively.

## Python注释
python中单行注释采用 # 开头。

python 中多行注释使用三个单引号(''')或三个双引号(""")。
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""

## Python 函数
函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。

以下为一个简单的Python函数，它将一个字符串作为传入参数，再打印到标准显示设备上。
```
def printme( str ):
   "打印传入的字符串到标准显示设备上"
   print str
   return
```

## Python 面向对象
Python从设计之初就已经是一门面向对象的语言，正因为如此，在Python中创建一个类和对象是很容易的。

```
class Employee:
   '所有员工的基类'
   empCount = 0
 
   def __init__(self, name, salary):
      self.name = name
      self.salary = salary
      Employee.empCount += 1
   
   def displayCount(self):
     print "Total Employee %d" % Employee.empCount
 
   def displayEmployee(self):
      print "Name : ", self.name,  ", Salary: ", self.salary


"创建 Employee 类的第一个对象"
emp1 = Employee("Zara", 2000)
"创建 Employee 类的第二个对象"
emp2 = Employee("Manni", 5000)
emp1.displayEmployee()
emp2.displayEmployee()
print "Total Employee %d" % Employee.empCount

运行结果：
Name :  Zara ,Salary:  2000
Name :  Manni ,Salary:  5000
Total Employee 2
```
empCount 变量是一个类变量，它的值将在这个类的所有实例之间共享。你可以在内部类或外部类使用 Employee.empCount 访问。

第一种方法__init__()方法是一种特殊的方法，被称为类的构造函数或初始化方法，当创建了这个类的实例时就会调用该方法

self 代表类的实例，self 在定义类的方法时是必须有的，虽然在调用时不必传入相应的参数。

**类的方法与普通的函数只有一个特别的区别——它们必须有一个额外的第一个参数名称, 按照惯例它的名称是 self。**


## python脚本运行的几种方式

// hello.py
print ("Hello, Python!");

$ python ./hello.py
hello,python




