# vutrl

[vutrl](https://my.vultr.com/) 02060934Mao

2048 MB Server - 202.182.100.111

6-Ta78vCLf\(%\[6Fw

### 搭建ss

```text
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

> Do you charge for stopped instances? Yes, instances in a stopped state continue to reserve dedicated system resources \(RAM, SSD storage, IP aliases, CPU\) and therefore incur charges until you destroy the instance. If you wish to no longer accumulate charges for a virtual machine, please use the DESTROY button in the customer portal.

第一、选择合适的优惠码赠送余额

VULTR其实能够有这么快的发展其中一个重要的因素就是对于新注册账户会有赠送奖励金额。比如我们可以参考"新注册Vultr账户赠送20美元余额抵用金获取方法"，可以使用对应的VULTR优惠码在新注册账户的时候得到奖励赠送余额，这样我们在操作项目和尝试VULTR这款VPS主机的时候可以省钱。

比如，我们使用NGINX20优惠码可以赠送20美金，根据时效期1年的范围，我们可以免费使用最多4个月的VPS。

第二、合理利用小时计费制度

尤其是针对项目环境的用户，我们会通过利用VULTR VPS架设的软件环境，然后远程操作任务，比如很多用户用户刷单业务，我们可以在完成任务之后立即删除当前的VPS，这样完成 一单之后可以删除当前机器停止计费。然后在需要用的时候再开机器，这样还可以使用到不同的IP，可以节省项目成本。

总结，尤其我们在使用第二种方法的时候，一般VPS服务商都是最低按月计费的，而VULTR可以根据使用时长随时删除，这样计费更加灵活。

