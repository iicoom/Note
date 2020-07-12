[vs code安装依赖工具](https://www.jianshu.com/p/37f1d9265fd0)

## 查看go 环境信息
```
$ go env
set GO111MODULE=
set GOARCH=amd64
set GOBIN=
set GOCACHE=C:\Users\Admin\AppData\Local\go-build
set GOENV=C:\Users\Admin\AppData\Roaming\go\env
set GOEXE=.exe
set GOFLAGS=
set GOHOSTARCH=amd64
set GOHOSTOS=windows
set GONOPROXY=
set GONOSUMDB=
set GOOS=windows
set GOPATH=C:\Users\Admin\go
set GOPRIVATE=
set GOPROXY=https://proxy.golang.org,direct
set GOROOT=D:\software\Go
set GOSUMDB=sum.golang.org
set GOTMPDIR=
set GOTOOLDIR=D:\software\Go\pkg\tool\windows_amd64
set GCCGO=gccgo
set AR=ar
set CC=gcc
set CXX=g++
set CGO_ENABLED=1
set GOMOD=
set CGO_CFLAGS=-g -O2
set CGO_CPPFLAGS=
set CGO_CXXFLAGS=-g -O2
set CGO_FFLAGS=-g -O2
set CGO_LDFLAGS=-g -O2
set PKG_CONFIG=pkg-config
set GOGCCFLAGS=-m64 -mthreads -fno-caret-diagnostics -Qunused-arguments -fmessage-length=0 -fdebug-prefix-map=C:\Users\Admin\AppData\Local\Temp\go-build439950766=/tmp/go-build -gno-record-gcc-switches
```
可见 GOPATH
set GOPATH=C:\Users\Admin\go

go项目需要放置在GOPATH/src下

### GOROOT 和 GOPATH
- GOROOT就是go的安装路径
  
- GOPATH  
  go install/go get和 go的工具等会用到GOPATH环境变量.
	GOPATH是作为编译后二进制的存放目的地和import包时的搜索路径 (其实也是你的工作目录, 你可以在src下创建你自己的go源文件, 然后开始工作)
	GOPATH之下主要包含三个目录: bin、pkg、src
	bin目录主要存放可执行文件; pkg目录存放编译好的库文件, 主要是*.a文件; src目录下主要存放go的源文件

## Goland 使用gomod 可在任何目录运行

In Go 1.14, module support is considered ready for production use

使用go mod ，利用Go 的 module 特性，你再也不需要关心GOPATH了（当然GOPATH变量还是要存在的，但只需要指定一个目录，而且以后就不用我们关心了）， 你可以任性的在你的硬盘任何位置新建一个Golang项目了。

1. 打开项目目录 如 D:\test\wserver
2. 打开终端执行命令：  go mod init wserver （go mod init 后面需要跟一个名字，我这里叫wserver）
3. 看到提示 “go: creating new go.mod: module wserver”  说明 go mod 初始化成功了，会在当前目录下生成一个 go.mod 文件。

如果你用了gomod，那么你的项目就不在局限在那个gopath文件夹内了，你可以在任何位置创建项目并且运行。

需要在Goland-file-setting-Go-Go Modules- enable打勾

https://github.com/golang/go/wiki/Modules#example

### leafserver实例项目结构如下：
```
leafserver
	- bin
	- src
  	- server
			- conf
			- game
			- gate
			- login
			- mian.go
```

// go.mod
```go
module myLeaf

go 1.14

require (
	github.com/google/flatbuffers v1.12.0 // indirect
	github.com/gorilla/websocket v1.4.2 // indirect
	github.com/mattn/go-colorable v0.1.6 // indirect
	github.com/name5566/leaf v0.0.0-20191028103944-deca55354100
	github.com/sirupsen/logrus v1.6.0 // indirect
	go.uber.org/zap v1.15.0 // indirect
)
```
**如果发现无论go.mod放在哪一级目录都无法识别，很可能是Goland的Go Module模式没有打开**

```go
package main

import (
	"github.com/name5566/leaf"
	lconf "github.com/name5566/leaf/conf"
	"myLeaf/conf"
	"myLeaf/game"
	"myLeaf/gate"
	"myLeaf/login"
)

func main() {
	lconf.LogLevel = conf.Server.LogLevel
	lconf.LogPath = conf.Server.LogPath
	lconf.LogFlag = conf.LogFlag
	lconf.ConsolePort = conf.Server.ConsolePort
	lconf.ProfilePath = conf.Server.ProfilePath

	leaf.Run(
		game.Module,
		gate.Module,
		login.Module,
	)
}
```

### go mod
```
➜  leaf git:(master) ✗ go mod
Go mod provides access to operations on modules.

Note that support for modules is built into all the go commands,
not just 'go mod'. For example, day-to-day adding, removing, upgrading,
and downgrading of dependencies should be done using 'go get'.
See 'go help modules' for an overview of module functionality.

Usage:

        go mod <command> [arguments]

The commands are:

        download    download modules to local cache
        edit        edit go.mod from tools or scripts
        graph       print module requirement graph
        init        initialize new module in current directory
        tidy        add missing and remove unused modules
        vendor      make vendored copy of dependencies
        verify      verify dependencies have expected content
        why         explain why packages or modules are needed

Use "go help mod <command>" for more information about a command.
```
1. go mod download: 安装所有go.mod中的依赖
   需要切换到有go.mod 存才的目录
2. 
