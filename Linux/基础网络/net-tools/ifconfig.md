## CentOS 7 查看网络信息
[root@vultr ~]# ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 45.77.1xx.1  netmask 255.255.254.0  broadcast 45.77.151.255
        inet6 fe80::5400:2ff:fe45:8d4a  prefixlen 64  scopeid 0x20<link>
        ether 56:00:02:45:8d:4a  txqueuelen 1000  (Ethernet)
        RX packets 711597  bytes 217608003 (207.5 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1957726  bytes 547529251 (522.1 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 175302  bytes 26080431 (24.8 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 175302  bytes 26080431 (24.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0


查看指定网卡
[root@vultr ~]# ifconfig eth0
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 45.77.151.1  netmask 255.255.254.0  broadcast 45.77.151.255
        inet6 fe80::5400:2ff:fe45:8d4a  prefixlen 64  scopeid 0x20<link>
        ether 56:00:02:45:8d:4a  txqueuelen 1000  (Ethernet)
        RX packets 714301  bytes 217794010 (207.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1970838  bytes 548420619 (523.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

## 查看网关
[root@vultr ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         45.77.150.1     0.0.0.0         UG    0      0        0 eth0
45.77.150.0     0.0.0.0         255.255.254.0   U     0      0        0 eth0
169.254.169.254 45.77.150.1     255.255.255.255 UGH   0      0        0 eth0

## 修改ip地址
ifconfig <接口> <IP地址> [netmask 子网掩码]

启用网卡
ifup <接口>

禁用网卡
ifdown <接口>

## 添加网关
route add default gw <网关IP>

route add -host <指定IP> gw <网关IP>

route add -net <指定网段> netmask <子网掩码> gw <网关IP>