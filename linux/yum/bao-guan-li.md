# 包管理

## 包管理

> rpm包和deb包是两种Linux系统下最常见的安装包格式，在安装一些软件或服务的时候免不了要和它们打交道。rpm包主要应用在RedHat系列包括 Fedora等发行版的Linux系统上，deb包主要应用于Debian系列包括现在比较流行的Ubuntu等发行版上。

yum可以用于运作rpm包，例如在Fedora系统上对某个软件的管理： 安装：yum install  卸载：yum remove  更新：yum update 

apt-get可以用于运作deb包，例如在Ubuntu系统上对某个软件的管理： 安装：apt-get install  卸载：apt-get remove  更新：apt-get update 

### Yum

[CentOs 源配置](https://www.cnblogs.com/qianxiaoruofeng/p/5762204.html) （全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。

#### 环境准备

yum -y install gcc gcc-c++ autoconf automake make

#### net-tools

我们安装一个工具，我刚下好的系统连一个查看网卡的工具都没安装我们安装一个net-tools 和 openssh 工具，否则我们很难操作我刚安装好的这一台原始机。

```text
yum install net-tools
```

检测net-tools安装情况

```text
ifconfig
```

现在我们的系统还不能远程登陆 因为系统缺少ssh服务插件，我们要安装一个远程服务的插件我们使用 openssh 这个远程插件

#### 例子 安装openssh

```text
yum install openssh
```

检测一下是否安装了ssh 服务软件

```text
rpm -qa | grep ssh

[root@dev ~]# rpm -qa | grep ssh
openssh-server-7.4p1-16.el7.x86_64
openssh-clients-7.4p1-16.el7.x86_64
libssh2-1.4.3-12.el7.x86_64
openssh-7.4p1-16.el7.x86_64
我们看到这里ssh服务安装好了。
```

#### yum -y install vim

### apt-get

apt-get clean rm -rf /var/lib/apt/lists/\* apt-get clean apt-get update apt-get upgrade

## the following signatures were invalid expkeysig ed444ff07d8d0bf6 kali linux repository

```text
wget https://http.kali.org/kali/pool/main/k/kali-archive-keyring/kali-archive-keyring_2018.1_all.deb
apt install ./kali-archive-keyring_2018.1_all.deb
apt-get update
```

