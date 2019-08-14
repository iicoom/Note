> Linux的硬盘使用情况、挂载、SSD挂载（查看df -h不能看到的卷）
linux上的盘和window的有区别，磁盘空间必须挂载在目录上，要不然没用
https://www.cnblogs.com/lemon-flm/p/7597403.html

df -h     　　　　#显示目前在Linux系统上的文件系统的磁盘使用情况统计。

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

## 查看文件占用内存大小 du
可以查看目录占用大小 disk usage
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


➜  antMobile du -h myapp
 12K  myapp/src
 36K  myapp
```

[du 参数](http://www.runoob.com/linux/linux-comm-du.html)
-h或--human-readable 以K，M，G为单位，提高信息的可读性。
-s或--summarize 仅显示总计。
显示文件夹及内部文件的总大小:
```
[root@vultr projects]# du -h -s antdPro
```
## 硬件管理命令
df -- Disk Free
du -- Disk Usage
dd -- Data Description（一说是Convert and Copy， 但是cc被用掉了，就用dd了）
parted -- PARTition EDitor
lspci -- LiSt Peripheral Component Interconnect
lscpu -- LiSt Central Process Unit
lsusb -- LiSt Universal Serial Bus