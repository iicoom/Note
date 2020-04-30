func (s *SelectSelf) Get(self *Player, all []*Player) []*Player {
	results := make([]*Player, 0)
	return append(results, self)
}

// 用make初始化一个容量为0的数组，元素类型为Player结构体。 直接把出入的第一个参数 self 插入到results 返回