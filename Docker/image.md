## docker image相关操作
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

### build
当我们从docker镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

1.从已经创建的容器中更新镜像，并且提交这个镜像
2.使用 Dockerfile 指令来创建一个新的镜像

[Docker can build images automatically by reading the instructions from a Dockerfile](https://docs.docker.com/engine/reference/builder/)

[Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

DockerFile => build => image

```
FROM scratch
ADD ./docker-root /
COPY ./ding-talk-notify-service /
ENTRYPOINT ["/ding-talk-notify-service"]
```

## ADD or COPY
Although ADD and COPY are functionally similar, generally speaking, COPY is preferred. That’s because it’s more transparent than ADD. COPY only supports the basic copying of local files into the container, while ADD has some features (like local-only tar extraction and remote URL support)

## ENTRYPOINT
The best use for ENTRYPOINT is to set the image’s main command, allowing that image to be run as though it was that command (and then use CMD as the default flags).

```
ENTRYPOINT ["s3cmd"]
CMD ["--help"]
```
Now the image can be run like this to show the command’s help:

```
$ docker run s3cmd
```

## 附录
[Build your Node image](https://docs.docker.com/get-started/nodejs/build-images/)

### build image
An image includes everything you need to run an application - the code or binary, runtime, dependencies, and any other file system objects required.

1. Create a Dockerfile for Node.js
```yml
FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]
```

2. Build image
Now that we’ve created our Dockerfile, let’s build our image. To do this, we use the docker build command.

```
$ docker build --tag node-docker .
```

### Run your image as a container
```
$ docker run node-docker
```