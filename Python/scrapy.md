### scrapy
➜  Spider scrapy list
quotes
spider1

How to run our spider
To put our spider to work, go to the project’s top level directory and run:
```
scrapy crawl quotes
```

Storing the scraped data
```
scrapy crawl quotes -o quotes.json
```

### scrapy 工程下的setting
在scrapy中创建项目以后，在settings文件中有这样的一条默认开启的语句：

Obey robots.txt rules
ROBOTSTXT_OBEY = True

通俗来说， robots.txt 是遵循 Robot协议 的一个文件，它保存在网站的服务器中，它的作用是，告诉搜索引擎爬虫，本网站哪些目录下的网页 不希望 你进行爬取收录。在Scrapy启动后，会在第一时间访问网站的 robots.txt 文件，然后决定该网站的爬取范围。

当然，我们并不是在做搜索引擎，而且在某些情况下我们想要获取的内容恰恰是被 robots.txt 所禁止访问的。所以，某些时候，我们就要将此配置项设置为 False ，拒绝遵守 Robot协议 ！

### 引入main.py实现断点调试
```
from scrapy.cmdline import execute

import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
execute(["scrapy", "crawl", "jobbole"])
```

### XPath 语法
http://www.w3school.com.cn/xpath/xpath_syntax.asp

浏览器中获取元素的XPath-元素上右击复制XPath
```
//*[@id="course"]
```
如果使用标签选择器可能会因为js渲染页面后结构发生改变拿不到值，id选择器似乎可以避免这个问题

