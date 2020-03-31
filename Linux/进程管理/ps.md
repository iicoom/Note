## ps
Linux作为Unix的衍生操作系统，Linux内建有查看当前进程的工具ps。ps命令能够给出当前系统中进程的快照.
ps - report a snapshot of the current processes.
ps displays information about a selection of the active processes. If you want a repetitive update of the selection and the displayed information,
use top(1) instead.
1. 不加参数的ps
```
[xiaomao@iZ258wvzn92Z ~]$ ps
  PID TTY          TIME CMD
 8875 pts/1    00:00:00 bash
 9728 pts/1    00:00:00 ps

 ```
结果默认会显示4列信息。

PID: 运行着的命令(CMD)的进程编号
TTY: 命令所运行的位置（终端）
TIME: 运行着的该命令所占用的CPU处理时间
CMD: 该进程所运行的命令

2. 使用 -a 参数。-a 代表 all。同时加上x参数会显示没有 控制终端 的进程。
```
PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:02 /sbin/init
    2 ?        S      0:00 [kthreadd]
    3 ?        S      0:20 [migration/0]
    4 ?        S      4:05 [ksoftirqd/0]
    5 ?        S      0:00 [migration/0]
    6 ?        S      0:28 [watchdog/0]
    7 ?        S      0:20 [migration/1]
21184 ?        Sl     4:53 node /mnt/projects/cloud-ranch-v2/index.js
21266 ?        Sl     8:51 node /mnt/projects/msg_center/index.js
23755 ?        Sl    45:25 java -jar member.jar --server.port=18880 --spring.profiles.active=functional
23829 ?        Ssl    7:40 node /mnt/projects/sina_pay/bin/development.js
```

3. ps -ef 
```
[root@document java_projects]# ps -ef | grep java
root      1076     1  0 May22 ?        00:13:21 java -jar member.jar --server.port=18880 --spring.profiles.active=functional
root     28329 28225  0 11:46 pts/0    00:00:00 grep java


// 可以看到程序的目录
[root@document ~]# ps -ef | grep java
root      2645     1  0 Jul24 ?        00:04:06 java -jar /mnt/java_projects/orderConsume.jar --server.port=20000 --spring.profiles.active=functional
root     10817 10796  0 11:14 pts/0    00:00:00 grep java
root     28627     1  0 May29 ?        01:44:15 java -jar member.jar --server.port=18880 --spring.profiles.active=functional

可以查看监听端口的进程
ps -ef | grep 28003
```

4. kill 
kill 3268
kill 3268
-bash: kill: (3268) - 没有那个进程

kill命令格式：
kill -Signal pid
pid是进程号，可以用 ps 命令查出

signal是发送给进程的信号，TERM(或数字9）表示“无条件终止”；
因此 kill - 9 表示强制杀死该进程； 
而 kill 则有局限性，例如后台进程，守护进程等；

在Linux中Kill-2和Kill-9的区别:
Kill-2:先保存相关数据,然后再退出;
Kill-9:直接强制结束程序;
在用nohup挂起程序时,当想要结束这个程序,最好用kill-2.

5. ps -u username
在需要查看特定用户进程的情况下，我们可以使用 -u 参数。比如我们要查看用户'pungki'的进程，可以通过下面的命令：
```
[root@cache ~]# ps -u root
PID TTY       TIME     CMD
1    ?        00:00:01 init
2    ?        00:00:00 kthreadd
3    ?        00:00:00 migration/0
.
.
6480 ?        00:00:00 nginx
6608 ?        00:00:00 sshd
6610 pts/0    00:00:00 bash
6645 ?        00:00:53 PM2 v2.10.2: Go
6662 ?        00:00:49 node /mnt/proje
8675 pts/0    00:00:00 ps
```
ps命令支持三种使用的语法格式:
* UNIX 风格，选项可以组合在一起，并且选项前必须有“-”连字符
* BSD 风格，选项可以组合在一起，但是选项前不能有“-”连字符
* GNU 风格的长选项，选项前有两个“-”连字符

centOS下查看nginx进程快照
```
[root@cache ~]# ps ax | grep nginx
6480 ?        Ss     0:00 nginx: master process /usr/local/nginx/sbin/nginx
6795 ?        S      0:00 nginx: worker process
8851 pts/0    S+     0:00 grep nginx

[root@cache ucenter_v2]# ps ax | grep node
 2130 ?        Ssl    1:57 node /mnt/yfarm.net/www/bin/www                                 
17768 ?        Ssl    0:14 node /mnt/projects/ranch_api/bin/development.js                 
18126 ?        Ssl    1:56 node /mnt/projects/cloud_ranch/cloud_bin/www                    
20397 ?        Sl     0:05 node /mnt/yfarm.net/cloud-ranch-v2/index.js                                
21735 ?        Ssl    0:02 node /mnt/projects/task_consume/bin/development.js              
21843 ?        Sl     0:03 node /mnt/yfarm.net/ucenter_v2/index.js                                    
21889 pts/2    S+     0:00 grep node
```

6. 
ps aux | less
也许你希望把结果按照 CPU 或者内存用量来筛选，这样你就找到哪个进程占用了你的资源。要做到这一点，我们可以使用 aux 参数，来显示全面的信息:

```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0  19340  1564 ?        Ss   Apr11   0:01 /sbin/init
root         2  0.0  0.0      0     0 ?        S    Apr11   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        S    Apr11   0:00 [migration/0]
root         4  0.0  0.0      0     0 ?        S    Apr11   0:00 [ksoftirqd/0]
```


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
