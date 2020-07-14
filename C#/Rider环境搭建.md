https://www.cnblogs.com/wanyuan/p/11217393.html

## 安装DotNet-SDK

## 然后在cmd窗口运行：dotnet --info命令显示当前版本
```
C:\Users\Admin>dotnet --info
.NET Core SDK（反映任何 global.json）:
 Version:   3.1.100
 Commit:    cd82f021f4

运行时环境:
 OS Name:     Windows
 OS Version:  10.0.18362
 OS Platform: Windows
 RID:         win10-x64
 Base Path:   C:\Program Files\dotnet\sdk\3.1.100\

Host (useful for support):
  Version: 3.1.0
  Commit:  65f04fb6db

.NET Core SDKs installed:
  3.1.100 [C:\Program Files\dotnet\sdk]

.NET Core runtimes installed:
  Microsoft.AspNetCore.App 3.1.0 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 3.1.0 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.WindowsDesktop.App 3.1.0 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

To install additional .NET Core runtimes or SDKs:
  https://aka.ms/dotnet-download
```

## 安装Rider

## 打开Rider，新建项目.NET Console Application
1. file - 新建项目 .NET Console Application: 修改名称 和存放路径
   ![oo](https://img2018.cnblogs.com/blog/1346788/201910/1346788-20191031191217039-1226745835.png)
2. 查看dornet环境
   ```
   C:\Users\Admin>dotnet --info
    .NET Core SDK（反映任何 global.json）:
    Version:   3.1.100
    Commit:    cd82f021f4

    运行时环境:
    OS Name:     Windows
    OS Version:  10.0.18362
    OS Platform: Windows
    RID:         win10-x64
    Base Path:   C:\Program Files\dotnet\sdk\3.1.100\

    Host (useful for support):
      Version: 3.1.0
      Commit:  65f04fb6db

    .NET Core SDKs installed:
      3.1.100 [C:\Program Files\dotnet\sdk]
   ```
3. 配置rider
   ![oo](https://img2018.cnblogs.com/blog/1346788/201910/1346788-20191031191807133-2073103973.png)


## 运行Program.cs文件

## 编译.cs
csc.exe是.NET Framework SDK中的一个工具

配置C#命令行编辑器:
我的电脑 - 属性 - 高级 - 环境变量 - 系统变量列表对话框 - 双击Path变量 - 
在当前路径值的末尾加入(路径变量里各值用分号区隔): C:\Windows\Microsoft.NET\Framework\v2.0.50727 (注意,路径和版本号会因为你的安装和下载的不同而不同,自己到安装目录下看看)

如果配置成功,在命令窗口中输入: csc /? 将显示C#编译器支持的选项列表.

以编译Rectangle.cs为例：
- 输入命令： 
  ```
  C:\Users\Admin>csc /out:E:\Joy\Note\C#\Rectangle.exe E:\Joy\Note\C#\Rectangle.cs 
  ```
  将Rectangle.cs编译成名为Rectangle.exe的console应用程序

## 在 Linux 或 Mac OS 上编写 C# 程序
虽然 .NET 框架是运行在 Windows 操作系统上，但是也有一些运行于其它操作系统上的版本可供选择。Mono 是 .NET 框架的一个开源版本，它包含了一个 C# 编译器，且可运行于多种操作系统上，比如各种版本的 Linux 和 Mac OS。如需了解更多详情，请访问 Go Mono。

Mono 的目的不仅仅是跨平台地运行微软 .NET 应用程序，而且也为 Linux 开发者提供了更好的开发工具。Mono 可运行在多种操作系统上，包括 Android、BSD、iOS、Linux、OS X、Windows、Solaris 和 UNIX。