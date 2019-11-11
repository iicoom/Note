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

