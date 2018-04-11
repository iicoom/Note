Linux命令记录.md

## 查看版本信息
```
[root@cache /]# lsb_release -a
LSB Version:  :base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-noarch
Distributor ID: CentOS
Description:  CentOS release 6.9 (Final)
Release:  6.9
Codename: Final

或者：

[root@cache /]# cat /proc/version
Linux version 2.6.32-358.el6.x86_64 (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-3) (GCC) ) #1 SMP Fri Feb 22 00:31:26 UTC 
```

## 查看Linux服务器的CPU情况
### （Linux查看cpu相关信息，包括型号、主频、内核信息等）
```
[root@cache /]# cat /proc/version
Linux version 2.6.32-358.el6.x86_64 (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-3) (GCC) ) #1 SMP Fri Feb 22 00:31:26 UTC 2013
[root@cache /]# cat /proc/cpuinfo
processor : 0
vendor_id : GenuineIntel
cpu family  : 6
model   : 26
model name  : Intel(R) Xeon(R) CPU           L5520  @ 2.27GHz
stepping  : 5
cpu MHz   : 2266.747
cache size  : 8192 KB
fpu   : yes
fpu_exception : yes
cpuid level : 11
wp    : yes
flags   : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss syscall nx rdtscp lm constant_tsc up arch_perfmon pebs bts xtopology tsc_reliable nonstop_tsc aperfmperf unfair_spinlock pni ssse3 cx16 sse4_1 sse4_2 popcnt hypervisor lahf_lm ida dts
bogomips  : 4533.49
clflush size  : 64
cache_alignment : 64
address sizes : 40 bits physical, 48 bits virtual
power management:

```

### CPU核数
```
cat /proc/cpuinfo | grep "cpu cores" | uniq 

CPU个数
[xiaomao@iZ258wvzn92Z ~]$ cat /proc/cpuinfo | grep "processor" | wc
      2       6      28

物理CPU个数*核数 = 逻辑CPU个数
[xiaomao@iZ258wvzn92Z proc]$ cat cpuinfo | grep "cpu cores"
cpu cores	: 2
cpu cores	: 2
[xiaomao@iZ258wvzn92Z proc]$ cat cpuinfo | grep "cpu cores" | uniq
cpu cores	: 2
```

## 查看内存使用情况
```
[xiaomao@iZ258wvzn92Z ~]$ free -m
             total       used       free     shared    buffers     cached
Mem:          3832       3417        415          0        107        336
-/+ buffers/cache:       2973        859
Swap:            0          0          0

m指使用M字节显示内存使用情况
```

## 查看硬盘使用情况
```
[xiaomao@iZ258wvzn92Z ~]$ df
Filesystem     1K-blocks     Used Available Use% Mounted on
/dev/vda1       20641404 12585284   7007596  65% /
tmpfs            1962340        0   1962340   0% /dev/shm
/dev/vdb        41284928 22044560  17143216  57% /mnt

[xiaomao@iZ258wvzn92Z ~]$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        20G   13G  6.7G  65% /
tmpfs           1.9G     0  1.9G   0% /dev/shm
/dev/vdb         40G   22G   17G  57% /mnt
```

## ps
Linux作为Unix的衍生操作系统，Linux内建有查看当前进程的工具ps。ps命令能够给出当前系统中进程的快照.
man ps 查看手册

```
[xiaomao@iZ258wvzn92Z ~]$ ps
  PID TTY          TIME CMD
 8875 pts/1    00:00:00 bash
 9728 pts/1    00:00:00 ps

 ```
结果默认会显示4列信息。

PID: 运行着的命令(CMD)的进程编号
TTY: 命令所运行的位置（终端）
TIME: 运行着的该命令所占用的CPU处理时间
CMD: 该进程所运行的命令

