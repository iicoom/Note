## npm
* npm init 初始化一个package.json文件
* npm cache clean --force 即可解决pm install出现”Unexpected end of JSON input while parsing near”错误。
* npm -v 查看版本
* 模块（包）相关操作
  - 安装
  - npm install package
  - npm install package --save / npm insatll -s
  - npm i package --save-dev / npm install -d
  - 移除
  - npm uninstall package
  - npm install --global gulp-cli 全局安装
  - npm rm --global gulp 移除
  - 更新
  - npm outdated
  - npm i styled-components@latest \\更新到最新版
  - npm i styled-components@2.2.1 \\更新到具体某个版本

Dependencies - not installed error (npm WARN optional SKIPPING OPTIONAL DEPENDENCY:
fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents)

Use --no-optional on all environments excepts OSX effectively disabling the cause of the warning.
npm install --no-optional


### 安装原理

安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。

如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f或--force参数。
```
npm install <packageName> --force
```
会按照package.json 中的版本号进行安装

安装指定版本
```
npm i koa-generic-session@2.0.1 --save
```

### 发布模块
[Cnode](https://cnodejs.org/topic/5364dcde31a870830700b847)
