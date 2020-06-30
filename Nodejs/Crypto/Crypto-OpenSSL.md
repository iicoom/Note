## cryptography use cases
Top 10 Cryptocurrencies With Practical Use Cases

- Bitcoin (Payments & Storer of Value)
- Ethereum (Smart Contracts & DApps)
- Monero (Anonymous, Private & Fungible Digital Money)
- Factom (Decentralized Notary)
- Dash (Digital Cash)
- Golem (Decentralized Supercomputers)
- Siacoin (Decentralized Cloud Storage)
- IOTA (Internet Of Things)
- Ripple (Bank’s Cryptocurrency)
- Civic (Universal Digital Identity)

## crypto
The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.
crypto模块提供了加密功能，包括一组用于OpenSSL的散列、HMAC、密码、解密、签名和验证功能的包装器。
```js
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
```

### Hmac
The Hmac class is a utility for creating cryptographic HMAC digests. It can be used in one of two ways:

Hmac类是用于创建加密Hmac摘要的实用程序



https://www.openssl.org/

> OpenSSL is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. It is also a general-purpose cryptography library. 
健壮的、商业级的功能全面的工具箱 保证 传输层安全TLS  是一个通用 密码学 库

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

