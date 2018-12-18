## 链接到Docker 容器的redis
```
[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker ps
CONTAINER ID        IMAGE                                         COMMAND                  CREATED             STATUS                 PORTS                                    NAMES
de6504eeb30b        mysql:5.7                                     "docker-entrypoint..."   20 hours ago        Up 20 hours            33060/tcp, 0.0.0.0:33306->3306/tcp       mysql57
fc7af44132a0        docker.io/twang2218/gitlab-ce-zh              "/assets/wrapper"        5 weeks ago         Up 10 days (healthy)   80/tcp, 443/tcp, 0.0.0.0:10022->22/tcp   gitlab-ce
0320d22d07a9        registry.cn-hangzhou.aliyuncs.com/anoy/yapi   "node server/app.js"     7 weeks ago         Up 10 days             0.0.0.0:3000->3000/tcp                   yapi
f41e85fc5078        mongo                                         "docker-entrypoint..."   7 weeks ago         Up 10 days             27017/tcp                                mongo
80d71e032355        redis:3.2                                     "docker-entrypoint..."   7 weeks ago         Up 10 days             0.0.0.0:6379->6379/tcp                   redis

[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker exec -it redis redis-cli
127.0.0.1:6379> keys *

[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker exec -it gitlab-ce bash
root@git:/# pwd

堡垒机
[root@dev ~]# redis-cli -h jjaskk-redis.redas.rds.aliyuncs.com
```



