https://www.npmjs.com/package/smart-npm

## 背景
用 npm 时，默认它会访问国外资源，所以会非常卡，有时甚至会被墙。现在市面上一般有三种解决方案：

- 在 .npmrc 上配置一个国内的 registry 镜像

- 使用 cnpm

- 使用 VPN

### 安装
```
npm install --global smart-npm --registry=https://registry.npm.taobao.org/
```

Mac 用户可以在 ~/.bash_profile 文件中加一行
```
alias npm=smart-npm

source ~/.bash_profile
```

### 使用
```
snpm i electron -g
```

### 卸载
```
npm uninstall --global smart-npm
```
