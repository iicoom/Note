## 原理
SSL/TLS协议的基本过程是这样的：
（1） 客户端向服务器端索要并验证公钥。

（2） 双方协商生成"对话密钥"。

（3） 双方采用"对话密钥"进行加密通信。

关于 SSL 证书
有关 SSL 的介绍可以参阅维基百科的传输层安全协议和阮一峰先生的 《SSL/TLS协议运行机制的概述》。

免费的证书安全认证级别一般比较低，不显示单位名称，不能证明网站的真实身份，仅起到加密传输信息的作用，适合个人网站或非电商网站。

## nginx 自行签发证书

注意：一般生成的目录,应该放在nginx/conf/ssl目录

1.创建服务器证书密钥文件 server.key：
openssl genrsa -des3 -out server.key 1024
输入密码，确认密码，自己随便定义，但是要记住，后面会用到。
申请证书时可能 提示 加密算法强度过低 (至少2048位) 用下面的方式重新生成
openssl genrsa -des3 -out server.key 2048

2.创建服务器证书的申请文件 server.csr
openssl req -new -key server.key -out server.csr

输出内容为：
Enter pass phrase for root.key: ← 输入前面创建的密码 
Country Name (2 letter code) [AU]:CN ← 国家代号，中国输入CN 
State or Province Name (full name) [Some-State]:BeiJing ← 省的全名，拼音 
Locality Name (eg, city) []:BeiJing ← 市的全名，拼音 
Organization Name (eg, company) [Internet Widgits Pty Ltd]:MyCompany Corp. ← 公司英文名 
Organizational Unit Name (eg, section) []: ← 可以不输入 
Common Name (eg, YOUR name) []: ← 此时不输入 
Email Address []:admin@mycompany.com ← 电子邮箱，可随意填
Please enter the following ‘extra’ attributes 
to be sent with your certificate request 
A challenge password []: ← 可以不输入 
An optional company name []: ← 可以不输入

3.备份一份服务器密钥文件
cp server.key server.key.org

4.去除文件口令
openssl rsa -in server.key.org -out server.key
5.生成证书文件server.crt
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

ls
[root@vultr ssl]# ls
server.crt  server.csr  server.key  server.key.org
[root@vultr ssl]#

配置文件
```
server{
		#比起默认的80 使用了443 默认 是ssl方式  多出default之后的ssl
        listen 443 default ssl;
		#default 可省略
		#开启  如果把ssl on；这行去掉，ssl写在443端口后面。这样http和https的链接都可以用
        ssl on;
		#证书(公钥.发送到客户端的)
        ssl_certificate ssl/server.crt;
		#私钥,
        ssl_certificate_key ssl/server.key;
		#下面是绑定域名
        server_name www.daj.com;
        location / {
		#禁止跳转
        proxy_redirect off;
		#代理淘宝
		proxy_pass https://www.tao.com/;  
        }        
}
```

OPTIONS https://www.iwannerfuck.xyz/api/visit/number net::ERR_CERT_AUTHORITY_INVALID
How do I deal with NET:ERR_CERT_AUTHORITY_INVALID in Chrome?
axios 发https请求报错
点击高级，然后人工确认‘仍然进行连接’，即下载了证书。再使用axios访问https地址， 就可以了。

[一个月试用证书](https://www.myssl.cn/)


## Nginx 配置 HTTPS 服务器
https://aotu.io/notes/2016/08/16/nginx-https/index.html
Nginx 配置 HTTPS 并不复杂，主要有两个步骤：签署第三方可信任的 SSL 证书 和 配置 HTTPS

配置 HTTPS 要用到私钥 example.key 文件和 example.crt 证书文件，申请证书文件的时候要用到 example.csr 文件，OpenSSL 命令可以生成 example.key 文件和 example.csr 证书文件。

