## [Golang interface 全面介绍](https://www.jianshu.com/p/b38b1719636e)
如果说goroutine和channel是Go并发的两大基石，那么接口是Go语言编程中数据类型的关键。在Go语言的实际编程中，几乎所有的数据结构都围绕接口展开，接口是Go语言中所有数据结构的核心。

Go不是一种典型的OO语言，它在语法上不支持类和继承的概念。

### 多态
没有继承是否就无法拥有多态行为了呢？答案是否定的，Go语言引入了一种新类型—Interface，它在效果上实现了类似于C++的“多态”概念

### method
虽然Go语言没有类的概念，但它支持的数据类型可以定义对应的method(s)。本质上说，所谓的method(s)其实就是函数，只不过与普通函数相比，这类函数是作用在某个数据类型上的，所以在函数签名中，会有个receiver(接收器)来表明当前定义的函数会作用在该receiver上。

### Interface
从语法上看，Interface定义了一个或一组method(s)，这些method(s)只有函数签名，没有具体的实现代码（有没有联想起C++中的虚函数？）。
若某个数据类型实现了Interface中定义的那些被称为"methods"的函数，则称这些数据类型实现（implement）了interface。这是我们常用的OO方式，如下是一个简单的示例
```go
type MyInterface interface{
		Print()
}

func TestFunc(x MyInterface) {}

type MyStruct struct {}
func (me MyStruct) Print() {}

func main() {
		var me MyStruct
		TestFunc(me)
}
```

### Why Interface
为什么要用接口呢？在Gopher China 上的分享中，有大神给出了下面的理由：
- writing generic algorithm （泛型编程）

- hiding implementation detail （隐藏具体实现）

- providing interception points
