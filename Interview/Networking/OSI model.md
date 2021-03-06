> https://en.wikipedia.org/wiki/OSI_model

Open Systems Interconnection model (OSI model)
## OSI model

The Open Systems Interconnection model (OSI model) is a conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology.

开放互联模型 是 一个概念性模型 不考略潜在的内部结构和技术 来描述和标准化 远程通信


### Layer architecture

1. Physical Layer 物理层

The physical layer is responsible for the transmission and reception of unstructured raw data between a device and a physical transmission medium. 

负责 设备之间源数据的传输和接收

2. Data Link Layer 数据链路层

The data link layer provides node-to-node data transfer—a link between two directly connected nodes. 

提供两个直连节点之间的 点对点 数据传输

3. Network Layer 网络层

The network layer provides the functional and procedural means of transferring variable length data sequences (called packets) from one node to another connected in "different networks". 

负责不同网络间数据包的传输

4. Transport Layer 传输层

The transport layer provides the functional and procedural means of transferring variable-length data sequences from a source to a destination host, while maintaining the quality of service functions.

TCP

UDP

Socket


5. Session Layer 会话层

The session layer controls the dialogues (connections) between computers.

6. Presentation Layer

The presentation layer establishes context between application-layer entities, in which the application-layer entities may use different syntax and semantics if the presentation service provides a mapping between them.

7. Application Layer

The application layer is the OSI layer closest to the end user, which means both the OSI application layer and the user interact directly with the software application. 

应用层 是OSI距离 用户最近的 一层，也就是 用户操作的软件应用。
HTTP、FTP、Telnet、SMTP、RIP、DNS

## HTTP 与 TCP
在网络分层中，HTTP协议是基于TCP协议的，客户端向服务端发送一个HTTP请求时，需要先与服务端建立TCP连接，也就是经典的三次握手（通常对用户来说是很难察觉的），握手成功以后才能进行数据交互。HTTP是基于请求响应模式且无状态的协议，1.1之前只支持短连接，也就是请求响应一次以后连接中断，下次请求需要重新进行TCP连接，而1.1之后支持持长连接，即进行一次TCP连接以后，客户端可以发送多次的HTTP请求给服务器端。

小结：HTTP基于TCP

## Socket 与 TCP
Socket是应用层与传输层之间的同一个抽象层，它是一套接口，所以Socket连接可以基于TCP连接，也有可能基于UDP。

小结：Socket可基于TCP，亦可UDP

## HTTP连接与Socket连接
HTTP 1.1之前是短连接，基于TCP协议的Socket连接是长连接，虽然HTTP1.1开始支持长连接，但不像Socket连接一旦建立，除非一方主动断开，否则连接状态一直保持。

基于TCP的Socket可能是短连接，也可能是长连接，长连接可能需要通过心跳等一些手段来维持，各自有不同的应用场景。而不是简单的"基于TCP协议的Socket连接是长连接"。

HTTP连接中，只有客户端发起请求后服务端才会响应，服务端是无法主动向客户端发消息的。而Socket连接中，通信双方发送消息并没有先后的限制，通信双方中的任何一方可以随时向另一方发送消息。

Although they are different, RFC 6455 states that WebSocket "is designed to work over HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries," thus making it compatible with the HTTP protocol. To achieve compatibility, the WebSocket handshake uses the HTTP Upgrade header[1] to change from the HTTP protocol to the WebSocket protocol.


## HTTP Or Socket 使用场景
用HTTP：双方不需要时刻保持连接，客户端只是通过一个个HTTP请求来获取服务器的特定资源。如通过get/post请求获取网页、图片、JSON或者XML数据，还有常用的文件上传、小文件下载等。

用Socket：大部分即时通讯应用（知乎上说QQ有部分功能是基于TCP，因为TCP每次都需要三次握手，虽然可靠但是网络不好的时候就惨了）、聊天室（基于UDP+消息广播的方式）、大文件传输等。



