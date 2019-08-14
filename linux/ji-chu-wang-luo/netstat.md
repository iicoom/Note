# netstat

[netstat 的10个基本用法](https://linux.cn/article-2434-1.html)

> Netstat 是一款命令行工具，可用于列出系统上所有的网络套接字连接情况，包括 tcp, udp 以及 unix 套接字，另外它还能列出处于监听状态（即等待接入请求）的套接字。如果你想确认系统上的 Web 服务有没有起来，你可以查看80端口有没有打开。

## netstat -lntp

netstat - Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships

```text
[root@iZ258wvzn92Z ~]# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name
tcp        0      0 101.201.197.163:6379        0.0.0.0:*                   LISTEN      1596/redis-server 1
tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      2348/nginx
tcp        0      0 0.0.0.0:4369                0.0.0.0:*                   LISTEN      23999/epmd
tcp        0      0 0.0.0.0:10003               0.0.0.0:*                   LISTEN      31951/sshd
tcp        0      0 127.0.0.1:18005             0.0.0.0:*                   LISTEN      9108/java
tcp        0      0 0.0.0.0:22                  0.0.0.0:*                   LISTEN      7126/sshd
tcp        0      0 0.0.0.0:3030                0.0.0.0:*                   LISTEN      1228/PM2 v2.4.6
tcp        0      0 0.0.0.0:3000                0.0.0.0:*                   LISTEN      14921/node /mnt/pro
```

### netstat -a

列出所有当前的连接 netstat -at 使用 -t 选项列出 TCP 协议的连接 netstat -au 使用 -u 选项列出 UDP 协议的连接

### netstat -ant

默认情况下 netstat 会通过反向域名解析技术查找每个 IP 地址对应的主机名。这会降低查找速度。如果你觉得 IP 地址已经足够，而没有必要知道主机名，就使用 -n 选项禁用域名解析功能。

### netstat -tnl

只列出监听中的连接 任何网络服务的后台进程都会打开一个端口，用于监听接入的请求。这些正在监听的套接字也和连接的套接字一样，也能被 netstat 列出来。使用 -l 选项列出正在监听的套接字。

### sudo netstat -nlpt

使用 -p 选项查看进程信息 获取进程名、进程号以及用户 ID

### sudo netstat -ltpe

相比进程名和进程号而言，查看进程的拥有者会更有用。使用 -ep 选项可以同时查看进程名和用户名。

### netstat -s

netstat 可以打印出网络统计数据，包括某个协议下的收发包数量。

