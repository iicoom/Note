[HTTP 协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
## http协议
### 请求头、响应头信息
下面是一个1.0版的HTTP请求的例子。
```
GET / HTTP/1.0
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```
客户端请求的时候，可以使用Accept字段声明自己可以接受哪些数据格式。
Accept: */*

服务器的回应如下。
```
HTTP/1.0 200 OK 
Content-Type: text/plain
Content-Length: 137582
Expires: Thu, 05 Dec 1997 16:00:00 GMT
Last-Modified: Wed, 5 August 1996 15:55:28 GMT
Server: Apache 0.84

<html>
  <body>Hello World</body>
</html>
```
下面是一些常见的Content-Type字段的值。
text/plain
text/html
text/css
image/jpeg
image/png
image/svg+xml
audio/mp4
video/mp4
application/javascript
application/pdf
application/zip
application/atom+xml

### antd request封装
```
export default function request(url, options) {
  const defaultOptions = {
    // credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (!newOptions.data) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
  }
  newOptions.headers = {
    Authorization: `token ${getToken()}`,
    ...newOptions.headers,
  };
  console.log(newOptions)
}
```
//console.log(newOptions) =>

{method: "GET", params: {…}, headers: {…}}
headers
:
{Authorization: "token TnH1plIiC6rVdtt12ja40pY17ZMx7eRE", Accept: "application/json", Content-Type: "application/json; charset=utf-8"}
method
:
"GET"
params
:
{pageSize: 15, createTime: undefined, user_id: undefined, orderState: undefined, page: undefined, …}
__proto__
:
Object

对params的处理
```
if (params) {
    console.log('request-params');
    _url = `${url}?${stringify(params, { skipNulls: true })}`;
    console.log(_url);
  }
```
//m.yunfarm.cn/cloud_ranch/v2/api/order/appointment?pageSize=15&size=15

[【Web基础】HTTP长连接和短连接以及推送技术原理](http://blog.csdn.net/freewaywalker/article/details/50067757)
## HTTP长连接和短连接
1. HTTP协议与TCP/IP协议的关系
HTTP的长连接和短连接本质上是TCP长连接和短连接。HTTP属于应用层协议，在传输层使用TCP协议，在网络层使用IP协议。IP协议主要解决网络路由和寻址问题，TCP协议主要解决如何在IP层之上可靠的传递数据包，使在网络上的另一端收到发端发出的所有包，并且顺序与发出顺序一致。TCP有可靠，面向连接的特点。
2. 如何理解HTTP协议是无状态的
HTTP协议是无状态的，指的是协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。也就是说，打开一个服务器上的网页和你之前打开这个服务器上的网页之间没有任何联系。HTTP是一个无状态的面向连接的协议，无状态不代表HTTP不能保持TCP连接，更不能代表HTTP使用的是UDP协议（无连接）。
3. 什么是长连接、短连接？
在HTTP/1.0中，默认使用的是短连接。也就是说，浏览器和服务器每进行一次HTTP操作，就建立一次连接，但任务结束就中断连接。如果客户端浏览器访问的某个HTML或其他类型的 Web页中包含有其他的Web资源，如JavaScript文件、图像文件、CSS文件等；当浏览器每遇到这样一个Web资源，就会建立一个HTTP会话。

但从 HTTP/1.1起，默认使用长连接，用以保持连接特性。使用长连接的HTTP协议，会在响应头有加入这行代码： 
Connection:keep-alive

在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的 TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间。实现长连接要客户端和服务端都支持长连接。

HTTP协议的长连接和短连接，实质上是TCP协议的长连接和短连接。

## Android系统的推送和iOS的推送有什么区别：
首先我们必须知道，所有的推送功能必须有一个客户端和服务器的长连接，因为推送是由服务器主动向客户端发送消息，如果客户端和服务器之间不存在一个长连接那么服务器是无法来主动连接客户端的。因而推送功能都是基于长连接的基础是上的。

iOS长连接是由系统来维护的，也就是说苹果的iOS系统在系统级别维护了一个客户端和苹果服务器的长链接，iOS上的所有应用上的推送都是先将消息推送到苹果的服务器然后将苹果服务器通过这个系统级别的长链接推送到手机终端上，

Android的长连接是由每个应用各自维护的，但是Google也推出了和苹果技术架构相似的推送框架，C2DM,云端推送功能，但是由于Google的服务器不在中国境内，其他的原因你懂的。所以导致这个推送无法使用，Android的开发者不得不自己去维护一个长链接，于是每个应用如果都24小时在线，那么都得各自维护一个长连接，这种电量和流量的消耗是可想而知的。虽然国内也出现了各种推送平台，但是都无法达到只维护一个长连接这种消耗的级别。

## 推送的常见实现方式：
轮询（Pull）方式：即轮询（polling），客户端不断的查询服务器，检索新内容。

持久连接(Push)方式：即绑定（binding），客户端和服务器之间维持一个TCP/IP长连接，服务器向客户端push。

SMS(Push)方式：服务器又新内容时，发送一条类似短信的信令给客户端，客户端收到后从服务器中下载新内容，也就是SMS的推送方式。

苹果的推送系统和GoogleC2DM（Cloud to Device Messaging）推送系统其实都是在系统级别维护一个TCP/IP长连接，都是基于第二种的方式进行推送的。该方案可以解决由轮询带来的性能问题，但是还是会消耗手机的电池。iOS平台的推送服务之所以工作的很好，是因为每一台手机仅仅保持一个与服务器之间的连接，事实上GoogleC2DM也是这么工作的。

## 从一个http请求可以获取到的信息
1. 客户端IP 登录的时候用到
2. 客户端req.headers["user-agent"] 于cloud_ranch routes webcontrl
3. clientVersion = req.query.version;用于升级


## http状态码
[常用对照表](http://tool.oschina.net/commons?type=5)
204 '删除数据成功。'服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息。响应可能通过实体头部的形式，返回新的或更新后的元信息。如果存在这些头部信息，则应当与所请求的变量相呼应。

301，302 都是HTTP状态的编码，都代表着某个URL发生了转移，不同之处在于：

301 redirect: 301 代表永久性转移(Permanently Moved)，

302 redirect: 302 代表暂时性转移(Temporarily Moved )，

400 Bad Request 请求出现语法错误。 

403 Forbidden 资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。

405 Method Not Allowed 请求方法（GET、POST、HEAD、Delete、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新） 

504 错误是（网关超时）Nginx 服务器作为网关或代理，但是没有及时从上游服务器收到请求。

## HTTP request method
https://www.cnblogs.com/chris-oil/p/8042677.html
前的工作中，HEAD、PUT、DELETE我是真的没有见过……但是OPTIONS几乎天天都会遇到。本地环境跑公司项目的时候，每次POST之前，为啥浏览器还偷偷给我来一次没有返回的OPTIONS请求？

原来，浏览器在某些请求中，在正式通信前会增加一次HTTP查询请求，称为"预检"请求（preflight）。

览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

Request Method: OPTIONS
Status Code: 204 No Content
