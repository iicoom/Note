# container

## Start a Dockerized web server

```text
docker run -d -p 80:80 --name webserver nginx

docker ps
➜  ~ docker ps
CONTAINER ID  IMAGE       COMMAND               CREATED         STATUS        PORTS                NAMES
be312539b4d3  nginx    "nginx -g 'daemon of…"   23 hours ago   Up 23 hours    0.0.0.0:80->80/tcp   webserver
```

## docker logs gitlab

docker --help

```text
docker logs containerId

docker top containerId
```

### docker logs --help

```text
Usage:    docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

Options:
      --details        Show extra details provided to logs
  -f, --follow         Follow log output
      --help           Print usage
      --since string   Show logs since timestamp
      --tail string    Number of lines to show from the end of the logs (default "all")
  -t, --timestamps     Show timestamps
```

查看container 日志结尾指定行数 并跟随 \[root@gitlab ~\]\# docker logs -f --tail 10 gitlab ~ \[root@gitlab ~\]\# docker logs --tail 10 gitlab {"method":"GET","path":"/-/metrics","format":"html","controller":"MetricsController","action":"index","status":200,"duration":18.75,"view":0.84,"db":0.0,"time":"2019-01-16T03:53:38.870Z","params":\[\],"remote\_ip":null,"user\_id":null,"username":null,"ua":null,"correlation\_id":"2ecb7aaf-d612-43e6-a69e-5e4d3216285b"} ==&gt; /var/log/gitlab/gitlab-workhorse/current &lt;== 2019-01-16\_03:53:38.23888 45.76.75.55 45.76.75.55:0 - - \[2019/01/16:03:53:38 +0000\] "POST /api/v4/jobs/request HTTP/1.1" 204 0 "" "gitlab-runner 11.6.0 \(11-6-stable; go1.8.7; linux/amd64\)" 0.000 ==&gt; /var/log/gitlab/nginx/gitlab\_access.log &lt;== 45.76.75.55 - - \[16/Jan/2019:03:53:39 +0000\] "POST /api/v4/jobs/request HTTP/1.1" 204 0 "" "gitlab-runner 11.6.0 \(11-6-stable; go1.8.7; linux/amd64\)" ==&gt; /var/log/gitlab/gitlab-workhorse/current &lt;== 2019-01-16\_03:53:39.73915 45.76.75.55 45.76.75.55:0 - - \[2019/01/16:03:53:39 +0000\] "POST /api/v4/jobs/request HTTP/1.1" 204 0 "" "gitlab-runner 11.6.0 \(11-6-stable; go1.8.7; linux/amd64\)" 0.000 ~

## Stop and remove containers and images

```text
➜  ~ docker stop webserver
webserver

➜  ~ docker ps -a
view stopped containers

➜  ~ docker start webserver  再次启动
webserver

➜  ~ docker rm adoring_mccarthy  移除adoring_mccarthy container
adoring_mccarthy

➜  ~ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              568c4670fa80        3 weeks ago         109MB
hello-world         latest              4ab4c602aa5e        3 months ago        1.84kB

➜  ~ docker image rm hello-world
Untagged: hello-world:latest
Untagged: hello-world@sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788
Deleted: sha256:4ab4c602aa5eed5528a6620ff18a1dc4faef0e1ab3a5eddeddb410714478c67f
Deleted: sha256:428c97da766c4c13b19088a471de6b622b038f3ae8efa10ec5a37d6d31a2df0b
```

## 链接到Docker 容器的redis

```text
[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker ps
CONTAINER ID        IMAGE                                         COMMAND                  CREATED             STATUS                 PORTS                                    NAMES
de6504eeb30b        mysql:5.7                                     "docker-entrypoint..."   20 hours ago        Up 20 hours            33060/tcp, 0.0.0.0:33306->3306/tcp       mysql57
fc7af44132a0        docker.io/twang2218/gitlab-ce-zh              "/assets/wrapper"        5 weeks ago         Up 10 days (healthy)   80/tcp, 443/tcp, 0.0.0.0:10022->22/tcp   gitlab-ce
0320d22d07a9        registry.cn-hangzhou.aliyuncs.com/anoy/yapi   "node server/app.js"     7 weeks ago         Up 10 days             0.0.0.0:3000->3000/tcp                   yapi
f41e85fc5078        mongo                                         "docker-entrypoint..."   7 weeks ago         Up 10 days             27017/tcp                                mongo
80d71e032355        redis:3.2                                     "docker-entrypoint..."   7 weeks ago         Up 10 days             0.0.0.0:6379->6379/tcp                   redis

[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker exec -it redis redis-cli
127.0.0.1:6379> keys *
```

## 链接到Docker mysql

```text
[root@localhost ~]# docker exec -it mysql bash
root@eb3dbfb0958f:/# mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.20 MySQL Community Server (GPL)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```

## 链接到Docker gitlab

```text
[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker exec -it gitlab-ce bash
root@git:/# pwd
```

## 链接阿里云内网的redis

```text
需要通过堡垒机链接到正式环境的redis
[root@dev ~]# redis-cli -h jjaskk-redis.redas.rds.aliyuncs.com
```

## 链接到阿里云mysql

