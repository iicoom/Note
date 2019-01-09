## Docker搭建自己的GitLab
```
docker pull gitlab/gitlab-ce:latest

Status: Downloaded newer image for docker.io/gitlab/gitlab-ce:latest


[root@vultr ~]# docker images
REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
docker.io/gitlab/gitlab-ce   latest              399829d2ce89        3 days ago          1.56 GB

启动gitlab容器
sudo docker run --detach \
	--hostname gitlab.example.com \
	--publish 443:443 --publish 80:80 --publish 22:22 \
	--name gitlab \
	--restart always \
	--volume /srv/gitlab/config:/etc/gitlab \
	--volume /srv/gitlab/logs:/var/log/gitlab \
	--volume /srv/gitlab/data:/var/opt/gitlab \
	gitlab/gitlab-ce:latest


--publish 暴露了容器的三个端口, 分别是https对应的443, http对应80以及ssh对应的22(如果不需要配置https, 可以不暴露)
--volume 指定挂载目录, 这个便于我们在本地备份和修改容器的相关数据

This will download and start a GitLab CE container and publish ports needed to access SSH, HTTP and HTTPS. All GitLab data will be stored as subdirectories of /srv/gitlab/. The container will automatically restart after a system reboot.

You can now login to the web interface as explained in After starting a container.

可能会有
Error starting userland proxy: listen tcp 0.0.0.0:80: bind: address already in use.

修改命令为
sudo docker run --detach \
	--hostname gitlab.example.com \
	--publish 22443:443 --publish 2280:80 --publish 2222:22 \
	--name gitlab \
	--restart always \
	--volume /srv/gitlab/config:/etc/gitlab \
	--volume /srv/gitlab/logs:/var/log/gitlab \
	--volume /srv/gitlab/data:/var/opt/gitlab \
	gitlab/gitlab-ce:latest

You have to remove (or rename) that container to be able to reuse that name..


在MacOS上：
sudo docker run --detach \
	--hostname gitlab.example.com \
	--publish 22443:443 --publish 2280:80 --publish 2222:22 \
	--name gitlab \
	--restart always \
	--volume /Users/guitar/gitlab/config:/etc/gitlab \
	--volume /Users/guitar/gitlab/logs:/var/log/gitlab \
	--volume /Users/guitar/gitlab/data:/var/opt/gitlab \
	gitlab/gitlab-ce:latest

先移除、再启动
[root@vultr ~]# docker rm gitlab

docker ps

CONTAINER ID        IMAGE                     COMMAND             CREATED             STATUS                            PORTS                                                                NAMES
b6d3a542016e        gitlab/gitlab-ce:latest   "/assets/wrapper"   18 minutes ago      Up 3 seconds (health: starting)   0.0.0.0:2222->22/tcp, 0.0.0.0:2280->80/tcp, 0.0.0.0:22443->443/tcp   gitlab

```

## Configure GitLab
```
[root@vultr ~]# docker exec -it gitlab /bin/bash

root@gitlab:/#
```
