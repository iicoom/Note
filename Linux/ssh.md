## Git服务器的搭建
[git服务器的简易搭建](https://blog.csdn.net/lyhdream/article/details/49561645)
### 安装openssh
首先需要在Ubuntu_gitserver:14.04上安装openssh服务端，这里我们将服务端和客户端都同时安装：

sudo apt-get install openssh-server openssh-client

### 安装git环境
作为服务端的git服务器（git作为一个代码管理工具，既可以作为服务端也可以作为客户端管理本地代码仓库）

sudo apt-get install git

### 创建一个git用户

adduser  git

### 进入home目录创建一个目录用于存放仓库

cd  /home

mkdir git_pro

### 修改目录的所属组为git

chown git:git /home/git_pro

### 修改目录的操作权限为所有者和所属组的人为读、写、执行：

chmod -R 774 /home/git_pro

### 创建仓库
这样就在服务端创建好了一个可以使用的git仓库了，为了能在客户端将本地仓库推送到服务端，我们确保ssh服务是开启的：

ps -A | grep ssh

如果没有开启，则执行：

/etc/init.d/ssh start

来开启服务

### 配置服务器端authorized_keys  
* 进入git用户的主目录，创建一个 .ssh目录
* mkdir  .ssh  
* cd .ssh  
* 为该用户创建一个公钥和私钥：
* ssh-keygen -t rsa   //以rsa的加密方式生成秘钥对  
* 在.ssh目录里创建一个authorized_keys文件，用于存放开发者用户的公钥
* touch authorized_keys  

将 开发者 .ssh目录里生成的公钥复制到 authorized_keys 文件里
这样，服务端就已经具备了通过公钥来为用户提供推送代码的权限了。

## Git 客户端
假设现在有一个开发者（用户名为lyh1），想要对该仓库具有推送代码的权限，那么他就可以在自己电脑上，通过lyh1这个用户生成相应的公钥和私钥，把公钥复制到服务端.ssh/authorized_keys文件里（另起一行），就可以了。

### 服务端配置问题
（注意：如果此时通过公钥访问还是需要输入密码，重新使用ssh-keygen生成秘钥对，文件名改为id_rsa.pub以及id_rsa即可；具体需要查看/etc/ssh/ssh_config 配置文件里的要求，参见：http://www.cnblogs.com/liyuanhong/articles/6791608.html）


## ssh 生成公钥私钥
### linux mac 的.shh都在~用户目home录下 cd ~ 可以进入你的home目录
### ls -a 显示所有文件包括隐藏文件
1. 首先需要检查你电脑是否已经有 SSH key  cd ~/.ssh
2. 创建一个 $ ssh-keygen -t rsa -C "your_email@example.com"
3. 复制公钥 cat ~/.ssh/id_rsa.pub

### 添加了ssh key之后
当你在github后台添加了ssh keys之后，如果你在本地 git clone git://www.somesite.com/test.git 的时候出现了一些问题，不如access denied，那么你要在本地这么测试一下：
```
ssh -T git@github.com
```
如果返回是：
Permission denied (publickey).

那么你可能要在本地ssh-add一下，当然在这之前你可以使用 ssh -vT git@github.com 查看一下到底是因为什么原因导致的失败。

## ssh代理
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


## terminal
* 命令记忆 输入 ssh xiaomao 按arrow up自动匹配之间记忆的命令