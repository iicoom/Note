package logic

import "fangtang/doraemon/server/battle"

func (controller *MatchController) generatePvpBattleResult(
	ply *Player) *battle.ResultMsg {

	msg := new(battle.ResultMsg)
	b := controller.room.GetBattle()
	msg.RoomCapacity = b.GetPlayerCount()
	msg.StartPlayerCount = b.GetHumanPlayerCount()
	msg.EndPlayerCount = controller.room.GetCurrentHumanPlayerCapacity()

	return msg
}
