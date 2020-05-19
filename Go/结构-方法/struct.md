// 组成结构体类型的那些数据称为 字段（fields）。每个字段都有一个类型和一个名字；在一个结构体中，字段名字必须是唯一的。

```go
// 结构体的创建
type struct1 struct {
	field1 type1
	field2 type2
	…
}
ms := new(struct1)
// 上下2种写法是等价的 下边的还进行了赋值
// 初始化：
ms := &struct1{10, 15.5, "Chris"}



// 结构体的字段可以是任何类型，甚至是结构体本身（参考第 10.5 节），也可以是函数或者接口（参考第 11 章）

type BattleResultServer struct {
	UnsentRecords []*UnsentRecord
}

var BattleResultInstance *BattleResultServer
// 以上定义的指针变量可以存储结构体变量的地址


type RoomMgr struct {
	nextIndex    int
	agentToRoom  map[gate.Agent]*Room
	rooms        map[int]*Room
	maxRoomCount int
}

func CreateRoomMgr(maxRoomCount int) *RoomMgr {
	roomMgr := &RoomMgr{}					// 相当于 roomMgr := new(RoomMgr) 表达式 new(Type) 和 &Type{} 是等价的
	roomMgr.maxRoomCount = maxRoomCount
	roomMgr.agentToRoom = make(map[gate.Agent]*Room)
	roomMgr.rooms = make(map[int]*Room, 0)
	roomMgr.nextIndex = 0

	return roomMgr
}
```
// roomMgr := &RoomMgr{}  具体含义是什么？ 已经解决

