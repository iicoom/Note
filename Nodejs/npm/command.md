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

```
➜  Server git:(master) npm outdated
Package               Current  Wanted  Latest  Location
babel-eslint            8.2.1   8.2.2   8.2.2  Server
bluebird                3.5.0   3.5.1   3.5.1  Server
eslint                 4.17.0  4.19.1  4.19.1  Server
eslint-plugin-import    2.8.0   2.9.0   2.9.0  Server
eslint-plugin-react     7.6.1   7.7.0   7.7.0  Server
koa                     2.3.0   2.5.0   2.5.0  Server
koa-bodyparser          2.2.0   2.2.0   4.2.0  Server
koa-compose             3.1.0   3.1.0   4.0.0  Server
koa-generic-session    1.11.3  1.11.3   2.0.1  Server
koa-helmet              2.0.0   2.0.0   3.3.0  Server
koa-i18n                1.2.0   1.2.0   2.1.0  Server
koa-locale              1.2.0   1.2.0   1.3.0  Server
koa-logger              3.0.1   3.2.0   3.2.0  Server
koa-redis               2.1.2   2.1.2   3.1.2  Server
koa-router              7.2.1   7.4.0   7.4.0  Server
koa-session             5.4.0   5.8.1   5.8.1  Server
koa-validate            1.0.6   1.0.6   1.0.7  Server
lodash                 4.17.4  4.17.5  4.17.5  Server
log4js                 0.6.38  0.6.38   2.5.3  Server
mongoose                4.5.9   4.5.9  5.0.11  Server
nodemailer              4.6.0   4.6.3   4.6.3  Server
nodemon               1.14.12  1.17.2  1.17.2  Server
request                2.83.0  2.85.0  2.85.0  Server
uuid                    3.1.0   3.2.1   3.2.1  Server
xss                     0.3.3   0.3.7   0.3.7  Server
```


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
