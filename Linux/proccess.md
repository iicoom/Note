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

3. ps -ef 
[root@document java_projects]# ps -ef | grep java
root      1076     1  0 May22 ?        00:13:21 java -jar member.jar --server.port=18880 --spring.profiles.active=functional
root     28329 28225  0 11:46 pts/0    00:00:00 grep java

4. kill 
kill 3268
kill 3268
-bash: kill: (3268) - 没有那个进程

kill命令格式：
kill -Signal pid
pid是进程号，可以用 ps 命令查出

signal是发送给进程的信号，TERM(或数字9）表示“无条件终止”；
因此 kill - 9 表示强制杀死该进程； 
而 kill 则有局限性，例如后台进程，守护进程等；

5. ps -u username
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
```
[root@cache ~]# ps ax | grep nginx
6480 ?        Ss     0:00 nginx: master process /usr/local/nginx/sbin/nginx
6795 ?        S      0:00 nginx: worker process
8851 pts/0    S+     0:00 grep nginx

[root@cache ucenter_v2]# ps ax | grep node
 2130 ?        Ssl    1:57 node /mnt/yfarm.net/www/bin/www                                 
17768 ?        Ssl    0:14 node /mnt/projects/ranch_api/bin/development.js                 
18126 ?        Ssl    1:56 node /mnt/projects/cloud_ranch/cloud_bin/www                    
20397 ?        Sl     0:05 node /mnt/yfarm.net/cloud-ranch-v2/index.js                                
21735 ?        Ssl    0:02 node /mnt/projects/task_consume/bin/development.js              
21843 ?        Sl     0:03 node /mnt/yfarm.net/ucenter_v2/index.js                                    
21889 pts/2    S+     0:00 grep node
```

6. 
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

####【Linux】Swap与Memory
https://www.cnblogs.com/004x/p/6651600.html
　Memory指机器物理内存，读写速度低于CPU一个量级，但是高于磁盘不止一个量级。所以，程序和数据如果在内存的话，会有非常快的读写速度。但是，内存的造价是要高于磁盘的，且内存的断电丢失数据也是不能把所有数据和程序都保存在内存中的原因。

既然不能全部使用内存，那数据还有程序不可能一直霸占在内存中。当内存没有可用的，就必须要把内存中不经常运行的程序踢出去。但是踢到哪里去，这时候swap就出现了。

　　Swap全称为swap place，即交换分区。当内存不够的时候，被踢出的进程被暂时存储到交换区。当需要这条被踢出的进程时，就从交换区重新加载到内存，否则它不会主动交换到真实内存中。


