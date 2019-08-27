## 查看本机ip
[zhihu](https://zhuanlan.zhihu.com/MacTips/20202310)

## shortcuts
[cheatsheet](https://www.cnblogs.com/abeen/p/4104158.html)

## 小米手机共享移动网络
* 热点 - 不好用
* Bluetooth - 在设置的More下面
* USB

### Mac系统
* MAC 电脑互传文件 Finder-AirDrop(隔空传送) shift+command+r

* terminal光标跳转技巧 
3. 移动光标到行首：control+a 
4. 移动光标到行尾：control+e

vim 下：
移动光标到行首：^
移动光标到行尾：$ 

* Mac使用小技巧：Fn键的妙用技巧

  Home键=Fn+左方向  效果等同于command+上方向
  End键=Fn+右方向   效果等同于command+下方向

  PageUP=Fn+上方向 翻一整页

* 打开使用工具：Command+shift+U
* 打开桌面文件夹：Command+shift+D
* 前往文件夹：Command+shift+G

* 查看一个文件夹中的多个文件：文件全部选中+space进入看图模式 箭头键切换

* 显示简介：Command+I
* 新建Finder窗口：Command+N
* Finder窗口返回上级 Command+[ 或 Command+UP
* 关闭窗口： Command+W
* 拖动窗口碰撞顶部 可以放到其他桌面

* Command + Space  => spotlight 搜索 打开应用程序直接搜索，回车打来，速度快到爆
* shift + Command + .  显示隐藏文件  再按隐藏

* 强制退出 使用快捷键：Command+Option+Esc 结束进程
* 最小化当前窗口：Command+M
* control + 关机键 弹出关机提示窗口

* 分屏：按住窗口最大化按钮持续2秒 出现分屏 选择另一款软件 呈现左右视图 可以调整大小（并会单独放置于一个新的桌面） 按ESC退出分屏

* 手势操作：3指向上推动 出现当前运行的窗口 顶端出现Dashboard 鼠标放上去显示多个可选择的桌面
* 手势操作：4指内扫 显示Launchpad 2指左右切换； 4指外扫 退出launchpad
* 手势操作：4指外扫 显示桌面 4只内扫 回到当前程序窗口

* 有的小伙伴把移动硬盘或 U 盘接入到 Mac 电脑上，当把文件拷贝到移动硬盘时，会发现不能复制文件到移动硬盘。这里因为移动硬盘或 U 盘是使用 Windows 系统下的 NTFS 分区格式，而 Mac 系统原生是不支持这种格式的，也就是为什么不能向硬盘里拷贝资料的原因

* 选中文件 shift配合上下箭头操作

* 查看连接过的无线密码：钥匙串访问-种类-密码-拷贝-验证用户名密码即可Exodus1688yunying

* Mac 自带截图 录屏 command+shift+5

* homebrew https://www.jianshu.com/p/bca8fc1ff3f0
```
// 查看包信息，比如目前的版本，依赖，安装后注意事项等
brew info mysql

// 卸载包
brew uninstall wget

// 显示已安装的包
brew list

// 查看brew的帮助
brew –help

// 更新， 这会更新 Homebrew 自己
brew update

// 检查过时（是否有新版本），这会列出所有安装的包里，哪些可以升级
brew outdated
brew outdated mysql

// 升级所有可以升级的软件们
brew upgrade
brew upgrade mysql

// 清理不需要的版本极其安装包缓存
brew cleanup
brew cleanup mysql
```

### “Navicat Premium”已损坏,打不开。 您应该将它移到废纸篓。
sudo spctl --master-disable

### excel
* 默认填充数据会递增填充，alt+鼠标拖动 避免递增
* 输入 2018-06-03 这样的日期格式 在顶部栏输入'2018-06-03
*

### 浏览器
* goolge 打开新标签页 Command+T   打开刚关闭的标签页 Command+shift+T
* 关闭当前标签 Command + w
* 打开新的浏览器窗口 Command + n
* 新窗口打开当前链接 Command+点击
* Command+L 光标定位到地址栏
* Command + shift + n 进入无痕浏览模式
* 超级好用的截图工具 Full Page Screen Capture

* Safari 控制台 需要在偏好设置里显示 开发

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


### webstorm

* webstorm preference 搜索 Templates 设置各种文件的文件头 注释

The following example shows the default template for creating a JavaScript class in WebStorm:
```
/**
 * Created by ${USER} on ${DATE}
 */
```
或者自定义：
```
/**
 * PROJECT ${PROJECT_NAME}
 * IDE ${PRODUCT_NAME}
 * Created by ${USER} on ${DATE} ${TIME}.
 */
```
${PROJECT_NAME} - 当前项目的名称
${NAME} - 在创建文件期间在新建文件对话框中指定的文件名称
${USER} - 系统的当前用户登录名称
${DATE} - 当前系统日期
${TIME} - 当前系统时间
${YEAR} - 当前年份
${MONTH} - 当前月份
${DAY} - 当前月的日期
${HOUR} - 当前时刻
${MINUTE} - 当前分钟
${PRODUCT_NAME} - 将被创建文件所在的IDE名称
${MONTH_NAME_SHORT} - 月份名称的前3个字母，例如: Jan, Feb, etc.
${MONTH_NAME_FULL} - 月份全称，例如: January, February, etc.

* <View></View>  标签补全 输入完<View 按住shift+> 即可补全
* command + +/- 折叠展开代码块
* command + shift + +/- 折叠展开所有可以操作的代码块  可以针对选中的代码进行操作
* command + f: 当前文档搜索
* command + shift + f: 全局搜索
* Command + l 跳转到指定
* Command + shift + 方向键选中行

* control + j: 选相同结构
* alt + 鼠标点选位置

* Command + shift + 箭头：移动选中行

* webstorm preference - language&framework - JavaScript - 更改version

* Editor - File and Code template 可以控制新创建文件的顶部注释
* 关闭当前Tab Command+w  或者 shift+鼠标点击  intelliJ IDEA 同样适用

* shift + enter 当前行下一行插入空行
* control + enter 当前行上一行插入空行

* Command+shift+R 全局替换
* Webstorm 右键文件 => Git => show history => 双击某次提交 查看对比

### intelliJ IDEA
* 定位到方法+ alt+command+b: 查看引用 
* 生成构造方法 control + enter 弹出选择框 同样可以快速生成Getter Setter方法
* 生成interface中的override control + enter 选择对应的方法

* Linux  生成构造方法 alt + insert  
* 在某个目录下创建新文件： 光标定位到该目录 Command+N
* product_not_exist => PRODUCT_NOT_EXIST : Command+shift+U

* Intellij IDEA 提示Cannot resolve symbol 'log' 的解决方法
https://blog.csdn.net/gao_shuang/article/details/79494002
Lombok Plugin 的作用 http://plugins.jetbrains.com/plugin/6317-lombok-plugin

linux setting plugin

* Inferred type 'S' 解决办法
报错 Inferred type 'S' for type parameter 'S' is not within its bound; 解决办法
Inferred type 'S' for type parameter 'S' is not within its bound;

should extends xxxxxx
出现这种问题的原因是，springboot 版本问题，将 2。1 版本换成 1。5。4 版本。
或者是将代码改写一下
return girlRepository.findOne(id);
=> 改为
return girlRepository.findById(id).orElse(null);

* 断点调试
	在需要出打断点，使用debug方式运行方法，程序停在断点处会显示出所有变量的值

* 设置作者注释：preference - editor - file and template - includes - fileHeader 添加如下内容：
```
/** 
 * Created by ${USER} on ${DATE} ${TIME}
 */ 
``` 

* 关闭打开侧边栏：Command + 1

* Java Interface 上 option+command+鼠标点击 查看接口的实现类 或者 option+Command+B

### VS Code
* 多行光标 
    vscode 操作：在每行的头部，alt + 4 次点击。
    sublime 操作：鼠标中键按住，从第一行开头拖到第四行开头。
    Mac Option+Shift+鼠标左键

* vs code 会自动检测项目目录下的JavaScript函数方法，在当前文件输入getKey 如果其他文件有此方法的导出，那么按下Tab键会自动讲模块导入

* 折叠代码快捷键 先按Command+K 再按Command+0   展开代码 先按 Command+K再按 Command+J

* 左下角的 设置按钮 - Extention - 安装扩展

- Flutter plugin for VS Code has a command for creating Flutter apps

- vscode-icons

- 

* 打开全局搜索 Command + Shift + P

* terminal 打开模拟器 flutter run -d deviceID

🔥  To hot reload changes while running, press "r". To hot restart (and rebuild state), press "R".

* After adding the packages to ./pubspec.yaml VS Code 会自动执行 flutter packages get

* 模拟器运行快捷键 fn + touchBar (F5)

### PyCharm
* shift + enter 下一行
* ctrl + shift + arrow 移动行
* alt + 鼠标  点选拖拽多行
* shift + delete 删除行
* ctrl + D 复制此行到下一行
* shift + 3次 ”“” 可以生产多行注释

### iTerm2 Mac terminal 替代方案
* Ctrl+a: 光标移动到行首
* Ctrl+e: 光标移动到行末
* Ctrl+k: 删除光标之后整行

* Command + w: 关闭当前标签
* Command + T: 打开新的标签
* 右键Tab Duplicate 可以完全复制一个窗口 包括路径

* Tab 查看候选命令
* Command+/ 绚丽的定位光标位置

* 输入自动补全提示 方向右键

* 默认zsh 启动iTerm 2 默认使用dash改用zsh解决方法：chsh -s /bin/zsh 
[iTerm 2 && Oh My Zsh教程](https://www.jianshu.com/p/7de00c73a2bb)

### Ubuntu
* clear: qingping
* Windows Tab 切换当前进行的窗口
* ctrl + q  退出程序

### PhotoShop
* 图片取反色 选中取反色的区域 ctrl+i（windows） Command+i(Mac) 


### Sketch
* 拖动整个画布 space+鼠标拖动




