> Auto DevOps will automatically build, test, and deploy your application based on a predefined Continuous Integration and Delivery configuration.

## So in brief, the steps needed to have a working CI can be summed up to:
1. Add .gitlab-ci.yml to the root directory of your repository
2. Configure a Runner
设置-CI/CD 
* 设置Runner token
* 触发类型
* 超时时间
* gitlab-ci.yml
* 设置pipeline的可见性
* redundant pipeline取代

### install gitlab-runner(macOS)
1. Download the binary for your system:
```
 sudo curl --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64
```

2. Give it permissions to execute:
```
 sudo chmod +x /usr/local/bin/gitlab-runner
```

3. Install the Runner as service and start it:
```
 cd ~
 gitlab-runner install
 gitlab-runner start
```

### Registering Runners(macOS)
https://docs.gitlab.com/runner/register/index.html
1. Run the following command:
```
 gitlab-runner register
```
2. Enter your GitLab instance URL:
```
 Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
 https://gitlab.com
```
3. Enter the token you obtained to register the Runner:
```
 Please enter the gitlab-ci token for this runner
 xxx
```
4. gitlab-runner unregister
```
gitlab-runner unregister --name test-runner
```

### Registering Runners(linux)
https://docs.gitlab.com/runner/install/linux-repository.html

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


### Troubleshooting
1. 报错：This job is stuck, because you don't have any active runners that can run this job.
原因：
注册gitlab runner 的时候，有一步提示：
Can run untagged jobs: [false/true]
默认值为false。这句话的意思是：是否在没有标记tag的job上运行，如果选择默认值false，那没有标记tag的代码提交是不会触发gitlab runner的，如果做测试，最好填true。

2. Host key verification failed
runner执行错误日志：

Running with gitlab-runner 11.6.0 (f100a208)
  on shared runner 2ns9gWUA
Using Shell executor...
Running on gitlab...
Fetching changes...
HEAD is now at cb520b7 Merge branch 'master' of ssh://45.76.75.55:2222/root/sai
Checking out cb520b7f as master...
Skipping Git submodules setup
$ echo "$SSH_KNOWN_HOSTS" > ~/.ssh/known_hosts
$ chmod 644 ~/.ssh/known_hosts
$ ssh root@149.28.205.96 "cd /data/www/sai && git pull origin master"
Host key verification failed.
ERROR: Job failed: exit status 1

gitlab-runner执行时是以gitlab-runner组gitlab-runner用户登录要部署的远程主机，所以要配置该用户的ssh免密登录

## Kubernetes cluster
