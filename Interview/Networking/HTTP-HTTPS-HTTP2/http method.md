## HTTP request method
https://www.cnblogs.com/chris-oil/p/8042677.html
前的工作中，HEAD、PUT、DELETE我是真的没有见过……但是OPTIONS几乎天天都会遇到。本地环境跑公司项目的时候，每次POST之前，为啥浏览器还偷偷给我来一次没有返回的OPTIONS请求？

原来，浏览器在某些请求中，在正式通信前会增加一次HTTP查询请求，称为"预检"请求（preflight）。

览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

Request Method: OPTIONS
Status Code: 204 No Content

HTTP Request Method（十五种）
序号  方法    描述
1     GET   请求指定的页面信息，并返回实体主体。
2     HEAD  类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
3     POST  向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
4     PUT 从客户端向服务器传送的数据取代指定的文档的内容。
5     DELETE  请求服务器删除指定的页面。
6     CONNECT HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
7     OPTIONS 允许客户端查看服务器的性能。
8     TRACE 回显服务器收到的请求，主要用于测试或诊断。
9     PATCH 实体中包含一个表，表中说明与该URI所表示的原内容的区别。
10    MOVE  请求服务器将指定的页面移至另一个网络地址。
11    COPY  请求服务器将指定的页面拷贝至另一个网络地址。
12    LINK  请求服务器建立链接关系。
13    UNLINK  断开链接关系。
14    WRAPPED 允许客户端发送经过封装的请求。
15    Extension-mothed  在不改动协议的前提下，可增加另外的方法。

区分PATCH与PUT、POST方法:
在HTTP原本的定义中[RFC2616]，用于上传数据的方法只有POST和PUT。后来鉴于POST和PUT语义和功能上的不足，又加入了PATCH方法[RFC5789]。POST与PUT方法的差异是显而易见的，而PUT与PATCH方法就比较相似，但它们的用法却完全不同。

PUT方法和PATCH方法所请求的目标地址都是直接指向资源的，而POST方法请求的目标是一个行为处理器，这点很容易区分。但PUT和PATCH呢？根据规范中所介绍的PUT用于替换资源，而PATCH用于更新部分资源。