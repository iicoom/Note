# TCP-UDP

> [https://en.wikipedia.org/wiki/Transmission\_Control\_Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

## TCP 传输控制协议

The Transmission Control Protocol \(TCP\) is one of the main protocols of the Internet protocol suite.

TCP 是 互联网协议 的主要 协议

It originated in the initial network implementation in which it complemented the Internet Protocol \(IP\).

源于最初的网络实施，是对IP协议的补充。

### TCP 三次握手 与 四次挥手

所谓三次握手\(Three-way Handshake\)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送3个包。

* 第一次握手\(SYN=1, seq=x\):

  客户端发送一个 TCP 的 SYN 标志位置1的包，指明客户端打算连接的服务器的端口，以及初始序号 X,保存在包头的序列号\(Sequence Number\)字段里。

发送完毕后，客户端进入 SYN\_SEND 状态。

* 第二次握手\(SYN=1, ACK=1, seq=y, ACKnum=x+1\): 服务器发回确认包\(ACK\)应答。即 SYN 标志位和 ACK 标志位均为1。服务器端选择自己 ISN 序列号，放到 Seq 域里，同时将确认序号\(Acknowledgement Number\)设置为客户的 ISN 加1，即X+1。 发送完毕后，服务器端进入 SYN\_RCVD 状态。
* 第三次握手\(ACK=1，ACKnum=y+1\) 客户端再次发送确认包\(ACK\)，SYN 标志位为0，ACK 标志位为1，并且把服务器发来 ACK 的序号字段+1，放在确定字段中发送给对方，并且在数据段放写ISN的+1

发送完毕后，客户端进入 ESTABLISHED 状态，当服务器端接收到这个包时，也进入 ESTABLISHED 状态，TCP 握手结束。

TCP 的连接的拆除需要发送四个包

* 第一次挥手\(FIN=1，seq=x\)

  假设客户端想要关闭连接，客户端发送一个 FIN 标志位置为1的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据。

发送完毕后，客户端进入 FIN\_WAIT\_1 状态。

* 第二次挥手\(ACK=1，ACKnum=x+1\)

  服务器端确认客户端的 FIN 包，发送一个确认包，表明自己接受到了客户端关闭连接的请求，但还没有准备好关闭连接。

发送完毕后，服务器端进入 CLOSE\_WAIT 状态，客户端接收到这个确认包之后，进入 FIN\_WAIT\_2 状态，等待服务器端关闭连接。

* 第三次挥手\(FIN=1，seq=y\)

  服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN 置为1。

发送完毕后，服务器端进入 LAST\_ACK 状态，等待来自客户端的最后一个ACK。

* 第四次挥手\(ACK=1，ACKnum=y+1\)

  客户端接收到来自服务器端的关闭请求，发送一个确认包，并进入 TIME\_WAIT状态，等待可能出现的要求重传的 ACK 包。

服务器端接收到这个确认包之后，关闭连接，进入 CLOSED 状态。

### TCP 的拥塞控制原理

TCP 拥塞控制的目标是最大化利用网络上瓶颈链路的带宽。

简单来说是将网络链路比喻成一根水管，如果我们希望尽可能地使用网络传输数据，方法就是给水管注水，就有如下公式：

> 水管内的水的数量 = 水管的容积 = 水管粗细 × 水管长度
>
> 网络内尚未被确认收到的数据包数量 = 网络链路上能容纳的数据包数量 = 链路带宽 × 往返延迟

为了保证水管不会爆管，TCP 维护一个拥塞窗口cwnd（congestion window），用来估计在一段时间内这条链路（水管中）可以承载和运输的数据（水）的数量，拥塞窗口的大小取决于网络的拥塞程度，并且动态地在变化，但是为了达到最大的传输效率，我们该如何知道这条水管的运送效率是多少呢？

常见的 TCP 拥塞控制算法

1. Linux 内核默认的 Reno 算法 适用于低延时、低带宽的网络，它将拥塞控制的过程分为四个阶段：慢启动、拥塞避免、快重传和快恢复
2. BBR 是谷歌在 2016 年提出的一种新的拥塞控制算法，已经在 Youtube 服务器和谷歌跨数据中心广域网上部署，据 Youtube 官方数据称，部署 BBR 后，在全球范围内访问 Youtube 的延迟降低了 53%，在时延较高的发展中国家，延迟降低了 80%。

### 使用TCP协议的常见端口

1. FTP 文件传输协议 使用21端口
2. Telnet 是一种远程登录端口 基于DOS模式的通信服务 23端口对外提供服务
3. SMTP 简单邮件传送协议 服务器开放 25端口
4. POP3 Post Office Protocol 3的简称 它是和SMTP对应，POP3用于接收邮件 110端口
5. HTTP "超文本传输协议" 上网浏览网页时，就得在提供网页资源的计算机上打开 80号端口以提供服务

## UDP 用户数据报协议

UDP \(User Datagram Protocol\) is an alternative communications protocol to Transmission Control Protocol \(TCP\) used primarily for establishing low-latency and loss-tolerating connections between applications on the internet.

建立低延迟 能容忍丢包 的应用间传输时 可用来替代TCP协议

它可以提供非连接的不可靠的点到多点的通信，所谓不可靠，在于 UDP 每一次发送数据需要绑定 IP 和端口号，但是对于已经发送出去的数据来说并不去确认，也不需要类似 TCP 的三次握手的过程，由于没有了这个过程，所以其传输效率较之 TCP 来说要高许多。

### 使用UDP协议端口

1. DNS：用于域名解析服务，这种服务在Windows NT系统中用得最多的。DNS用的是53号端口。
2. SNMP：简单网络管理协议，使用161号端口，是用来管理网络设备的。由于网络设备很多，无连接的服务就体现出其优势。
3. RIP：路由选择信息协议（RIP）是一种在网关与主机之间交换路由选择信息的标准
4. DHCP 

## TCP与UDP区别

TCP---传输控制协议,提供的是面向连接、可靠的字节流服务。当客户和服务器彼此交换数据前，必须先在双方之间建立一个TCP连接，之后才能传输数据。TCP提供超时重发，丢弃重复数据，检验数据，流量控制等功能，保证数据能从一端传到另一端。

UDP---用户数据报协议，是一个简单的面向数据报的运输层协议。UDP不提供可靠性，它只是把应用程序传给IP层的数据报发送出去，但是并不能保证它们能到达目的地。由于UDP在传输数据报前不用在客户和服务器之间建立一个连接，且没有超时重发等机制，故而传输速度很快。

