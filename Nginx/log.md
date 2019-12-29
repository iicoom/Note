## 默认log位置
/var/log/nginx/access.log

跟踪查看日志命令
```
tail -100f /var/log/nginx/access.log

39.155.215.1xx - - [10/Nov/2019:11:43:51 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:51 +0000] "GET /api/comments HTTP/1.1" 200 44041 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 200 44041 "-" "-" "-"
```

## /var/log/nginx/error.log

### 获取静态文件报错403
equest: "GET /1577623616714.png HTTP/1.1", host: "207.148.16.xxx"
2019/12/29 13:03:11 [error] 17178#0: *1706 open() "/root/s-server/uploads/images/1577623616714.png" failed (13: Permission denied), client: 207.148.16.xxx, server: 207.148.16.xxx, request: "GET /1577623616714.png HTTP/1.1", host: "207.148.16.xxx"

权限问题，如果nginx没有web目录的操作权限，出现403错误

[root@vultr images]# ps aux | grep "nginx: worker process" | awk '{print $1}'
nginx
root
启动nginx的是root用户

[root@vultr nginx]# ps aux|grep nginx|grep -v grep
root     15501  0.0  1.0 121564  5400 ?        Ss   12月15   0:00 nginx: master process /usr/sbin/nginx
root     16850  0.0  1.0 149720  5396 pts/4    S+   12:03   0:00 vim nginx.conf
nginx    18226  0.0  0.8 122004  4232 ?        S    13:50   0:00 nginx: worker process

https://blog.csdn.net/weixin_30432007/article/details/96608935

还是给静态文件换一个目录吧
/mnt/projects/s-server  就可以