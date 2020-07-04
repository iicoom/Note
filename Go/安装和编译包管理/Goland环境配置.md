## 使用Goland新建工程
File-New Project  会弹出2种模式 Go(会把工程放到Go path下) 和 Go Module

### Go

### Go Module

### [新建package编写模块](./组织结构/package.md)

### 在main.go引入

### 编译成二进制
在main.go 右击 - Create 'go build projectName/src/'  生成文件到指定输出目录


## go build和go install的区别
- go build
  通过go build加上要编译的Go源文件名，我们即可得到一个可执行文件，默认情况下这个文件的名字为源文件名字去掉.go后缀
	```
	$ go build hello.go
	$ ls hello hello.go
	```
	当然我们也 可以通过-o选项来指定其他名字：
	```
	$ go build -o mygo hello.go
	$ ls mygo hello.go
	```

- go install
	与build命令相比，install命令在编译源码后还会将可执行文件或库文件安装到约定的目录下。

	go install编译出的可执行文件以其所在目录名(DIR)命名

	go install将可执行文件安装到与src同级别的bin目录下，bin目录由go install自动创建

	go install将可执行文件依赖的各种package编译后，放在与src同级别的pkg目录下

## Edit configuration
添加一个Go Build：
- Name
- Run kind(Package)
- Package path: myLeaf(这个是go.mod中定义的包名)
- Output directory: 最终build输出目录
- Working directory：编译后的二进制文件运行目录(这个涉及到配置文件的读取相对路径要正确, 如下面的文件读取例子)
  ```go
	// src/conf/json.go
	//data, err := ioutil.ReadFile("E:\\leafserver\\src\\server\\conf\\server.json")
	data, err := ioutil.ReadFile("conf/server.json")
	```