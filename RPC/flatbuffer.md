> FlatBuffers是一个免费的软件库，它实现了类似于Protocol Buffers，Thrift，Apache Avro，SBE和Cap'n Proto的序列化格式，主要由Wouter van Oortmerssen编写并由Google开源。
> 操作系统： Android, Microsoft Windows, macOS, Linux
> 
> FlatBuffers is an efficient cross platform serialization library for C++, C#, C, Go, Java, Kotlin, JavaScript, Lobster, Lua, TypeScript, PHP, Python, Rust and Swift. 
> 跨平台序列化库，支持众多语言

## [Why FlatBuffers](https://rwinslow.com/posts/why-flatbuffers/)

As a developer, when you send chunks of data over the internet, or save it to a hard drive, do you stop to consider how you should store that data?

You could choose JSON or XML, which are human readable and commonly supported, but they are slow to write and slow to parse. 

FlatBuffers is what you get when you optimize for speed above all…

当你在互联网上传输数据,是选择JSON还是XML数据格式？虽然易读，但是写数据和解析都相对较慢。FlatBuffers就是为优化这个问题而生。

**FlatBuffers: Memory Efficient Serialization Library http://google.github.io/flatbuffers/**
- Access to serialized data without parsing/unpacking
- Memory efficiency and speed
- ...

## Usage in brief
- Write a schema file that allows you to define the data structures you may want to serialize. 写schema file定义你要序列化的数据结构
- Use flatc (the FlatBuffer compiler) to generate a C++ header (or Java/Kotlin/C#/Go/Python.. classes) with helper classes to access and construct serialized data.使用编译工具生成各种语言的类来存取序列化的数据
- Use the FlatBufferBuilder class to construct a flat binary buffer. 使用FlatBufferBuilder构建二进制buffer
- Store or send your buffer somewhere!存储或者传输数据

### field 数据类型
Fields can have a scalar type (ints/floats of all sizes), or they can be a: string; array of any type; reference to yet another object; or, a set of possible objects (unions).
可以是标量，可以是string; array; 可以索引其他对象

## 安装compiler
https://www.jianshu.com/p/8df23cd182ec

### 编译文件
```
Windows 使用git-bash在目录下执行 ./flate.exe --go monster.fbs 自动按照命名空间生成目录MyGame/Sample/*.go
```
