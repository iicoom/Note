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

head-of-line blocking线头阻塞(HOL阻塞)是计算机网络中的一种性能限制现象，它发生在一行数据包被第一个数据包阻塞时。示例包括输入缓冲网络交换机、无序传递和HTTP管道中的多个请求。

## Differences from HTTP 1.1
The proposed changes do not require any changes to how existing web applications work, but new applications can take advantage of new features for increased speed.[20] HTTP/2 leaves all of HTTP 1.1's high-level semantics, such as methods, status codes, header fields, and URIs, the same. What is new is how the data is framed and transported between the client and the server.

建议的更改不要求对现有web应用程序的工作方式进行任何更改，但是新的应用程序可以利用新特性来提高速度。[20] HTTP/2保留了HTTP 1.1的所有高级语义，比如方法、状态代码、头字段和uri。与以往不同的是，数据是如何在客户端和服务器之间构建和传输的

## Server-side support
- Apache 2.4.12 supports HTTP/2 via the module mod_h2
- Apache Tomcat supports HTTP/2 with version 8.5 and newer with a configuration change.[71]
- nginx 1.9.5 supports HTTP/2,[85] released on September 22, 2015
- Node.js Stable support since 8.13.0.[87] (5.0 supports HTTP/2 with a module[88] and Node 8.4 introduced experimental built-in support for HTTP/2.[89])