## [官网安装方法](https://docs.docker.com/engine/install/centos/)
```
$ sudo yum install -y yum-utils


$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo


$ sudo yum install docker-ce docker-ce-cli containerd.io


$ sudo systemctl start docker


$ sudo docker run hello-world


[vagrant@localhost ~]$ sudo docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.
```

## 一些其他问题
```
[vagrant@localhost ~]$ docker version
Client: Docker Engine - Community
 Version:           19.03.12
 API version:       1.40
 Go version:        go1.13.10
 Git commit:        48a66213fe
 Built:             Mon Jun 22 15:46:54 2020
 OS/Arch:           linux/amd64
 Experimental:      false
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/version: dial unix /var/run/docker.sock: connect: permission denied

// 把vagrant用户添加到docker组中
[vagrant@localhost ~]$ sudo gpasswd -a vagrant docker
Adding user vagrant to group docker

// 重启Docker进程
[vagrant@localhost ~]$ sudo service docker restart
Redirecting to /bin/systemctl restart docker.service

// 重新登录
[vagrant@localhost ~]$ docker version
Client: Docker Engine - Community
 Version:           19.03.12
 API version:       1.40
 Go version:        go1.13.10
 Git commit:        48a66213fe
 Built:             Mon Jun 22 15:46:54 2020
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.12
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.13.10
  Git commit:       48a66213fe
  Built:            Mon Jun 22 15:45:28 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.2.13
  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429
 runc:
  Version:          1.0.0-rc10
  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
```





## Installation of Docker on CentOS 7(begore 20200709)
https://www.linuxtechi.com/install-docker-on-centos-7/
Docker package is included in the default CentOS-Extras repository. So to install docker , simply run below yum command :

```
[root@localhost ~]# yum install docker

[root@vultr ~]# docker --version
Docker version 1.13.1, build 07f3374/1.13.1

[root@vultr ~]# docker ps -a
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
可见docker守护进程没有启动

Start the Docker Service

[root@localhost ~]# systemctl start docker && systemctl enable docker

[root@vultr ~]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
正常启动

```

## Command line
1. Run docker --version and ensure that you have a supported version of Docker:
* docker --version 

Docker version 17.12.0-ce, build c97c6d6

2. Run docker info or (docker version without --) to view even more details about your docker installation:

docker info
Containers: 5
 Running: 5
 Paused: 0
 Stopped: 0
Images: 5
Server Version: 1.13.1
Storage Driver: overlay2
 Backing Filesystem: extfs
 Supports d_type: true
 Native Overlay Diff: true
Logging Driver: journald
Cgroup Driver: systemd

3. Recap and cheat sheet

## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls
or just
docker images

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq

or just 

docker ps

```
[root@izm5egu9g2mfvoy5821g5xz ~]# docker container ls
CONTAINER ID        IMAGE                                         COMMAND                  CREATED             STATUS                 PORTS                                                             NAMES
a6f76955a940        portainer/portainer                           "/portainer"             5 minutes ago       Up 5 minutes           0.0.0.0:9000->9000/tcp                                            portainer
0320d22d07a9        registry.cn-hangzhou.aliyuncs.com/anoy/yapi   "node server/app.js"     2 weeks ago         Up 2 weeks             0.0.0.0:3000->3000/tcp                                            yapi
f41e85fc5078        mongo                                         "docker-entrypoint..."   2 weeks ago         Up 2 weeks             27017/tcp                                                         mongo
80d71e032355        redis:3.2                                     "docker-entrypoint..."   2 weeks ago         Up 2 weeks             0.0.0.0:6379->6379/tcp                                            redis
ece3d1006d7f        docker.io/centos/mysql-57-centos7:latest      "container-entrypo..."   2 weeks ago         Up 2 weeks             0.0.0.0:3306->3306/tcp                                            mysql
c219aab82c5a        docker.io/twang2218/gitlab-ce-zh              "/assets/wrapper"        4 weeks ago         Up 2 weeks (healthy)   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 0.0.0.0:10022->22/tcp   gitlab-ce
```

