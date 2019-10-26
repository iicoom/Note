## ip addr ls
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

