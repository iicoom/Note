> WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. 

WebSocket是一种计算机通信协议 是建立在TCP连接上的可以提供全双工通信的通道。

https://en.wikipedia.org/wiki/WebSocket

## Half duplex 半双工
A half-duplex (HDX) system provides communication in both directions, but only one direction at a time (not simultaneously). Typically, once a party begins receiving a signal, it must wait for the transmitter to stop transmitting, before replying.

半双工系统提供双向通信，但是在一个时间点只能是单方向的。也就是一方开始接收信号时就必须等待发送方停止发送才能应答。

## Full duplex
A full-duplex (FDX) system, or sometimes called double-duplex, allows communication in both directions, and, unlike half-duplex, allows this to happen simultaneously. Land-line telephone networks are full-duplex, since they allow both callers to speak and be heard at the same time, with the transition from four to two wires being achieved by a hybrid coil in a telephone hybrid. Modern cell phones are also full-duplex.[1]

全双工系统，可以双向通信，与半双工的区别是双向通信可以同时进行。有线电话是全双工通信，因为可以使通信双方可以同时说话并听到对方的讲话。现代的手机通信也是全双工的。


支持Websocket协议的浏览器
Most browsers support the protocol, including Google Chrome, Microsoft Edge, Internet Explorer, Firefox, Safari and Opera.

## Web Server implementation
Nginx supports WebSockets since 2013, implemented in version 1.3.13 [30] including acting as a reverse proxy and do load balancing of WebSocket applications.[31]

## Protocol handshake
To establish a WebSocket connection, the client sends a WebSocket handshake request, for which the server returns a WebSocket handshake response, as shown in the example below.[32]

Client request (just like in HTTP, each line ends with \r\n and there must be an extra blank line at the end):
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

Server response:
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```
The handshake starts with an HTTP request/response, allowing servers to handle HTTP connections as well as WebSocket connections on the same port. Once the connection is established, communication switches to a bidirectional binary protocol which does not conform to the HTTP protocol.

握手是由HTTP请求和响应开始的，允许服务端在一个端口上处理HTTP和WebSocket连接。一旦连接建立，通信就转换到一个双向的二进制协议就不再遵循HTTP协议了。


建立TCP连接之后，开始建立WebSocket连接，上文说过WebSocket连接只需一次成功握手即可建立。

首先客户端会发送一个握手包。这里就体现出了WebSocket与Http协议的联系，握手包的报文格式必须符合HTTP报文格式的规范。其中：

- 方法必须位GET方法
- HTTP版本不能低于1.1
- 必须包含Upgrade头部，值必须为websocket
- 必须包含Sec-WebSocket-Key头部，值是一个Base64编码的16字节随机字符串。
- 必须包含Sec-WebSocket-Version头部，值必须为13
其他可选首部可以参考：https://tools.ietf.org/html/rfc6455#section-4.1

服务端验证客户端的握手包符合规范之后也会发送一个握手包给客户端。格式如下：

- 必须包含Connection头部，值必须为Upgrade
- 必须包含一个Upgrade头部，值必须为websocket
- 必须包含一个Sec-Websocket-Accept头部，值是根据如下规则计算的：

首先将一个固定的字符串258EAFA5-E914-47DA-95CA-C5AB0DC85B11拼接到Sec-WebSocket-Key对应值的后面。
对拼接后的字符串进行一次SHA-1计算
将计算结果进行Base-64编码