> DenyHosts 是 Python 语言写的一个程序软件，运行于 Linux 上预防 SSH 暴力破解的，它会分析 sshd 的日志文件（/var/log/secure），当发现重复的攻击时就会记录 IP 到 /etc/hosts.deny 文件，从而达到自动屏 IP 的功能。

查看ssh服务安全状态
```
[root@vultr ~]# tail -f /var/log/secure
```

[CentOS 7 使用denyhosts防范暴力破解](https://my.oschina.net/itlzm/blog/1610812)

## 安装

CentOS 7

```
yum install -y denyhosts
```

出现以下提示：
```
[root@vultr ~]# yum install denyhosts

没有可用软件包 denyhosts。
错误：无须任何处理

```

## 手动安装

https://blog.csdn.net/daodan988/article/details/40847069

1. 下载原文件且解压

```
wget http://downloads.sourceforge.net/denyhosts/DenyHosts-2.6.tar.gz
tar zxvf DenyHosts-2.6.tar.gz
cd DenyHosts-2.6

```

2. 安装、配置和启动
```
python setup.py install


默认是安装到/usr/share/denyhosts/目录的,进入相应的目录修改配置文件

chown root daemon-control
chmod 700 daemon-control
./daemon-control start

稍等片刻
starting DenyHosts:    /usr/bin/env python /usr/bin/denyhosts.py --daemon --config=/usr/share/denyhosts/denyhosts.cfg
[root@vultr denyhosts]#

```

3. 查看拦截日志
```
# 查看denyhosts收集到的恶意ip
cat /etc/hosts.deny

# 统计该文件的行数
cat /etc/hosts.deny | wc -l

```

## denyhosts配置详解
默认配置就能很好的工作，如要个性化设置可以修改 /etc/denyhosts.conf

```
############ THESE SETTINGS ARE REQUIRED ############
#sshd的日志文件
SECURE_LOG = /var/log/secure 

#将阻止IP写入到hosts.deny,所以这个工具只支持 支持tcp wrapper的协议     
HOSTS_DENY = /etc/hosts.deny 

#过多久后清除已阻止的IP,即阻断恶意IP的时长  （4周）   
PURGE_DENY = 4w 

#阻止服务名   
BLOCK_SERVICE  = sshd

#允许无效用户登录失败的次数     
DENY_THRESHOLD_INVALID = 5

#允许普通有效用户登录失败的次数   
DENY_THRESHOLD_VALID = 10  

#允许root登录失败的次数  
DENY_THRESHOLD_ROOT = 1  

#设定 deny host 写入到该资料夹   
DENY_THRESHOLD_RESTRICTED = 1

#将deny的host或ip记录到work_dir中      
WORK_DIR = /var/lib/denyhosts      
SUSPICIOUS_LOGIN_REPORT_ALLOWED_HOSTS=YES

#是否做域名反解   
HOSTNAME_LOOKUP=YES  

#将DenyHost启动的pid记录到LOCK_FILE中，已确保服务正确启动，防止同时启动多个服务  
LOCK_FILE = /var/lock/subsys/denyhosts    

############ THESE SETTINGS ARE OPTIONAL ############
#设置管理员邮件地址 例如****@163.com
ADMIN_EMAIL = root  
SMTP_HOST = localhost  
SMTP_PORT = 25  
SMTP_FROM = DenyHosts &lt;nobody@localhost&gt;  
SMTP_SUBJECT = DenyHosts Report from $[HOSTNAME]  
AGE_RESET_VALID=5d  
AGE_RESET_ROOT=25d  
AGE_RESET_RESTRICTED=25d  
AGE_RESET_INVALID=10d

######### THESE SETTINGS ARE SPECIFIC TO DAEMON MODE  ##########
#denyhost服务日志文件
DAEMON_LOG = /var/log/denyhosts  

DAEMON_SLEEP = 30s 
#该项与PURGE_DENY 设置成一样，也是清除hosts.deniedssh 用户的时间 
DAEMON_PURGE = 1h   
```

