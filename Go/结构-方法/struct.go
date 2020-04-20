// 组成结构体类型的那些数据称为 字段（fields）。每个字段都有一个类型和一个名字；在一个结构体中，字段名字必须是唯一的。

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