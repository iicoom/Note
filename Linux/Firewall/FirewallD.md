https://linuxize.com/post/how-to-setup-a-firewall-with-firewalld-on-centos-7/

[内容出自](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7)

## CentOS-7 防火墙常用操作

### 查看是否开启防火墙
```
[root@vultr ~]# firewall-cmd --state
running
```

### 查看所有控制项
```
[root@vultr ~]# firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: dhcpv6-client ssh
  ports: 8090/tcp 8090/udp
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

### 开启services
For instance, if we are running a web server serving conventional HTTP traffic, we can allow this traffic for interfaces in our “public” zone for this session by typing:
```
firewall-cmd --zone=public --add-service=http

firewall-cmd --zone=public --list-services
output
dhcpv6-client http ssh
```

want to modify the permanent firewall rules so that your service will still be available after a reboot. We can make our “public” zone change permanent by typing:
```
firewall-cmd --zone=public --permanent --add-service=http

output
success
```

Your “public” zone will now allow HTTP web traffic on port 80. If your web server is configured to use SSL/TLS, you’ll also want to add the https service. We can add that to the current session and the permanent rule-set by typing:
```
firewall-cmd --zone=public --permanent --add-service=https
```

- Opening a Port for your Zones
For instance, if our application runs on port 5000 and uses TCP, we could add this to the “public” zone for this session using the --add-port= parameter. Protocols can be either tcp or udp:
```
firewall-cmd --zone=public --add-port=5000/tcp   注意：这个需要加--permanent 在reload后才会生效 firewall-cmd --zone=public --permanent --add-port=5000/tcp

output
success

firewall-cmd --zone=public --list-ports
output
5000/tcp
```

### reload
Reload your firewall to get access to your new service:
```
firewall-cmd --reload
```


