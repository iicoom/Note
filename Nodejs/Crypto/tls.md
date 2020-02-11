> The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that is 
built on top of OpenSSL. The module can be accessed using:

```js
const tls = require('tls');
```

## [Nodejs使用TLS](https://www.cnblogs.com/adjk/p/8883977.html)
1. 使用openssl生成服务器和客户端证书
```
生成服务器证书，服务器使用自签名证书（也就是自己扮演CA）
openssl genrsa -out server-key.pem 2048
openssl req -new -sha256 -key server-key.pem -out server-csr.pem    //在CN处填写服务器主机名www.qikangwei.com
openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem

将服务器私钥server-key.pem和CA根证书server-cert.pem复制到客户端，然后生成客户端证书
openssl genrsa -out client-key.pem 2048
openssl req -new -sha256 -key client-key.pem -out client-csr.pem    //在CN出填写客户端主机名
openssl x509 -req -CA server-cert.pem -CAkey server-key.pem -CAcreateserial -in client-csr.pem -out client-cert.pem
```

2. 创建服务器和客户端脚本
```
// 服务端
var tls = require('tls');
var fs = require('fs');
var options = {
        key: fs.readFileSync('server-key.pem'),
        cert: fs.readFileSync('server-cert.pem'),
        ca: [ fs.readFileSync('server-cert.pem') ],
        requestCert: true,
        rejectUnauthorized: true
};
var server = tls.createServer(options, function(test) {
        console.log('server connected', test.authorized ? 'authorized' : 'unauthorized');
        test.write("welcome!\n");
        test.setEncoding('utf8');
        test.on('data', function(data) {
                console.log(data);
        });
        test.on('close', function() {
                console.log('client has closed');
                server.close();
        });
});
server.listen(2345, function() {
        console.log('server bound');
});

// 客户端
var tls = require('tls');
var fs = require('fs');
var options = {
        host: 'www.qikangwei.com',
        port: 2345,
        key: fs.readFileSync('client-key.pem'),
        cert: fs.readFileSync('client-cert.pem'),
        ca: [ fs.readFileSync('server-cert.pem') ],
        rejectUnauthorized: true
};
var client = tls.connect(options, function() {
        console.log('client connected', client.authorized ? 'authorized' : 'unauthorized');
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', function() {
                var chunk = process.stdin.read();
                if (chunk !== null) {
                        client.write(chunk);
                }
        });
  
});
client.setEncoding('utf8');
client.on('data', function(data) {
        console.log(data);
});
client.write("happy new year!");
```
3. 测试

服务器：

node tls-server.js

客户端：

node tls-client.js

脚本启动后，在客户端输入内容，服务器端会显示同样的内容

## [什么是HTTPS、TLS、SSL](https://blog.csdn.net/freekiteyu/article/details/76423436)

HTTPS，也称作HTTP over TLS。TLS的前身是SSL
![avatar](https://img-blog.csdn.net/20170731114627919?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZnJlZWtpdGV5dQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
