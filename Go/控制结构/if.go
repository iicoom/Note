/*
示例 4：或者将 ok-pattern 的获取放置在 if 语句的初始化部分，然后进行判断：

习惯用法

if value, ok := readData(); ok {
…
}
*/
package main

import (
	"fmt"
	"math"
)

func mySqrt(f float64) (v float64, ok bool) {
	if f < 0 { return } // error case
	return math.Sqrt(f),true 
}

func main() {
	// t := mySqrt(25.0)
	// fmt.Println(t)   // .\if.go:23:4: assignment mismatch: 1 variable but mySqrt returns 2 values

	t, ok := mySqrt(25.0)
	if ok { fmt.Println(t) }  // 正确输出5
}