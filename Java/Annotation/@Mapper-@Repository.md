1、@Repository
@Repository 是 Spring 的注解，用于声明一个 Bean。@Repository单独使用没用。可以这样理解，注解放在接口上本来就没有意义，spring中在mapper接口上写一个@Repository注解，只是为了标识，要想真正是这个接口被扫描，必须使用@MapperScannerConfigurer

2、 @Mapper
@Mapper是mybatis自身带的注解。在spring程序中，mybatis需要找到对应的mapper，在编译时生成动态代理类，与数据库进行交互，这时需要用到@Mapper注解

但是有时候当我们有很多mapper接口时，就需要写很多@Mappe注解，这样很麻烦，有一种简便的配置化方法便是在启动类上使
用@MapperScan注解。
```java
@MapperScan("com.zhonghe.**.dao.mysql")
@EnableTransactionManagement
@SpringBootApplication(exclude = { MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class UserImApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserImApplication.class, args);
    }

}
```
这样可以自动扫描包路径下所有的mapper接口，从而不用再在接口上添加任何注解。

## 相同点：
@Mapper和@Repository都是作用在dao层接口，使得其生成代理对象bean，交给spring 容器管理
对于mybatis来说，都可以不用写mapper.xml文件

## 不同点：
1、@Mapper不需要配置扫描地址，可以单独使用，如果有多个mapper文件的话，可以在项目启动类中加入@MapperScan(“mapper文件所在包”)
2、@Repository不可以单独使用，否则会报错误，要想用，必须配置扫描地址（@MapperScannerConfigurer）

在idea中单独使用@Mapper注解，在@Autowired时，idea会提示找不到bean，但是不影响运行，如果想消除爆红，可以将@Mapper注解跟@Repository注解一起用，这样便[可消除爆红](https://www.jianshu.com/p/3942f6b4fa75)