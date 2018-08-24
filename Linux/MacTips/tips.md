## 查看本机ip
[zhihu](https://zhuanlan.zhihu.com/MacTips/20202310)

## shortcuts
[cheatsheet](https://www.cnblogs.com/abeen/p/4104158.html)
### Mac系统
* 打开使用工具：Command+shift+U
* 打开桌面文件夹：Command+shift+D
* 前往文件夹：Command+shift+G

* 显示简介：Command+I
* 新建Finder窗口：Command+N
* Finder窗口返回上级 Command+[ 或 Command+UP
* 关闭窗口： Command+W
* 拖动窗口碰撞顶部 可以放到其他桌面

* Command + Space  => spotlight 搜索 打开应用程序直接搜索，回车打来，速度快到爆
* shift + Command + .  显示隐藏文件  再按隐藏

* 强制退出 使用快捷键：Command+Option+Esc
* 最小化当前窗口：Command+M
* control + 关机键 弹出关机提示窗口

* 分屏：按住窗口最大化按钮持续2秒 出现分屏 选择另一款软件 呈现左右视图 可以调整大小（并会单独放置于一个新的桌面） 按ESC退出分屏

* 手势操作：3指向上推动 出现当前运行的窗口 顶端出现Dashboard 鼠标放上去显示多个可选择的桌面
* 手势操作：4指内扫 显示Launchpad 2指左右切换； 4指外扫 退出launchpad
* 手势操作：4指外扫 显示桌面 4只内扫 回到当前程序窗口

* 有的小伙伴把移动硬盘或 U 盘接入到 Mac 电脑上，当把文件拷贝到移动硬盘时，会发现不能复制文件到移动硬盘。这里因为移动硬盘或 U 盘是使用 Windows 系统下的 NTFS 分区格式，而 Mac 系统原生是不支持这种格式的，也就是为什么不能向硬盘里拷贝资料的原因

* 选中文件 shift配合上下箭头操作

### 浏览器
* goolge 打开新标签页 Command+T   打开刚关闭的标签页 Command+shift+T
* 关闭当前标签 Command + w
* 打开新的浏览器窗口 Command + n
* 新窗口打开当前链接 Command+点击
* Command+L 光标定位到地址栏
* Command + shift + n 进入无痕浏览模式

### Sublime
* 多行光标拖动 alt+鼠标

### webstorm
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

### intelliJ IDEA
* 定位到方法+ alt+command+b: 查看引用 
* 生成构造方法 control + enter 弹出选择框 同样可以快速生成Getter Setter方法
* Linux  生成构造方法 alt + insert  
* 在某个目录下创建新文件： 光标定位到该目录 Command+N
* product_not_exist => PRODUCT_NOT_EXIST : Command+shift+U

* Intellij IDEA 提示Cannot resolve symbol 'log' 的解决方法
https://blog.csdn.net/gao_shuang/article/details/79494002
Lombok Plugin 的作用 http://plugins.jetbrains.com/plugin/6317-lombok-plugin

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

### PyCharm
* shift + enter 下一行
* ctrl + shift + arrow 移动行
* alt + 鼠标  点选拖拽多行
* shift + delete 删除行
* ctrl + D 复制此行到下一行

### iTerm2 
* Ctrl+a: 光标移动到行首
* Ctrl+e: 光标移动到行末
* Ctrl+k: 删除光标之后整行

* Command + w: 关闭当前标签
* Command + T: 打开新的标签
* 右键Tab Duplicate 可以完全复制一个窗口 包括路径

* Tab 查看候选命令

### Ubuntu
* clear: qingping
* Windows Tab 切换当前进行的窗口
* ctrl + q  退出程序


### “Navicat Premium”已损坏,打不开。 您应该将它移到废纸篓。
sudo spctl --master-disable


### excel
* 默认填充数据会递增填充，alt+鼠标拖动 避免递增
* 输入 2018-06-03 这样的日期格式 在顶部栏输入'2018-06-03
*
