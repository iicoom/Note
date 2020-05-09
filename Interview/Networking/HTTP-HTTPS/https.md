> TTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。

## 升级到https的好处
- better search engine listings
- HTTPS is also required to unlock modern browser features like service workers and hardware APIs like WebUSB and Bluetooth access.

## ssl/tsl
SSL means secure socket layer. But that protocol has been deprecated and replaced by Transport Layer Security (TLS)

HTTPS requires a TLS certificate to be installed on your server. 

## How SSL Certificates Work
https://www.entrustdatacard.com/pages/ssl

- A browser or server attempts to connect to a website (i.e. a web server) secured with SSL. The browser/server requests that the web server identify itself.
- The web server sends the browser/server a copy of its SSL certificate.
- The browser/server checks to see whether or not it trusts the SSL certificate. If so, it sends a message to the web server.
- The web server sends back a digitally signed acknowledgement to start an SSL encrypted session.
- Encrypted data is shared between the browser/server and the web server.

![pic](https://www.entrustdatacard.com/-/media/images/products/ssl-images/1258x489_how-ssl-certificates-work.jpg?la=en&hash=8CE75FF301EB014CC3E5583E0CB7CF8B)