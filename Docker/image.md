## docker image相关操作
### build/inspect/rmi
当我们从docker镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

1.从已经创建的容器中更新镜像，并且提交这个镜像
2.使用 Dockerfile 指令来创建一个新的镜像

DockerFile => build => image

### docker pull 拉取镜像

### 查看本地存在的镜像
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

### 移除某个nginx镜像
```
➜  ~ docker rmi 6f8d099c3adc
Error response from daemon: conflict: unable to delete 568c4670fa80 (must be forced) - image is being used by stopped container be312539b4d3
```

当前镜像还在被已经停止的container使用

先移除Container
```
➜  ~ docker rm d13360daac7d
```
再移除镜像

或者 You can also use --force , -f Force removal of the image
```
docker rmi -f <image_id> 
```
