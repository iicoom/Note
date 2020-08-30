## why npx?
npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。

```js
npm install -D mocha
```

一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。
```js
# 项目的根目录下执行
$ node-modules/.bin/mocha --version
```

npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。
```js
$ npx mocha --version
```

## 查看全局安装过得模块
npm list -g --depth 0
```
➜  express git:(master) ✗ npm list -g --depth 0
/Users/mxj/.nvm/versions/node/v12.13.0/lib
├── electron@7.1.11
├── eslint@6.7.1
├── flamegraph@1.3.0
├── hexo-cli@3.1.0
├── npm@6.12.0
├── pomelo@2.2.7
└── smart-npm@3.0.2
```

## 避免全局安装的模块
除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。