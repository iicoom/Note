## 打印到屏幕
最简单的输出方法是用print语句，你可以给它传递零个或多个用逗号隔开的表达式。此函数把你传递的表达式转换成一个字符串表达式，并将结果写到标准输出如下：
```
#!/usr/bin/python
# -*- coding: UTF-8 -*- 

print "Python 是一个非常棒的语言，不是吗？"
```

## 打开和关闭文件
现在，您已经可以向标准输入和输出进行读写。现在，来看看怎么读写实际的数据文件。

Python 提供了必要的函数和方法进行默认情况下的文件基本操作。你可以用 file 对象做大部分的文件操作。

### open 函数
http://www.runoob.com/python/python-files-io.html
你必须先用Python内置的open()函数打开一个文件，创建一个file对象，相关的方法才可以调用它进行读写。

语法：
```
file object = open(file_name [, access_mode][, buffering])

file_object = open(uplaod_file_path, 'rb')
```
rb 以二进制只读方式打开文件

