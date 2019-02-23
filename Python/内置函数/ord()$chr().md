ord() 函数是 chr() 函数（对于8位的ASCII字符串）或 unichr() 函数（对于Unicode对象）的配对函数

```
>>>ord('a')
97
>>> ord('b')
98
>>> ord('c')
99
```

chr() 用一个范围在 range（256）内的（就是0～255）整数作参数，返回一个对应的字符。

```
>>>print chr(0x30), chr(0x31), chr(0x61)   # 十六进制
0 1 a
>>> print chr(48), chr(49), chr(97)         # 十进制
0 1 a
```