[14.6 协程和恢复（recover）](https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/14.6.md)

一个用到 recover 的程序（参见第 13.3 节）停掉了服务器内部一个失败的协程而不影响其他协程的工作。
```go
func server(workChan <-chan *Work) {
    for work := range workChan {
        go safelyDo(work)   // start the goroutine for that work
    }
}

func safelyDo(work *Work) {
    defer func() {
        if err := recover(); err != nil {
            log.Printf("Work failed with %s in %v", err, work)
        }
    }()
    do(work)
}
```
上边的代码，如果 do(work) 发生 panic，错误会被记录且协程会退出并释放，而其他协程不受影响。

// 在chanrpc 见到过这种用法
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