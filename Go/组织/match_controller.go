package logic

import (
	"encoding/json"
)

type MatchController struct {
	room     *Room
	cheatMgr *CheatMgr
	trackMgr *TrackMgr

	rankingLoopStop      chan bool
	endGameCountdownStop chan bool
	racingStartTime      time.Time
	totalMatchTime       time.Duration

	rankingToScore          []int
	blueTeamScore           int
	redTeamScore            int
	isBlueTeamWinner        bool
	playerToLeagueScoreVary map[string]int

	mvpToPlayer map[int]int

	isMatchEnded  bool
	isMatchLocked bool
}

func (controller *MatchController) Init(room *Room) {
	controller.room = room
	controller.rankingToScore = []int{10, 8, 6, 4, 2, 1}
	controller.playerToLeagueScoreVary = make(map[string]int)
	controller.mvpToPlayer = make(map[int]int)

	room.RegisterRPC("HandleSparkEnergyBoost", controller.handleSparkEnergyBoost)
	room.RegisterRPC("SetPlayerBoostStart", controller.setPlayerBoostStart)
	room.RegisterRPC("UseDriftNitrogen", controller.useDriftNitrogen)

	room.RegisterRPC("RecoverPlayer", room.ForwardRPC)
	room.RegisterRPC("ShowBot", room.ForwardRPC)
	room.RegisterRPC("HideBot", room.ForwardRPC)
	room.RegisterRPC("Collide", room.ForwardRPC)
	room.RegisterRPC("PlayPoseAnim", room.ForwardRPC)
	room.RegisterRPC("SetPVPRaceResult", controller.setPVPRaceResult)
	room.RegisterRPC("SetPlayerStartedMatch", controller.setPlayerStartedMatch)
	room.RegisterRPC("SyncPlayerKeyFrame", controller.syncPlayerKeyFrame)

	if conf.IsDebugLog {
		room.RegisterRPC("DebugQuickFinishMatch", controller.debugQuickFinishMatch)
	}

	room.RegisterPlayerStateHandler(controller.applyPlayerStateChange)
	room.RegisterPlayerWaypointHandler(controller.updatePlayerWaypoint)
}