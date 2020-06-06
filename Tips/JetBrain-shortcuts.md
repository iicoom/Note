## 通用
### 打开editor tab数量限制
settings -> editor -> editor tabs -> tab limit 可以调节可现实的tab数量

### 查看某文件编辑历史
右击-Git-Show History 可以查看该文件的Git 提交和修改历史

### 文件模板

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

### Eslint配置
先全局安装
npm i eslint -g

然后
file-setting-Other Setting-Eslint Setting 、

1. 设置node执行目录
2. Eslint 目录 C:\Users\Admin\AppData\Roaming\npm\eslint.cmd
3. 项目配置文件.eslintrc.js

### Code Style
Editor-Code Styles

1. 选择line-seprator格式 
2. 选择js - 设置 tab and indent

## Mac快捷键
* <View></View>  标签补全 输入完<View 按住shift+> 即可补全
* command + +/- 折叠展开代码块
* command + shift + +/- 折叠展开所有可以操作的代码块  可以针对选中的代码进行操作
* command + f: 当前文档搜索
* command + shift + f: 全局搜索
* Command + l 跳转到指定
* Command + shift + 方向键选中行

* control + j: 选相同结构
* 多行光标caret输入符：  alt + 鼠标点选位置  

* Command + shift + 箭头：移动选中行

* webstorm preference - language&framework - JavaScript - 更改version

* Editor - File and Code template 可以控制新创建文件的顶部注释
* 关闭当前Tab Command+w  或者 shift+鼠标点击  intelliJ IDEA 同样适用

* shift + enter 当前行下一行插入空行
* control + enter 当前行上一行插入空行

* Command+R
* Command+shift+R 全局替换
* Webstorm 右键文件 => Git => show history => 双击某次提交 查看对比

## Windows 快捷键
* 格式化代码 Ctrl+Alt+L

* 快速关闭打开文件的选项卡 file-setting-Keymap 在搜索框右边的图标 中 搜索Ctrl+w 结果为 Extend Selection, 将此项快捷键删除。输入框搜索Close 修改为CTRL+w


### PyCharm
* shift + enter 下一行
* ctrl + shift + arrow 移动行
* alt + 鼠标  点选拖拽多行
* shift + delete 删除行
* ctrl + D 复制此行到下一行
* shift + 3次 ”“” 可以生产多行注释


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

