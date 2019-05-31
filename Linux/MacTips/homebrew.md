## brew和brew cask有什么区别
https://zhidao.baidu.com/question/396566841548150965.html

brew主要用来下载一些不带界面的命令行下的工具和第三方库来进行二次开发
brew cask主要用来下载一些带界面的应用软件，下载好后会自动安装，并能在mac中直接运行使用
举个例子，
brew install curl可以安装curl第三方库，这样你在开发时就可以使用它的库来进行开发
brew cask install chrome可以安装谷歌浏览器应用程序，可直接运行

### Mac 加压rar压缩文件
使用Homebrew安装unrar

```
brew install unrar  
```

cd到rar文件的目录下，然后在终端输入下列命令：
```
unrar x 需解压的文件目录
```
