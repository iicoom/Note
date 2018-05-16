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




