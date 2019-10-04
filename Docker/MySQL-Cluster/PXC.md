## PXC vs Replication
- PXC 数据强一致性
同步复制，事务在所有节点要么同事提交，要么不提交。

- Replica 采用异步复制，无法保证数据一致性

## PXC 搭建 数据卷映射
```
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e EXTRABACKUP_PASSWORD=abc123456 -v v1:/var/lib/mysql -v backup:/data --privileged CLUSTER_JOIN=node2 --name=node1 --net=net1 --ip 172.18.0.2 pxc
```
docker用到的参数：
-d
-p 
-e
-v
--privileged
--name
--net
--ip

数据卷映射


## Haproxy PXC 负载均衡

- 单节点的单节点的haproxy:
应用程序 => haproxy => PXC
不具备高可用

- haproxy 双机热备方案：
应用程序 => Docker 创建出2个 haproxy容器(通过给2个容器安装 keepalived 来争抢一个虚拟IP-2个haproxy之间有心跳检测) => 负载均衡到 PXC

## PXC 备份
- 冷备份

- 热备份
PXC 容器中安装 XtraBackup，并执行备份
Docker 创建的PXC容器镜像为Ubuntu系统，安装程序要用apt-get，进入容器执行
```
进入node1容器：
docker exec -it node1 bash

apt-get update

apt-get install percona-xtrabackup-24

安装好上面的工具执行全量备份
innobackupex --user=root --password=abc123456 /data/backup/full

备份完成后，会提示备份数据路径，查看容器中的备份数据

退出容器查看映射到宿主机上的备份
docker inspect backup 会打印出路径
```

## PXC 数据还原
还原比较麻烦-需要先解散之前的集群-创建新的节点-清空没有执行的事务-执行冷还原-重建PXC进行同步
