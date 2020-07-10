## [一键解决 go get golang.org/x 包失败](https://gocn.vip/topics/9643#GOPROXY%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

- GOPROXY 环境变量 https://goproxy.io/zh/

如果您使用的 Go 版本是 1.13 及以上 （推荐）
```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.io,direct
```

## 实例 go get
```
go get github.com/google/flatbuffers
```
执行完成后 在项目External Libraries - Go Modules 已经存在，接下来导入

### import
```go
package logic

import (
	sample "myLeaf/msg/MyGame/Sample"   // 这个相对路径模块的引入 myLeaf go.mod
	flatbuffers "github.com/google/flatbuffers/go"
)

func WriteToFlat() {
	builder := flatbuffers.NewBuilder(0)

	// Create some weapons for our Monster ("Sword" and "Axe").
	weaponOne := builder.CreateString("Sword")
	weaponTwo := builder.CreateString("Axe")

	sample.WeaponStart(builder)
	sample.WeaponAddName(builder, weaponOne)
	sample.WeaponAddDamage(builder, 3)
	sword := sample.WeaponEnd(builder)
}
```
// go.mod
```
module myLeaf

go 1.14

require (
	github.com/google/flatbuffers v1.12.0
	github.com/gorilla/websocket v1.4.2 // indirect
	github.com/mattn/go-colorable v0.1.6
	github.com/name5566/leaf v0.0.0-20191028103944-deca55354100
	github.com/sirupsen/logrus v1.6.0
	go.uber.org/zap v1.15.0 // indirect
)
```