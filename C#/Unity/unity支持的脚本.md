> 脚本是一款游戏的灵魂，Unity 3D 脚本用来界定用户在游戏中的行为，是游戏制作中不可或缺的一部分，它能实现各个文本的数据交互并监控游戏运行状态。
以往，Unity 3D 主要支持 3 种语言：C#、UnityScript（也就是 JavaScript for Unity）以及 Boo。但是选择 Boo 作为开发语言的使用者非常少，而 Unity 公司还需要投入大量的资源来支持它，这显然非常浪费。
所以在 Unity 5.0 后，Unity 公司放弃对 Boo 的技术支持。

目前，官方网站上的教程及示例基本上都是关于 JavaScript 和 C# 语言的。

使用 JavaScript 语言更容易上手，建议初学者选择 JavaScript 作为入门阶段的脚本编辑语言。到了进阶阶段，可以改用 C# 语言编辑脚本，因为 C# 语言在编程理念上符合 Unity 3D 引擎原理。

[介绍](http://c.biancheng.net/view/2675.html)

## 如何在Unity 3D中编写脚本？
首先执行 Assets→Create→C#Script 或 JavaScript 菜单命令创建一个空白脚本，将其命名为 Move，这里我们以 C# Script 为例如下图所示。


## 链接脚本
脚本创建完成后，需要将其添加到物体上。在 Hierarchy 视图中，单击需要添加脚本的游戏物体 Main Camera（主摄像机），然后执行 Component→Script→Move 菜单命令，如下图所示，Move 脚本就链接到了 Main Camera 上。

## C#脚本编写注意事项
在 Unity 3D 中，C# 脚本的运行环境使用了 Mono 技术，Mono 是指 Novell 公司致力于 .NET 开源的工程，利用 Mono 技术可以在 Unity 3D 脚本中使用 .NET 所有的相关类。

但 Unity 3D 中 C# 的使用与传统的 C# 有一些不同。