## PXC vs Replication
- PXC 数据强一致性
同步复制，事务在所有节点要么同事提交，要么不提交。

- Replica 采用异步复制，无法保证数据一致性

## PXC 搭建


## Haproxy PXC 负载均衡

- 单节点的单节点的haproxy:
应用程序 => haproxy => PXC
不具备高可用

- haproxy 双机热备方案：
应用程序 => Docker 创建出2个 haproxy容器(通过给2个容器安装 keepalived 来争抢一个虚拟IP-2个haproxy之间有心跳检测) => 负载均衡到 PXC



