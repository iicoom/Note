## Docker container相关操作
### docker ps
查看正在运行的container：
➜  ~ docker ps
CONTAINER ID   IMAGE   COMMAND   CREATED  STATUS   PORTS    NAMES
没有。。。

查看包括已停止的：
➜  ~ docker ps -a
CONTAINER ID    IMAGE    COMMAND                  CREATED             STATUS           PORTS                  NAMES
be312539b4d3    nginx    "nginx -g 'daemon of…"   9 months ago        Exited (255) 9 months ago   0.0.0.0:80->80/tcp   webserver

### docker run
1. 运行一个Ubuntu容器并输出 “Hello world”:
```
runoob@runoob:~$ docker run ubuntu:15.10 /bin/echo "Hello world"
Hello world

docker: Docker 的二进制执行文件。

run:与前面的 docker 组合来运行一个容器。

ubuntu:15.10指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。

/bin/echo "Hello world": 在启动的容器里执行的命令

以上命令完整的意思可以解释为：Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。
```

2. 运行一个Python Flask Web应用
```
runoob@runoob:~# docker pull training/webapp          # 载入镜像
runoob@runoob:~# docker run -d -P training/webapp python app.py
```
-d:让容器在后台运行。

-P:将容器内部使用的网络端口映射到我们使用的主机上。
```
runoob@runoob:~#  docker ps
CONTAINER ID        IMAGE               COMMAND             ...        PORTS                 
d3d5e39ed9d3        training/webapp     "python app.py"     ...        0.0.0.0:32769->5000/tcp
```
Docker 开放了 5000 端口（默认 Python Flask 端口）映射到主机端口 32769 上。

这时我们可以通过浏览器访问WEB应用

3. Start a Dockerized web server
```
docker run -d -p 80:80 --name webserver nginx

docker ps
➜  ~ docker ps
CONTAINER ID  IMAGE       COMMAND               CREATED         STATUS        PORTS                NAMES
be312539b4d3  nginx    "nginx -g 'daemon of…"   23 hours ago   Up 23 hours    0.0.0.0:80->80/tcp   webserver
```

**docker run 参数**
➜  ~ docker run -i -t -d --name my-centos centos:6.9
f7881fcaf265773581d7ad8ac106a97314d6186433671fbfd79572bd7d3aa833

-i, --interactive
-t, --tty (“allocate a pseudo-TTY”, i.e. a terminal)
-d, Detached if you want to run the container in the background in a “detached” mode

进入centos 容器：
1. attach
➜  ~ docker attach f7881fcaf265
[root@f7881fcaf265 /]#

退出容器保持容器运行：
control+p+q

2. exec -it
➜  ~ docker exec -it f7881fcaf265 /bin/bash
[root@f7881fcaf265 /]# exit
exit 会关闭容器

➜  ~ docker ps
CONTAINER ID    IMAGE    COMMAND     CREATED             STATUS              PORTS                     NAMES
f7881fcaf265        centos:6.9          "/bin/bash"         22 minutes ago      Up 14 minutes                                 my-centos
d13360daac7d        training/webapp     "python app.py"     28 hours ago        Up 28 hours         0.0.0.0:32768->5000/tcp   musing_edison


3. 进入一个redis容器
```
[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker ps
CONTAINER ID     IMAGE           COMMAND       CREATED       STATUS        PORTS              NAMES
80d71e032355     redis:3.2    "docker-entrypoint..."   7 weeks ago         Up 10 days             0.0.0.0:6379->6379/tcp                   redis

[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker exec -it redis redis-cli
127.0.0.1:6379> keys *
```

4. 链接到Docker mysql
```
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

5. 链接到Docker gitlab
```
[root@iZ2ze4fk6h7q9qry6r313gZ ~]# docker exec -it gitlab-ce bash
root@git:/# pwd
```


### restart Stop and remove containers and images
➜  ~ docker rm be312539b4d3
be312539b4d3


```
➜  ~ docker stop webserver
webserver

➜  ~ docker ps -a
view stopped containers

➜  ~ docker start webserver  再次启动
webserver

➜  ~ docker container restart 1fd572d3bc5f
1fd572d3bc5f
```




