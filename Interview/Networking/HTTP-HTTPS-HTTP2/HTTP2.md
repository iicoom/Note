## HTTP/2
HTTP/2 (originally named HTTP/2.0) is a major revision of the HTTP network protocol used by the World Wide Web. It was derived from the earlier experimental SPDY protocol, originally developed by Google.

其提议的后续版本是HTTP/3，这是一个基于HTTP/2所建立的概念的重大修订。支持HTTP / 3添加铬(金丝雀构建)2019年9月(Cloudflare还添加了支持),当HTTP / 3还没有在任何浏览器默认情况下,到2020年HTTP / 3非默认支持稳定版本的Chrome和Firefox,可以启用。

## HTTP/2 Goals
- Maintain high-level compatibility with HTTP 1.1 (for example with methods, status codes, URIs, and most header fields).
- Decrease latency to improve page load speed in web browsers by considering:
- data compression of HTTP headers
- HTTP/2 Server Push
- pipelining of requests
- fixing the head-of-line blocking problem in HTTP 1.x
- multiplexing multiple requests over a single TCP connection 在一个TCP连接上多路复用多个请求

- HTTP/2兼容HTTP 1.1，例如HTTP Method，Status code，URI以及大部分Header Fields。
- HTTP/2通过以下方法减少latency，用来改进页面加载的速度，
- HTTP Header的压缩，采用的是HPack算法。
- HTTP/2的Server Push，非常重要的一个特性
- 请求的pipeline
- 修复在HTTP 1.x的队头阻塞问题。
- 在单个TCP连接里多工复用请求。

head-of-line blocking线头阻塞(HOL阻塞)是计算机网络中的一种性能限制现象，它发生在一行数据包被第一个数据包阻塞时。示例包括输入缓冲网络交换机、无序传递和HTTP管道中的多个请求。

[HPack是HTTP/2 里HTTP头压缩的算法](https://tools.ietf.org/html/rfc7541)

## Differences from HTTP 1.1
The proposed changes do not require any changes to how existing web applications work, but new applications can take advantage of new features for increased speed.[20] HTTP/2 leaves all of HTTP 1.1's high-level semantics, such as methods, status codes, header fields, and URIs, the same. What is new is how the data is framed and transported between the client and the server.

建议的更改不要求对现有web应用程序的工作方式进行任何更改，但是新的应用程序可以利用新特性来提高速度。[20] HTTP/2保留了HTTP 1.1的所有高级语义，比如方法、状态代码、头字段和uri。与以往不同的是，数据是如何在客户端和服务器之间构建和传输的

## Server-side support
- Apache 2.4.12 supports HTTP/2 via the module mod_h2
- Apache Tomcat supports HTTP/2 with version 8.5 and newer with a configuration change.[71]
- nginx 1.9.5 supports HTTP/2,[85] released on September 22, 2015
- Node.js Stable support since 8.13.0.[87] (5.0 supports HTTP/2 with a module[88] and Node 8.4 introduced experimental built-in support for HTTP/2.[89])

现在主流的软件都支持HTTP/2.基本上大部分浏览器在2015年底都支持HTTP/2了，包括Chrome、Opera、Firefox、IE 11、Safari，Edge。

也可以打开Chrome的开发者工具，打开Network tab，可以看到Protocol为h2的就是HTTP/2请求。如果Initiator为push的，说明开启了Server Push模式。

可以发现这里是没有protocol这个项目的

然后我们只要在在标签里右键，Header Option 然后把protocol选项打开就可以看到使用到协议了

## 存在的问题
HTTP/2 Server Push 不能被代码使用，所以还得配合SSE(Server sent event)，无论从coder还是运维的角度来看，这混搭增加了复杂度。

HTTP2 vs Websocket 显而易见，http2 在浏览器服务器上限制颇多，而 websocket 基本普及。

再来看看SSE, 支持程度仍然不如websocket。

Server-Sent Events (SSE) is a server push technology enabling a client to receive automatic updates from a server via HTTP connection. The Server-Sent Events EventSource API is standardized as part of HTML5[1] by the W3C.
SSE简单说就是，借助http协议支持分块传输这一特性。在响应报文里，设置Content-Type: text/event-stream，如此一来响应报文实体就可以多次从服务器返回给客户端，只需要约定好边界就好，比如SSE的边界就是以空行作为消息分隔符。

### WebSocket是基于HTTP1.1的协议，可以简单理解为创建了一条TCP连接
在JS中用

new WebSocket("ws://hostname/chattingrom/")
来创建，具有双向传输二进制等特性。

而HTTP2.0则是对HTML、CSS等JS资源的传输方式进行了优化，并没有提供新的JS API，也不能用于实时传输消息。

如果需要实时传输消息，现在还是需要SSE、WebSocket。

现在的WebSocket还不能用于HTTP2.0的链路上。协议还在设计。draft-hirano-httpbis-websocket-over-http2-01 - WebSocket over HTTP/2draft-svirid-websocket2-over-http2-00 - WebSocket2 over HTTP/2

结论：
HTTP/2 完全不能替代websocket，各有各的适用场景。我个人偏好，做app还是偏向于websocket，参看我的另外一博文介绍[Meteor](https://blog.kazge.com/nodejs/2018/07/24/zh-meteor-introduction/).

[参考](https://www.cnblogs.com/confach/p/10141273.html)