[用 Docker 快速搭建 iOS / macOS 按需連線的 IKEv2 VPN Server](https://www.jkg.tw/p2386/)
[billimek/ikev2-vpn-server](https://github.com/billimek/ikev2-vpn-server)

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

