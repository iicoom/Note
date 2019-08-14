## Mac OS 上安装 PostgreSQL
https://www.runoob.com/postgresql/mac-install-postgresql.html

## Setup Password

pass 123456Mao.
port 5432

## Locale

next

## 运行

terminal执行
```
/Library/PostgreSQL/11/scripts/runpsql.sh ;exit
```

## 重置密码
https://itbilu.com/database/postgre/N1dd2U2.html

➜  ~ sudo vi /Library/PostgreSQL/11/data/pg_hba.conf

➜  ~ ls /Library/LaunchDaemons
PostgreSQL的服务名为：

com.edb.launchd.postgresql-11.plist

重启PostgreSQL服务

