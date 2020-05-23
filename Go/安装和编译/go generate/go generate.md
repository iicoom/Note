> [go generate](https://studygolang.com/articles/22984?fr=sidebar) 
> go generate是 Go 自带的工具。使用命令go generate执行。go generate是利用源代码中的注释工作的。格式如下：

```
//go:generate command arg1 arg2
```
这样在同一个目录下执行命令go generate就会自动运行命令command arg1 arg2。command可以是在PATH中的任何命令，应用非常广泛。官网提供了几种示例，见文档。

stringer命令可以为给定类型生成String方法。


## 安装stringer
stringer并不是 Go 自带的工具，需要手动安装。可以执行下面的命令安装：
```
go get golang.org/x/tools/cmd/stringer
```
选项-type指定stringer命令作用的类型名。

然后在同一个目录下执行：
```
$ go generate
```

https://www.jianshu.com/p/a866147021da