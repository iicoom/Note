## room/module.go
```go
package room

var Module = new(roomModule)

type roomModule struct {
	*module.Skeleton
	roomMgr *logic.RoomMgr
}

func (m *roomModule) initChanRPC() {
	m.RegisterChanRPC("NewBattle", createNewBattle)
}
```
初始化RoomMgr，初始化RPC 并注册RPC服务


## room/handler_agent.go
```go
// handler_agent.go
func createNewBattle(args []interface{}) interface{} {

	battle := args[0].(*battle.BattleMsg)
	if room, ok := Module.roomMgr.TryAllocateRoom(); ok {
		initRoomPlayerBuffPool(room)
		room.EnterBattle(battle)
		return room.GetIndex()
	}
	return -1
}
```

## RoomMgr
```go
type RoomMgr struct {
	nextIndex    int
	agentToRoom  map[gate.Agent]*Room
	rooms        map[int]*Room
	maxRoomCount int
}

func CreateRoomMgr(maxRoomCount int) *RoomMgr {
	roomMgr := &RoomMgr{}
	roomMgr.maxRoomCount = maxRoomCount
	roomMgr.agentToRoom = make(map[gate.Agent]*Room)
	roomMgr.rooms = make(map[int]*Room, 0)
	roomMgr.nextIndex = 0

	return roomMgr
}

func (roomMgr *RoomMgr) TryAllocateRoom() (*Room, bool) {
	room := createRoom()
	room.index = roomMgr.nextIndex
	roomMgr.nextIndex = roomMgr.getNextIndex()
	roomMgr.rooms[room.index] = room

	room.Release("created, total room count is %v",
		len(roomMgr.rooms))
	return room, true
}
```

## room
```go
type Room struct {
	playersMutex sync.RWMutex
	Players      []*Player

	PlayerBuffPool *sync.Pool

	agentsMutex sync.RWMutex
	agents      map[int]gate.Agent
	isReleased  bool

	index        int
	battle       *battle.BattleMsg

}

func createRoom() *Room {
	room := &Room{}
	room.TriggerMgr = new(TriggerMgr)
	room.PowerupMgr = new(PowerupMgr)
	room.BuffController = new(BuffController)
	room.MatchController = new(MatchController)
	room.agents = make(map[int]gate.Agent)
	room.inCmdChan = make(chan *roomInCmd, 1024)
	room.outCmdChan = make(chan *roomOutCmd, 1024)
	room.actionChan = make(chan *roomAction, 512)
	room.rpcHandlers = make(map[string]roomRPCHandler)
	room.syncidToPlayer = make(map[int32]*Player)
	room.timers = make(map[chan bool]struct{})
	room.tickers = make(map[chan bool]struct{})

	room.controllers = make(map[RoomControllerEnum]RoomController)
	for _, c := range controllers {

		if _, ok := room.controllers[c.GetType()]; ok {
			room.Error("controller of type %v already exists.", c.GetType())
		}

		room.controllers[c.GetType()] = c
		room.controllers[c.GetType()].Init(room)
	}

	room.registerRPCsBeforeMatch()
	return room
}
```