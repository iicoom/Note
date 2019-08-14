# gitlab

## Docker搭建自己的GitLab

[https://docs.gitlab.com/omnibus/docker/](https://docs.gitlab.com/omnibus/docker/)

```text
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

因为粘贴格式会报下面错误，需要把tab 转换为space
/usr/bin/docker-current: Error parsing reference: ".--hostname" is not a valid repository/tag: invalid reference format.

sudo docker run --detach \
    --hostname 45.76.75.55 \
    --publish 443:443 --publish 80:80 --publish 22:22 \
    --name gitlab \
    --restart always \
    --volume /srv/gitlab/config:/etc/gitlab \
    --volume /srv/gitlab/logs:/var/log/gitlab \
    --volume /srv/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce:latest

宿主机22端口已经被占用
Error starting userland proxy: listen tcp 0.0.0.0:22: bind: address already in use.

sudo docker run --detach \
    --hostname 45.76.75.55 \
    --publish 443:443 --publish 80:80 --publish 2222:22 \
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

以上配置的宿主机2222端口映射到gitlab container 22端口，会导致gitlab配置默认的22端口无法通过ssh clone代码 配置项为：gitlab\_rails\['gitlab\_shell\_ssh\_port'\] = 4422 需要修改gitlab配置文件，重启生效，再次创建的仓库地址就会包含2222端口，把客户端的公钥配置在gitlab上就可以ssh clone ssh://git@45.76.12.55:2222/root/sai.git

## Configure GitLab

You can also just edit /etc/gitlab/gitlab.rb:

```text
sudo docker exec -it gitlab vi /etc/gitlab/gitlab.rb

sudo docker restart gitlab
```

The very first time you visit GitLab, you will be asked to set up the admin password. After you change it, you can login with username root and the password you set up.

username: root pass: 02060934mao

## gitlab memery usage

```text
[root@gitlab ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:           3.7G        2.5G        129M         27M        1.1G        923M
Swap:            0B          0B          0B
```

## Configure GitLab

```text
[root@vultr ~]# docker exec -it gitlab /bin/bash

root@gitlab:/#
```

