## docker history
```shell
[root@stag-app-41 ~]# docker images
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
task-service               0.0.1               9db0cf224b8c        3 weeks ago         16.2MB
ding-talk-notify-service   0.0.1               b5c13402cbc4        5 months ago        16MB


[root@stag-app-41 ~]# docker history task-service:0.0.1
IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
9db0cf224b8c        3 weeks ago         /bin/sh -c #(nop)  ENTRYPOINT ["/task-servic…   0B                  
<missing>           3 weeks ago         /bin/sh -c #(nop) COPY file:1bf42d7fa3d1950f…   15.6MB              
<missing>           12 months ago       /bin/sh -c #(nop) ADD dir:9b242ac2237011659b…   579kB 
```

## 拷贝container中的file

[Docker: Copying files from Docker container to host](https://stackoverflow.com/questions/22049212/docker-copying-files-from-docker-container-to-host)