➜  ~ sudo npm install -g typescript


➜  ~ tsc -v
Version 3.5.3

## 为什么要TypeScript

1. 为JavaScript提供一个可选择的类型检查系统；
2. 为JavaScript提供一个包含将来新特性的版本。

TypeScript的核心价值体现在第一点，第二点可以认为是TypeScript的向后兼容性保证，也是TypeScript必须要做到的。

经过像Google、Microsoft、FaceBook这样的大公司实践表明，类型检查对于代码可维护性和可读性是有非常大的帮助的，尤其针对于需要长期维护的规模性系统。


在JS里，两个等号的判断会进行隐式的类型转换，如：
```
console.log(5 == "5"); // true 
console.log(0 == "");  // true
```

## 常用命令
```
tsc

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
```
1. 使用 tsc --init 创建tsconfig  [配置参数详情](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
2. 使用 tsc -w 监听项目目录下所有.ts 文件 并编译成.js  可以配合tsconfig 缩小监听范围

## 编译 .ts
At the command line, run the TypeScript compiler:

```
tsc greeter.ts
```

## 学习实例
https://sequelize.org/

Sequelize 4.X 版本用JavaScript  5.X 版本使用TypeScript  可以对照学习

antd dva  redux

hexo

pandora

mysqldump

@types express
