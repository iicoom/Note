https://www.openssl.org/

> OpenSSL is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and 
Secure Sockets Layer (SSL) protocols. 
It is also a general-purpose cryptography library. 

openssl可以实现：秘钥证书管理、对称加密和非对称加密

## 对称加密算法
OpenSSL一共提供了8种对称加密算法，其中7种是分组加密算法，仅有的一种流加密算法是RC4。
这7种分组加密算法分别是AES、DES、Blowfish、CAST、IDEA、RC2、RC5，都支持电子密码本模式（ECB）、加密分组链接模式（CBC）、
加密反馈模式（CFB）和输出反馈模式（OFB）四种常用的分组密码加密模式。其中，AES使用的加密反馈模式（CFB）和输出反馈模式（OFB）
分组长度是128位，其它算法使用的则是64位。事实上，DES算法里面不仅仅是常用的DES算法，还支持三个密钥和两个密钥3DES算法。

## 非对称加密算法
OpenSSL一共实现了4种非对称加密算法，包括DH算法、RSA算法、DSA算法和椭圆曲线算法（EC）。
DH算法一般用户密钥交换。RSA算法既可以用于密钥交换，也可以用于数字签名，当然，如果你能够忍受其缓慢的速度，那么也可以用于数据加密。
DSA算法则一般只用于数字签名。

