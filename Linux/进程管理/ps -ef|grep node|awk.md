## awk '条件1 {动作 1} 条件 2 {动作 2} …' 文件名
```
[doraemon@mxj server]$ ps -ef|grep node
doraemon 27100 14596  0 12:04 pts/0    00:00:00 grep --color=auto node

[doraemon@mxj server]$ ps -ef|grep node|awk '{print $2}'
27097

[root@localhost ~]# awk '{printf $2 "\t" $6 "\n"}' student.txt
#输出第二列和第六列的内容
Name Average
Liming 87.66
Sc 85.66
Gao 91.66
```

## xargs
https://man.linuxde.net/xargs

xargs命令是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数，xargs能够处理管道或者stdin并将其转换成特定命令的命令参数。xargs也可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行。xargs的默认命令是echo，空格是默认定界符。这意味着通过管道传递给xargs的输入将会包含换行和空白，不过通过xargs的处理，换行和空白将被空格取代。xargs是构建单行命令的重要组件之一。

xargs用作替换工具，读取输入数据重新格式化后输出。

定义一个测试文件，内有多行文本数据：
```
cat test.txt

a b c d e f g
h i j k l m n
o p q
r s t
u v w x y z
```
多行输入单行输出：
```
cat test.txt | xargs

a b c d e f g h i j k l m n o p q r s t u v w x y z
```

## 【杀死所有nodejs相关进程】
### ps -ef|grep node
```
[doraemon@mxj-s ~]$ ps -ef|grep node
doraemon  6124  6117  0 Dec28 pts/0    00:00:01 [node] <defunct>
doraemon  6125  6119  0 Dec28 pts/0    00:00:03 [node] <defunct>
doraemon  6126  6118  0 Dec28 pts/0    00:00:02 [node] <defunct>
doraemon  6129  6116  0 Dec28 pts/0    00:00:00 [node] <defunct>
doraemon  6130  6115  0 Dec28 pts/0    00:00:00 [node] <defunct>
doraemon  6132  6123  0 Dec28 pts/0    00:00:03 [node] <defunct>
doraemon  6142  6122  0 Dec28 pts/0    00:00:02 [node] <defunct>
doraemon  6143  6120  0 Dec28 pts/0    00:00:02 [node] <defunct>
doraemon  6146  6121  0 Dec28 pts/0    00:00:02 [node] <defunct>
doraemon  7014  7011  0 Dec28 pts/1    00:01:03 node app.js config_file=./config.json config_file=./config.patch.json
doraemon  7015  7009  0 Dec28 pts/1    00:02:30 node app.js config_file=./config.json config_file=./config.patch.json
doraemon  7016  7012  0 Dec28 pts/1    00:00:39 node http_server.js route=game config_file=./config.json config_file=./config.patch.json
doraemon  7018  7010  0 Dec28 pts/1    00:00:12 node http_server.js route=util config_file=./route_util/config.json config_file=./route_util/config.patch.json
doraemon  7031  7013  0 Dec28 pts/1    00:00:15 node http_server.js route=redis2db config_file=./route_redis2db/config.json config_file=./route_redis2db/config.patch.json
doraemon 13435 29969  0 15:08 pts/0    00:00:00 grep --color=auto node

[doraemon@mxj-s ~]$ ps -ef|grep node|awk '{print $2}'
6124
6125
6126
6129
6130
6132
6142
6143
6146
7014
7015
7016
7018
7031
13432

[doraemon@mxj-s ~]$ ps -ef|grep node|awk '{print $2}'|xargs
6124 6125 6126 6129 6130 6132 6142 6143 6146 7014 7015 7016 7018 7031 13463

最终命令
ps -ef|grep node|awk '{print $2}'|xargs kill -9

ps -ef查看进程
grep node是过滤进程里的和node相关的所有进程
awk '{print $2}' 取出进程号
xargs kill -9 杀掉该进程

```
