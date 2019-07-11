## str.strip([chars]);

str = "00000003210Runoob01230000000"; 
print str.strip('0');  # 去除首尾字符 0

>>> print(str.strip('0'))
3210Runoob0123



Python lstrip() 方法用于截掉字符串左边的空格或指定字符。
## str.lstrip([chars])

chars --指定截取的字符。


>>> str = "     this is string example....wow!!!     ";

>>> print(str)
     this is string example....wow!!!

>>> print(str.lstrip().rstrip())
this is string example....wow!!!

>>> print(len(str.lstrip().rstrip()))
32


>>> str = "88888888this is string example....wow!!!8888888";
>>> print(str.lstrip('8'))
this is string example....wow!!!8888888