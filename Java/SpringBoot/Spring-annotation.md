## Spring
1、@controller 控制器（注入服务）

用于标注控制层，相当于struts中的action层
2、@service 服务（注入dao）

用于标注服务层，主要用来进行业务的逻辑处理
3、@repository（实现dao访问）

用于标注数据访问层，也可以说用于标注数据访问组件，即DAO组件.
4、@component （把普通pojo实例化到spring容器中，相当于配置文件中的 
<bean id="" class=""/>）

泛指各种组件，就是说当我们的类不属于各种归类的时候（不属于@Controller、@Services等的时候），我们就可以使用@Component来标注这个类。

5、@Bean http://www.cnblogs.com/bossen/p/5824067.html
http://www.cnblogs.com/feiyu127/p/7700090.html

[Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/#initial)
## 注解 annotation
```
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
The class is flagged as a @RestController, meaning it’s ready for use by Spring MVC to handle web requests. @RequestMapping maps / to the index() method. When invoked from a browser or using curl on the command line, the method returns pure text. 
That’s because @RestController combines @Controller and @ResponseBody, two annotations that results in web requests returning data rather than a view.

### @GetMapping
是 @RequestMapping(value = "/hello", method = RequestMethod.GET) 的简化

### @PathVariable("id")
@RequestMapping(value = "/hello/{id}", method = RequestMethod.GET)

### @RequestParam(value = "id", required = false, defaultValue = "0")
@RequestMapping(value = "/hello", method = RequestMethod.GET)


### @Valid @RequestBody
请求以body raw Json形式传送，只有传入{}才能得到相关字段校验信息，什么都不传返回
{
    "status": 1,
    "code": 1,
    "msg": "服务器错误",
    "traceId": "75570534-a68e-44e5-b7d0-f9753536bfb6",
    "data": null
}



