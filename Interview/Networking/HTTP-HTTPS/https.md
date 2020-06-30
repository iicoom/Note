> TTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。

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