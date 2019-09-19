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

出现未找到命令，需要先安装
[root@vultr ~]# lsb_release -a
-bash: lsb_release: 未找到命令

安装：
yum install -y redhat-lsb

或者：

[root@cache /]# cat /proc/version
Linux version 2.6.32-358.el6.x86_64 (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-3) (GCC) ) #1 SMP Fri Feb 22 00:31:26 UTC 

```

### Linux查看cpu相关信息，包括型号、主频、内核信息等
```
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

#### uptime
```
[root@cache ~]# uptime
 11:43:37 up 18:00,  1 user,  load average: 0.00, 0.00, 0.00

当前时间   系统连续运行时间  当前用户连接数  系统平均负载（最近1分钟、5分钟、15分钟）
```


参考资料：
[Linux Standard Base (LSB) ](https://en.wikipedia.org/wiki/Linux_Standard_Base)
The Linux Standard Base (LSB) is a joint project by several Linux distributions under the organizational structure of the Linux Foundation to standardize the software system structure, including the Filesystem Hierarchy Standard used in the Linux kernel. The LSB is based on the POSIX specification, the Single UNIX Specification (SUS), and several other open standards, but extends them in certain areas.

