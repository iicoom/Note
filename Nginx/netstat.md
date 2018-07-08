## 查看ssh 映射的端口
```
netstat -anp | grep ssh
```

## 当前服务器上所有端口及进程服务
netstat命令各个参数说明如下：

　　-t : 指明显示TCP端口

　　-u : 指明显示UDP端口

　　-l : 仅显示监听套接字(所谓套接字就是使应用程序能够读写与收发通讯协议(protocol)与资料的程序)

　　-p : 显示进程标识符和程序名称，每一个套接字/端口都属于一个程序。

　　-n : 不进行DNS轮询(可以加速操作)

```
[root@localhost ~]# netstat -nlp |grep LISTEN   //查看当前所有监听端口·

[root@localhost ~]# netstat -nlp |grep 80   //查看所有80端口使用情况·

[root@localhost ~]# netstat -an | grep 3306   //查看所有3306端口使用情况·
```