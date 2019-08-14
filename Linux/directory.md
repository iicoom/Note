## Directory
### /dev
在linux下，/dev目录是很重要的，各种设备都在下面。
dev是设备(device)的英文缩写。/dev这个目录对所有的用户都十分重要。因为在这个目录中包含了所有Linux系统中使用的外部设备。但是这里并不是放的外部设备的驱动程序，这一点和windows,dos操作系统不一样。它实际上是一个访问这些外部设备的端口。我们可以非常方便地去访问这些外部设备，和访问一个文件，一个目录没有任何区别。

### /mnt
linux下mnt目录的作用：
挂接光驱、USB设备的目录，加载后，会在mnt里多出相应设备的目录。mnt是mount的缩写。 

### /etc
初期：早期UNIX中，贝尔实验室的解释是：etcetra directory 。 etc.
linux下/etc为系统配置文件目录，该目录包含系统启动脚本、启动配置文件、用户登陆配置文件、网络配置文件、httpd 配置文件、IPSec 配置文件和其他文件等。 host文件

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

### 用户安装目录
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

### RabbitMQ rabbitmqadmin
你看到的很多很多应用都安装在了/usr/local/目录下
首先注意usr 指 Unix System Resource，而不是User
然后通常/usr/bin下面的都是系统预装的可执行程序，会随着系统升级而改变

/usr/local/bin目录是给用户放置自己的可执行程序的地方，推荐放在这里，不会被系统升级而覆盖同名文件
如果两个目录下有相同的可执行程序，谁优先执行受到PATH环境变量的影响，比如我的一台服务器的PATH变量为
echo $PATH 
/usr/lib64/qt-3.3/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/dean/bin 
这里/usr/local/bin优先于/usr/bin,

```
➜  sbin cp rabbitmqadmin /usr/local/bin
➜  sbin cd ~
➜  ~ rabbitmqadmin

ERROR: Action not specified

rabbitmqadmin --help for help

➜  ~
```

### 当前用户HOME
cd ~
Mac 的家目录
```
➜  ~ pwd
/Users/mxj
```
.ssh
.vim
.nvm
这些隐藏目录都在这里