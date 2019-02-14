## urllib
Python2和Python3中urllib模块中所提供的urlencode的包位置有些不同。

Python2
```
import urllib
import urllib2

values = {"username":"*****","password":"******"}
data = urllib.urlencode(values) 
url = "https://accounts.douban.com/login"
request = urllib2.Request(url,data)
response = urllib2.urlopen(request)
print response.read()
```

Python3
中也有urllib和urllib3两个库，其中urllib几乎是Python2中urllib和urllib2两个模块的集合，所以我们最常用的urllib模块，而urllib3则作为一个拓展模块使用。
```
from urllib import request
from urllib import parse
from urllib.request import urlopen

values = {'username': '*****', 'password': '*****'}
data = parse.urlencode(values).encode('utf-8')  # 提交类型不能为str，需要为byte类型
url = 'https://accounts.douban.com/login'
request = request.Request(url, data)
response = urlopen(request)
print(response.read().decode())
```