# 常见错误解决办法

## Could not autowire. No beans of 'xxxx' type found

原因可能有两个，第一个是IntellijIDEA本身工具的问题。第二个便是我们导入@Service包的时候导入包错误造成的

```text
@Service
public class PayServiceImpl implements PayService {

    @Autowired
    private BestPayServiceImpl bestPayService;

    @Override
    public void create(OrderDTO orderDTO) {
        PayRequest payRequest = new PayRequest();
        bestPayService.pay(payRequest);
    }
}

上边的@Service注解如果不写在下面payService处会报错：Could not autowire. No beans of 'payService' type found

@RunWith(SpringRunner.class)
@SpringBootTest
public class PayServiceImplTest {

    @Autowired
    private PayService payService;

    @Test
    public void create() throws Exception {
        OrderDTO orderDTO = new OrderDTO();
        payService.create(orderDTO);
    }
}

测试方法中没写@RunWith(SpringRunner.class)
@SpringBootTest
会报错：java.lang.NullPointerException


@Component
public class WechatPayConfig {

    @Autowired
    private WechatAccountConfig accountConfig;

    @Bean
    public BestPayServiceImpl bestPayService() {
        BestPayServiceImpl bestPayService = new BestPayServiceImpl();
//        bestPayService.setWxPayH5Config(wxPayH5Config);
        bestPayService.setWxPayH5Config(wxPayH5Config());
        return bestPayService;
    }

    @Bean
    public WxPayH5Config wxPayH5Config() {
        WxPayH5Config wxPayH5Config = new WxPayH5Config();
        wxPayH5Config.setAppId(accountConfig.getMpAppId());
        wxPayH5Config.setAppSecret(accountConfig.getMpAppSecret());
        wxPayH5Config.setMchId(accountConfig.getMchId());
        wxPayH5Config.setMchKey(accountConfig.getMchKey());
        wxPayH5Config.setKeyPath(accountConfig.getKeyPath());
        return wxPayH5Config;
    }
}
如果没加@Component注解会导致PayServiceImpl 中的bestPayService报错：Could not autowire. No beans of 'bestPayService' type found
```

## @ConfigurationProperties

出现spring boot Configuration Annotation Proessor not found in classpath的提示是在用了@ConfigurationProperties这个注解时，所以问题出现在ConfigurationProperties注解。 根据提示的not found in classpath,查询此注解的使用关于怎么指定classpath,进而查询location，spring boot1.5以上版本@ConfigurationProperties取消location注解

官方解决方案，Maven引入依赖

```text
<dependency>
   <groupId> org.springframework.boot </groupId>
   <artifactId> spring-boot-configuration-processor </artifactId>
   <optional> true </optional>
</dependency>
```

