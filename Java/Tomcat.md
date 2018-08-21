## Tomcat for Mac
1、检查安装环境
      可以在shell终端运行如下命令查看是否安装了java，以及JDK的版本：
      Java -version
      如果没有安装，请到https://www.java.com/en/download/下载安装

2、开始安装Tomcat
     下载链接：http://tomcat.apache.org/
     可以下载tar.gz文件，8.X版本，文件夹名称是apache-tomcat-8.5.9.tar.gz

3、终端操作
   3.1、将apache-tomcat-8.5.9.tar.gz文件移动到/usr/local/下
            sudo mv /Users/feng/Downloads/apache-tomcat-8.5.9.tar.gz /usr/local/
   3.2、解压缩在/usr/local/目录
            sudo cd /usr/local/
            sudo tar zxvf apache-tomcat-8.5.9.tar.gz

   3.4、使自己成为目录的持有者
            sudo chown -R 你的系统用户名 /Library/Tomcat
   3.5、允许bin目录下程序运行
            sudo chmod 755 /Library/Tomcat/bin/*.sh
   完成

4、启动Tomcat
   命令行启动：
   /Library/Tomcat/bin/startup.sh
   上边这个不行

➜  Tomcat bin/startup.sh
zsh: permission denied: bin/startup.sh
➜  Tomcat sudo bin/startup.sh
Using CATALINA_BASE:   /usr/local/apache-tomcat-8.5.32
Using CATALINA_HOME:   /usr/local/apache-tomcat-8.5.32
Using CATALINA_TMPDIR: /usr/local/apache-tomcat-8.5.32/temp
Using JRE_HOME:        /Library/Java/JavaVirtualMachines/jdk1.8.0_161.jdk/Contents/Home
Using CLASSPATH:       /usr/local/apache-tomcat-8.5.32/bin/bootstrap.jar:/usr/local/apache-tomcat-8.5.32/bin/tomcat-juli.jar
Tomcat started.

http://localhost:8080/ 已经可以访问到 Apache Tomcat/8.5.32  Developer Quick Start

5、停止tomcat：
   shutdown.sh (如果不能停止使用killall -9 java 命令杀死进程，用ps -ef| grep java再验证下是否全部杀掉了进程)

6、配置Tomcat启动脚本：
   6.1、在/usr/bin目录下，使用vi创建tomcat文件，添加如下命令：
```
#!/bin/bash

case $1 in
start)
sh /Library/Tomcat/bin/startup.sh
;;
stop)
sh /Library/Tomcat/bin/shutdown.sh
;;
restart)
sh /Library/Tomcat/bin/shutdown.sh
sh /Library/Tomcat/bin/startup.sh
;;
*)
echo “Usage: start|stop|restart”
;;
esac

exit 0

6.2、赋予文件执行权限：
        chmod 777 tomcat

6.3、将这个文件放置到终端包含的路径中，例如/usr/bin，而后便可以在终端中简单地输入tomcat start和tomcat stop启用tomcat了。
       快捷命令如下：
        1） tomcat start 
			2)  tomcat stop
   		3)  tomcat restart 
```

## IntelliJ IDEA配置Tomcat
https://www.cnblogs.com/Miracle-Maker/articles/6476687.html

Warning: No artifacts marked for deployment

需要设置Deployment

## Linux tomcat 部署
### 日志目录 cd /mnt/tomcat/apache-tomcat-8.0.36
ls
bin  logs

  - 进入项目目录，执行git命令拉取代码 
      + cd /mnt/projects/cloud-butchershop
      + git pull 
    - 执行mvn命令 (需要root权限)
      - mvn install -Dmaven.test.skip=true
      - 不执行测试用例，也不编译测试用例类
    - 停止tomcat 或 kill -9 端口id
      - sh shutdown.sh 
    - mv butchershop-busi/target/butchershop-busi.war /mnt/tomcat/current/webapps/
    
    - cd /mnt/tomcat/apache-tomcat-8.0.36/bin 重启tomcat,查看是否启动成功
      - sh startup.sh 









