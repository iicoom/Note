# MySQL高可用方案

> 为什么要用数据库集群？

* 大型互联网程序用户群体庞大，架构必须经过特殊设计
* 单节点数据库无法满足性能上的要求
* 单节点数据库没有冗余设计，无法满足高可用
* 2017年天猫双十一交易额1688亿元，3分钟破百亿，9小时破千亿
* 交易峰值32.5万/s 支付峰值25.6万/s 数据库峰值4200万/s
* 云服务器、负载均衡、RDS云数据库等技术

## 单节点数据库压力测试

测试案例：如果数据库出现宕机故障 将导致应用程序无法读写

```text
mysqlslap -hlocalhost -uroot -abc123456 -P3306
--concurrency=5000 --iterations=1 --auto-generate-sql
--auto-generate-sql-load-type=mixed
--auto-generate-sql-add-autoincrement
--engine=innodb
--number-of-queries=5000
--debug-info
```

[https://www.cnblogs.com/taotaohappy/p/4694290.html](https://www.cnblogs.com/taotaohappy/p/4694290.html)

> HAProxy介绍

反向代理服务器,支持双机热备支持虚拟主机,但其配置简单,拥有非常不错的服务器健康检查功能,当其代理的后端服务器出现故障, HAProxy会自动将该服务器摘除,故障恢复后再自动将该服务器加入｡引入了frontend,backend；frontend根据任意 HTTP请求头内容做规则匹配,然后把请求定向到相关的backend.

> Keepalived介绍 Keepalived是一个基于VRRP协议来实现的WEB 服务高可用方案，可以利用其来避免单点故障。一个WEB服务至少会有2台服务器运行Keepalived，一台为主服务器（MASTER），一台为备份服务器（BACKUP），但是对外表现为一个虚拟IP，主服务器会发送特定的消息给备份服务器，当备份服务器收不到这个消息的时候，即主服务器宕机的时候，备份服务器就会接管虚拟IP，继续提供服务，从而保证了高可用性。

环境情况：

OS：CentOS release 6.6 x86\_64系统 MySQL版本 ：Percona-XtraDB-Cluster-5.6.22-25.8 pxc三个节点 :192.168.79.3:3306、192.168.79.4:3306、192.168.79.5:3306 HAPproxy节点 ：192.168.79.128 、 192.168.79.5 HAproxy版本 ：1.5.2 keepalived版本：keepalived-1.2.13-4.el6.x86\_64 vip：192.168.79.166

## MySQL高可用方案－PXC\(Percona XtraDB Cluster\)环境部署

* 高价值重要数据（集群要保证强一致性 如 账户 订单 交易 库存）
* 事务在所有集群节点要么同时提交，要么不提交

## Replication方案\(分主从节点\)

* 存储低价值数据（不需要强一致性 只要保证同步即可 如 通知 日志等）
* 采用异步复制，无法保证数据的一致性

