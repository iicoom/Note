# netstat

## install net-tool

```text
[root@vultr ~]# netstat -nlp | grep LISTEN
-bash: netstat: 未找到命令

yum install net-tools
```

## 查看ssh 映射的端口

```text
netstat -anp | grep ssh
```

## 当前服务器上所有端口及进程服务

netstat命令各个参数说明如下：

-t : 指明显示TCP端口

-u : 指明显示UDP端口

-l : 仅显示监听套接字\(所谓套接字就是使应用程序能够读写与收发通讯协议\(protocol\)与资料的程序\)

-p : 显示进程标识符和程序名称，每一个套接字/端口都属于一个程序。

-n : 不进行DNS轮询\(可以加速操作\)

```text
[root@localhost ~]# netstat -nlp |grep LISTEN   //查看当前所有监听端口·

[root@localhost ~]# netstat -nlp |grep 80   //查看所有80端口使用情况·

[root@localhost ~]# netstat -an | grep 3306   //查看所有3306端口使用情况·


[root@vultr ~]# netstat -nlp | grep LISTEN
tcp        0      0 0.0.0.0:8070            0.0.0.0:*               LISTEN      13869/python
tcp        0      0 0.0.0.0:27017           0.0.0.0:*               LISTEN      30802/mongod
tcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN      32363/redis-server
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      4804/nginx: master
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      4804/nginx: master
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      667/sshd
tcp6       0      0 :::80                   :::*                    LISTEN      4804/nginx: master
tcp6       0      0 :::22                   :::*                    LISTEN      667/sshd
tcp6       0      0 :::3000                 :::*                    LISTEN      29357/node /mnt/pro
unix  2      [ ACC ]     STREAM     LISTENING     26648579 28339/docker-contai  /var/run/docker/libcontainerd/docker-containerd.sock
unix  2      [ ACC ]     STREAM     LISTENING     18647571 5333/dockerd-curren  /run/docker/libnetwork/2944f87d1b7566d5c36e7cb11ad81a2360f4126b3895eb0546739a59592f10ee.sock
unix  2      [ ACC ]     STREAM     LISTENING     18645314 1/systemd            /run/lvm/lvmetad.socket
unix  2      [ ACC ]     SEQPACKET  LISTENING     10051    1/systemd            /run/udev/control
unix  2      [ ACC ]     STREAM     LISTENING     1403749  5008/PM2 v3.2.2: Go  /root/.pm2/pub.sock
unix  2      [ ACC ]     STREAM     LISTENING     1403750  5008/PM2 v3.2.2: Go  /root/.pm2/rpc.sock
unix  2      [ ACC ]     STREAM     LISTENING     2084460  30802/mongod         /tmp/mongodb-27017.sock
unix  2      [ ACC ]     STREAM     LISTENING     18647426 5333/dockerd-curren  /var/run/docker.sock
unix  2      [ ACC ]     STREAM     LISTENING     18645700 1/systemd            /run/lvm/lvmpolld.socket
unix  2      [ ACC ]     STREAM     LISTENING     11460    1/systemd            /run/dbus/system_bus_socket
unix  2      [ ACC ]     STREAM     LISTENING     18644962 1/systemd            /run/systemd/private
unix  2      [ ACC ]     STREAM     LISTENING     7141     1/systemd            /run/systemd/journal/stdout
```

