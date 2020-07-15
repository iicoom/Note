## [channel](https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/14.2.md)

在第一个例子中，协程是独立执行的，他们之间没有通信。他们必须通信才会变得更有用：彼此之间发送和接收信息并且协调/同步他们的工作。

通常使用这样的格式来声明通道：var identifier chan datatype

所以通道只能传输一种类型的数据，比如 chan int 或者 chan string，**所有的类型都可以用于通道**，空接口 interface{} 也可以。甚至可以（有时非常有用）创建通道的通道。

这里先声明了一个字符串通道 ch1，然后创建了它（实例化）：

```go
var ch1 chan string
ch1 = make(chan string)
```
当然可以更短： ch1 := make(chan string)。

## 通信操作符 <-
这个操作符直观的标示了数据的传输：信息按照箭头的方向流动。

1. 流向通道（发送）

	ch <- int1 表示：向通道 ch 发送变量 int1（双目运算符，中缀 = 发送）

2. 从通道流出（接收），三种方式：

	int2 = <- ch 表示：变量 int2 从通道 ch（一元运算的前缀操作符，前缀 = 接收）接收数据（获取新值）；
	假设 int2 已经声明过了，如果没有的话可以写成：int2 := <- ch。

## 数据类型为string的chan
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)

	go sendData(ch)
	go getData(ch)

	time.Sleep(1e9)
}

func sendData(ch chan string) {
	ch <- "Washington"
	ch <- "Tripoli"
	ch <- "London"
	ch <- "Beijing"
	ch <- "Tokyo"
}

func getData(ch chan string) {
	var input string
	// time.Sleep(2e9)
	for {
		input = <-ch
		fmt.Printf("%s ", input)
	}
}

/**
输出：

Washington Tripoli London Beijing tokyo
**/
```

## 数据类型为struct的chan
// leaf/chanrpc
```go
type Server struct {
	// id -> function
	functions map[interface{}]interface{}
	ChanCall  chan *CallInfo
	isClosed  bool
}

type CallInfo struct {
	f       interface{}
	args    []interface{}
	chanRet chan *RetInfo
	cb      interface{}
}
```
上面Server中的ChanCall  chan *CallInfo 就是struct类型

使用：
```go
// goroutine safe
func (s *Server) Go(id interface{}, args ...interface{}) {
	if s.isClosed {
		return
	}

	f := s.functions[id]
	if f == nil {
		return
	}

	defer recover()

	s.ChanCall <- &CallInfo{
		f:    f,
		args: args,
	}
}
```
向通道s.ChanCall发送CallInfo类型的数据