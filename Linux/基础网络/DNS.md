[https://robinwinslow.uk/fix-docker-networking-dns](https://robinwinslow.uk/fix-docker-networking-dns)

## nslookup
```
[root@vultrguest node-docker]# nslookup www.baidu.com
Server:		108.61.10.10
Address:	108.61.10.10#53

Non-authoritative answer:
www.baidu.com	canonical name = www.a.shifen.com.
www.a.shifen.com	canonical name = www.wshifen.com.
Name:	www.wshifen.com
Address: 104.193.88.123
Name:	www.wshifen.com
Address: 104.193.88.77
```

## Discover the address of your DNS server
```
$ cat /etc/resolv.conf
OR
$ less /etc/resolv.conf


Another way is to use the following grep command.

$ grep "nameserver" /etc/resolv.conf

nameserver 109.78.164.20
```