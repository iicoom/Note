package logic

import (
	
)

func (controller *MatchController) handlePlayerFinishAllLaps(player *Player) {
	racingTime := util.DurationToSecond(time.Since(controller.racingStartTime))
	player.Match.FinishAllLaps(racingTime)
	controller.updateRanking()
	controller.debugoutRanking()

	controller.room.Release("player %v ends game, ranking = %v, time = %v",
		player.Name(), player.Match.CurrentRanking, racingTime)

	if player.Match.CurrentRanking == len(controller.room.Players) {
		controller.endMatch()
	} else {
		controller.room.BufferedRPCToAll(0,
			"PlayerFinishMatch", player.Index(), racingTime, player.Ranking())

		if player.Match.CurrentRanking == 1 {
			controller.startEndGameCountdown(10)
		}
	}
}
