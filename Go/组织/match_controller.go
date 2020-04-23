package logic

import (
	"time"
)

type MatchController struct {
	room *Room

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
