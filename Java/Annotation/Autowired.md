[Guide to Spring @Autowired](https://www.baeldung.com/spring-autowire)

> Starting with Spring 2.5, the framework introduced annotations-driven Dependency Injection. The main annotation of this feature is @Autowired. It allows Spring to resolve and inject collaborating beans into our bean.
> 从Spring 2.5 开始，引入了注解驱动的依赖注入。主要的注解就是@Autowired，可以是Spring解析和注入其他的beans到我们的beans。

## Enabling @Autowired Annotations
```java
@Configuration
@ComponentScan("com.baeldung.autowire.sample")
public class AppConfig {}
```

Moreover, Spring Boot introduces the @SpringBootApplication annotation. 

Let's use this annotation in the main class of the application:
```java
@SpringBootApplication
class VehicleFactoryApplication {
    public static void main(String[] args) {
        SpringApplication.run(VehicleFactoryApplication.class, args);
    }
}
```
As a result, when we run this Spring Boot application, it will automatically scan the components in the current package and its sub-packages. Thus it will register them in Spring's Application Context, and allow us to inject beans using @Autowired.

