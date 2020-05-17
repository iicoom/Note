// 根据玩家数量 和当前玩家排名 判断当前玩家是否落后
func (powerupMgr *PowerupMgr) isBehindRanking(playerNum int, ranking int) bool {
	return util.MaxI((playerNum-1)/2, 1) > (playerNum-ranking)
}

func MaxI(a, b int) int {
	if a >= b {
		return a
	}
	return b
}


// 如何保证短时间内吃到的道具不同 1. 获取道具的时候需要记录获取时间