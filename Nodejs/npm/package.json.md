## Node命令行加入
[PM2/note-env](../PM2/note-env.md)

[package.json](https://docs.npmjs.com/files/package.json)

## scripts

The “scripts” property is a dictionary containing script commands that are run at various times in the lifecycle of your package.
The key is the lifecycle event, and the value is the command to run at that point.
可以在scripts中配置不同的启动方式，如下：
```js
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "debug": "node --inspect-brk ./bin/www",
    "tsServer": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
    "tsc:w": "tsc -w",
    "lite": "lite-server --baseDir=ts",
    "compile": "npm run tsc:w",
    "cpuprofile": "flamegraph -t cpuprofile -f cpuprofile-1588002371817.cpuprofile -o cpuprofile.svg",
    "test": "cross-env MODE=test node ./node_modules/mocha/bin/mocha ./dist/test",
  },
```

### cross-env
如果在window平台使用
```
"test": "MODE=test node ./node_modules/mocha/bin/mocha ./dist/test",

运行npm test会卡住

可以安装 npm i --save-dev cross-env
cross-env能跨平台地设置及使用环境变量, cross-env让这一切变得简单，不同平台使用唯一指令，无需担心跨平台问题

"test": "cross-env MODE=test node ./node_modules/mocha/bin/mocha ./dist/test",
```

### 在进程环境中获取环境变量
```
const MODE = process.env.MODE
```

### [npm-run-all](https://github.com/mysticatea/npm-run-all/blob/master/docs/npm-run-all.md)
It's "scripts" field of package.json. For example:
```
{
    "scripts": {
        "clean": "rimraf dist",
        "lint":  "eslint src",
        "build": "babel src -o lib"
    }
}
```
$ npm-run-all clean lint build

This is same as npm run clean && npm run lint && npm run build.

前边的任务失败，后边的不会执行

 & operator does not work on Windows' cmd.exe. But npm-run-all --parallel works fine there.

不过有了cross-env 似乎不用担心 & 问题

## package-lock.json
In version 5, npm introduced the package-lock.json file.

package.json 
- if you write ~0.13.0, you want to only update patch releases【补丁版本】: 0.13.1 is ok, but 0.14.0 is not. 这种只会更新发布的补丁版本
- if you write ^0.13.0, you want to update patch and minor releases: 0.13.1, 0.14.0 and so on. 这个会更新releases版本
- if you write 0.13.0, that is the exact version that will be used, always

You don't commit to Git your node_modules folder, which is generally huge, and when you try to replicate the project on another machine by using the npm install command, if you specified the ~ syntax and a patch release of a package has been released, that one is going to be installed. Same for ^ and minor releases.
因为版本管理不会提交node_modules，所以其他成员初始化项目时都需要运行npm install
如果使用~或者^ 指定依赖的版本，又刚好有新的版本发布，那个新成员安装的依赖就会产生差异

The package-lock.json sets your currently installed version of each package in stone, and npm will use those exact versions when running npm install.
而package-lock.json就是为了解决上边的问题，会确切的指定你将要安装的版本

The package-lock.json file needs to be committed to your Git repository
会被纳入到版本控制

The dependencies versions will be updated in the package-lock.json file when you run npm update
当使用npm update，package-lock.json文件会随之更新