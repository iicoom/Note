## npm config list
```
[root@vultr ~]# npm config list
; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.12.1 node/v12.13.1 linux x64"

; node bin location = /root/.nvm/versions/node/v12.13.1/bin/node
; cwd = /root
; HOME = /root
; "npm config ls -l" to show all defaults.
```

## npm config set
```
设置镜像方法
npm config set registry https://registry.npm.taobao.org
查看config的registry方法
npm config get registry

默认这个
=> https://registry.npmjs.org/
```
