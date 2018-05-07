Linux命令记录.md
> 所有Linux指令都可以查看系统文档 man <command> 如 man ps 查看手册
## 系统相关信息
### 查看系统版本信息
```
[root@cache /]# lsb_release -a
LSB Version:  :base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-noarch
Distributor ID: CentOS
Description:  CentOS release 6.9 (Final)
Release:  6.9
Codename: Final

**LSB（Linux Standards Base)**

或者：

[root@cache /]# cat /proc/version
Linux version 2.6.32-358.el6.x86_64 (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-3) (GCC) ) #1 SMP Fri Feb 22 00:31:26 UTC 
```

### Linux查看cpu相关信息，包括型号、主频、内核信息等
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

#### CPU核数
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

#### 查看内存使用情况
```
[xiaomao@iZ258wvzn92Z ~]$ free -m
             total       used       free     shared    buffers     cached
Mem:          3832       3417        415          0        107        336
-/+ buffers/cache:       2973        859
Swap:            0          0          0

m指使用M字节显示内存使用情况
```

#### 查看硬盘使用情况
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

#### 查看文件占用内存大小
```
[xiaomao@iZ258wvzn92Z java_projects]$ ls
log.file  logs  member.jar  member.jar.bak  start_member.sh
[xiaomao@iZ258wvzn92Z java_projects]$ du log.file
166348  log.file
[xiaomao@iZ258wvzn92Z java_projects]$ du -h log.file
163M  log.file
[xiaomao@iZ258wvzn92Z java_projects]$ du -h logs
560M  logs
[xiaomao@iZ258wvzn92Z java_projects]$ du -h member.jar
24M member.jar
[xiaomao@iZ258wvzn92Z java_projects]$
```

