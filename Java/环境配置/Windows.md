[菜逼教程](http://www.runoob.com/java/java-intro.html)

## Java分为三个体系：
* JavaSE（J2SE）（Java2 Platform Standard Edition，java平台标准版）
* JavaEE(J2EE)(Java 2 Platform,Enterprise Edition，java平台企业版)
* JavaME(J2ME)(Java 2 Platform Micro Edition，java平台微型版)。

## 主要特性
* Java语言是简单的：
* Java语言是面向对象的：总之，Java语言是一个纯的面向对象程序设计语言。
* Java语言是分布式的：
* Java语言是健壮的：
Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮性的重要保证。对指针的丢弃是Java的明智选择。Java的安全检查机制使得Java更具健壮性。
* Java语言是解释型的：
如前所述，Java程序在Java平台上被编译为字节码格式，然后可以在实现这个Java平台的任何系统中运行。在运行时，Java平台中的Java解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。
* Java是高性能的：
* Java语言是多线程的：

## Java 开发环境配置
### window系统安装java
下载JDK
### [配置环境变量](https://www.runoob.com/java/java-environment-setup.html)

### Idea 中查看jdk使用版本
file - Project Settings - Project - Project SDK：可以选择版本

file - Platform Settings - SDKs - 可以查看 JDK home path

查到JDK home path，到高级系统设置 - 在 "系统变量" 中设置 3 项属性，JAVA_HOME、PATH、CLASSPATH(大小写无所谓),若已存在则点击"编辑"，不存在则点击"新建"。
(注意：如果使用 1.5 以上版本的 JDK，不用设置 CLASSPATH 环境变量，也可以正常编译和运行 Java 程序。)

注意：在 Windows10 中，Path 变量里是分条显示的，我们需要将 %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin; 分开添加，否则无法识别：

%JAVA_HOME%\bin
%JAVA_HOME%\jre\bin

然后到cmd中测试：
C:\Users\MXJ>java -version
java version "1.5.0_21"

### Linux Ubuntu安装JDK
https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04

