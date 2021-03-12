## HTTP协议与TCP/IP协议的关系
TCP协议主要解决如何在IP层之上可靠的传递数据包，使在网络上的另一端收到发端发出的所有包，并且顺序与发出顺序一致。TCP有可靠，面向连接的特点。

IP协议主要解决网络路由和寻址问题，

HTTP属于应用层协议，在传输层使用TCP协议，在网络层使用IP协议。

### 理解HTTP协议是无状态的
HTTP协议是无状态的，指的是协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。也就是说，打开一个服务器上的网页和你之前打开这个服务器上的网页之间没有任何联系。
HTTP是一个无状态的面向连接的协议，无状态不代表HTTP不能保持TCP连接，更不能代表HTTP使用的是UDP协议（无连接）。

## 什么是长连接、短连接？
### 在HTTP/1.0中
HTTP的长连接和短连接本质上是TCP长连接和短连接。
默认使用的是短连接。也就是说，浏览器和服务器每进行一次HTTP操作，就建立一次连接，但任务结束就中断连接。如果客户端浏览器访问的某个HTML或其他类型的 Web页中包含有其他的Web资源，如JavaScript文件、图像文件、CSS文件等；当浏览器每遇到这样一个Web资源，就会建立一个HTTP会话。

### HTTP/1.1起，
默认使用长连接，用以保持连接特性。使用长连接的HTTP协议，会在响应头有加入这行代码：
Connection:keep-alive

在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的 TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。
Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间。实现长连接要客户端和服务端都支持长连接。

HTTP协议的长连接和短连接，实质上是TCP协议的长连接和短连接。

---
> HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。

## 升级到https的好处
- better search engine listings
- HTTPS is also required to unlock modern browser features like service workers and hardware APIs like WebUSB and Bluetooth access.

## ssl/tsl
SSL means secure socket layer. But that protocol has been deprecated and replaced by Transport Layer Security (TLS)

HTTPS requires a TLS certificate to be installed on your server. 

## How SSL Certificates Work
https://www.entrustdatacard.com/pages/ssl

### SSL certificates 
SSL certificates are an essential component of the data encryption process that make internet transactions secure. 

SSL证书是使internet交易安全的数据加密过程的重要组成部分。

They are digital passports that provide authentication to protect the confidentiality and integrity of website communication with browsers.

它们是数字护照，提供身份验证，以保护网站与浏览器通信的机密性和完整性。

The SSL certificate's job is to initiate secure sessions with the user’s browser via the secure sockets layer (SSL) protocol. This secure connection cannot be established without the SSL certificate, which digitally connects company information to a cryptographic key.

SSL证书的工作是通过安全套接字层(SSL)协议启动与用户浏览器的安全会话。没有SSL证书无法建立此安全连接，SSL证书将公司信息以数字方式连接到加密密钥。

- A browser or server attempts to connect to a website (i.e. a web server) secured with SSL. The browser/server requests that the web server identify itself.
- The web server sends the browser/server a copy of its SSL certificate.
- The browser/server checks to see whether or not it trusts the SSL certificate. If so, it sends a message to the web server.
- The web server sends back a digitally signed acknowledgement to start an SSL encrypted session.
- Encrypted data is shared between the browser/server and the web server.

![pic](https://www.entrustdatacard.com/-/media/images/products/ssl-images/1258x489_how-ssl-certificates-work.jpg?la=en&hash=8CE75FF301EB014CC3E5583E0CB7CF8B)

There are many benefits to using SSL certificates. Namely, SSL customers can:
- Utilize HTTPs, which elicits a stronger Google ranking  **SEO效果更好**
- Create safer experiences for your customers
- Build customer trust and improve conversions
- Protect both customer and internal data
- Encrypt browser-to-server and server-to-server communication **数据加密更安全**
- Increase security of your mobile and cloud apps

### https证书类型
https证书类型一般分为三个类型，分别为DV型、OV型、EV型。其中，DV型又被称为域名型https证书，OV型被称为企业型https证书，EV型则被称为增强型https证书。

　　DV型证书可以保证数据在传输中不被窃取和篡改，但它不会体现公司名称，也不能验证真实身份，这种证书适合小微企业及个人网站使用。而OV型证书则比较适合电商平台、企业网站等。EV型证书则适合那些大型企业，或者是银行、金融行业的平台，它对网站的安全加密性会更强。

　　从上面这些内容就能够了解https证书有哪些，不过最终选择什么样的证书，大家还需要考虑到自身的情况，因为不同证书的适应性不同，而且在价格上也是有很大差异的，企业在选择方面要格外慎重。另外，最好不要使用免费的证书，防止出现高风险的情况。

### 点开chrome的小锁头
- 常规：颁发给 当前网站的域名   颁发者：Extended Validation Server  有效期：。。。
- 可以看到证书详细信息中：签名算法sha256RSA  签名哈希算法 sha256

[SHA-256 Cryptographic Hash Algorithm](https://www.movable-type.co.uk/scripts/sha256.html) 这里有JavaScript实现的sha-256

SHA-256是SHA-1(统称为SHA-2)的后继哈希函数之一，是可用的最强哈希函数之一。SHA-256的编码并不比SHA-1复杂多少，而且还没有受到任何危害。

[Node.js的crypto模块可以做相关的加密操作](../../../Nodejs/Crypto/Crypto-OpenSSL.md)

### 证书服务商
- TrustAsia
TrustAsia是亚数信息科技(上海)有限公司 [1]  应用于信息安全领域的品牌。TrustAsia作为VeriSign的战略合作伙伴，是亚洲领先的数字证书服务提供商，负责将VeriSign的数字证书服务本地化，为用户在亚太地区提供区域性的网络安全服务。
