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

## Create the directory structure
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

## POM(Project Object Model)
The pom.xml file is the core of a project's configuration in Maven. I

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
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
 
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0-SNAPSHOT</version>
 
  <properties>
    <maven.compiler.source>1.7</maven.compiler.source>
    <maven.compiler.target>1.7</maven.compiler.target>
  </properties>
 
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

* <modelVersion>. POM model version (always 4.0.0).

* <groupId>. Group or organization that the project belongs to. Often expressed as an inverted domain name.

* <artifactId>. Name to be given to the project’s library artifact (for example, the name of its JAR or WAR file).

* <version>. Version of the project that is being built.

* <packaging> - How the project should be packaged. Defaults to "jar" for JAR file packaging. Use "war" for WAR file packaging.

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

There are two other Maven lifecycles of note beyond the default list above. They are

* clean: cleans up artifacts created by prior builds
* site: generates site documentation for this project

### Build Java code
```
mvn package
```

The command line will print out various actions, and end with the following:

 ...
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  2.953 s
[INFO] Finished at: 2019-11-24T13:05:10+01:00
[INFO] ------------------------------------------------------------------------


### [Maven Getting Started Guide](https://maven.apache.org/guides/getting-started/index.html)

### [Repositories](https://maven.apache.org/guides/introduction/introduction-to-repositories.html)

### [Using Mirrors for the Central Repository](https://maven.apache.org/guides/introduction/introduction-to-repositories.html#using-mirrors-for-the-central-repository)
There are several official Central repositories geographically distributed. You can make changes to your settings.xml file to use one or more mirrors. Instructions for this can be found in the guide [Using Mirrors for Repositories](https://maven.apache.org/guides/mini/guide-mirror-settings.html).

To configure a mirror of a given repository, you provide it in your settings file (${user.home}/.m2/settings.xml)