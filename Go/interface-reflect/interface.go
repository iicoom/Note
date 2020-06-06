package main

import "fmt"

type IDuck interface {
	Quack()
	Walk()
}

func DuckDance(duck IDuck) {
	for i := 1; i <= 3; i++ {
		duck.Quack()
		duck.Walk()
	}
}

type Bird struct {
	// ...
}

func (b *Bird) Quack() {
	fmt.Println("I am quacking!")
}

func (b *Bird) Walk() {
	fmt.Println("I am walking!")
}

func main() {
	b := new(Bird)
	DuckDance(b)
}

// 输出：

// I am quacking!
// I am walking!
// I am quacking!
// I am walking!
// I am quacking!
// I am walking!
// 如果 Bird 没有实现 Walk()（把它注释掉），会得到一个编译错误：

// cannot use b (type *Bird) as type IDuck in function argument:
// *Bird does not implement IDuck (missing Walk method)
