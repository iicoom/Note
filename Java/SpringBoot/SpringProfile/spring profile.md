https://www.cnblogs.com/pangguoming/p/5888871.html

> 本地、测试、开发、产品等不同环境文件配置

## 现象
  如果在开发时进行一些数据库测试，希望链接到一个测试的数据库，以避免对开发数据库的影响。

  开发时的某些配置比如log4j日志的级别，和生产环境又有所区别。

  各种此类的需求，让我希望有一个简单的切换开发环境的好办法。

## 解决
  现在spring3.1也给我们带来了profile，可以方便快速的切换环境。

  使用也是非常方便。只要在applicationContext.xml中添加下边的内容，就可以了

```
<!-- 开发环境配置文件 -->
    <beans profile="test">
        <context:property-placeholder location="/WEB-INF/test-orm.properties" />
    </beans>

    <!-- 本地环境配置文件 -->
    <beans profile="local">
        <context:property-placeholder location="/WEB-INF/local-orm.properties" />
    </beans>


profile的定义一定要在文档的最下边，否则会有异常。整个xml的结构大概是这样

<beans xmlns="..." ...>  
  <bean id="dataSource" ... />  
  <bean ... />  
  <beans profile="...">  
    <bean ...>  
  </beans>  
</beans>
```

## 激活 profile
spring 为我们提供了大量的激活 profile 的方法，可以通过代码来激活，也可以通过系统环境变量、JVM参数、servlet上下文参数来定义 spring.profiles.active 参数激活 profile，这里我们通过定义 JVM 参数实现。

1、ENV方式：

ConfigurableEnvironment.setActiveProfiles("test")

2、JVM参数方式:

  tomcat 中 catalina.bat（.sh中不用“set”） 添加JAVA_OPS。通过设置active选择不同配置文件

set JAVA_OPTS="-Dspring.profiles.active=test"
  eclipse 中启动tomcat。项目右键 run as –> run configuration–>Arguments–> VM arguments中添加。local配置文件不必上传git追踪管理

-Dspring.profiles.active="local"

3、web.xml方式：
```
<init-param>
  <param-name>spring.profiles.active</param-name>
  <param-value>production</param-value>
</init-param>
```

4、标注方式（junit单元测试非常实用）：
@ActiveProfiles({"unittest","productprofile"})








