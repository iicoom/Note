# dict

字典是另一种可变容器模型，且可存储任意类型对象。

```text
>>> dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
>>> print(dict.Name)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'dict' object has no attribute 'Name'
>>> print(dict['Name'])
Zara


向字典添加新内容的方法是增加新的键/值对，修改或删除已有键/值对如下实例:
>>> dict['Age']=8
>>> dict['School']='Beida'
>>> print(dict)
{'Name': 'Zara', 'Age': 8, 'Class': 'First', 'School': 'Beida'}

>>> len(dict)
4
>>> del dict['Class']
>>> print(dict)
{'Name': 'Zara', 'Age': 8, 'School': 'Beida'}

>>> dict.clear()
>>> print(dict)
{}
>>>
```

