package logic

import (
	"bufio"
	"bytes"
	"fmt"
	"runtime/debug"
	"strconv"
	"strings"
	"sync"
	"time"
)

type RoomState int

const (
	RoomState_Other     RoomState = 0
	RoomState_Idle      RoomState = 1
	RoomState_Init      RoomState = 2
	RoomState_InMatch   RoomState = 3
	RoomState_Terminate RoomState = 4
	RoomState_Loading   RoomState = 5
	RoomState_NonExist  RoomState = 6
)

type state interface {
	begin(e *fsm.Event)
	end(e *fsm.Event)
}

type Room struct {
	playersMutex sync.RWMutex
	Players      []*Player

	PlayerBuffPool *sync.Pool

	agentsMutex sync.RWMutex
	agents      map[int]gate.Agent
	isReleased  bool

	index        int
	battle       *battle.BattleMsg
	stateMachine *fsm.FSM

	builderPool             *sync.Pool
	bufferPool              *sync.Pool
	rpcHandlers             map[string]roomRPCHandler
	bufferedRpcs            []*roomBufferedMsg
	playerStateHandler      roomRawMsgHandler
	playerWaypointHandler   roomRawMsgHandler
	playerDeviceInfoHandler roomRawMsgHandler

	inCmdChan  chan *roomInCmd
	outCmdChan chan *roomOutCmd
	actionChan chan *roomAction

	timers       map[chan bool]struct{}
	timersMutex  sync.Mutex
	tickers      map[chan bool]struct{}
	tickersMutex sync.Mutex

	//playerCreator  *PlayerCreator
	syncidToPlayer map[int32]*Player

	controllers            map[RoomControllerEnum]RoomController
	TriggerMgr             *TriggerMgr
	PowerupMgr             *PowerupMgr
	BuffController         *BuffController
	MatchController        *MatchController
	BoostController        *BoostController
	CheatMgr               *CheatMgr
	PenaltyController      *PenaltyController
	ComboDriftController   *ComboDriftController
	TrackMgr               *TrackMgr
	TeamNitrogenController *TeamNitrogenController
	QteController          *QteController
	DebugController        *DebugController

	allowConnection bool
	idleState       *roomIdleState
	initState       *roomInitState
	loadingState    *roomLoadingState
	inMatchState    *roomInMatchState
	terminateState  *roomTerminateState

	disconnectedPlayerCount  int
	delegateAIPlayerCount    int
	currentDisconnectHandler disconnectHandler

	lastWriteAlarmTime time.Time
}

func createRoom() *Room {
	room := &Room{}
	room.TriggerMgr = new(TriggerMgr)
	room.PowerupMgr = new(PowerupMgr)
	room.BuffController = new(BuffController)
	room.MatchController = new(MatchController)
	room.BoostController = new(BoostController)
	room.CheatMgr = new(CheatMgr)
	room.PenaltyController = new(PenaltyController)
	room.ComboDriftController = new(ComboDriftController)
	room.TrackMgr = new(TrackMgr)
	room.TeamNitrogenController = new(TeamNitrogenController)
	room.QteController = new(QteController)
	room.DebugController = new(DebugController)
	controllers := []RoomController{
		room.TriggerMgr,
		room.PowerupMgr,
		room.BuffController,
		room.MatchController,
		room.BoostController,
		room.CheatMgr,
		room.PenaltyController,
		room.ComboDriftController,
		room.TrackMgr,
		room.TeamNitrogenController,
		room.QteController,
		room.DebugController,
	}
	room.builderPool = &sync.Pool{
		New: func() interface{} {
			return flatbuffers.NewBuilder(512)
		},
	}
	room.bufferPool = &sync.Pool{
		New: func() interface{} {
			buf := new(rudpsession.StreamBuffer)
			buf.SetBuffer(make([]byte, 520), 0)
			return buf
		},
	}

	room.initState = room.createInitState()
	room.loadingState = room.createLoadingState()
	room.inMatchState = &roomInMatchState{room: room}
	room.terminateState = &roomTerminateState{room: room}
	room.stateMachine = fsm.NewFSM(
		"idle",
		fsm.Events{
			{Name: "enterbattle", Src: []string{"idle"}, Dst: "init"},
			{Name: "entermap", Src: []string{"init"}, Dst: "loading"},
			{Name: "startmatch", Src: []string{"loading"}, Dst: "inmatch"},
			{Name: "terminate",
				Src: []string{"idle", "init", "loading", "inmatch"},
				Dst: "terminate"},
		},
		fsm.Callbacks{
			"enter_state":     room.enterAnyState,
			"leave_state":     room.exitAnyState,
			"enter_init":      room.initState.begin,
			"leave_init":      room.initState.end,
			"enter_loading":   room.loadingState.begin,
			"leave_loading":   room.loadingState.end,
			"enter_inmatch":   room.inMatchState.begin,
			"leave_inmatch":   room.inMatchState.end,
			"enter_terminate": room.terminateState.begin,
			"leave_terminate": room.terminateState.end,
		},
	)
	room.agents = make(map[int]gate.Agent)
	room.inCmdChan = make(chan *roomInCmd, 1024)
	room.outCmdChan = make(chan *roomOutCmd, 1024)
	room.actionChan = make(chan *roomAction, 512)
	room.rpcHandlers = make(map[string]roomRPCHandler)
	room.syncidToPlayer = make(map[int32]*Player)
	room.timers = make(map[chan bool]struct{})
	room.tickers = make(map[chan bool]struct{})

func (room *Room) Terminate() {
	room.stateMachine.Event("terminate")
}

func (room *Room) DestroyController() {
	for _, controller := range room.controllers {
		controller.Destroy()
	}
}

func (room *Room) IsInMatch() bool {
	return room.stateMachine.Is("inmatch")
}


