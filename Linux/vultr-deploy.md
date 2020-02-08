## 新建实例后
- 修改域名解析
- 启动 systemctl start nginx
- 启动 service redis start
- 启动 pm2 start ecosystem.config.js

## vultr 全球节点速度比较

- New Jersey 美国新泽西州
--- 45.57.131.1 ping statistics ---
57 packets transmitted, 56 packets received, 1.8% packet loss
round-trip min/avg/max/stddev = 221.409/274.126/345.295/39.281 ms

- Londen
--- 45.75.119.0 ping statistics ---
56 packets transmitted, 55 packets received, 1.8% packet loss
round-trip min/avg/max/stddev = 179.115/198.045/298.030/20.386 ms

- Paris
--- 95.179.219.54 ping statistics ---
53 packets transmitted, 50 packets received, 5.7% packet loss
round-trip min/avg/max/stddev = 230.159/304.788/451.366/51.030 ms

- Toronto
--- 149.248.53.10 ping statistics ---
49 packets transmitted, 45 packets received, 8.2% packet loss
round-trip min/avg/max/stddev = 213.300/260.589/368.932/39.468 ms

- Silicon valley
--- 149.28.215.71 ping statistics ---
64 packets transmitted, 58 packets received, 9.4% packet loss
round-trip min/avg/max/stddev = 251.476/315.562/415.923/42.425 ms

- Sydney
--- 207.148.87.190 ping statistics ---
29 packets transmitted, 21 packets received, 27.6% packet loss
round-trip min/avg/max/stddev = 221.663/264.939/363.037/43.112 ms

- Seattle 西雅图
--- 45.76.244.34 ping statistics ---
24 packets transmitted, 0 packets received, 100.0% packet loss

- Miami
--- 104.207.147.111 ping statistics ---
72 packets transmitted, 62 packets received, 13.9% packet loss
round-trip min/avg/max/stddev = 277.441/522.070/1012.061/215.102 ms

- Los Angeles
--- 149.248.8.120 ping statistics ---
99 packets transmitted, 0 packets received, 100.0% packet loss

- Dallas 达拉斯（美国城市）
--- 149.28.241.234 ping statistics ---
56 packets transmitted, 45 packets received, 19.6% packet loss
round-trip min/avg/max/stddev = 210.689/276.167/334.676/35.530 ms

- Chicogo
--- 149.28.121.241 ping statistics ---
33 packets transmitted, 0 packets received, 100.0% packet loss

- Atlanta
--- 155.138.238.215 ping statistics ---
39 packets transmitted, 25 packets received, 35.9% packet loss
round-trip min/avg/max/stddev = 281.139/341.726/397.752/33.623 ms


## 项目部署
### 安装工具
yum -y install git-core vim net-tools redis nginx 

异常
yum install 没有可用软件包 nginx

原因是nginx位于第三方的yum源里面，而不在centos官方yum源里面

解决方法：

安装

sudo yum install epel-release

### 修改配置

- firewall
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --zone=public --add-port=80/tcp --permanent  打开MongoDB端口
firewall-cmd --reload
firewall-cmd --list-all     或者下面两条命令查看状态
firewall-cmd --list-services
firewall-cmd --list-ports

- nginx [/etc/nginx]
创建目录上传证书：
mkdir ssl
scp iwannXXXuck.xyz.crt iwannXXXuck.xyz.key root@199.2x7.1.145:/etc/nginx/ssl/

配置文件
vim nginx.conf
vim 块操作取消https注释  ctrl+v 选中多行 按x取消注释
```
server_name  www.iwannXXXuck.com;
root         /data/iicoom;

proxy_set_header  Host             $host;
proxy_set_header  X-Real-IP        $remote_addr;
proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

location /api/ {
        proxy_pass http://127.0.0.1:3000;
}
```

启动nginx
systemctl start nginx

- 生成秘钥对 clone 前后端项目
ssh-keygen -t rsa -C "your_email@example.com"

前端：
git clone https://github.com/iicoom/iicoom.github.io.git
项目切换分支
git branch -r
git checkout -b feature/we-mini origin/feature/we-mini

- 安装MongoDB
创建repo文件
vim /etc/yum.repos.d/mongodb-org-4.0.repo
把下面的内容放进来
```
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

然后：
yum install -y mongodb-org
```

