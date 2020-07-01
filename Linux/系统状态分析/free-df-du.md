[运维工程师必须掌握的基础技能有哪些？](https://www.zhihu.com/question/23665108)

## CPU 状态
### 物理信息
[root@vultr ~]# lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                1
On-line CPU(s) list:   0
Thread(s) per core:    1
Core(s) per socket:    1
座：                   1
NUMA 节点：         1
厂商 ID：           GenuineIntel
CPU 系列：          6
型号：              60
型号名称：        Intel Core Processor (Haswell, no TSX, IBRS)
步进：              1
CPU MHz：             2394.454
BogoMIPS：            4788.90
超管理器厂商：  KVM
虚拟化类型：     完全
L1d 缓存：          32K
L1i 缓存：          32K
L2 缓存：           4096K
L3 缓存：           16384K
NUMA 节点0 CPU：    0

### top
```
top
```

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
21960 chrony    20   0 1008864 509736   1568 S   1.3 13.1  16:41.38 bundle
 1349 root      20   0   55856  12760  12272 S   0.3  0.3   3:54.37 systemd-journal
 6235 root      20   0   37696   8028   2116 S   0.3  0.2   4:13.32 gitlab-runner
13179 root      20   0  286716   7752    704 S   0.3  0.2   0:01.08 docker-containe
19060 root      20   0  162040   1336    548 R   0.3  0.0   0:00.22 top
21953 992       20   0   18532  10680   2588 S   0.3  0.3   1:12.18 node_exporter

ctrl+c 或者 q 退出

## 内存&硬盘 状态
### free (memory usage 内存)
[root@gitlab deploy]# free -h
              total        used        free      shared  buff/cache   available
Mem:           3.7G        2.8G        111M        194M        773M        434M
Swap:            0B          0B          0B

### df (Disk Free 硬盘剩余空间)
[root@vultr ~]# df -h
文件系统        容量     已用  可用   已用% 挂载点
/dev/vda1        25G  2.7G   21G   12%  /
devtmpfs        486M     0  486M    0%  /dev
tmpfs           496M     0  496M    0%  /dev/shm
tmpfs           496M   13M  483M    3%  /run
tmpfs           496M     0  496M    0%  /sys/fs/cgroup
tmpfs           100M     0  100M    0%  /run/user/0

### du (disk usage 硬盘)
- 针对文件
[xiaomao@iZ258wvzn92Z java_projects]$ ls
log.file  logs  member.jar  member.jar.bak  start_member.sh
[xiaomao@iZ258wvzn92Z java_projects]$ du log.file
166348  log.file

- 针对目录
如果只输入 du 会弹出一堆内容，可见此命令适合查看某个目录或文件的占用空间大小

如果输入 du -h project 会列出 project 下每一个文件的大小

du -sh 对文件夹所有文件求和输出
[root@vultr ~]# du -sh project
210M	project




