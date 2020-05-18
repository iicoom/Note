package main

import "fmt"

type Shaper interface {
	Area() float32
}

type Square struct {
	side float32
}

func (sq *Square) Area() float32 {
	return sq.side * sq.side
}

func main() {
	sq1 := new(Square)
	sq1.side = 5

	areaIntf := Shaper(sq1)
	// or even:
	// areaIntf := sq1
	fmt.Printf("The square has area: %f\n", areaIntf.Area())
}

// 输出：
// The square has area: 25.000000
/*
上面的程序定义了一个结构体 Square 和一个接口 Shaper，接口有一个方法 Area()
在 main() 方法中创建了一个 Square 的实例。
在主程序外边定义了一个接收者类型是 Square 方法的 Area()，用来计算正方形的面积：结构体 Square 实现了接口 Shaper 。

现在接口变量包含一个指向 Square 变量的引用，通过它可以调用 Square 上的方法 Area()。
当然也可以直接在 Square 的实例上调用此方法，但是在接口实例上调用此方法更令人兴奋，它使此方法更具有一般性。接口变量里包含了接收者实例的值和指向对应方法表的指针。

这是 多态 的 Go 版本，多态是面向对象编程中一个广为人知的概念：根据当前的类型选择正确的方法，或者说：同一种类型在不同的实例上似乎表现出不同的行为。
*/
