## gitlab 仓库 Auto DevOps
设置-CI/CD 
* 设置Runner token
* 触发类型
* 超时时间
* gitlab-ci.yml
* 设置pipeline的可见性
* redundant pipeline取代

### Runners
Run GitLab Runner in a container

```
docker pull gitlab/gitlab-runner:latest
```

You need to mount a config volume into the gitlab-runner container to be used for configs and other resources:
```
 docker run -d --name gitlab-runner --restart always \
   -v /srv/gitlab-runner/config:/etc/gitlab-runner \
   -v /var/run/docker.sock:/var/run/docker.sock \
   gitlab/gitlab-runner:latest

```
Tip: On macOS, use /Users/Shared instead of /srv.
```
 docker run -d --name gitlab-runner --restart always \
   -v /Users/Shared/gitlab-runner/config:/etc/gitlab-runner \
   -v /var/run/docker.sock:/var/run/docker.sock \
   gitlab/gitlab-runner:latest
```

### register a Runner
To register a Runner using a Docker container:

➜  ~ docker exec -it gitlab-runner bash
root@e1b982bb1a86:/# gitlab-runner register
Runtime platform                                    arch=amd64 os=linux pid=97 revision=f100a208 version=11.6.0
Running in system-mode.

Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
http://127.0.0.1:2280/
Please enter the gitlab-ci token for this runner:
kHQTPAsf2HAMym-dybij
Please enter the gitlab-ci description for this runner:
[e1b982bb1a86]: WTF runner
Please enter the gitlab-ci tags for this runner (comma separated):
dev,prod
ERROR: Registering runner... failed                 runner=kHQTPAsf status=couldn't execute POST against http://127.0.0.1:2280/api/v4/runners: Post http://127.0.0.1:2280/api/v4/runners: dial tcp 127.0.0.1:2280: getsockopt: connection refused












