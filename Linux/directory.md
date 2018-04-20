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