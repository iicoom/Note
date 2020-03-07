## a标签href不跳转 禁止跳转

当页面中a标签不需要任何跳转时，从原理上来讲，可分如下两种方法：

1. 标签属性href，使其指向空或不返回任何内容。如：
<a href="javascript:void(0);" >点此无反应javascript:void(0)</a>

<a href="javascript:;" >点此无反应javascript:</a>

javascript:void(0) 仅仅表示一个死链接

2. 标签事件onclick，阻止其默认行为。如：
<a href="" onclick="return false;">return false;</a>

<a href="#" onclick="return false;">return false;</a>

注意：只有一个href="#"是不可以的。

## Eslint Rule
'no-script-url': 0,

## rel="noopener noreferrer"
今天新学到一个安全知识，就是a标签target为_blank时，要加上rel="noopener noreferrer"。

为啥呢？我在网上搜索，http://www.cnblogs.com/ilinuxer/p/5245983.html

比如这一篇，发现window.open这个可以获得父窗口的很多参数，所以有获得原网站的部分权限的说法https://www.cnblogs.com/tangyuu/p/6912044.html

所以在a标签下添加rel="noopener noreferrer"来防止钓鱼网站，因为它获取的window.opener的值为null
