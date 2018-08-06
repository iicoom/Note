## MAC将根目录文件夹的权限赋给用户
1、sudu -i进入root模式（需输入密码）

2、chown -R 用户名 /文件夹名
```
sudo -i
Password:
shuaigedeMacBook-Pro:~ root# mkdir /interesting
chown -R shuaige /interesting

给mxj授权apache-tomcat-8.5.32
➜  apache-tomcat-8.5.32 sudo -i
Password:
MXJdeMBP:~ root# chown -R mxj /usr/local/apache-tomcat-8.5.32
MXJdeMBP:~ root#
```