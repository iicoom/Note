## VS Code
### 插件
* 左下角的 设置按钮 - Extention - 安装扩展

- Flutter plugin for VS Code has a command for creating Flutter apps

- vscode-icons

- REST Client 在vs code 种调试接口
  

### Windows 
- 文件内搜索 ctrl+f  全局搜索 ctrl+shift+f

- 文件内 查找替换ctrl+h  全局查找替换 ctrl+shift+h

- 删除行ctrl+backspace, 默认ctrl+shift+k

- 操作多行 shift+alt+鼠标左键滑动


### Mac
* 折叠代码快捷键
  - 首先F1查看帮助
  - 搜索fold
  - fold -- command+'-'
  - fold all -- command+shift+'-'
  - 折叠所有块注释

* 自定义快捷键  Code-Preferences-KeyBoard ShortCuts
  1. 设置文件侧边栏定位
* 向下、向上复制当前行  shift+option+方向键

* terminal 中用 vscode 打开当前目录
  为Visual Studio Code 设置别名
```
echo "alias vscode='/Applications/Visual\ Studio\ Code.app/Contents/MacOS/Electron'" >> ~/.zshrc

vscode ./   ## 在Visual Studio Code 中打开当前目录
```

* 编辑器修改字体 
    1. 下载 https://github.com/adobe-fonts/source-code-pro/downloads
    2. 安装 https://support.apple.com/zh-cn/HT201749
    3. 配置 Code - Preferences - Text Editor - Font  ('SourceCodePro-Semibold',Menlo, Monaco, 'Courier New', monospace)

* 在打开的文件选项卡上右击 可以 Reveal in Finder、Reveal in Sidebar

* 多行光标 
    vscode 操作：在每行的头部，alt + 4 次点击。
    sublime 操作：鼠标中键按住，从第一行开头拖到第四行开头。
    Mac Option+Shift+鼠标左键

    技巧：光标定位到第一行最前端，按住option+shift，然后鼠标点击最后一行最前端，所有行光标出现
    - SHA-256：Bitcoins、Peercoin、Namecoin
    - scrypt：Litecoins、Feathercoin、Novacoin、Dogecoin
    - scrypt-cacha：Yacoin、Ethereum Classic
    - ETHASH：Ethereum
    - ECDSA：Ripple
    - X11：DASH

* vs code 会自动检测项目目录下的JavaScript函数方法，在当前文件输入getKey 如果其他文件有此方法的导出，那么按下Tab键会自动讲模块导入

* 打开全局搜索 Command + Shift + P

* terminal 打开模拟器 flutter run -d deviceID

🔥  To hot reload changes while running, press "r". To hot restart (and rebuild state), press "R".

* After adding the packages to ./pubspec.yaml VS Code 会自动执行 flutter packages get

* 模拟器运行快捷键 fn + touchBar (F5)
