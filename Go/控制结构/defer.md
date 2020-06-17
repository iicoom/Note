> defer语句是Go中一个非常有用的特性，可以将一个方法延迟到包裹该方法的方法返回时执行，在实际应用中，defer语句可以充当其他语言中try…catch…的角色，也可以用来处理关闭文件句柄等收尾操作。

Go官方文档中对defer的执行时机做了阐述，分别是。

- 包裹defer的函数返回时
- 包裹defer的函数执行到末尾时
- 所在的goroutine发生panic时

## defer的意义和使用场景
### defer通常用来释放函数内部变量
```go
func CopyFile(dstName, srcName string) (written int64, err error) {
	src, err := os.Open(srcName)
	if err != nil {
	return
	}

	dst, err := os.Create(dstName)
	if err != nil {
	return
	}

	written, err = io.Copy(dst, src)
	dst.Close()
	src.Close()
	return
}
```
这段代码可以运行，但存在'安全隐患'。如果调用dst, err := os.Create(dstName)失败，则函数会执行return退出运行。但之前创建的src(文件句柄)没有被释放。 
上面这段代码很简单，所以我们可以一眼看出存在文件未被释放的问题。 如果我们的逻辑复杂或者代码调用过多时，这样的错误未必会被及时发现。 
而使用defer则可以避免这种情况的发生，下面是使用defer的代码:
```go
func CopyFile(dstName, srcName string) (written int64, err error) {
src, err := os.Open(srcName)
if err != nil {
return
}
defer src.Close()

dst, err := os.Create(dstName)
if err != nil {
return
}
defer dst.Close()

return io.Copy(dst, src)
}
```
通过defer，我们可以在代码中优雅的关闭/清理代码中所使用的变量。defer作为golang清理变量的特性，有其独有且明确的行为。以下是defer三条使用规则。


### 规则一 当defer被声明时，其参数就会被实时解析
上面我们说过，defer函数会在return之后被调用。那么这段函数执行完之后，是不用应该输出1呢？
```go
func a() {
i := 0
defer fmt.Println(i) //输出0，因为i此时就是0
i++
defer fmt.Println(i) //输出1，因为i此时就是1
return
}
```
1
0
通过运行结果，可以看到defer输出的值，就是定义时的值。而不是defer真正执行时的变量值(很重要，搞不清楚的话就会产生于预期不一致的结果)

但为什么是先输出1，在输出0呢？ 看下面的规则二。


### 规则二 defer执行顺序为先进后出
当同时定义了多个defer代码块时，golang安装先定义后执行的顺序依次调用defer。不要为什么，golang就是这么定义的。我们用下面的代码加深记忆和理解:
```go
func b() {
	for i := 0; i < 4; i++ {
		defer fmt.Print(i)
	}
}
```
在循环中，依次定义了四个defer代码块。结合规则一，我们可以明确得知每个defer代码块应该输出什么值。 安装先进后出的原则，我们可以看到依次输出了3210.

### 规则三 defer可以读取有名返回值
先看下面的代码:
```go
func c() (i int) {
defer func() { i++ }()
return 1
}
```
输出结果是12. 在开头的时候，我们说过defer是在return调用之后才执行的。 这里需要明确的是defer代码块的作用域仍然在函数之内，结合上面的函数也就是说，defer的作用域仍然在c函数之内。因此defer仍然可以读取c函数内的变量(如果无法读取函数内变量，那又如何进行变量清除呢....)。

当执行return 1 之后，i的值就是1. 此时此刻，defer代码块开始执行，对i进行自增操作。 因此输出2.

掌握了defer以上三条使用规则，那么当我们遇到defer代码块时，就可以明确得知defer的预期结果。