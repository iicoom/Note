# open\(\)

Python open\(\) 方法用于打开一个文件，并返回文件对象，在对文件进行处理过程都需要使用到这个函数，如果该文件无法被打开，会抛出 OSError。

open\(file, mode='r'\)

open\(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None\)

```text
with open('../../Files/jobs.csv', 'w', encoding="gb18030") as f:
    text = ''
    text += ','.join(labels + labels2)

    for name in files:
        if name.find('.json') > -1:
            text += '\n'
            text += read_get('../../Files/source/' + name)

    f.write(text)
    f.close()
    print('>>OK!')
```

