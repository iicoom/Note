## 快速检测网络
ping 域名

➜  nginx curl http://m.yunfarm.cn/shopapi/activity/gift-boxs/page\?count\=5\&hideLoading\=true\&start\=0
{"start":0,"data":[],"count":0,"total":0}%

## net-tools
```
yum install net-tools
```

### net-tools(ifconfig) vs iproute2
CentOS默认装了iproute2, net-tools(ifconfig)需要单独安装

[root@gitlab s-admin]# ifconfig
docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 1a2.X7.0.1  netmask 255.255.0.0  broadcast 0.0.0.0
        inet6 fe80::42:34ff:f31b:odce  prefixlen 64  scopeid 0x20<link>
        ether 02:42:3f:1b:5d:ce  txqueuelen 0  (Ethernet)
        RX packets 153667  bytes 87239012 (83.1 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 249763  bytes 92257941 (87.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 45.76.25.55  netmask 255.255.254.2  broadcast 45.76.35.255
        inet6 fe80::5400:1ff:fed8:2747  prefixlen 64  scopeid 0x20<link>
        ether 56:00:01:d8:2e:17  txqueuelen 1000  (Ethernet)
        RX packets 1055175  bytes 1088160845 (1.0 GiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 300627  bytes 118808411 (113.3 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0




