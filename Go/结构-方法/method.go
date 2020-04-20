// 在 Go 语言中，结构体就像是类的一种简化形式，那么面向对象程序员可能会问：类的方法在哪里呢？在 Go 中有一个概念，它和方法有着同样的名字，并且大体上意思相同：
// Go 方法是作用在接收者（receiver）上的一个函数，接收者是某种类型的变量。因此方法是一种特殊类型的函数。

// 定义方法的一般格式如下：
// func (recv receiver_type) methodName(parameter_list) (return_value_list) { ... }

// 在方法名之前，func 关键字之后的括号中指定 receiver。

// 如果 recv 是 receiver 的实例，Method1 是它的方法名，那么方法调用遵循传统的 object.name 选择器符号：recv.Method1()。

// 如果 recv 是一个指针，Go 会自动解引用。

package main

import "fmt"

type TwoInts struct {
	a int
	b int
}

func main() {
	two1 := new(TwoInts)
	two1.a = 12
	two1.b = 10

	fmt.Printf("The sum is: %d\n", two1.AddThem())
	fmt.Printf("Add them to the param: %d\n", two1.AddToParam(20))

	two2 := TwoInts{3, 4}
	fmt.Printf("The sum is: %d\n", two2.AddThem())
}

func (tn *TwoInts) AddThem() int {
	return tn.a + tn.b
}

func (tn *TwoInts) AddToParam(param int) int {
	return tn.a + tn.b + param
}

// 输出：
// The sum is: 22
// Add them to the param: 42
// The sum is: 7