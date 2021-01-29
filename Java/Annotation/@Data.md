[@Data注解 与 lombok](https://www.jianshu.com/p/c1ee7e4247bf)

@Data 注解的主要作用是提高代码的简洁，使用这个注解可以省去代码中大量的get()、 set()、 toString()等方法；

引入lombok

- 在maven中添加依赖
```
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.4</version>
    <scope>provided</scope>
</dependency>
```

- 在编译器中添加插件
这里以IDEA为例，在setting的plugin里搜索lombok plugin，安装插件。