使用 -a 参数。-a 代表 all。同时加上x参数会显示没有控制终端的进程。
```
PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:02 /sbin/init
    2 ?        S      0:00 [kthreadd]
    3 ?        S      0:20 [migration/0]
    4 ?        S      4:05 [ksoftirqd/0]
    5 ?        S      0:00 [migration/0]
    6 ?        S      0:28 [watchdog/0]
    7 ?        S      0:20 [migration/1]
21184 ?        Sl     4:53 node /mnt/projects/cloud-ranch-v2/index.js
21266 ?        Sl     8:51 node /mnt/projects/msg_center/index.js
23755 ?        Sl    45:25 java -jar member.jar --server.port=18880 --spring.profiles.active=functional
23829 ?        Ssl    7:40 node /mnt/projects/sina_pay/bin/development.js
24191 ?        Sl    18:22 node /mnt/projects/ranch_api/bin/development.js
26931 ?        Ssl    3:21 PM2 v2.4.6: God Daemon (/mnt/pm2)
27753 ?        Ssl    0:00 /usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/update-notifier/ch
29881 ?        S      0:00 /bin/sh /usr/bin/mysqld_safe --datadir=/var/lib/mysql --pid-file=/var/lib/mysql/iZ2
31266 ?        Ss     0:00 sshd: xiaoming [priv]
31268 ?        S      0:00 sshd: xiaoming@pts/4
31269 pts/4    Ss+    0:00 -bash
31451 ?        Ssl   31:25 node /mnt/projects/contract/bin/functional.js
31472 ?        Ssl   21:59 node /mnt/projects/pay_center/bin/www
31612 ?        Sl     0:34 node /mnt/projects/ucenter_v2/index.js
```

在需要查看特定用户进程的情况下，我们可以使用 -u 参数。比如我们要查看用户'pungki'的进程，可以通过下面的命令：
ps -u pungki

## w 查看当前登录用户 在做什么
[xiaomao@iZ258wvzn92Z task_consume]$ w
 17:57:44 up 262 days,  5:41,  4 users,  load average: 1.03, 2.40, 5.53
USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
xiaoming pts/1    121.69.73.122    09:56    5.00s  0.16s  0.16s -bash
flt      pts/2    121.69.73.122    15:18    1:24m  0.02s  0.02s -bash
xiaomao  pts/4    121.69.73.122    Wed15    0.00s  0.03s  0.00s w
litan    pts/0    121.69.73.122    15:43    1.00s  0.14s  0.14s -bash

## grep
（global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。

## 查看Linux的系统平均负载
1. uptime - Tell how long the system has been running.

[xiaomao@iZ258wvzn92Z ~]$ uptime
 14:01:07 up 213 days,  1:45,  4 users,  load average: 1.03, 1.01, 1.00

2. w - Show who is logged on and what they are doing.

[xiaomao@iZ258wvzn92Z ~]$ w
 14:05:48 up 213 days,  1:50,  4 users,  load average: 1.00, 1.02, 1.00
USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
flt      pts/1    121.69.73.122    13:44   19:49   0.03s  0.03s -bash
litan    pts/2    121.69.73.122    11:28   16:20   0.01s  0.01s -bash
xiaoming pts/4    121.69.73.122    13:45   17:00   0.02s  0.02s -bash
xiaomao  pts/5    121.69.73.122    14:00    0.00s  0.00s  0.00s w


3. top - display Linux tasks 实时动态
The  top program provides a dynamic real-time view of a running system.  It can display sys-
       tem summary information as well as a list of tasks currently being managed by the Linux ker-
       nel.
[xiaomao@iZ258wvzn92Z ~]$ top
top - 14:13:33 up 213 days,  1:57,  4 users,  load average: 1.01, 1.00, 1.00
Tasks: 131 total,   2 running, 129 sleeping,   0 stopped,   0 zombie
Cpu(s): 39.9%us, 11.8%sy,  0.0%ni, 45.7%id,  0.0%wa,  0.0%hi,  2.7%si,  0.0%st
Mem:   3924684k total,  3574520k used,   350164k free,   113704k buffers
Swap:        0k total,        0k used,        0k free,   355504k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
17390 root      20   0 1301m 151m  13m R 100.1  4.0   1589:17 node /mnt/proje
  130 root      20   0 36092 1392 1148 S  6.0  0.0  18776:19 plymouthd
 1228 root      20   0  931m  31m 4008 S  0.3  0.8   1578:34 PM2 v2.4.6: God
 1596 root      20   0  184m  37m  848 S  0.3  1.0 632:08.93 redis-server
 1604 root      20   0 7131m 122m 7784 S  0.3  3.2 955:25.21 mongod
 4702 flt       20   0 98328 1772  804 S  0.3  0.0   0:00.04 sshd
