## 查看系统进程相关信息
[10个重要的Linux ps命令实战](https://linux.cn/article-4743-1.html)

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

### ps
- ps -ef | grep node
  ```
  Zhong@LAPTOP-S26GFGQ7 MINGW64 /
  $ ps -ef | grep node
     Zhong    3384    3359 pty3     09:51:38 /d/Program Files/nodejs/node
     Zhong    3382    3360 pty2     09:51:34 /d/Program Files/nodejs/node
     Zhong    3386    3358 pty1     09:51:39 /d/Program Files/nodejs/node
     Zhong    3385    3357 pty4     09:51:38 /d/Program Files/nodejs/node
  ```
 - ps -ef|grep node|awk '{print $2}'
  ```
  Zhong@LAPTOP-S26GFGQ7 MINGW64 /
  $ ps -ef|grep node|awk '{print $2}'
    3384
    3382
    3386
    3385
  ```
- ps -ef|grep node|awk '{print $2}'|xargs
    ```
      Zhong@LAPTOP-S26GFGQ7 MINGW64 /
      $ ps -ef|grep node|awk '{print $2}'|xargs
        3384 3382 3386 3385
    ```
- ps -ef|grep node|awk '{print $2}'|xargs kill -9
  ```
  这是非常经典的一条命令
  ps -ef查看进程
  grep node是过滤进程里的和node相关的所有进程
  awk '{print $2}' 取出进程号
  xargs kill -9 杀掉该进程
  
  |是pipe，即管道的意思：上一个的输出，是下一个的输入. 每一个命令把它写到极致,这是unix的哲学
  ```

## 附录 
### [Swap与Memory](https://www.cnblogs.com/004x/p/6651600.html)

- Memory指机器物理内存，读写速度低于CPU一个量级，但是高于磁盘不止一个量级。所以，程序和数据如果在内存的话，会有非常快的读写速度。但是，内存的造价是要高于磁盘的，且内存的断电丢失数据也是不能把所有数据和程序都保存在内存中的原因。

既然不能全部使用内存，那数据还有程序不可能一直霸占在内存中。当内存没有可用的，就必须要把内存中不经常运行的程序踢出去。但是踢到哪里去，这时候swap就出现了。

- Swap全称为swap place，即交换分区。当内存不够的时候，被踢出的进程被暂时存储到交换区。当需要这条被踢出的进程时，就从交换区重新加载到内存，否则它不会主动交换到真实内存中。


