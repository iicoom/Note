# 文件操作

## touch 创建文件

➜ ~ touch wtf.txt

## cp 拷贝文件

➜ conf ls 28001.conf mongod.conf ➜ conf cp 28001.conf 28002.conf ➜ conf ls 28001.conf 28002.conf mongod.conf

## rm 移除文件

rm filename rm -rf directory 移除目录

## xargs

命令是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数， xargs能够处理管道或者stdin并将其转换成特定命令的命令参数

➜ ~ cat wtf.txt 112455 safajfa rsafajfa ruuafajfa ruuuu aaaaaf112455 safajfa ruuuu aaaaaf

➜ ~ cat wtf.txt \| xargs 112455 safajfa rsafajfa ruuafajfa ruuuu aaaaaf112455 safajfa ruuuu aaaaaf

-n选项多行输出： ➜ ~ cat wtf.txt \| xargs -n3 112455 safajfa rsafajfa ruuafajfa ruuuu aaaaaf112455 safajfa ruuuu aaaaaf

> head 与 tail 就像它的名字一样的浅显易懂，它是用来显示开头或结尾某个数量的文字区块，head 用来显示档案的开头至标准输出中，而 tail 想当然就是看档案的结尾，看看下面的范例：
>
> ## tail
>
> tail filename.txt 默认读取文件结尾后10行 tail -n filename 显示文件后n行 tail -25 mail.txt displays the last 25 lines of a file sodu tail -50f file 展示文件后50行，并跟随

## head

head -6 readme.txt displays the first 6 lines of a file

## head&tail 事实证明这个是扯淡的。。。

head -20 file \| tail -10 结合了 head 与 tail 的指令，显示档案的第 11 行到第 20 行：

## 查看文件类型

> 七种文件类型 1. 普通文件类型 Linux中最多的一种文件类型, 包括 纯文本文件\(ASCII\)；二进制文件\(binary\)；数据格式的文件\(data\);各种压缩文件.第一个属性为 \[-\] 2. 目录文件 就是目录， 能用 \# cd 命令进入的。第一个属性为 \[d\]，例如 \[drwxrwxrwx\] 3. 块设备文件 块设备文件 ： 就是存储数据以供系统存取的接口设备，简单而言就是硬盘。例如一号硬盘的代码是 /dev/hda1等文件。第一个属性为 \[b\] 4. 字符设备 字符设备文件：即串行端口的接口设备，例如键盘、鼠标等等。第一个属性为 \[c\] 5. 套接字文件 这类文件通常用在网络数据连接。可以启动一个程序来监听客户端的要求，客户端就可以通过套接字来进行数据通信。第一个属性为 \[s\]，最常在 /var/run目录中看到这种文件类型 6. 管道文件 FIFO也是一种特殊的文件类型，它主要的目的是，解决多个程序同时存取一个文件所造成的错误。FIFO是first-in-first-out\(先进先出\)的缩写。第一个属性为 \[p\] 7. 链接文件 类似Windows下面的快捷方式。第一个属性为 \[l\]，例如 \[lrwxrwxrwx\]
>
> Linux中文件扩展名 windows里通过扩展名来区分文件类型的。linux里文件扩展名和文件类型没有关系。但为了容易区分和兼容用户使用windows的习惯，我们还是会用扩展名来表示文件类型。举例如下： ● 源码.tar、.tar.gz、.tgz、.zip、.tar.bz表示压缩文件，创建命令一般为tar，gzip，zip等。 ● .sh表示shell脚本文件，通过shell语言开发的程序。 ● .pl表示perl语言文件，通过perl语言开发的程序。 ● .py表示python语言文件，通过python语言开发的程序。 ● .html、.htm、.php、.jsp、.do表示网页语言的文件。 ● .conf表示系统服务的配置文件。 ● .rpm表示rpm安装包文件。

➜ file rabbitmq-server rabbitmq-server: POSIX shell script text executable, ASCII text

➜ ~ file dump.rdb dump.rdb: data

➜ Work file deploy\_cloud\_ranch.sh deploy\_cloud\_ranch.sh: Bourne-Again shell script text executable, UTF-8 Unicode text

➜ Work file cloudroot cloudroot: directory

## locate filename

定位文件路径

## tar 解压  [https://blog.csdn.net/x\_iya/article/details/72889456](https://blog.csdn.net/x_iya/article/details/72889456)

tar zxvf nginx-1.6.2.tar.gz -c: 建立压缩档案 -x：解压 -t：查看内容 -r：向压缩归档文件末尾追加文件 -u：更新原压缩包中的文件

以上这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个 -z：有gzip属性的 -j：有bz2属性的 -Z：有compress属性的 -v：显示所有过程 -O：将文件解开到标准输出

下面的参数-f是必须的

-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

## tar 压缩

```text
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