## 查看系统进程相关信息
[10个重要的Linux ps命令实战](https://linux.cn/article-4743-1.html)
### ps
Linux作为Unix的衍生操作系统，Linux内建有查看当前进程的工具ps。ps命令能够给出当前系统中进程的快照.
ps - report a snapshot of the current processes.
ps displays information about a selection of the active processes. If you want a repetitive update of the selection and the displayed information,
use top(1) instead.
1. 不加参数的ps
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

2. 使用 -a 参数。-a 代表 all。同时加上x参数会显示没有 控制终端 的进程。
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
```

3. ps -u username
在需要查看特定用户进程的情况下，我们可以使用 -u 参数。比如我们要查看用户'pungki'的进程，可以通过下面的命令：
```
[root@cache ~]# ps -u root
PID TTY       TIME     CMD
1    ?        00:00:01 init
2    ?        00:00:00 kthreadd
3    ?        00:00:00 migration/0
.
.
6480 ?        00:00:00 nginx
6608 ?        00:00:00 sshd
6610 pts/0    00:00:00 bash
6645 ?        00:00:53 PM2 v2.10.2: Go
6662 ?        00:00:49 node /mnt/proje
8675 pts/0    00:00:00 ps
```
ps命令支持三种使用的语法格式:
* UNIX 风格，选项可以组合在一起，并且选项前必须有“-”连字符
* BSD 风格，选项可以组合在一起，但是选项前不能有“-”连字符
* GNU 风格的长选项，选项前有两个“-”连字符

centOS下查看nginx进程快照
[root@cache ~]# ps ax | grep nginx
6480 ?        Ss     0:00 nginx: master process /usr/local/nginx/sbin/nginx
6795 ?        S      0:00 nginx: worker process
8851 pts/0    S+     0:00 grep nginx

4. 
ps aux | less
也许你希望把结果按照 CPU 或者内存用量来筛选，这样你就找到哪个进程占用了你的资源。要做到这一点，我们可以使用 aux 参数，来显示全面的信息:

```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0  19340  1564 ?        Ss   Apr11   0:01 /sbin/init
root         2  0.0  0.0      0     0 ?        S    Apr11   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        S    Apr11   0:00 [migration/0]
root         4  0.0  0.0      0     0 ?        S    Apr11   0:00 [ksoftirqd/0]
```
[30个实例详解TOP命令](https://linux.cn/article-2352-1.html)
### top
The  top  program  provides  a dynamic real-time view of a running system.
1. 不加参数的
```
[root@cache ~]# top
top - 11:31:44 up 17:48,  1 user,  load average: 0.00, 0.00, 0.00
Tasks:  98 total,   1 running,  97 sleeping,   0 stopped,   0 zombie
Cpu(s):  1.0%us,  0.3%sy,  0.0%ni, 98.3%id,  0.0%wa,  0.3%hi,  0.0%si,  0.0%st
Mem:   1922064k total,  1221492k used,   700572k free,   570576k buffers
Swap:  4128764k total,        0k used,  4128764k free,   241292k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
 6662 root      20   0 1023m 119m  12m S  1.3  6.4   1:08.14 node /mnt/proje
    1 root      20   0 19340 1564 1244 S  0.0  0.1   0:01.53 init
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd
    3 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 migration/0
    4 root      20   0     0    0    0 S  0.0  0.0   0:00.99 ksoftirqd/0
    5 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 stopper/0
    6 root      RT   0     0    0    0 S  0.0  0.0   0:00.07 watchdog/0
```
第二行显示的是任务或者进程的总结。进程可以处于不同的状态。这里显示了全部进程的数量。除此之外，还有正在运行、睡眠、停止、僵尸进程的数量（僵尸是一种进程的状态）

PR: 进程的调度优先级。这个字段的一些值是'rt'。这意味这这些进程运行在实时态。

NI: 进程的nice值（优先级）。越小的值意味着越高的优先级。

VIRT: 进程使用的虚拟内存。

RES: 驻留内存大小。驻留内存是任务使用的非交换物理内存大小。

SHR: SHR是进程使用的共享内存。

S: 这个是进程的状态。它有以下不同的值:
D - 不可中断的睡眠态。
R – 运行态
S – 睡眠态
T – 被跟踪或已停止
Z – 僵尸态

%CPU: 自从上一次更新时到现在任务所使用的CPU时间百分比。

%MEM: 进程使用的可用物理内存百分比。

TIME+: 任务启动后到现在所使用的全部CPU时间，精确到百分之一秒。

COMMAND: 运行进程所使用的命令。

#### uptime
```
[root@cache ~]# uptime
 11:43:37 up 18:00,  1 user,  load average: 0.00, 0.00, 0.00

当前时间   系统连续运行时间  当前用户连接数  系统平均负载（最近1分钟、5分钟、15分钟）
```
#### w 
查看当前登录用户 在做什么
[xiaomao@iZ258wvzn92Z task_consume]$ w
 17:57:44 up 262 days,  5:41,  4 users,  load average: 1.03, 2.40, 5.53
USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
xiaoming pts/1    121.69.73.122    09:56    5.00s  0.16s  0.16s -bash
flt      pts/2    121.69.73.122    15:18    1:24m  0.02s  0.02s -bash
xiaomao  pts/4    121.69.73.122    Wed15    0.00s  0.03s  0.00s w
litan    pts/0    121.69.73.122    15:43    1.00s  0.14s  0.14s -bash
#### free
free - Display amount of free and used memory in the system
```
[root@cache ~]# free
             total       used       free     shared    buffers     cached
Mem:       1922064    1221864     700200        168     570576     241312
-/+ buffers/cache:     409976    1512088
Swap:      4128764          0    4128764

[root@cache ~]# free -h
             total       used       free     shared    buffers     cached
Mem:          1.8G       1.2G       683M       168K       557M       235M
-/+ buffers/cache:       400M       1.4G
Swap:         3.9G         0B       3.9G
```


## grep
（global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。

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

### ifconfig iwconfig

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


[netstat 的10个基本用法](https://linux.cn/article-2434-1.html)
> Netstat 是一款命令行工具，可用于列出系统上所有的网络套接字连接情况，包括 tcp, udp 以及 unix 套接字，另外它还能列出处于监听状态（即等待接入请求）的套接字。如果你想确认系统上的 Web 服务有没有起来，你可以查看80端口有没有打开。
### netstat -lntp
netstat - Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships
```
[root@iZ258wvzn92Z ~]# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name
tcp        0      0 101.201.197.163:6379        0.0.0.0:*                   LISTEN      1596/redis-server 1
tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      2348/nginx
tcp        0      0 0.0.0.0:4369                0.0.0.0:*                   LISTEN      23999/epmd
tcp        0      0 0.0.0.0:10003               0.0.0.0:*                   LISTEN      31951/sshd
tcp        0      0 127.0.0.1:18005             0.0.0.0:*                   LISTEN      9108/java
tcp        0      0 0.0.0.0:22                  0.0.0.0:*                   LISTEN      7126/sshd
tcp        0      0 0.0.0.0:3030                0.0.0.0:*                   LISTEN      1228/PM2 v2.4.6
tcp        0      0 0.0.0.0:3000                0.0.0.0:*                   LISTEN      14921/node /mnt/pro
```
#### netstat -a 
列出所有当前的连接
netstat -at 使用 -t 选项列出 TCP 协议的连接
netstat -au 使用 -u 选项列出 UDP 协议的连接
#### netstat -ant
默认情况下 netstat 会通过反向域名解析技术查找每个 IP 地址对应的主机名。这会降低查找速度。如果你觉得 IP 地址已经足够，而没有必要知道主机名，就使用 -n 选项禁用域名解析功能。
#### netstat -tnl 
只列出监听中的连接
任何网络服务的后台进程都会打开一个端口，用于监听接入的请求。这些正在监听的套接字也和连接的套接字一样，也能被 netstat 列出来。使用 -l 选项列出正在监听的套接字。
#### sudo netstat -nlpt
使用 -p 选项查看进程信息
获取进程名、进程号以及用户 ID
#### sudo netstat -ltpe
相比进程名和进程号而言，查看进程的拥有者会更有用。使用 -ep 选项可以同时查看进程名和用户名。
#### netstat -s
netstat 可以打印出网络统计数据，包括某个协议下的收发包数量。


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


## 文件操作
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


### touch 创建文件
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

### tar 解压  https://blog.csdn.net/x_iya/article/details/72889456
tar zxvf nginx-1.6.2.tar.gz
-c: 建立压缩档案
-x：解压
-t：查看内容
-r：向压缩归档文件末尾追加文件
-u：更新原压缩包中的文件

以上这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个
-z：有gzip属性的
-j：有bz2属性的
-Z：有compress属性的
-v：显示所有过程
-O：将文件解开到标准输出

下面的参数-f是必须的

-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

#### tar 压缩
```
tar -cf all.tar *.jpg
这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。
```

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
















