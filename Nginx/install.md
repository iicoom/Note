## 第一步 - 添加Nginx存储库
要添加CentOS 7 EPEL仓库，请打开终端并使用以下命令：

sudo yum install epel-release

## 第二步 - 安装Nginx
现在Nginx存储库已经安装在您的服务器上，使用以下yum命令安装Nginx ：

sudo yum install nginx

## 第三步 - 启动Nginx
Nginx不会自行启动。要运行Nginx，请输入：

sudo systemctl start nginx

浏览器访问xx.76.45.98， 一段时间后
```
无法访问此网站 xx.76.45.98 的响应时间过长。
请试试以下办法：

检查网络连接
检查代理服务器和防火墙
ERR_CONNECTION_TIMED_OUT
```

### 先查看nginx配置是否正确 
```
nginx -t   #查看nginx配置是否正确  也可以切换到nginx的安装目录下的sbin目录下，执行: ./nginx -t


[root@iz2ze4a9gck ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 查看nginx是否启动成功
```
ps -ef | grep nginx  #查看nginx端口


[root@iz2ze4a9gck ~]# ps -ef | grep nginx
root     11076 11043  0 10:56 pts/0    00:00:00 grep --color=auto nginx
root     29291     1  0 3月05 ?       00:00:00 nginx: master process /usr/sbin/nginx
nginx    32139 29291  0 3月05 ?       00:00:00 nginx: worker process
```

### 查看服务器端口监听状况
```
[root@iz2ze4a9gck ~]# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN      28570/redis-server
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      29291/nginx: master
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      29291/nginx: master
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1157/sshd
tcp        0      0 0.0.0.0:27017           0.0.0.0:*               LISTEN      25725/mongod
tcp6       0      0 :::80                   :::*                    LISTEN      29291/nginx: master
tcp6       0      0 :::3000                 :::*                    LISTEN      1684/node /mnt/proj
```
或者直接查看80端口监听
```
[root@iz2ze4a9gck ~]# netstat -an | grep 80
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN
tcp        0      0 127.0.0.1:38058         127.0.0.1:27017         ESTABLISHED
tcp        0      0 127.0.0.1:38010         127.0.0.1:27017         ESTABLISHED
tcp        0      0 172.17.189.52:37474     100.100.30.25:80        ESTABLISHED
tcp        0      0 127.0.0.1:27017         127.0.0.1:38010         ESTABLISHED
tcp        0      0 127.0.0.1:27017         127.0.0.1:38058         ESTABLISHED
tcp        0     36 172.17.189.52:22        1.203.175.160:13808     ESTABLISHED
tcp6       0      0 :::80                   :::*                    LISTEN
```

## 第四部 - 防火墙
[阿里云ECS 故障排除文档](https://help.aliyun.com/knowledge_detail/59367.html#centos)

CentOS 7 以后版本默认安装 Firewalld。如果您已经启用 firewalld.service，需要放行 TCP 80 端口：运行命令 
```
firewall-cmd --add-port=80/tcp --permanent
```
返回结果为 success 即表示已经放行 TCP 80 端口。

没有启用防火墙
```
[root@iz2ze4a9gck8ryb6hpqzamz ~]# firewall-cmd --add-port=80/tcp --permanent
FirewallD is not running
```

使用 CentOS 7 以前的版本并开启默认防火墙 iptables 时，应注意 iptables 默认不拦截访问，如果您配置了 iptables 规则，需要执行以下步骤：

查看规则列表：运行命令 iptables --line -vnL。根据返回结果执行不同操作：
如果您设置了默认拦截，添加规则放行 TCP 80 端口：运行命令
```
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```
如果您设置了 DROP TCP 80 端口，替换规则放行 80 端口：运行命令 
```
iptables -R INPUT [80端口对应的规则编号] -p tcp --dport 80 -j ACCEPT
```
保存上述规则：运行命令 service iptables save


保存报错（CentOS7）
```
[root@iz2ze4a9gck8ryb6hpqzamz ~]# systemctl stop firewalld
[root@iz2ze4a9gck8ryb6hpqzamz ~]# service iptables save
The service command supports only basic LSB actions (start, stop, restart, try-restart, reload, force-reload, status). For other actions, please try to use systemctl.
```

**处理方法**
With RHEL 7 / CentOS 7, firewalld was introduced to manage iptables. IMHO, firewalld is more suited for workstations than for server environments.

It is possible to go back to a more classic iptables setup. First, stop and mask the firewalld service:
 

systemctl stop firewalld
systemctl mask firewalld
Then, install the iptables-services package:

yum install iptables-services
Enable the service at boot-time:

systemctl enable iptables
Managing the service

systemctl [stop|start|restart] iptables

## 第五步 - 阿里云配置安全组
https://www.cnblogs.com/themeth/p/10074593.html

[常用端口的典型应用-aliyun](https://help.aliyun.com/knowledge_detail/40724.html#concept-gbt-s21-ydb)

端口	服务	说明
21	    FTP				FTP 服务所开放的端口，用于上传、下载文件。
22	    SSH				SSH 端口，用于通过命令行模式使用用户名密码验证连接Linux实例。
23	    Telnet			Telnet 端口，用于 Telnet 远程登录 ECS 实例。
25	    SMTP			SMTP 服务所开放的端口，用于发送邮件。基于安全考虑，ECS 实例 25 端口默认受限，
	    				如需解封，请参见TCP 25 		端口控制台解封申请。
    
80	    HTTP			用于 HTTP 服务提供访问功能，例如，IIS、Apache、Nginx 等服务。
	    				您可以参见检查 TCP 80 端口是否正常工作 排查 80 端口故障。
443	    HTTPS	        用于 HTTPS 服务提供访问功能。HTTPS 是一种能提供加密和通过安全端口传输的一种协议。
3306	MySQL			MySQL 数据库对外提供服务的端口。
8080					代理端口	同 80 端口一样，8080 端口常用于 WWW 代理服务，实现网页浏览。如果您使用了 8080 
						端口，访问网站或使用代理服务器时，需要在 IP 地址后面加上 :8080。安装 Apache Tomcat 服务后，默认服务端口为 8080。



CentOS 7以下版本安装 Nginx
## nginx的安装
### 一、安装编译工具及库文件
	yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel

### 二、首先要安装 PCRE
PCRE 作用是让 Nginx 支持 Rewrite 功能。
1、下载 PCRE 安装包，下载地址： http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
[root@bogon src]# wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz

2、解压安装包:
[root@bogon src]# tar zxvf pcre-8.35.tar.gz

3、进入安装包目录
[root@bogon src]# cd pcre-8.35

4、编译安装 
[root@bogon pcre-8.35]# ./configure
[root@bogon pcre-8.35]# make && make install

5、查看pcre版本
[root@bogon pcre-8.35]# pcre-config --version

[CentOS 6.5安装Nginx-1.6.2及安全配置](https://www.linuxidc.com/Linux/2016-12/137984.htm)
### 三、安装 Nginx  
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-6-with-yum
#### Step One—Install EPEL
sudo yum install epel-release

#### Step Two—Install nginx
sudo yum install nginx

#### Step Three—Start nginx
sudo /etc/init.d/nginx start









