# DenyHosts

> DenyHosts 是 Python 语言写的一个程序软件，运行于 Linux 上预防 SSH 暴力破解的，它会分析 sshd 的日志文件（/var/log/secure），当发现重复的攻击时就会记录 IP 到 /etc/hosts.deny 文件，从而达到自动屏 IP 的功能。

查看ssh服务安全状态

```text
[root@vultr ~]# tail -f /var/log/secure
```

[CentOS 7 使用denyhosts防范暴力破解](https://my.oschina.net/itlzm/blog/1610812)

### 安装

CentOS 7

```text
yum install -y denyhosts
```

出现以下提示：

```text
[root@vultr ~]# yum install denyhosts

没有可用软件包 denyhosts。
错误：无须任何处理
```

### 手动安装

[https://blog.csdn.net/daodan988/article/details/40847069](https://blog.csdn.net/daodan988/article/details/40847069)

1. 下载原文件且解压

```text
wget http://downloads.sourceforge.net/denyhosts/DenyHosts-2.6.tar.gz
tar zxvf DenyHosts-2.6.tar.gz
cd DenyHosts-2.6
```

1. 安装、配置和启动

   \`\`\`

   python setup.py install

默认是安装到/usr/share/denyhosts/目录的,进入相应的目录修改配置文件

chown root daemon-control chmod 700 daemon-control ./daemon-control start

稍等片刻 starting DenyHosts: /usr/bin/env python /usr/bin/denyhosts.py --daemon --config=/usr/share/denyhosts/denyhosts.cfg \[root@vultr denyhosts\]\#

```text
3. 查看拦截日志
```

## 查看denyhosts收集到的恶意ip

cat /etc/hosts.deny

## 统计该文件的行数

cat /etc/hosts.deny \| wc -l

```text
## denyhosts配置详解
默认配置就能很好的工作，如要个性化设置可以修改 /etc/denyhosts.conf
```

#### \#\#\#\#\#\# THESE SETTINGS ARE REQUIRED

## sshd的日志文件

SECURE\_LOG = /var/log/secure

## 将阻止IP写入到hosts.deny,所以这个工具只支持 支持tcp wrapper的协议

HOSTS\_DENY = /etc/hosts.deny

## 过多久后清除已阻止的IP,即阻断恶意IP的时长  （4周）

PURGE\_DENY = 4w

## 阻止服务名

BLOCK\_SERVICE = sshd

## 允许无效用户登录失败的次数

DENY\_THRESHOLD\_INVALID = 5

## 允许普通有效用户登录失败的次数

DENY\_THRESHOLD\_VALID = 10

## 允许root登录失败的次数

DENY\_THRESHOLD\_ROOT = 1

## 设定 deny host 写入到该资料夹

DENY\_THRESHOLD\_RESTRICTED = 1

## 将deny的host或ip记录到work\_dir中

WORK\_DIR = /var/lib/denyhosts  
SUSPICIOUS\_LOGIN\_REPORT\_ALLOWED\_HOSTS=YES

## 是否做域名反解

HOSTNAME\_LOOKUP=YES

## 将DenyHost启动的pid记录到LOCK\_FILE中，已确保服务正确启动，防止同时启动多个服务

LOCK\_FILE = /var/lock/subsys/denyhosts

#### \#\#\#\#\#\# THESE SETTINGS ARE OPTIONAL

## 设置管理员邮件地址 例如_\*\*_@163.com

ADMIN\_EMAIL = root  
SMTP\_HOST = localhost  
SMTP\_PORT = 25  
SMTP\_FROM = DenyHosts &lt;nobody@localhost&gt;  
SMTP\_SUBJECT = DenyHosts Report from $\[HOSTNAME\]  
AGE\_RESET\_VALID=5d  
AGE\_RESET\_ROOT=25d  
AGE\_RESET\_RESTRICTED=25d  
AGE\_RESET\_INVALID=10d

#### \#\#\# THESE SETTINGS ARE SPECIFIC TO DAEMON MODE

## denyhost服务日志文件

DAEMON\_LOG = /var/log/denyhosts

DAEMON\_SLEEP = 30s

## 该项与PURGE\_DENY 设置成一样，也是清除hosts.deniedssh 用户的时间

DAEMON\_PURGE = 1h

\`\`\`

