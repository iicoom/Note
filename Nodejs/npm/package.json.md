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
    "cpuprofile": "flamegraph -t cpuprofile -f cpuprofile-1588002371817.cpuprofile -o cpuprofile.svg"
  },
```

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