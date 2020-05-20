> C# 是一个简单的、现代的、通用的、面向对象的编程语言，它是由微软（Microsoft）开发的。
> C# 编程是基于 C 和 C++ 编程语言的，因此如果您对 C 和 C++ 编程有基本的了解，将有助于您学习 C# 编程语言。

https://www.runoob.com/csharp/csharp-tutorial.html

## C# 程序结构
```
一个 C# 程序主要包括以下部分：

命名空间声明（Namespace declaration）

一个 class

Class 方法
Class 属性

一个 Main 方法
语句（Statements）& 表达式（Expressions）
注释
```

让我们看一个可以打印出 "Hello World" 的简单的代码：
```c#
using System;
namespace HelloWorldApplication
{
   class HelloWorld
   {
      static void Main(string[] args)
      {
         /* 我的第一个 C# 程序*/
         Console.WriteLine("Hello World");
         Console.ReadKey();
      }
   }
}
```

### using
- using 关键字用于在程序中包含 System 命名空间。 一个程序一般有多个 using 语句

### namespace
- 一个 namespace 里包含了一系列的类。HelloWorldApplication 命名空间包含了类 HelloWorld

### class
- 下一行是 class 声明。类 HelloWorld 包含了程序使用的数据和方法声明。类一般包含多个方法。方法定义了类的行为。在这里，HelloWorld 类只有一个 Main 方法。

### Main 方法
下一行定义了 Main 方法，是所有 C# 程序的 入口点。Main 方法说明当执行时 类将做什么动作。

Main 方法通过语句 Console.WriteLine("Hello World"); 指定了它的行为。