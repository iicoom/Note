https://www.oracle.com/java/technologies/javase-downloads.html

[How to install Java 8 on Mac](https://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac)

- Use Homebrew. this will install the latest jdk:

    brew cask install java

- Java8 is no longer available on homebrew, brew install java8 will not work.

    brew cask install adoptopenjdk/openjdk/adoptopenjdk8

## 管理多个Java版本

- 当前使用的版本
➜  ~ ls -la /usr/bin/java
lrwxr-xr-x  1 root  wheel  74  9 21  2018 /usr/bin/java -> /System/Library/Frameworks/JavaVM.framework/Versions/Current/Commands/java

- brew 安装的版本
➜  ~ ls /Library/Java/JavaVirtualMachines/
adoptopenjdk-8.jdk openjdk-12.0.2.jdk

### [jenv](http://www.jenv.be/)

- brew install jenv

Error: Cask adoptopenjdk8 exists in multiple taps:
  homebrew/cask-versions/adoptopenjdk8
  caskroom/versions/adoptopenjdk8
  adoptopenjdk/openjdk/adoptopenjdk8



- setup
$ echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(jenv init -)"' >> ~/.zshrc

- jenv add

https://github.com/jenv/jenv

➜  Home pwd
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home

➜  Home jenv add /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
openjdk64-1.8.0.222 added
1.8.0.222 added
1.8 added
➜  Home jenv versions
* system (set by /Users/guitar/.jenv/version)
  1.8
  1.8.0.222
  openjdk64-1.8.0.222

- And Use !

Configure global version
$ jenv global 1.8