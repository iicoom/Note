Linux命令记录.md

## Yum
（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。

## mxj@ubuntu:~/project$ sudo -s

## who
查看最近登录的用户
➜  ~ who
mxj      console  Jan 29 09:47
mxj      ttys000  Jan 31 17:50
mxj      ttys002  Jan 31 15:49

## locate filename
定位文件路径

## linux复制指定目录下的全部文件到另一个目录中
https://www.cnblogs.com/zdz8207/p/linux-cp-dir.html
cp [选项] 源文件或目录 目标文件或目录
该命令的各选项含义如下：
- a 该选项通常在拷贝目录时使用。它保留链接、文件属性，并递归地拷贝目录，其作用等于dpR选项的组合。
- d 拷贝时保留链接。
- f 删除已经存在的目标文件而不提示。
- i 和f选项相反，在覆盖目标文件之前将给出提示要求用户确认。回答y时目标文件将被覆盖，是交互式拷贝。
- p 此时cp除复制源文件的内容外，还将把其修改时间和访问权限也复制到新文件中。
- r 若给出的源文件是一目录文件，此时cp将递归复制该目录下所有的子目录和文件。此时目标文件必须为一个目录名。
- l 不作拷贝，只是链接文件。

cp -r myAntPro/. antdPro

## tail
sodu tail -50f file

## 包管理
> rpm包和deb包是两种Linux系统下最常见的安装包格式，在安装一些软件或服务的时候免不了要和它们打交道。rpm包主要应用在RedHat系列包括 Fedora等发行版的Linux系统上，deb包主要应用于Debian系列包括现在比较流行的Ubuntu等发行版上。 

yum可以用于运作rpm包，例如在Fedora系统上对某个软件的管理：
安装：yum install <package_name> 
卸载：yum remove <package_name> 
更新：yum update <package_name> 

apt-get可以用于运作deb包，例如在Ubuntu系统上对某个软件的管理：
安装：apt-get install <package_name> 
卸载：apt-get remove <package_name> 
更新：apt-get update <package_name>

## 安装包
apt-get

apt-get clean
rm -rf /var/lib/apt/lists/*
apt-get clean
apt-get update 
apt-get upgrade

## the following signatures were invalid expkeysig ed444ff07d8d0bf6 kali linux repository
```
wget https://http.kali.org/kali/pool/main/k/kali-archive-keyring/kali-archive-keyring_2018.1_all.deb
apt install ./kali-archive-keyring_2018.1_all.deb
apt-get update
```

## 查看网络信息
iwconfig
必须确保你在使用USB无线网卡，虚拟机只能挂载USB无线网卡
启动虚拟机，在kali linux中打开终端，输入
airmon-ng
