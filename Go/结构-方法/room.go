package room

import (
	"server/room/logic"
	"fmt"
	"leaf.git/module"
)

var Module = new(roomModule)

type roomModule struct {
	*module.Skeleton
	roomMgr *logic.RoomMgr
}

func (m *roomModule) OnInit() {
	m.Skeleton = skeleton
	m.roomMgr = logic.CreateRoomMgr(conf.MaxRoomCount)

	m.initChanRPC()
}