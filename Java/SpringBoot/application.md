## 配置内容
1. 服务端口，servlet context-path: api 前缀
2. spring profiles active:当前默认环境

## 完整的api路径
application context-path + Controller @RequestMapping("/admin") + @PostMapping("/list")


## 环境变量的使用
application.xml
```xml
spring:
  mvc:
    async:
      request-timeout: 300000
  profiles:
    active: local
  application:
    name: basics-service
```

application-local.xml
```
api:
  url:
    user-im: http://127.0.0.1:8003/user-im/
```

```java
import org.springframework.beans.factory.annotation.Value;


@Service
@Slf4j
public class AdminService {
    private static final Logger logger = LoggerFactory.getLogger(AdminService.class);

    @Autowired
    private OkHttpCli okHttpCli;

    @Value("${api.url.user-im}")
    private String userImUrl;

    @value("${spring.profiles.active}")
    private String activeEnv;

    public String getBasicPath() {
        return this.userImUrl + "admin/";
    }

    public doSomeThing() {
        if (activeEnv.equal("online")) {
            // ...
        }
    }
}
```