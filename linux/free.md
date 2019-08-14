# free

> free命令可以显示当前系统未使用的和已使用的内存数目，还可以显示被内核使用的内存缓冲区。

-b：以Byte为单位显示内存使用情况； -k：以KB为单位显示内存使用情况； -m：以MB为单位显示内存使用情况； -o：不显示缓冲区调节列； -s&lt;间隔秒数&gt;：持续观察内存使用状况； -t：显示内存总和列； -V：显示版本信息

第一部分Mem行解释： total：内存总数； used：已经使用的内存数； free：空闲的内存数； shared：当前已经废弃不用； buffers Buffer：缓存内存数； cached Page：缓存内存数。

第二部分\(-/+ buffers/cache\)解释: \(-buffers/cache\) used内存数：第一部分Mem行中的 used – buffers – cached \(+buffers/cache\) free内存数: 第一部分Mem行中的 free + buffers + cached

可见-buffers/cache反映的是被程序实实在在吃掉的内存，而+buffers/cache反映的是可以挪用的内存总数。

第三部分是指交换分区。

## 查看内存使用情况 free

```text
[xiaomao@iZ258wvzn92Z ~]$ free -g
             total       used       free     shared    buffers     cached
Mem:             3          3          0          0          0          0
-/+ buffers/cache:          3          0
Swap:            0          0          0

[xiaomao@iZ258wvzn92Z ~]$ free -k
             total       used       free     shared    buffers     cached
Mem:       3924684    3798036     126648          0      17784     101856
-/+ buffers/cache:    3678396     246288
Swap:            0          0          0

[xiaomao@iZ258wvzn92Z ~]$ free -m
             total       used       free     shared    buffers     cached
Mem:          3832       3622        210          0         23        285
-/+ buffers/cache:       3313        519
Swap:            0          0          0
```