17938 root      20   0 1295m 118m 6524 S  0.3  3.1  14:03.21 node /mnt/proje
23829 root      20   0 1288m 105m 4268 S  0.3  2.7   8:46.88 node /mnt/proje
32613 xiaoming  20   0 3701m 500m 7204 S  0.3 13.1   9:37.71 java
    1 root      20   0 19232  380   88 S  0.0  0.0   0:02.47 init
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd


## uname
       Print certain system information.  With no OPTION, same as -s.

       -a, --all
              print all information, in the following order, except omit -p and -i if unknown:

       -s, --kernel-name
              print the kernel name

       -n, --nodename
              print the network node hostname

       -r, --kernel-release
              print the kernel release

       -v, --kernel-version
              print the kernel version

       -m, --machine

## lspci
lspci is a utility for displaying information about PCI buses in the system and devices con-
       nected to them.

00:00.0 Host bridge: Intel Corporation 440FX - 82441FX PMC [Natoma] (rev 02)
00:01.0 ISA bridge: Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II]
00:01.1 IDE interface: Intel Corporation 82371SB PIIX3 IDE [Natoma/Triton II]
00:01.2 USB controller: Intel Corporation 82371SB PIIX3 USB [Natoma/Triton II] (rev 01)
00:01.3 Bridge: Intel Corporation 82371AB/EB/MB PIIX4 ACPI (rev 03)
00:02.0 VGA compatible controller: Cirrus Logic GD 5446
00:03.0 Ethernet controller: Red Hat, Inc Virtio network device
00:04.0 Ethernet controller: Red Hat, Inc Virtio network device
00:05.0 Communication controller: Red Hat, Inc Virtio console
00:06.0 SCSI storage controller: Red Hat, Inc Virtio block device
00:07.0 SCSI storage controller: Red Hat, Inc Virtio block device
00:08.0 Unclassified device [00ff]: Red Hat, Inc Virtio memory balloon
00:09.0 Unclassified device [00ff]: Red Hat, Inc Device 1014

## 查看网络配置
/etc/systemconfig/network-scripts/

## ifconfig iwconfig

^C[xiaomao@iZ258wvzn92Z ~]$ ifconfig
eth0      Link encap:Ethernet  HWaddr 00:16:3E:12:0A:5B
          inet addr:10.174.9.148  Bcast:10.174.15.255  Mask:255.255.248.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:282063 errors:0 dropped:0 overruns:0 frame:0
          TX packets:1068739 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:22668936 (21.6 MiB)  TX bytes:81949766 (78.1 MiB)

