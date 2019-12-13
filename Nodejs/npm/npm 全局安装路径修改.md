## npm config ls
```
Admin@MXJ-PC MINGW64 /e/Joy/server-s (master)
$ npm config ls
; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.12.1 node/v12.13.1 win32 x64"

; builtin config undefined
prefix = "C:\\Users\\Admin\\AppData\\Roaming\\npm"

; node bin location = D:\software\nodejs\node.exe
; cwd = E:\Joy\server-s
; HOME = C:\Users\Admin
; "npm config ls -l" to show all defaults.
```
可以看到仓库地址、和全局安装目录"C:\\Users\\Admin\\AppData\\Roaming\\npm"，在webstorm中查找该目录需要显示隐藏目录

##  修改全局路径
```
npm config set prefix "你想要的路径"
```
