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

### 查看文件类型
> 七种文件类型
1. 普通文件类型 
Linux中最多的一种文件类型, 包括 纯文本文件(ASCII)；二进制文件(binary)；数据格式的文件(data);各种压缩文件.第一个属性为 [-] 
2. 目录文件 
就是目录， 能用 # cd 命令进入的。第一个属性为 [d]，例如 [drwxrwxrwx] 
3. 块设备文件 
块设备文件 ： 就是存储数据以供系统存取的接口设备，简单而言就是硬盘。例如一号硬盘的代码是 /dev/hda1等文件。第一个属性为 [b] 
4. 字符设备 
字符设备文件：即串行端口的接口设备，例如键盘、鼠标等等。第一个属性为 [c] 
5. 套接字文件 
这类文件通常用在网络数据连接。可以启动一个程序来监听客户端的要求，客户端就可以通过套接字来进行数据通信。第一个属性为 [s]，最常在 /var/run目录中看到这种文件类型 
6. 管道文件 
FIFO也是一种特殊的文件类型，它主要的目的是，解决多个程序同时存取一个文件所造成的错误。FIFO是first-in-first-out(先进先出)的缩写。第一个属性为 [p] 
7. 链接文件 
类似Windows下面的快捷方式。第一个属性为 [l]，例如 [lrwxrwxrwx]

> Linux中文件扩展名
windows里通过扩展名来区分文件类型的。linux里文件扩展名和文件类型没有关系。但为了容易区分和兼容用户使用windows的习惯，我们还是会用扩展名来表示文件类型。举例如下： 
● 源码.tar、.tar.gz、.tgz、.zip、.tar.bz表示压缩文件，创建命令一般为tar，gzip，zip等。 
● .sh表示shell脚本文件，通过shell语言开发的程序。 
● .pl表示perl语言文件，通过perl语言开发的程序。 
● .py表示python语言文件，通过python语言开发的程序。 
● .html、.htm、.php、.jsp、.do表示网页语言的文件。 
● .conf表示系统服务的配置文件。 
● .rpm表示rpm安装包文件。

➜  file rabbitmq-server
rabbitmq-server: POSIX shell script text executable, ASCII text

➜  ~ file dump.rdb
dump.rdb: data

➜  Work file deploy_cloud_ranch.sh
deploy_cloud_ranch.sh: Bourne-Again shell script text executable, UTF-8 Unicode text

➜  Work file cloudroot
cloudroot: directory


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

### locate filename
定位文件路径

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

### tar 压缩
```
tar -cf all.tar *.jpg
这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。


➜  ~ tar -cvf ~/test/picture3.tar ~/test/
tar: Removing leading '/' from member names
a Users/mxj/test
a Users/mxj/test/.DS_Store
a Users/mxj/test/3ef2b999-c880-405c-b384-19b53b2a44c7.jpeg
a Users/mxj/test/picture.tar
a Users/mxj/test/picture3.tar: Can't add archive to itself
a Users/mxj/test/timg.jpeg
a Users/mxj/test/youmiao.jpg

// 这样会把用户目录也打进去
➜  ~ tar -cvPf ~/test/picture4.tar ~/test/
a /Users/mxj/test
a /Users/mxj/test/.DS_Store
a /Users/mxj/test/3ef2b999-c880-405c-b384-19b53b2a44c7.jpeg
a /Users/mxj/test/picture.tar
a /Users/mxj/test/picture3.tar
a /Users/mxj/test/picture4.tar: Can't add archive to itself
a /Users/mxj/test/timg.jpeg
a /Users/mxj/test/youmiao.jpg

// 打包当前相对路径下的test目录及文件
➜  ~ tar -cvPf ~/test/picture4.tar ./test
a ./test
a ./test/.DS_Store
a ./test/3ef2b999-c880-405c-b384-19b53b2a44c7.jpeg
a ./test/picture.tar
a ./test/picture3.tar
a ./test/picture4.tar: Can't add archive to itself
a ./test/timg.jpeg
a ./test/youmiao.jpg

// 打包test目录及文件到当前目录下
➜  ~ tar -cvPf picture4.tar ./test/
a ./test
a ./test/.DS_Store
a ./test/3ef2b999-c880-405c-b384-19b53b2a44c7.jpeg
a ./test/timg.jpeg
a ./test/youmiao.jpg
```

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


















