## Maven Installation

Spring Boot is compatible with Apache Maven 3.2 or above. If you do not already have Maven installed, you can follow the instructions at [maven.apache.org](https://maven.apache.org/)

[Tip]
On many operating systems, Maven can be installed with a package manager. 
If you use OSX Homebrew, try 
```
brew install maven
```
Ubuntu users can run 
```
sudo apt-get install maven
```
Windows users with Chocolatey can run 
choco install maven from an elevated (administrator) prompt.


[Maven教程](https://maven.apache.org/)
## POM
代表项目对象模型。它是 Maven 中工作的基本单位，这是一个 XML 文件。它始终保存在该项目基本目录中的 pom.xml 文件。
POM 包含的项目是使用 Maven 来构建的，它用来包含各种配置信息。
POM 也包含了目标和插件。在执行任务或目标时，Maven 会使用当前目录中的 POM。它读取POM得到所需要的配置信息，然后执行目标。部分的配置可以在 POM 使用如下：
* project dependencies
* plugins
* goals
* build profiles
* project version
* developers
* mailing list
创建一个POM之前，应该要先决定项目组(groupId)，它的名字(artifactId)和版本，因为这些属性在项目仓库是唯一标识的。

## Building Java Projects with Maven
[Spring](https://spring.io/guides/gs/maven/)

### Build Lifecycle Basics
* validate - validate the project is correct and all necessary information is available
* compile - compile the source code of the project
* test - test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed
* package - take the compiled code and package it in its distributable format, such as a JAR.
* verify - run any checks on results of integration tests to ensure quality criteria are met
* install - install the package into the local repository, for use as a dependency in other projects locally
* deploy - done in the build environment, copies the final package to the remote repository for sharing with other developers and projects.

### Create the directory structure
```
└── src
    └── main
        └── java
            └── hello


Maven 项目的目录结构
src
	-main 
		-java
			-package
	-test
		-java
			-package
	resources
```

### Define a simple Maven build
```
pom.xml

```
* <modelVersion>. POM model version (always 4.0.0).

* <groupId>. Group or organization that the project belongs to. Often expressed as an inverted domain name.

* <artifactId>. Name to be given to the project’s library artifact (for example, the name of its JAR or WAR file).

* <version>. Version of the project that is being built.

* <packaging> - How the project should be packaged. Defaults to "jar" for JAR file packaging. Use "war" for WAR file packaging.

### Build Java code

### 向pom.xml添加了依赖后要重新引入依赖
pom.xml 右击 Maven - Reimport

### mvn maven 命令行工具
以下命令会在target目录下生成对应文件： 
* mvn compile (在pom.xml所在的目录下运行) - 会生成Java的字节码文件classes
* mvn test 会运行写好的的测试用例 - surefire-reports生成的测试报告
* mvn package 生成jar包


