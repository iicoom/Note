## Spring
1. @controller 控制器（注入服务）
2. @service 服务（注入dao）用于标注控制层，相当于struts中的action层
3. @repository（实现dao访问） 用于标注服务层，主要用来进行业务的逻辑处理
4. @component （把普通pojo实例化到spring容器中，相当于配置文件中的  用于标注数据访问层，也可以说用于标注数据访问组件，即DAO组件.
泛指各种组件，就是说当我们的类不属于各种归类的时候（不属于@Controller、@Services等的时候），我们就可以使用@Component来标注这个类。
5. [@Bean](http://www.cnblogs.com/bossen/p/5824067.html) 

[Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/#initial)
## 注解 annotation
```java
package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
```
类被注解@RestController标记，表示它已经可以使用Spring MVC来处理web请求了，可以接受浏览器或者命令行curl发起的请求。
@RestController combines @Controller and @ResponseBody，结果返回的是data而不是页面。

### @GetMapping
是 @RequestMapping(value = "/hello", method = RequestMethod.GET) 的简化

### @PathVariable("id")
@RequestMapping(value = "/hello/{id}", method = RequestMethod.GET)

### @RequestParam(value = "id", required = false, defaultValue = "0")
@RequestMapping(value = "/hello", method = RequestMethod.GET)


## 自定义注解


