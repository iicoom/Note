## 安装ssh
### 安装openssh(for Ubuntu)
首先需要在Ubuntu_gitserver:14.04上安装openssh服务端，这里我们将 服务端 和 客户端 都同时安装：

sudo apt-get install openssh-server openssh-client

### Centos
yum install ssh

### 查看ssh服务是否启动
打开"终端窗口"，输入

sudo ps -e | grep ssh
回车-->有sshd,说明ssh服务已经启动，
如果没有启动，输入
sudo service ssh start
回车-->ssh服务就会启动。

## Generating a new SSH key pair
https://docs.gitlab.com/ee/ssh/README.html#generating-a-new-ssh-key-pair

```
 ssh-keygen -o -t rsa -b 4096 -C "email@example.com"
```
The -C flag adds a comment in the key in case you have multiple of them and want to tell which is which. It is optional.

上面的4096，生成的会比较长
```
ssh-keygen -t rsa -C "your_email@example.com"
```


## ssh 免密登录
[Linux下实现免密码登录(超详细)](https://www.cnblogs.com/yixue2017/p/7559970.html)
```
通过scp将内容写到对方的文件中
命令：scp -p ~/.ssh/id_rsa.pub root@<remote_ip>:/root/.ssh/authorized_keys

➜  ~ scp -p ~/.ssh/id_rsa.pub root@149.28.210.xx:/root/.ssh/authorized_keys
root@149.28.2xx.xx's password:
id_rsa.pub                                                                                                                                      100%  404     1.0KB/s   00:00
```
## ssh servername 快捷登录（保存ssh的主机名和用户名ssh config)
在linux下，要远程连接另外一台linux服务器，可以使用ssh，具体类似下面的命令：
```
ssh michael@192.168.0.222
```
但是，如果登陆linux服务器是每天的都要做的事情，那么这样每天输入用户名和IP地址是稍微有些麻烦的。使用下面的方法，你就可以避免这种麻烦。

在用户根目录下的.ssh文件内创建config文件，如下：
```
vi ~/.ssh/config
```
在其中以类似如下的格式输入要登陆的服务器的相关信息：
```
Host servername
User username
Hostname serverIP
```
其中的servername是服务器的别名，username是用户名，serverIP就是这台服务器的IP。比如最前面的那个登陆命令，就可以写成下面的形式：
```
Host ubuntu
User michael
Hostname 192.168.0.222
```
如果有多台服务器，可以空一行，然后以同样的格式写在这个文件中。

然后，你就可以直接使用类似下面的命令连接服务器了：
```
ssh ubuntu
```

### 添加了ssh key之后
当你在github后台添加了ssh keys之后，如果你在本地 git clone git://www.somesite.com/test.git 的时候出现了一些问题，不如access denied，那么你要在本地这么测试一下：
```
ssh -T git@github.com
```
如果返回是：
Permission denied (publickey).

那么你可能要在本地ssh-add一下，当然在这之前你可以使用 ssh -vT git@github.com 查看一下到底是因为什么原因导致的失败。

## ssh代理 http://www.cnblogs.com/kwongtai/p/6903420.html
### ssh参数
* 反向代理
ssh -fCNR

* 正向代理
ssh -fCNL

```
-f 后台执行ssh指令
-C 允许压缩数据
-N 不执行远程指令
-R 将远程主机(服务器)的某个端口转发到本地端指定机器的指定端口
-L 将本地机(客户机)的某个端口转发到远端指定机器的指定端口
-p 指定远程主机的端口

******************区分大小写啊各位亲******************
```

### 通过ssh tunnel端口映射
1. 登录到内网虚拟机服务器 ssh -p 1125 -fNR 3838:localhost:22 litan@101.201.197.165（意思是把内网localhost:22映射到公网IP服务器101.201.197.165的3838端口）
2. 然后可以在任何接入Internet的设备上访问内网服务器localhost。命令如下3
3. ssh -p 3838 fucker@101.201.197.165

4. 登录到内网虚拟机服务器 ssh -p 1125 -fNR 3838:localhost:8000 litan@101.201.197.165
5. 可以在101.201.197.165上配合Nginx使用 将163的3838端口指向 内网的应用程序8000
```
Nginx:

server {
                access_log      /mnt/nginx_log/logs/admin.dev.yunfarm.cn.log;
                error_log       /mnt/nginx_log/logs/admin.dev.yunfarm.cn.err.log;
                listen          80;
                server_name     admin.dev.yunfarm.cn admin.dev.yfarm.net;
                proxy_set_header Host $host;
                proxy_set_header REMOTE-HOST $remote_addr;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                location / {
                        proxy_pass http://127.0.0.1:3838;
                }
        }

```

### AutoSSH 自动重连
使用SSH的方式不够稳定，使用AutoSSH可以自动在连接断开时自动重连，再把AutoSSH加入系统服务自动启动，则可以做到稳定的连接。
1. 安装AutoSSH
```
sudo apt-get install autossh
```
2. 执行AutoSSH命令
```
autossh -M 5555 -NR 3838:127.0.0.1:8000 root@101.201.197.165
```
-M：在5555端口上监听连接的变化，只要断开就重连 
少了-f 参数，因为AutoSSH本来就在后台运行

163 nginx
```
server {
                # 返回代理转到公司内网的 190 服务器上去
                access_log      /mnt/nginx_log/logs/admin.dev.yunfarm.cn.log;
                error_log       /mnt/nginx_log/logs/admin.dev.yunfarm.cn.err.log;
                listen          80;
                server_name     admin.dev.yunfarm.cn;
                proxy_set_header Host $host;
                proxy_set_header REMOTE-HOST $remote_addr;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                location / {
                        proxy_pass http://127.0.0.1:60005;
                }
        }
```

190
```
[root@cache cloud_ranch]# netstat -nlp |grep LISTEN
tcp        0      0 127.0.0.1:60004             0.0.0.0:*                   LISTEN      1723/ssh            
tcp        0      0 127.0.0.1:60005             0.0.0.0:*                   LISTEN      21114/autossh       
tcp        0      0 127.0.0.1:60006             0.0.0.0:*                   LISTEN      20610/ssh           
tcp        0      0 127.0.0.1:60007             0.0.0.0:*                   LISTEN      4164/autossh        
tcp        0      0 127.0.0.1:60008             0.0.0.0:*                   LISTEN      17098/ssh           
```

```
autossh -M 60005 -NR 60005:127.0.0.1:3011 root@114.114.114.114
```

### 查看正在监听的端口
```
[xiaomao@iZ258wvzn92Z ~]$ netstat -lntp
(No info could be read for "-p": geteuid()=517 but you should be root.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name
tcp        0      0 101.201.197.163:6379        0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:4369                0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:10003               0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:10004               0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:3030                0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:22                  0.0.0.0:*                   LISTEN      -
```
### 检验是否已经启动了可以使用ps aux | grep ssh指令来查看：


## terminal
* 命令记忆 输入 ssh xiaomao 按arrow up自动匹配之间记忆的命令

## ssh 集群登录配置
[配置ssh免密码登录——集群学习日记](http://www.cnblogs.com/kwongtai/p/7224495.html)




