[MySQL Master-Slave Replication](https://www.toptal.com/mysql/mysql-master-slave-replication-tutorial)

MySQL replication is a process that enables data from one MySQL database server (the master) to be copied automatically to one or more MySQL database servers (the slaves).

MySQL 复制集是一个程序，可以使得一个数据库的数据（主节点 Master）自动复制到其他一个或多个数据库服务器（从节点 Slave）。

通常是为了增强伸缩性，因为可以把读数据分散到多个服务器，也可以用于容灾，或者是在从节点上做数据分析，避免主节点过载。

As the master-slave replication is a one-way replication (from master to slave), only the master database is used for the write operations, while read operations may be spread on multiple slave databases.

主从复制集是复制集的一种，只有主节点用于写操作，从节点用于读操作。

master-slave replication is used as the scale-out solution

[Replication mysql官网](https://dev.mysql.com/doc/refman/8.0/en/replication.html)

