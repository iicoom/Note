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

## 项目配置文件
idea 默认生成的配置文件在resources下的application.properties文件 

自己使用application.yml 好像逼格更高一点

多环境配置
application-dev.yml
application-prod.yml
