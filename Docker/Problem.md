1. Cannot stop or restart a docker container
https://stackoverflow.com/questions/31365827/cannot-stop-or-restart-a-docker-container

```
$ docker restart 5ba0a86f36ea
Error response from daemon: Cannot restart container 5ba0a86f36ea: [2] Container does not exist: container destroyed
Error: failed to restart containers: [5ba0a86f36ea]
```
But when I run
```bash
$ docker logs -f 5ba0a86f36ea
```
I can see the logs, so obviously the container does exist. Any ideas?

sorry, I forgot to mention this:

When I run docker ps -a I see the container as up and running. However the application inside it is malfunctioning so I want to restart it, or just get a fresh version of that application online. But when I can't stop and remove the container, I also can't get a new application up and running, which would be listening to the same port.

解决方法：
What worked was to restart boot2docker on my host. Then docker rm -f
```
$ boot2docker stop
$ boot2docker start
$ docker rm -f 1f061139ba04
```
其他方法：
boot2docker was not there in my machine. So, I found something that worked for me.
```
$ sudo systemctl restart docker.socket docker.service
$ docker rm <container id>
```