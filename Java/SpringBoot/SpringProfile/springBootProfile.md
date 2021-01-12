> Spring Boot使用了一个全局的配置文件application.properties，放在src/main/resources目录下或者类路径的/config下。Sping Boot的全局配置文件的作用是对一些默认配置的配置值进行修改。

Spring Boot是基于jar包运行的，打成jar包的程序可以直接通过下面命令运行：
```
java -jar xx.jar

可以以下命令修改tomcat端口号：
java -jar xx.jar --server.port=9090
可以看出，命令行中连续的两个减号--就是对application.properties中的属性值进行赋值的标识。
所以java -jar xx.jar --server.port=9090等价于在application.properties中添加属性server.port=9090
```

## 配置文件的优先级
application.properties和application.yml文件可以放在以下四个位置：

外置，在相对于应用程序运行目录的/congfig子目录里。
外置，在应用程序运行的目录里
内置，在config包内
内置，在Classpath根目录

同样，这个列表按照优先级排序，也就是说，src/main/resources/config下application.properties覆盖src/main/resources下application.properties中相同的属性，

此外，如果你在相同优先级位置同时有application.properties和application.yml，那么application.properties里的属性里面的属性就会覆盖application.yml(测试证明根本不会覆盖，反而是application.yml会覆盖application.properties)

## Profile-多环境配置
在Spring Boot中多环境配置文件名需要满足application-{profile}.properties的格式，其中{profile}对应你的环境标识，比如：

application-dev.properties：开发环境
application-prod.properties：生产环境

想要使用对应的环境，只需要在application.properties中使用spring.profiles.active属性来设置，值对应上面提到的{profile}，这里就是指dev、prod这2个。

当然你也可以用命令行启动的时候带上参数：命令行参数可以覆盖application-{profile}.properties的参数
java -jar xxx.jar --spring.profiles.active=dev

我给不同的环境添加不同的端口属性server.port，然后根据指定不同的spring.profiles.active来切换使用。各位可以自己试试。这里就不贴代码了

除了可以用profile的配置文件来分区配置我们的环境变量，在代码里，我们还可以直接用@Profile注解来进行配置，例如数据库配置，这里我们先定义一个接口

http://tengj.top/2017/02/28/springboot2/








