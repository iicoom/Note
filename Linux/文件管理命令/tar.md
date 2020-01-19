> Most Linux and open source software files are distributed in either .tgz or .tar.gz extensions format over the Internet. These files are gzipd tar balls and include multiple files and sub-directories into a single file using tar command. To save the bandwidth tar files are cpmpressed using gzip program.
大多数的Linux开源软件都是以.tgz or .tar.gz扩展名文件进行传播。通过gzip压缩，节省带宽。

### tar 解压.tgz
Unpacking .tgz files command
```
tar zxvf fileNameHere.tgz
```

### tar 解压.tar.gz
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
