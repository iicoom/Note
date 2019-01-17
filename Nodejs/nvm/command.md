> Node Version Manager - Simple bash script to manage multiple active node.js versions
[GitHub](https://github.com/creationix/nvm)

## CentOS nvm instll
```
第一步：
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

第二步：
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## window-nvm安装
[下载nvm-setup](https://github.com/coreybutler/nvm-windows/releases)

## 常用命令

* 输入nvm 会列出常用命令

* nvm install node # "node" is an alias for the latest version

* nvm ls-remote  

* nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
	
* nvm uninstall <version>      : The version must be a specific version.

➜  ranch_api git:(develop) ✗ nvm list
       v0.12.14
        v6.11.0
         v8.1.3
         v8.6.0
->       v9.2.0
default -> node (-> v9.2.0)
node -> stable (-> v9.2.0) (default)
stable -> 9.2 (-> v9.2.0) (default)
iojs -> N/A (default)
lts/* -> lts/carbon (-> N/A)
lts/argon -> v4.8.7 (-> N/A)
lts/boron -> v6.12.3 (-> N/A)
lts/carbon -> v8.9.4 (-> N/A)

* nvm use version

