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

#### uptime
```
[root@cache ~]# uptime
 11:43:37 up 18:00,  1 user,  load average: 0.00, 0.00, 0.00

当前时间   系统连续运行时间  当前用户连接数  系统平均负载（最近1分钟、5分钟、15分钟）
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


## 相关命令对应中文释义
### 目录名
/boot：顾名思义
/root ：同上
/lost+found：同上
/run：同上
/home：同上
/etc：ETCetera
/bin：BINaries
/dev：DEVices
/lib：LIBraries
/mnt：MouNT
/proc：PROCesses
/tmp：TeMPorary
/var：VARiable
/srv：SeRVices
/opt：OPTion
/sbin：Super BINaries（又作Superuser BINaries）
/sys：SYStem
/usr：一鼓而作Unix System Resources，再而作Unix Software Resources,三而作Unix Shared Resources（这个很重要，很多人会认为这个是user）

### 文件管理命令
ls -- LiSt
cd -- Change Directory
pwd -- Print Working Directory
cp -- CoPy
mv -- MoVe
rm -- ReMove
pushd -- PUSH to Directory
popd -- POP from Directory（这俩个是很有用的命令，在编译LFS的时候学到的）
mkdir -- MaKe DIRectory
rmdir -- ReMove DIRectory
cat -- CATenate（有说是conCATenate，这两个词是一个意思吧）
sed -- Stream EDitor
diff -- DIFFerence
wc -- Word Count（不是那个wc啊）
chmod -- CHange MODe
chown -- CHange OWNer
chgrp -- CHange GRouP
awk -- Aho Weinberger and Kernighan（自恋，服气）( @xx xxxx 谢谢指错）
gawk -- Gnu Aho Weinberger and Kernighan
grep -- General Regular Expression Print( @闫子昂 谢谢）
ln -- LiNk
tar -- TARball

### 软件及软件包管理：
man -- MANual
apt -- Advanced Packaging Tool
dpkg -- Debian PacKaGe
yum -- Yellow dog Updater, Modified
rpm -- RPM Package Manager（又作Redhat Package Manager，不过我比较喜欢前者，因为魔性）

### 系统管理（主要是内核模组）：
depmod -- DEPend MODule
lsmod -- LiSt MODule
modprobe -- MODule PROBE
modinfo -- MODule INFOrmation
insmod -- INSert MODule
rmmod -- ReMove MODule
ps -- Processes Status
su -- Substitute User
bash -- Bourne Again SHell
init -- INITialization（差点把这个忘了）
ssh -- Secure SHell
wine -- Wine Is Not an Emulator（哈哈，又来了）
exec -- EXECute
fstab -- FileSystem TABle
passwd -- PASSWorD
tty -- TeleTYpe
sudo -- SuperUser DO
grub -- GRand Unified Bootloader（Linux全家桶启动就靠它了）
tzselect -- Time Zone SELECT
sync -- SYNChronize（确认关机前多执行几次。有次我在tty1用vim改nginx配置文件，朋友在tty2给我直接关机了（用halt关的，这个猪脑子，我说过好多次用shutdown了），导致开机的时候nginx启动不起来，关机前配置文件我改了很多，但是vim没有备份那么多，还要重改www）
装了systemd -- SYSTEM Daemon 的话，会有systemctl bootctl journalctl loginctl localectl timedatectl 等等，都是blablabla ConTroL

### 编辑器：
ed -- EDitor
nano -- Nano's ANOther editor（还有）
emacs -- Editor MACroS（还有很多全称，就不罗列了，这个接受度比较广）
vi -- VIsual
vim -- Vi Improved

### 接下来是写程序时会用到的：
cc -- C Compiler
gcc -- Gnu Compiler Collection（作为一个软件集被你下载下来编译安装的时候）
gcc -- Gnu C Compiler (作为一个软件被你调用来编译C程序的时候）
g++ -- Gnu c++ compiler（其实g++只是调用gcc，然后连接c++的库，并且作相应的一些编译设置而已）
gcj -- Gnu Compiler for Java
yacc -- Yet Another Compiler Compiler
guile -- Gnu Ubiquitous Intelligent Language for Extensions
gas -- Gnu Assembler（好像已经看不到了）

### 接下来是图形界面：
gnome -- GNu Object Model Environment
gdm -- Gnome Display Manager
gtk -- Graphic user interface ToolKit
qt -- ………………Toolkit（不说Q了，用Q只是因为在开发者的Emacs中Q特别漂亮…………）
kde -- K Desktop Environment
lxde -- Lightweight X11 Desktop Environment
xfce -- XForms Common Environment


















