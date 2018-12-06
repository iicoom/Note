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

