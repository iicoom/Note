## 云主机无法通过ifconfig查看到ip
可以借助curl   https://ifconfig.me/
```
curl ifconfig.me
47.x2.x2.31[maoxiaojie@stag-app-31 ~]$
```


[ip command in Linux with examples](https://www.geeksforgeeks.org/ip-command-in-linux-with-examples/)

This command is used to show or manipulate routing, devices, and tunnels. It is similar to ifconfig command but it is much more powerful with more functions and facilities attached to it.

ip命令可以用来查看或者操纵路由、设备、通道。与ifconfig类似，但是相比有更强大的功能。

Syntax:
ip [ OPTIONS ] OBJECT { COMMAND | help }

## ip address
-address: This option is used to show all IP addresses associated on all network devices.
```
[root@vultr ~]# ip address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 56:00:02:62:ae:b7 brd ff:ff:ff:ff:ff:ff
    inet 209.250.2xx.188/23 brd 209.250.229.255 scope global dynamic eth0
       valid_lft 71992sec preferred_lft 71992sec
    inet6 fe80::5400:2ff:fe62:aeb7/64 scope link
       valid_lft forever preferred_lft forever

可以简写为
[root@vultr ~]# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 56:00:02:62:ae:b7 brd ff:ff:ff:ff:ff:ff
    inet 209.250.2xx.188/23 brd 209.250.229.255 scope global dynamic eth0
       valid_lft 72720sec preferred_lft 72720sec
    inet6 fe80::5400:2ff:fe62:aeb7/64 scope link
       valid_lft forever preferred_lft forever
```
同样可以使用下面这个
[root@vultr ~]# ip addr ls
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 56:00:02:45:8d:4a brd ff:ff:ff:ff:ff:ff
    inet 45.77.151.1/23 brd 45.77.151.255 scope global dynamic eth0
       valid_lft 71011sec preferred_lft 71011sec
    inet6 fe80::5400:2ff:fe45:8d4a/64 scope link
       valid_lft forever preferred_lft forever

相当于 ifconfig

## ip link
If you are only concerned with the interfaces themselves and not the addresses, you can use the ip link command instead:
```
ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 04:01:13:8a:a2:01 brd ff:ff:ff:ff:ff:ff
```

## ip route
-route: This command helps you to see the route packets your network will take as set in your routing table. The first entry is the default route.

这个命令可以展示网络的路由包走向

```
[root@vultr ~]# ip route
default via 209.250.2xx.1 dev eth0
169.254.169.254 via 209.250.228.1 dev eth0 proto static
209.250.2xx.0/23 dev eth0 proto kernel scope link src 209.250.2xx.188
```


