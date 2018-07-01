## 什么是POM
Project Object Model，项目对象模型。通过xml格式保存的pom.xml文件。作用类似ant的build.xml文件，功能更强大。该文件用于管理：源代码、配置文件、开发者的信息和角色、问题追踪系统、组织信息、项目授权、项目的url、项目的依赖关系等等。

## maven的协作相关属性
* groupId : 组织标识，例如：org.codehaus.mojo，在M2_REPO目录下，将是: org/codehaus/mojo目录。
* artifactId : 项目名称，例如：my-project，在M2_REPO目录下，将是：org/codehaus/mojo/my-project目录。
* version : 版本号，例如：1.0，在M2_REPO目录下，将是：org/codehaus/mojo/my-project/1.0目录。
* packaging : 打包的格式，可以为：pom , jar , maven-plugin , ejb , war , ear , rar , par

## POM之间的关系
### 依赖关系：依赖关系列表（dependency list）是POM的重要部分
```
<dependencies>  
   <dependency>  
     <groupId>junit</groupId>  
     <artifactId>junit</artifactId>  
     <version>4.0</version>  
     <scope>test</scope>  
   </dependency>  
   …  

```

### 继承关系：继承其他pom.xml配置的机制。
比如父pom.xml：
```
<project>  
  [...]  
  <dependencies>  
    <dependency>  
      <groupId>junit</groupId>  
      <artifactId>junit</artifactId>  
      <version>4.4</version>  
      <scope>test</scope>  
    </dependency>  
  </dependencies>  
  [...]  
</project>  
```
在子pom.xml文件继承它的依赖
```
<parent>  
<groupId>com.devzuz.mvnbook.proficio</groupId>  
  <artifactId>proficio</artifactId>  
  <version>1.0-SNAPSHOT</version>  
</parent>  
```

### plugin
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.springframework</groupId>
    <artifactId>gs-messaging-rabbitmq</artifactId>
    <version>0.1.0</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.2.RELEASE</version>
    </parent>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-amqp</artifactId>
        </dependency>
    </dependencies>


    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

## Spring Boot Maven plugin 
The Spring Boot Maven plugin provides many convenient features:

It collects all the jars on the classpath and builds a single, runnable "über-jar", which makes it more convenient to execute and transport your service.

It searches for the public static void main() method to flag as a runnable class.

It provides a built-in dependency resolver that sets the version number to match Spring Boot dependencies. You can override any version you wish, but it will default to Boot’s chosen set of versions.

### mysql-connector-java
连接mysql数据库的配置. 依次是mysql的驱动、Java Persistence API
```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```




