# Jdk

## 卸载JDK

查看系统是否已安装JDK。一般的linux都默认使用了开源的openJDK。显示JDK版本信息，已经安装JDK，否则没有安装。命令行：

```text
java -version   

➜  ~ java -version
openjdk version "1.8.0_171"
OpenJDK Runtime Environment (build 1.8.0_171-8u171-b11-0ubuntu0.18.04.1-b11)
OpenJDK 64-Bit Server VM (build 25.171-b11, mixed mode)
```

➜ lib sudo rm -rf jvm ➜ lib java -version zsh: command not found: java

### add Java path

```text
➜  ~ ls -a
.              .cache     examples.desktop  .java      .npm              Public                     Videos      .zcompdump-mxj-X450VC-5.4.2
..             .config    .gconf            .local     .oh-my-zsh        snap                       .viminfo    .zsh_history
.android       .dbus      .gitconfig        .m2        .pam_environment  Software                   .wget-hsts  .zshrc
.bash_history  Desktop    .gnupg            .mozilla   Pictures          .ssh                       Work        .zshrc.pre-oh-my-zsh
.bash_logout   Documents  .ICEauthority     Music      .pki              .sudo_as_admin_successful  .xinputrc   .zsh-update
.bashrc        Downloads  .IdeaIC2018.1     .node-gyp  .profile          Templates                  .zcompdump
➜  ~
```

```text
/etc/profile中设定的变量(全局)的可以作用于任何用户,而~/.bashrc等中设定的变量(局部)只能继承/etc/profile中的变量,他们是"父子"关系.
```

## Mac install jdk

在sun官网下载JDK安装包非常的慢,mac下可以通过brew快速安装JDK.

安装命令: brew cask install java 默认应该会下载jdk7 也可以指定下载版本 brew cask install java6

## Linux jdk install and setup

1. download from 官网下载
2. 通过终端在/usr/local目录下新建java文件夹--sudo mkdir /usr/local/java
3. cp jdk-8u25-linux-x64.tar.gz /usr/local/java
4. 解压压缩包，命令行：sudo tar xvf jdk-8u25-linux-x64.tar.gz
5. 然后可以把压缩包删除，命令行：sudo rm jdk-8u25-linux-x64.tar.gz
6. 设置jdk环境变量:这里采用全局设置方法，它是是所有用户的共用的环境变量  $sudo gedit ~/.bashrc

   7.

## OpenJDK是JDK的 qubie

历史上的原因是，OpenJDK是JDK的开放原始码版本，以GPL\(General Public License\)协议的形式放出\(题主提到的open就是指的开源\)。在JDK7的时候，OpenJDK已经作为JDK7的主干开发，SUN JDK7是在OpenJDK7的基础上发布的，其大部分原始码都相同，只有少部分原始码被替换掉。使用JRL\(JavaResearch License，Java研究授权协议\)发布。至于OpenJDK6则更是有其复杂的一面，首先是OpenJDK6是JDK7的一个分支，并且尽量去除Java SE7的新特性，使其尽量的符合Java6的标准。关于JDK和OpenJDK的区别，可以归纳为以下几点：授权协议的不同：OpenJDK采用GPL V2协议放出，而SUN JDK则采用JRL放出。两者协议虽然都是开放源代码的，但是在使用上的不同在于GPL V2允许在商业上使用，而JRL只允许个人研究使用。OpenJDK不包含Deployment（部署）功能：部署的功能包括：Browser Plugin、Java Web Start、以及Java控制面板，这些功能在OpenJDK中是找不到的。OpenJDK源代码不完整：这个很容易想到，在采用GPL协议的OpenJDK中，SUN JDK的一部分源代码因为产权的问题无法开放给OpenJDK使用，其中最主要的部份就是JMX中的可选元件SNMP部份的代码。因此这些不能开放的源代码 将它作成plug，以供OpenJDK编译时使用，你也可以选择不要使用plug。而Icedtea另外,/etc/profile中设定的变量\(全局\)的可以作用于任何用户,而~/.bashrc等中设定的变量\(局部\)只能继承/etc/profile中的变量,他们是"父子"关系.则为这些不完整的部分开发了相同功能的源代码 \(OpenJDK6\)，促使OpenJDK更加完整。

