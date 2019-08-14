# mycli

[https://www.mycli.net/](https://www.mycli.net/)

> MyCLI is a command line interface for MySQL, MariaDB, and Percona with auto-completion and syntax highlighting.

## show processlist

mysql&gt; show processlist; +----+-----------------+-----------------+-------+---------+--------+------------------------+------------------+ \| Id \| User \| Host \| db \| Command \| Time \| State \| Info \| +----+-----------------+-----------------+-------+---------+--------+------------------------+------------------+ \| 4 \| event\_scheduler \| localhost \| NULL \| Daemon \| 543100 \| Waiting on empty queue \| NULL \| \| 11 \| root \| localhost \| NULL \| Query \| 0 \| starting \| show processlist \| \| 15 \| root \| localhost:55661 \| peiqi \| Sleep \| 23 \| \| NULL \| +----+-----------------+-----------------+-------+---------+--------+------------------------+------------------+ 3 rows in set \(0.00 sec\)

