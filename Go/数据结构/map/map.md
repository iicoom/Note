> map 是一种特殊的数据结构：一种元素对（pair）的无序集合，pair 的一个元素是 key，对应的另一个元素是 value，所以这个结构也称为关联数组或字典。这是一种快速寻找值的理想结构：给定 key，对应的 value 可以迅速定位。

map 这种数据结构在其他编程语言中也称为字典（Python）、hash 和 HashTable 等。

和数组不同，map 可以根据新增的 key-value 对动态的伸缩，因此它不存在固定长度或者最大限制。但是你也可以选择标明 map 的初始容量 capacity，就像这样：make(map[keytype]valuetype, cap)。例如：

map2 := make(map[string]float32, 100)
当 map 增长到容量上限的时候，如果再增加新的 key-value 对，map 的大小会自动加 1。所以出于性能的考虑，对于大的 map 或者会快速扩张的 map，即使只是大概知道容量，也最好先标明。


## 定义
map 是引用类型，可以使用如下声明：
```go
var map1 map[keytype]valuetype
var map1 map[string]int
```
（[keytype] 和 valuetype 之间允许有空格，但是 gofmt 移除了空格）

在声明的时候不需要知道 map 的长度，map 是可以动态增长的。

未初始化的 map 的值是 nil。

```go
type MatchController struct {
	room     *Room
	cheatMgr *CheatMgr
	trackMgr *TrackMgr

	rankingLoopStop      chan bool
	racingStartTime      time.Time

	rankingToScore          []int
	blueTeamScore           int
	isBlueTeamWinner        bool
	playerToLeagueScoreVary map[string]int

	mvpToPlayer map[int]int

	isMatchEnded  bool
	isMatchLocked bool
}
```

## map 是 引用类型 的： 内存用 make 方法来分配。
map 的初始化：var map1 = make(map[keytype]valuetype)。

或者简写为：map1 := make(map[keytype]valuetype)。
```go
map2 := make(map[string]float32, 100)  // 容量100

```
