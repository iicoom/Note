
### Sublime
* 多行光标拖动 alt+鼠标
* 多行光标定位 行首 => 行尾 Command+arrow
* 多行光标定位 单词首 => 单词尾 alt+arrowRight
* 多行光标定位 行首 => 行位 并选中 Command+shift+arrow
* 多行光标定位 单词首 => 单词尾 并选中 Command+shift+alt+arrow
* 全局搜索替换 Find => Find in Files => Add folder(搜索替换范围)
* 全局保存 File => Save all(alt+command+S)
* 代码折叠 Edit => Code Folding => level 3 折叠只剩函数名

* Package Contril https://packagecontrol.io/  需要先安装
```
* Sublime Text console: control+`

* Sublime Text - prference - Package control
```
* 安装了 TypeScript 之后可以对 js 语法做自动检测

* Package Control 用法  command+shift+p

1. Open Package Control: Preferences -> Package Control
2. Select Package Control: Install Package
3. Type DocBlockr into the search box and select the package to install it

* Package Control 无法安装插件解决方法，
在Sublime Text - prference - Package Setting - Package control - Setting-user 中更改源
```
"channels":
[
    "http://static.bolin.site/channel_v3.json",
],
```
覆盖default
