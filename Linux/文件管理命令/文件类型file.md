### 查看文件类型 file filename
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