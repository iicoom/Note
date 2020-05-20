https://studygolang.com/articles/23407?fr=sidebar

协程(goroutine)是更轻量级的线程

比Java中的线程效率更高

协程语法
```go
go func() {
   //...
}()
```

一旦主goroutine中的代码执行完毕,当前的Go程序就会结束运行,无论其他的 goroutine是否已经在运行了。

让主goroutine等待其它 goroutine:
```go
for i := 0; i < 10; i++ {
    go func() {
        fmt.Println(i)
    }()
}
time.Sleep(time.Millisecond * 1000)
//goroutine 完成的时间很可能小于设置的等待时间,那么这就会造成多余的等待时间
```

怎么才能让goroutine执行完后立刻执行下一个goroutine呢?
go语言提供的WaitGroup可以实现这样的功能.

代码改造:
```go
var wg sync.WaitGroup
for i := 0; i < 10; i++ {
    wg.Add(1)//每启动一个协程增加一个等待
    go func() {
        fmt.Println(i)
        wg.Done()//告诉协成等待的事务已经完成
    }()
}
/*
这样我们就不用设置等待时间了,但是执行输出的内容是这样的: 3 7 4 8 8 8 9 10 10 10, 很显然这种方式不能保证goroutine拿到唯一整数
*/
```

```go
var wg sync.WaitGroup
for i := 0; i < 10; i++ {
    wg.Add(1)//每启动一个协程增加一个等待
    go func(j int) {//把j只是个形参可以任意命名
        fmt.Println(j)
        wg.Done()//告诉协成等待的事务已经完成
    }(i)//把实参i传递给形参j
}
//执行结果:0 2 1 6 3 4 5 8 7 9
```

共享内存线程安全
```go
func TestCounter(t *testing.T) {
    counter := 0
    for i := 0; i < 5000; i++ {
        go func() {
            counter++
        }()
    }
    time.Sleep(1 * time.Second)
    t.Logf("counter = %d", counter)
}
//执行结果: 4760 出现了线程安全的问题
```

和大多数语言一样go也支持加锁保证线程的安全:
```go
func TestCounterWaitGroup(t *testing.T) {
    var mut sync.Mutex//创建锁对象
    var wg sync.WaitGroup
    counter := 0
    for i := 0; i < 5000; i++ {
        wg.Add(1)//每启动一个协程增加一个等待
        go func() {
            defer func() {
                mut.Unlock()//释放锁
            }()
            mut.Lock()//开启锁
            counter++
            wg.Done()//告诉协成等待的事务已经完成
        }()
    }
    wg.Wait()//等待协程
    t.Logf("counter = %d", counter)

}
```

## goroutine-safe 的实现
![另一篇文章](https://upload-images.jianshu.io/upload_images/1357556-3bb21c114695d949.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

在这样的模型里，sender goroutine -> channel -> receiver goroutine 之间，hchan是唯一的共享内存，而这个唯一的共享内存又通过mutex来确保goroutine-safe，所有在队列中的内容都只是副本。
这便是著名的 golang 并发原则的体现:

不要通过共享内存来通信，而是通过通信来共享内存。

## 控制 goroutine 之间同步的实现
这是怎么做到的？
goroutine 是一种用户态线程, 由 Go runtime 创建并管理，而不是操作系统，比起操作系统线程来说，goroutine更加轻量。
Go runtime scheduler 负责将 goroutine 调度到操作系统线程上。
![ff](https://upload-images.jianshu.io/upload_images/1357556-3cbcf41ebff5a273.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


runtime scheduler 怎么将 goroutine 调度到操作系统线程上？
![gg](https://upload-images.jianshu.io/upload_images/1357556-e42a9cbec17cedbf.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

goroutine 是一种用户态线程, 由 Go runtime 创建并管理，而不是操作系统，比起操作系统线程来说，goroutine更加轻量。
Go runtime scheduler 负责将 goroutine 调度到操作系统线程上。

当阻塞发生时，一次 goroutine 上下文切换的全过程:
![hh](https://upload-images.jianshu.io/upload_images/1357556-c5af8dd3f7f217ca.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

当发送方 goroutine 向已经满了的 channel 发送数据后，发生了 goroutine 的阻塞，goroutine 会对 runtime scheduler 发起一次gopark调用;
当 sheduler 接收到gopark调用，会将现在正在运行的 goroutine G1从running置为waiting;
并将G1和承载它的操作系统线程M之间的联系解除;
从 runqueue 调度一个新的runnable goroutine G，并将其和M绑定，开始执行G

> 只是阻塞了 goroutine，没有阻塞操作系统线程。

如何恢复？... 
https://www.jianshu.com/p/84bcb26c4fb7

https://www.youtube.com/watch?v=KBZlN0izeiY