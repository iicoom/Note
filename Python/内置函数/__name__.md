## __name__

首先需要了解 __name__ 是属于 python 中的内置类属性，就是它会天生就存在与一个 python 程序中，代表对应程序名称。

// pcRequests.py
```
import requests 

class requests(object):
    def __init__(self,url):
        self.url=url
        self.result=self.getHTMLText(self.url)
    def getHTMLText(url):
        try:
            r=requests.get(url,timeout=30)
            r.raise_for_status()
            r.encoding=r.apparent_encoding
            return r.text
        except:
            return "This is a error."
print("__name__:", __name__)
```

结果：
__name__: __main__
Process finished with exit code 0


当这个 pcRequests.py 作为模块被调用时，则它的 __name__ 就是它自己的名字：

import pcRequestspcRequestsc=pcRequestsc.__name__

结果：
'pcRequests'

看到这里应该能明白，自己的 __name__ 在自己用时就是 main，当自己作为模块被调用时就是自己的名字，就相当于：我管自己叫我自己，但是在朋友眼里我就是小仙女一样。