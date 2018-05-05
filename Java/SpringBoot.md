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