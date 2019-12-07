https://www.jianshu.com/p/2accc2840a1b

总结一下，RPC要解决的两个问题：

1. 解决分布式系统中，服务之间的调用问题。
2. 远程调用时，要能够像本地调用一样方便，让调用者感知不到远程调用的逻辑。

## RPC vs Restful
其实这两者并不是一个维度的概念，总得来说RPC涉及的维度更广。

如果硬要比较，那么可以从RPC风格的url和Restful风格的url上进行比较。

比如你提供一个查询订单的接口，用RPC风格，你可能会这样写：
```
/queryOrder?orderId=123
```
用Restful风格呢？
```
Get  
/order?orderId=123
```

RPC是面向过程，Restful是面向资源，并且使用了Http动词。从这个维度上看，Restful风格的url在表述的精简性、可读性上都要更好。

比如，既然是分布式了，那么一个服务可能有多个实例，你在调用时，要如何获取这些实例的地址呢？

这时候就需要一个服务注册中心，比如在Dubbo里头，就可以使用Zookeeper作为注册中心，在调用时，从Zookeeper获取服务的实例列表，再从中选择一个进行调用。
