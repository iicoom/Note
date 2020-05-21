/*
func make(t Type, size ...IntegerType) Type
指出该值在同一时刻最多可以容纳 size 个元素值。

如果我们发送给该通道的元素值未被取走，那么该通道最多可以暂存（或者说缓冲）size 个元素值。
*/
package main

import (
	"fmt"
	"time"
)

func main() {
	size := 0
	c1 := make(chan int, size)
	go func() {
		for i := 0; i < 4; i++ {
			val := i*10 + 7
			fmt.Println(time.Now(), "<- ", val, "at", i)
			c1 <- i*10 + 7
		}
		c1 <- 0
	}()

	time.Sleep(time.Second * 3)
	fmt.Println("After Sleep")

	for val := range c1 {
		fmt.Println(time.Now(), "receive:", val)
		if val == 0 {
			break
		}
	}
}

// c1 := make(chan int,size) 中的size修改为不同值, 会有不同的输出效果
// 2020-05-20 21:24:09.263321 +0800 CST m=+0.004985001 <-  7 at 0
// After Sleep
// 2020-05-20 21:24:12.264226 +0800 CST m=+3.005890001 receive: 7
// 2020-05-20 21:24:12.264226 +0800 CST m=+3.005890001 <-  17 at 1
// 2020-05-20 21:24:12.2651178 +0800 CST m=+3.006781801 <-  27 at 2
// 2020-05-20 21:24:12.2651178 +0800 CST m=+3.006781801 receive: 17
// 2020-05-20 21:24:12.2651178 +0800 CST m=+3.006781801 receive: 27
// 2020-05-20 21:24:12.2651178 +0800 CST m=+3.006781801 <-  37 at 3
// 2020-05-20 21:24:12.2740941 +0800 CST m=+3.015758101 receive: 37
// 2020-05-20 21:24:12.2751019 +0800 CST m=+3.016765901 receive: 0
