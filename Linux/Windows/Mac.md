## 安装go 包管理工具
```
go get -v -u github.com/gpmgo/gopm
```
只能在gopath/bin下执行，以下方法添加到全局

```
vim ~/.zshrc

# mongodb 环境变量
export PATH=${PATH}:/Users/mxj/DB/mongodb/bin

# mysql 环境变量
export PATH=${PATH}:/usr/local/mysql/bin

# gopm
export PATH=${PATH}:/Users/mxj/go/bin

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
export PATH="/usr/local/opt/qt/bin:$PATH"
```

测试
```
➜  ~ gopm
NAME:
   Gopm - Go Package Manager

USAGE:
   Gopm [global options] command [command options] [arguments...]

VERSION:
   0.8.8.0307 Beta

COMMANDS:
   list		list all dependencies of current project
   gen		generate a gopmfile for current Go project
   get		fetch remote package(s) and dependencies
   bin		download and link dependencies and build binary
   config	configure gopm settings
   run		link dependencies and go run
   test		link dependencies and go test
   build	link dependencies and go build
   install	link dependencies and go install
   clean	clean all temporary files
   update	check and update gopm resources including itself
   help, h	Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --noterm, -n		disable color output
   --strict, -s		strict mode
   --debug, -d		debug mode
   --help, -h		show help
   --version, -v	print the version
```