eth1      Link encap:Ethernet  HWaddr 00:16:3E:12:02:16
          inet addr:101.201.197.163  Bcast:101.201.199.255  Mask:255.255.252.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:503627951 errors:0 dropped:0 overruns:0 frame:0
          TX packets:497871622 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:35930506319 (33.4 GiB)  TX bytes:47841588101 (44.5 GiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:383570931753 errors:0 dropped:0 overruns:0 frame:0
          TX packets:383570931753 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:19262647018875 (17.5 TiB)  TX bytes:19262647018875 (17.5 TiB)

[xiaomao@iZ258wvzn92Z ~]$ iwconfig
lo        no wireless extensions.

eth0      no wireless extensions.

eth1      no wireless extensions.


## mxj@ubuntu:~/project$ sudo -s

## who
查看最近登录的用户
➜  ~ who
mxj      console  Jan 29 09:47
mxj      ttys000  Jan 31 17:50
mxj      ttys002  Jan 31 15:49

## finger
```
Login    Name                 TTY  Idle  Login  Time   Office  Phone
mxj      MXJ                 *con  7:37  日    09:19
mxj      MXJ                  s00        日    16:57
```

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

### Yum
（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。

### apt-get

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
### 发HTTP请求
```
wget https://www.baidu.com/
会把请求到的数据保存到index.html文件中

wget -S -O - https://www.baidu.com/
会将请求的数据，输出到屏幕
```

## 用户安装目录
* npm 全局安装的目录
```
[root@cache /]# ls
bin  boot  cgroup  dev  edata  etc  home  lib  lib64  lost+found  media  misc  mnt  net  opt  proc  root  sbin  selinux  srv  sys  tmp  usr  var
[root@cache /]# cd usr
[root@cache usr]# ls
bin  etc  FastDFS  games  include  lib  lib64  libevent-2.0.21-stable  libexec  local  sbin  share  src  tmp
[root@cache usr]# cd local
[root@cache local]# ls
bin  etc  games  include  jre  lib  lib64  libexec  n  redis-3.0.5  redis-log  sbin  share  src
[root@cache local]# cd lib
[root@cache lib]# ls
libfastcommon.so  libfastcommon.so.1  libfdfsclient.so  libfdfsclient.so.1  node_modules
[root@cache lib]# ls node_modules
npm  pm2
```

* n 和node安装目录
```
[root@cache /]# cd usr/local
[root@cache local]# ls
bin  etc  games  include  jre  lib  lib64  libexec  n  redis-3.0.5  redis-log  sbin  share  src
[root@cache local]# ls bin
fdfs_appender_test   fdfs_crc32          fdfs_file_info  fdfs_test      fdfs_upload_appender  npm  pm2-dev      redis-benchmark   redis-cli       restart.sh
fdfs_appender_test1  fdfs_delete_file    fdfs_monitor    fdfs_test1     fdfs_upload_file      npx  pm2-docker   redis-check-aof   redis-sentinel  stop.sh
fdfs_append_file     fdfs_download_file  fdfs_storaged   fdfs_trackerd  node                  pm2  pm2-runtime  redis-check-dump  redis-server
[root@cache local]# ls node
ls: 无法访问node: 没有那个文件或目录
[root@cache local]# cd ..
[root@cache usr]# ls
bin  etc  FastDFS  games  include  lib  lib64  libevent-2.0.21-stable  libexec  local  sbin  share  src  tmp
[root@cache usr]# cd local
[root@cache local]# ls
bin  etc  games  include  jre  lib  lib64  libexec  n  redis-3.0.5  redis-log  sbin  share  src
[root@cache local]# ls n
versions
[root@cache local]# ls n/versions
io  node
[root@cache local]# ls n/versions/io
[root@cache local]# ls n/versions/node
6.11.0  8.11.1  8.6.0  9.10.1
```

## 切换用户角色
### sudo 命令  
xzm@ubuntu:~$  sudo

这样输入当前管理员用户密码就可以得到超级用户的权限。但默认的情况下5分钟root权限就失效了。

### 真正切换角色
```
xzm@ubuntu:~$  su

输入root用户的密码即可。
su "king" 或者 exit回到用户权限s

[root@iZ258wvzn92Z etc]# exit
logout
[xiaomao@iZ258wvzn92Z ~]$

或者：
sudo -i
xzm@ubuntu:~$  sudo -i

通过这种方法输入当前用户的密码就可以进到root用户。
```

## 文本/文件操作
> head 与 tail 就像它的名字一样的浅显易懂，它是用来显示开头或结尾某个数量的文字区块，head 用来显示档案的开头至标准输出中，而 tail 想当然就是看档案的结尾，看看下面的范例：
### tail
tail filename.txt     默认读取文件结尾后10行
tail -n filename      显示文件后n行
tail -25 mail.txt     displays the last 25 lines of a file
sodu tail -50f file   展示文件后50行，并跟随

### head
head -6 readme.txt
displays the first 6 lines of a file

### head&tail 事实证明这个是扯淡的。。。
head -20 file | tail -10  结合了 head 与 tail 的指令，显示档案的第 11 行到第 20 行：


### touch
➜  ~ touch wtf.txt
### xargs
命令是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数，
xargs能够处理管道或者stdin并将其转换成特定命令的命令参数

➜  ~ cat wtf.txt
112455
safajfa
rsafajfa
ruuafajfa
ruuuu
aaaaaf112455
safajfa
ruuuu
aaaaaf

➜  ~ cat wtf.txt | xargs
112455 safajfa rsafajfa ruuafajfa ruuuu aaaaaf112455 safajfa ruuuu aaaaaf


-n选项多行输出：
➜  ~ cat wtf.txt | xargs -n3
112455 safajfa rsafajfa
ruuafajfa ruuuu aaaaaf112455
safajfa ruuuu aaaaaf

## 目录操作
### 创建目录
$ mkdir easy_mongo && cd easy_mongo

### 移除目录
[root@cache mnt]# rmdir projects
rmdir: 删除 "projects" 失败: 目录非空

### 移除非空目录（目录中有目录或文件）
[root@cache projects]# ls
gogo  readme.txt
[root@cache mnt]# rm -rf projects
-f 即使原档案属性设为唯读，亦直接删除，无需逐一确认。 其中参数-f表示force.
-r 将目录及以下之档案亦逐一删除。 
















