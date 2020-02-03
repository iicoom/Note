## 任务切换
alt+tab   回切 alt+shift+tab

## 右击windows图标 有很多设置项
设置-系统（显示通知电源）-多任务处理-虚拟桌面 

## 进程管理
ctrl+shift+delete

## 权限设置
### Windows host 
```
C:\Windows\System32\drivers\etc
```
没有权限修改解决方法：
将文件先复制到别的路径下，接着将复制出来的文件，先修改，修改完后，再将文件拷入到C:\Windows\System32\drivers\etc 下，将之前的文件替换掉即可

### 修改hosts访问权限
不能设置etc目录的权限，可以设置hosts 文件访问权限，右击-属性-安全

然后就可以用switchhost管理了

## windows10 企业版激活
1. 以管理员身份运行cmd
C:\Windows\System32\cmd.exe 
右击管理员运行

2. https://www.win10gw.com/win10wenzhang/1477.html
