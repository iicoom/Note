
```
Go语言中有25个关键字：

    break        default      func         interface    select
    case         defer        go           map          struct
    chan         else         goto         package      switch
    const        fallthrough  if           range        type
    continue     for          import       return       var

Go语言中还有37个保留字。

    Constants:    true  false  iota  nil

        Types:    int  int8  int16  int32  int64  
                  uint  uint8  uint16  uint32  uint64  uintptr
                  float32  float64  complex128  complex64
                  bool  byte  rune  string  error

    Functions:   make  len  cap  new  append  copy  close  delete
                 complex  real  imag
                 panic  recover
```

https://ieevee.com/tech/2018/07/04/go-constants.html

> Golang里的constants就是constants，在编译时创建。常量可以是这几种： numbers, characters (runes), strings or booleans。因为是在编译时处理的，所以常量的值必须是编译器可以搞定的，比如1，”abc”，以及 len(“abc”)。

和变量不同，常量可以定义了，但是不用。为什么？因为下面要用常量来定义枚举，谁能保证所有枚举就一定会用到呢？

```go
package main
import "fmt"
func main() {
    const xxx = 123
    fmt.Println(xxx)

    const xx2 = "abc"
    fmt.Println(xx2)

    const xx3 = len("abc")
    fmt.Println(xx3)

    var x = 123
    const xx4 = unsafe.Sizeof(&x)
    fmt.Println(xx4)
}

$ go run constants.go
123
abc
3
8



iota在const关键字出现时将被重置为0。const中每新增一行常量声明将使iota计数一次(iota可理解为const语句块中的行索引)。 使用iota能简化定义，在定义枚举时很有用。
const (  // iota is reset to 0
        c0 = iota  // c0 == 0
        c1 = iota  // c1 == 1
        c2 = iota  // c2 == 2
)


const (
        n1 = iota //0
        n2        //1
        n3        //2
        n4        //3
    )

使用_跳过某些值

const (
        n1 = iota //0
        n2        //1
        _
        n4        //3
    )

const (
        a, b = iota + 1, iota + 2 //1,2
        c, d                      //2,3
        e, f                      //3,4
    )



// msg-id.go  
const (
    PlayerEnterRoom uint16 = iota
    PlayerReconnectRoom uint16 = iota
    RoomState uint16 = iota
    PlayerKinematicState uint16 = iota
    PlayerStateChange uint16 = iota
    PlayerWaypointInfo uint16 = iota
    PlayerProfile uint16 = iota
	PenaltyData uint16 = iota
}

使用
msg.ClientProcessor.SetRouter(msg.PlayerEnterRoom, cmn.RoomChanRPC)
```

## 扩展知识
https://blog.learngoprogramming.com/golang-const-type-enums-iota-bc4befd096d3

- What is an Enum? ★
An enum groups related constants together in one type. 枚举就是 一组相同类型的常量

- Why do we need enums?
    - Grouping and expecting only some related values
    - Sharing common behavior
    - Avoids using invalid values
    - To increase the code readability and the maintainability

- How can you imitate an enum in Go?
For example, suppose that you want to create an enum for the weekdays.

![rr](https://miro.medium.com/max/4320/1*-IYYWJQynajSdLqHEE9Hsw.png)