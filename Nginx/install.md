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

下面是简单步骤
#################################################################################################
## 第一步 - 添加Nginx存储库
要添加CentOS 7 EPEL仓库，请打开终端并使用以下命令：

sudo yum install epel-release

## 第二步 - 安装Nginx
现在Nginx存储库已经安装在您的服务器上，使用以下yum命令安装Nginx ：

sudo yum install nginx

## 第三步 - 启动Nginx
Nginx不会自行启动。要运行Nginx，请输入：

sudo systemctl start nginx

浏览器访问39.96.55.98， 一段时间后
```
无法访问此网站 39.96.55.98 的响应时间过长。
请试试以下办法：

检查网络连接
检查代理服务器和防火墙
ERR_CONNECTION_TIMED_OUT
```

## 第四部 - 处理80端口绑定问题
```
[root@iz2ze4a9gck8ryb6hpqzamz ~]# ps -ef | nginx
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
nginx: [emerg] still could not bind()
```
查看iptables
```
[root@iz2ze4a9gck8ryb6hpqzamz ~]# iptables -vnL
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination
```

打开80 端口：
```
[root@vultr ~]# iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT

然后保存：
[root@vultr ~]# service iptables save

```
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

```
[root@iz2ze4a9gck8ryb6hpqzamz ~]# service iptables save
iptables: Saving firewall rules to /etc/sysconfig/iptables:[  OK  ]
```
80端口已经被占用：
```
[root@iz2ze4a9gck8ryb6hpqzamz ~]# ps -ef | nginx
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)

Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN      28570/redis-server
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      29225/nginx: worker
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1157/sshd
tcp        0      0 0.0.0.0:27017           0.0.0.0:*               LISTEN      25725/mongod
tcp6       0      0 :::80                   :::*                    LISTEN      29225/nginx: worker
tcp6       0      0 :::3000                 :::*                    LISTEN      28581/node /mnt/pro
[root@iz2ze4a9gck8ryb6hpqzamz ~]# kill -9 29225
```








