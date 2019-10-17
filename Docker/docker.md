[Docker容器技术](https://zhuanlan.zhihu.com/p/32462416)

## Docker常用指令

### docker image相关操作
**docker pull 拉取镜像**


**查看本地存在的镜像**
```
runoob@runoob:~$ docker images           
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              14.04               90d5884b1ee0        5 days ago          188 MB
php                 5.6                 f40e9e0f10c8        9 days ago          444.8 MB
nginx               latest              6f8d099c3adc        12 days ago         182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago         324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago         194.4 MB
ubuntu              15.10               4e3b13c8a266        4 weeks ago         136.3 MB
hello-world         latest              690ed74de00f        6 months ago        960 B
training/webapp     latest              6fae60ef3446        11 months ago       348.8 MB
```

移除某个nginx镜像
➜  ~ docker rmi 6f8d099c3adc
Error response from daemon: conflict: unable to delete 568c4670fa80 (must be forced) - image is being used by stopped container be312539b4d3

当前镜像还在被已经停止的container使用


### Docker container相关操作
#### docker ps
查看正在运行的container：
➜  ~ docker ps
CONTAINER ID   IMAGE   COMMAND   CREATED  STATUS   PORTS    NAMES
没有。。。

查看包括已停止的：
➜  ~ docker ps -a
CONTAINER ID    IMAGE    COMMAND                  CREATED             STATUS           PORTS                  NAMES
be312539b4d3    nginx    "nginx -g 'daemon of…"   9 months ago        Exited (255) 9 months ago   0.0.0.0:80->80/tcp   webserver

#### docker run
**运行一个Ubuntu容器并输出 “Hello world”:**
```
runoob@runoob:~$ docker run ubuntu:15.10 /bin/echo "Hello world"
Hello world

docker: Docker 的二进制执行文件。

run:与前面的 docker 组合来运行一个容器。

ubuntu:15.10指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。

/bin/echo "Hello world": 在启动的容器里执行的命令

以上命令完整的意思可以解释为：Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。
```

**运行一个Python Flask Web应用**
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


#### docker rm id
➜  ~ docker rm be312539b4d3
be312539b4d3


### docker logs
```
[root@izm5egu9g2mfvoy5821g5xz ~]# docker logs -f 0320d22d07a9
log: 服务已启动，请打开下面链接访问:
http://127.0.0.1:3000/
log: mongodb load success...
```

### 创建镜像
当我们从docker镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

1.从已经创建的容器中更新镜像，并且提交这个镜像
2.使用 Dockerfile 指令来创建一个新的镜像

### 构建镜像
我们使用命令 docker build ， 从零开始来创建一个新的镜像。为此，我们需要创建一个 Dockerfile 文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。
```
runoob@runoob:~$ cat Dockerfile 
FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"

RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd runoob
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
```

每一个指令都会在镜像上创建一个新的层，每一个指令的前缀都必须是大写的。

第一条FROM，指定使用哪个镜像源

RUN 指令告诉docker 在镜像内执行命令，安装了什么。。。

然后，我们使用 Dockerfile 文件，通过 docker build 命令来构建一个镜像。

```
runoob@runoob:~$ docker build -t runoob/centos:6.7 .
Sending build context to Docker daemon 17.92 kB
Step 1 : FROM centos:6.7
 ---&gt; d95b5ca17cc3
Step 2 : MAINTAINER Fisher "fisher@sudops.com"
 ---&gt; Using cache
 ---&gt; 0c92299c6f03
Step 3 : RUN /bin/echo 'root:123456' |chpasswd
 ---&gt; Using cache
 ---&gt; 0397ce2fbd0a
Step 4 : RUN useradd runoob
......
```
参数说明：

-t ：指定要创建的目标镜像名

. ：Dockerfile 文件所在目录，可以指定Dockerfile 的绝对路径

使用docker images 查看创建的镜像已经在列表中存在,镜像ID为860c279d2fec
