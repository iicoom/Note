# What Is DNS?

> DNS is what lets users connect to websites using domain names instead of IP addresses.

The Domain Name Systems \(DNS\) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol \(IP\) addresses.

DNS translates domain names to IP addresses so browsers can load Internet resources.

## How does DNS work?

[https://www.cloudflare.com/learning/dns/what-is-dns/](https://www.cloudflare.com/learning/dns/what-is-dns/)

* 如果你想路由充当DNS，在设置里面需要打开DNS代理,这样电脑会象路由请求，由路由带你请求DNS
* 路由器是可以做dns代理的，仅仅是帮你向dns请求解析而已
* 路由没有解析功能
* 个人认为还是直接设置DNS比较好，可以减少路由的cpu使用，以免影响速度

## DHCP

DHCP：动态主机配置协议。用于给网络内的主机自动分配IP地址。一般通过路由器或DHCP服务器，把将要为用户分配的网关、DNS服务器及域名等参数保存至配置文件中，当DHCP客户端连接到DHCP服务器请求IP地址时，就会按配置文件指定的地址池分配IP地址、网关、DNS服务器。

