> 作用：本地的域名解析系统 比如
```
127.0.0.1 www.dev.yunfarm.cn
10.101.111.191 bugfree.yunfarm.cn
```
当应用接受到HTTP request 包括以上域名，就会把域名解析到对应的IP，可以配置内网和公网IP
## linux下查看hosts文件
```
vim /etc/hosts
```

## Windows host 
```
C:\Windows\System32\drivers\etc
```
没有权限修改解决方法：
将文件先复制到别的路径下，接着将复制出来的文件，先修改，修改完后，再将文件拷入到C:\Windows\System32\drivers\etc 下，将之前的文件替换掉即可

### 修改hosts访问权限
不能设置etc目录的权限，可以设置hosts 文件访问权限，右击-属性-安全

然后就可以用switchhost管理了
