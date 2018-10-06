> I have listed down 10 basic Linux networking and monitoring commands which each Linux user should know. These Linux basic networking and monitoring commands like hostname, ping, ifconfig, iwconfig, netstat, nslookup, traceroute, finger, telnet, ethtool are used for viewing the IP address of the Linux server, managing Linux server network adapter configuration, making network connections among Linux servers over telnet and ethernet, Linux server information etc. Lets have a look on the following Linux networking and monitoring commands.

1. hostname
hostname –f displays the fully qualified host and domain name
hostname –i displays the IP address for the current machine

2. ping

ping sends packets of information to the user-defined source. If the packets are received, the destination device sends packets back. ping can be used for two purposes

* To ensure that a network connection can be established.
* Timing information as to the speed of the connection.

If you do ping www.yahoo.com it will display its IP address. Use ctrl+C to stop the test. 

3. ifconfig

View network configuration, it displays the current network adapter configuration. It is handy to determine if you are getting transmit (TX) or receive (RX) errors.

4. iwconfig

The iwconfig tool is like ifconfig and ethtool for wireless cards. You can view and set the basic Wi-Fi network details, such as the SSID, channel, and encryption. There's also many advanced settings you can view and change, including receive sensitivity, RTS/CTS, fragmentation, and retries.

5. nslookup

If you know the IP address it will display hostname. To find all the IP addresses for a given domain name, the command nslookup is used. You must have a connection to the internet for this utility to be useful.

e.g. nslookup blogger.com

You can also use nslookup to convert hostname to IP Address and from IP Address from hostname.

6. traceroute

A handy utility to view the number of hops and response time to get to a remote system or web site is traceroute. Again you need an internet connection to make use of this tool.

7. finger

View user information, displays a user’s login name, real name, terminal name and write status. this is pretty old unix command and rarely used now days.

8. telnet

Connects destination host via telnet protocol, if telnet connection establish on any port means connectivity between two hosts is working fine.

telnet hostname port - will telnet hostname with the port specified. Normally it is used to see whether host is alive and network connection is fine or not.

9. ethtool

Ethtool lets you view and change many different settings for ethernet adapters (which does not include Wi-Fi cards). You can manage many different advanced settings, including tx/rx, checksumming, and wake-on-LAN settings. However, here are more basic commands you might be interested in:

Display the driver information for a specific network adapter, great when checking for software compatibility.

ethtool -i

Initiate an adapter-specific action, usually blinking the LED lights on the adapter, to help you identify between multiple adapters or interface names:

ethtool -p

Display network statistics:

ethtool -s

Set the connection speed of the adapter in Mbps:

ethtool speed <10|100|1000>

10. netstat

Most useful and very versatile Linux command for finding connection to and from the host. You can find out all the multicast groups (network) subscribed by this host by issuing "netstat -g"

netstat -nap | grep port will display process id of application which is using that port
netstat -a  or netstat –all will display all connections including TCP  and UDP  
netstat --tcp  or netstat –t will display only TCP  connection
netstat --udp or netstat –u will display only UDP  connection
netstat -g will display all multicast network subscribed by this host.

[netstat 的10个基本用法](https://linux.cn/article-2434-1.html)
> Netstat 是一款命令行工具，可用于列出系统上所有的网络套接字连接情况，包括 tcp, udp 以及 unix 套接字，另外它还能列出处于监听状态（即等待接入请求）的套接字。如果你想确认系统上的 Web 服务有没有起来，你可以查看80端口有没有打开。
### netstat -lntp
netstat - Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships
```
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
#### netstat -a 
列出所有当前的连接
netstat -at 使用 -t 选项列出 TCP 协议的连接
netstat -au 使用 -u 选项列出 UDP 协议的连接
#### netstat -ant
默认情况下 netstat 会通过反向域名解析技术查找每个 IP 地址对应的主机名。这会降低查找速度。如果你觉得 IP 地址已经足够，而没有必要知道主机名，就使用 -n 选项禁用域名解析功能。
#### netstat -tnl 
只列出监听中的连接
任何网络服务的后台进程都会打开一个端口，用于监听接入的请求。这些正在监听的套接字也和连接的套接字一样，也能被 netstat 列出来。使用 -l 选项列出正在监听的套接字。
#### sudo netstat -nlpt
使用 -p 选项查看进程信息
获取进程名、进程号以及用户 ID
#### sudo netstat -ltpe
相比进程名和进程号而言，查看进程的拥有者会更有用。使用 -ep 选项可以同时查看进程名和用户名。
#### netstat -s
netstat 可以打印出网络统计数据，包括某个协议下的收发包数量。


## 查看网络信息
iwconfig
必须确保你在使用USB无线网卡，虚拟机只能挂载USB无线网卡
启动虚拟机，在kali linux中打开终端，输入
airmon-ng
### 发HTTP请求
```
wget https://www.baidu.com/
会把请求到的数据保存到index.html文件中

wget -S -O - https://www.baidu.com/
会将请求的数据，输出到屏幕
```


