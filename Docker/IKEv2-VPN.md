[用 Docker 快速搭建 iOS / macOS 按需連線的 IKEv2 VPN Server](https://www.jkg.tw/p2386/)
[billimek/ikev2-vpn-server](https://github.com/billimek/ikev2-vpn-server)
[IKEv2 VPN 配置和使用指南](https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/ikev2-howto-zh.md)
[CentOS 7 配置 IPSec-IKEv2 VPN, 适用于 ios, mac os, windows, linux.](https://blog.itnmg.net/2015/04/03/centos7-ipsec-vpn/)

> 现代操作系统（比如 Windows 7 和更新版本）支持 IKEv2 协议标准。因特网密钥交换（英语：Internet Key Exchange，简称 IKE 或 IKEv2）是一种网络协议，归属于 IPsec 协议族之下，用以创建安全关联 (Security Association, SA)。
> IPsec VPN 可以加密你的网络流量，以防止在通过因特网传送时，你和 VPN 服务器之间的任何人对你的数据的未经授权的访问。在使用不安全的网络时，这是特别有用的，例如在咖啡厅，机场或旅馆房间。

## 启动Docker服务
```shell
docker run --cap-add=NET_ADMIN -d --name vpn-server --restart=always \
-p 500:500/udp -p 4500:4500/udp \
-e "HOST=vpn.mahare.xyz" -e "HOSTNAME=vultr.guest" \
-e "EXCLUDE_SSID=myHomeWifi" \
billimek/ikev2-vpn-server
```

### 导出配置文件
```
docker exec -it vpn-server generate-mobileconfig > ikev2-vpn.mobileconfig
```
macOS 10.11 El Capitan or later: Double click the .mobileconfig file to start the profile installation wizard.

## 下面的比较复杂
Strongswan搭建IPSecVPN
Strongswan是一款开源的IPSecVPN解决方案，支持ikev1和ikev2密钥交换协议。

