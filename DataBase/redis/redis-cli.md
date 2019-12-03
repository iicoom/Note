> After that I tried redis-cli and redis-cli shutdown all responded this: 
Could not connect to Redis at 127.0.0.1:6379: Connection refused

## vim /etc/redis
```
bind ip1 ip2
```

修改配置文件后重启
```
cd /etc/redis/
/usr/local/bin/redis-server redis_6379.conf
```
这样就可以从ip1 ip2访问了
