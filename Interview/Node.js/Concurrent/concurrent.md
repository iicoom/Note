> Server-type applications that communicate with many clients simultaneously demand both a high degree of concurrency and high performance from the I/O subsystem. A good web server should be able to handle hundreds of thousands of concurrent connections and service tens of thousands of requests per second.

服务器端运行的应用程序需要同时与很多客户端进行通信，对高并发特性和I/O性能有较高的要求。一个性能优良的web服务器能够承受成千上万的并发，每秒服务成千上万的请求。

## Web server
A web server is server software, or hardware dedicated to running said software, that can satisfy World Wide Web client requests. A web server can, in general, contain one or more websites. A web server processes incoming network requests over HTTP and several other related protocols.

web server是基于软件程序和硬件设施的服务，服务于World Wide Web客户端的请求。一个web服务器通常包含一个或多个网站。通过HTTP和一些相关网络协议来处理网络请求。

## QPS
Queries per second (QPS) is a common measure of the amount of search traffic an information retrieval system, such as a search engine or a database, receives during one second.[1] The term is used more broadly for any request–response system, more correctly called requests per second (RPS).

High-traffic systems must watch their QPS in order to know when to scale the system to handle more load.

QPS是检索系统的一个常用的性能指标，如数据库或者搜索引擎。

负载很高的系统需要关注QPS指标，以便适时的扩容来应对更高的负载。

### RPS (requests per second)
A web server (program) has defined load limits, because it can handle only a limited number of concurrent client connections (usually between 2 and 80,000, by default between 500 and 1,000) per IP address (and TCP port) and it can serve only a certain maximum number of requests per second (RPS, also known as queries per second or QPS) depending on:

its own settings,
the HTTP request type,
whether the content is static or dynamic,
whether the content is cached, and
the hardware and software limitations of the OS of the computer on which the web server runs.
When a web server is near to or over its limit, it becomes unresponsive.

一个web server 有可承受的负载极限，只能处理有限数量的并发连接（通常在2-80000之间，默认每个IP可能是500-1000）
影响这个数量的还有以下因素：

- 自身的一些参数设置
- HTTP 的请求类型
- 请求的内容是否为静态或动态数据
- 请求的内容是否有缓存
- Web server所在的硬件性能

当一个web server 接近极限时就会对客户端不再响应。

### Causes of overload (引起服务器过载的原因)
- Excess legitimate web traffic. Thousands or even millions of clients connecting to the web site in a short interval
超过了合理的可承受流量

- XSS worms can cause high traffic because of millions of infected browsers or web servers;
XSS攻击

- Internet (network) slowdowns, so that client requests are served more slowly and the number of connections increases so much that server limits are reached;
网络质量下降

### Anti-overload techniques（防止过载的技术）
1. Managing network traffic, by using:
- Firewalls to block unwanted traffic coming from bad IP sources or having bad patterns
- HTTP traffic managers to drop, redirect or rewrite requests having bad HTTP patterns
- Bandwidth management and traffic shaping, in order to smooth down peaks in network usage
防火墙过滤恶意的流量

2. Deploying web cache techniques
使用web缓存技术

3. Using different domain names or IP addresses to serve different (static and dynamic) content by separate web servers, e.g.:
http://images.example.com
http://example.com

使用不同的域名或IP来服务不同的内容

4. Adding more hardware resources (i.e. RAM, disks) to each computer
提升服务器硬件资源

5. Using many internet servers (computers) that are grouped together behind a load balancer so that they act or are seen as one big web server

借助负载均衡服务器 使多个server组成一个性能高的server



