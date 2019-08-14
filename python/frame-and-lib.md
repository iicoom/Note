# frame&lib

> Python framework

## pip3 install

➜ ~ pip3 install scrapy

> Python library

照Web发展的趋势来看，这种形式的页面越来越多。网页的原始HTML文档不会包含任何数据，数据都是通过Ajax统一加载后再呈现出来的，这样在Web开发上可以做到前后端分离，而且降低服务器直接渲染页面带来的压力。

## requests

Requests库是一个阻塞式HTTP请求库，当我们发出一个请求后，程序会一直等待服务器响应，直到得到响应后，程序才会进行下一步处理

➜ ~ pip3 install requests

➜ ~ python3 Python 3.7.2 \(default, Jan 13 2019, 12:50:01\) \[Clang 10.0.0 \(clang-1000.11.45.5\)\] on darwin Type "help", "copyright", "credits" or "license" for more information.

> > > import requests
> > >
> > > 无报错，安装成功

## aiohttp

aiohttp就是一个提供异步Web服务的库，从Python 3.5版本开始，Python中加入了async/await关键字，使得回调的写法更加直观和人性化。 维护一个代理池时，利用异步方式检测大量代理的运行状况，会极大地提升效率.

➜ ~ pip3 install aiohttp

## selenium

Selenium是一个自动化测试工具，利用它我们可以驱动浏览器执行特定的动作，如点击、下拉等操作。对于一些JavaScript渲染的页面来说，这种抓取方式非常有效。

> 抓取网页代码之后，下一步就是从网页中提取信息。提取信息的方式有多种多样，可以使用正则来提取，但是写起来相对比较烦琐。这里还有许多强大的解析库，如lxml、Beautiful Soup、pyquery等。此外，还提供了非常强大的解析方法，如XPath解析和CSS选择器解析等，利用它们，我们可以高效便捷地从网页中提取有效信息。

## beautifulsoup

➜ ~ pip3 install beautifulsoup4

```text
➜  ~ python3
Python 3.7.2 (default, Jan 13 2019, 12:50:01)
[Clang 10.0.0 (clang-1000.11.45.5)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> from bs4 import BeautifulSoup
>>> soup = BeautifulSoup('<p>Hello</p>', 'lxml')
>>> print(soup.p.string)
Hello
>>>
```

> 在爬虫过程中，难免会遇到各种各样的验证码，而大多数验证码还是图形验证码，这时候我们可以直接用OCR来识别。 tesserocr是Python的一个OCR识别库，但其实是对tesseract做的一层Python API封装，所以它的核心是tesseract。因此，在安装tesserocr之前，我们需要先安装tesseract。

## tesserocr

在Mac下，我们首先使用Homebrew安装ImageMagick和tesseract库： brew install imagemagick brew install tesseract --all-languages

接下来再安装tesserocr即可： pip3 install tesserocr pillow