配置：
```
vim /etc/mongod.conf

net:
	port: 27017
	bindIp: 127.0.0.0
```

启动：
service mongod start
service redis start

- 安装nvm node pm2
第一步：
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

第二步：
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  					
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  

第三步：
nvm install --lts 安装长期支持板

npm i pm2 -g

cd project/s-server
npm i

pm2 start ecosystem.config.js --env production




附录：
[vutrl](https://my.vultr.com/) 02060934Mao

2048 MB Server - 202.182.100.111

6-Ta78vCLf(%[6Fw

### 搭建ss
```
第一条命令：
[root@vultr ~]# wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh

第二条命令：
chmod +x shadowsocks.sh

[root@vultr ~]# ls
shadowsocks.sh

第三条命令：
./shadowsocks.sh 2>&1 | tee shadowsocks.log

#############################################################
# One click Install Shadowsocks-Python server               #
# Intro: https://teddysun.com/342.html                      #
# Author: Teddysun <i@teddysun.com>                         #
# Github: https://github.com/shadowsocks/shadowsocks        #
#############################################################

Please enter password for shadowsocks-python
(Default password: teddysun.com):

---------------------------
password = teddysun.com
---------------------------

Please enter a port for shadowsocks-python [1-65535]
(Default port: 18409):

Please enter a port for shadowsocks-python [1-65535]
(Default port: 18409):8070

---------------------------
port = 8070
---------------------------

Please select stream cipher for shadowsocks-python:
1) aes-256-gcm
2) aes-192-gcm
3) aes-128-gcm
4) aes-256-ctr
5) aes-192-ctr
6) aes-128-ctr
7) aes-256-cfb
8) aes-192-cfb
9) aes-128-cfb
10) camellia-128-cfb
11) camellia-192-cfb
12) camellia-256-cfb
13) chacha20-ietf-poly1305
14) chacha20-ietf
15) chacha20
16) rc4-md5
Which cipher you'd select(Default: aes-256-gcm):

---------------------------
cipher = aes-256-gcm
---------------------------


Press any key to start...or Press Ctrl+C to cancel
.
.
.

Congratulations, Shadowsocks-python server install completed!
Your Server IP        :  149.28.233.68
Your Server Port      :  8070
Your Password         :  teddysun.com
Your Encryption Method:  aes-256-cfb

Welcome to visit:https://teddysun.com/342.html
Enjoy it!

修改加密方式
[root@vultr etc]# vi /etc/shadowsocks.json

[root@vultr etc]# /etc/init.d/shadowsocks restart
INFO: loading config from /etc/shadowsocks.json
stopped
Stopping Shadowsocks success
INFO: loading config from /etc/shadowsocks.json
2018-05-28 10:05:05 INFO     loading libcrypto from libcrypto.so.10
started
Starting Shadowsocks success
[root@vultr etc]#
```

## 合理使用
> Do you charge for stopped instances?
Yes, instances in a stopped state continue to reserve dedicated system resources (RAM, SSD storage, IP aliases, CPU) and therefore incur charges until you destroy the instance. If you wish to no longer accumulate charges for a virtual machine, please use the DESTROY button in the customer portal.

第一、选择合适的优惠码赠送余额

VULTR其实能够有这么快的发展其中一个重要的因素就是对于新注册账户会有赠送奖励金额。比如我们可以参考"新注册Vultr账户赠送20美元余额抵用金获取方法"，可以使用对应的VULTR优惠码在新注册账户的时候得到奖励赠送余额，这样我们在操作项目和尝试VULTR这款VPS主机的时候可以省钱。

比如，我们使用NGINX20优惠码可以赠送20美金，根据时效期1年的范围，我们可以免费使用最多4个月的VPS。

第二、合理利用小时计费制度

尤其是针对项目环境的用户，我们会通过利用VULTR VPS架设的软件环境，然后远程操作任务，比如很多用户用户刷单业务，我们可以在完成任务之后立即删除当前的VPS，这样完成 一单之后可以删除当前机器停止计费。然后在需要用的时候再开机器，这样还可以使用到不同的IP，可以节省项目成本。

总结，尤其我们在使用第二种方法的时候，一般VPS服务商都是最低按月计费的，而VULTR可以根据使用时长随时删除，这样计费更加灵活。


