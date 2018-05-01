[Maven教程](https://www.yiibai.com/maven/)
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

### Create the directory structure
```
└── src
    └── main
        └── java
            └── hello
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
