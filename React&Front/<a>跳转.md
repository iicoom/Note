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

