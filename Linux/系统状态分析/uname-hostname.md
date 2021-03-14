## uname
uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。

```
[doraemon@mxj-s ~]$ uname -a
Linux mxj-s.doraemonkart.com 3.10.0-957.10.1.el7.x86_64 #1 SMP Mon Mar 18 15:06:45 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
```

## hostname(主机名)
### 查看hostname
```
[root@linuxprobe~] hostname
vultr
```

### 设置hostname
```
[root@linuxprobe~] hostname newhostname
```
newhostname即要设置的新的hostname，运行后立即生效，但是在系统重启后会丢失所做的修改，如果要永久更改系统的hostname，就要修改相关的设置文件。

修改系统配置文件 /etc/sysconfig/network
```
[root@linuxprobe~]# vi /etc/sysconfig/network
NETWORKING=yes
NETWORKING_IPV6=no
HOSTNAME=linuxprobe
```

修改hosts文件或者dns服务器
```
[root@linuxprobe~]# vi /etc/hosts
127.0.0.1              localhost.localdomain
```

用sysctl 修改kernel.hostname
```
[root@linuxprobe~]# sysctl kernel.hostname=hadoop
kernel.hostname = hadoop
```

