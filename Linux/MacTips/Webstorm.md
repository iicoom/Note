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
* 多行光标caret输入符：  alt + 鼠标点选位置  

* Command + shift + 箭头：移动选中行

* webstorm preference - language&framework - JavaScript - 更改version

* Editor - File and Code template 可以控制新创建文件的顶部注释
* 关闭当前Tab Command+w  或者 shift+鼠标点击  intelliJ IDEA 同样适用

* shift + enter 当前行下一行插入空行
* control + enter 当前行上一行插入空行

* Command+shift+R 全局替换
* Webstorm 右键文件 => Git => show history => 双击某次提交 查看对比

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





