## Install Node.js
https://nodejs.org/en/download/package-manager/#arch-linux


### Enterprise Linux and Fedora
Including Red Hat® Enterprise Linux® / RHEL, CentOS and Fedora.

```
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -

然后：
sudo yum -y install nodejs

To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
     sudo yum install yarn

```

## Installation
Since you probably already have node, the easiest way to install n is through npm:

$ npm install -g n

## commands
[root@cache ~]# n

  Error: no installed version

  Usage: n [options/env] [COMMAND] [args]

  Environments:
    n [COMMAND] [args]            Uses default env (node)
    n io [COMMAND]                Sets env as io
    n project [COMMAND]           Uses custom env-variables to use non-official sources

  Commands:

    n                              Output versions installed
    n latest                       Install or activate the latest node release
    n -a x86 latest                As above but force 32 bit architecture
    n stable                       Install or activate the latest stable node release
    n lts                          Install or activate the latest LTS node release
    n <version>                    Install node <version>
    n use <version> [args ...]     Execute node <version> with [args ...]
    n bin <version>                Output bin path for <version>
    n rm <version ...>             Remove the given version(s)
    n prune                        Remove all versions except the current version
    n --latest                     Output the latest node version available
    n --stable                     Output the latest stable node version available
    n --lts                        Output the latest LTS node version available
    n ls                           Output the versions of node available

## 装好所需node版本后的操作
* 上下箭头选择版本 enter退出
* Ctrl+C 退出

