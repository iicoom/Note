> 既然有 HTTP 请求，为什么还要用 RPC 调用？

1. HTTP和RPC同一级别，还是被RPC包含？

2. Restful也属于RPC么？

![图例](https://pic3.zhimg.com/80/v2-f79abd8e489337fafc7aafe75799b599_1440w.jpg)

RPC的英文全称是Remote Procedure Call，翻译为中文叫“远程过程调用”。其中稍显晦涩的其实就是“过程”，过程其实就是方法。所以，可以把RPC理解为“远程方法调用”。

而在分布式系统中，因为每个服务的边界都很小，很有可能调用别的服务提供的方法。这就出现了服务A调用服务B中方法的需求，即远程过程调用。

要想让服务A调用服务B中的方法，最先想到的就是通过HTTP请求实现。是的，这是很常见的，例如服务B暴露Restful接口，然后让服务A调用它的接口。基于Restful的调用方式因为可读性好（服务B暴露出的是Restful接口，可读性当然好）而且HTTP请求可以通过各种防火墙，因此非常不错。

然而，如前面所述，基于Restful的远程过程调用有着明显的缺点，主要是效率低、封装调用复杂。当存在大量的服务间调用时，这些缺点变得更为突出。

服务A调用服务B的过程是应用间的内部过程，牺牲可读性提升效率、易用性是可取的。基于这种思路，RPC产生了。通常，RPC要求在调用方中放置被调用的方法的接口。调用方只要调用了这些接口，就相当于调用了被调用方的实际方法，十分易用。于是，调用方可以像调用内部接口一样调用远程的方法，而不用封装参数名和参数值等操作。

![图例](https://pic2.zhimg.com/80/v2-f6c29c414d2924b157ec555c6a664343_1440w.jpg)

那要想实现这个过程该怎么办呢？

1. 首先，调用方调用的是接口，必须得为接口构造一个假的实现。显然，要使用动态代理。这样，调用方的调用就被动态代理接收到了。

2. 第二，动态代理接收到调用后，应该想办法调用远程的实际实现。这包括下面几步：识别具体要调用的远程方法的IP、端口将调用方法的入参进行序列化通过通信将请求发送到远程的方法中

这样，远程的服务就接收到了调用方的请求。它应该：

1. 反序列化各个调用参数
2. 定位到实际要调用的方法，然后输入参数，执行方法
3. 按照调用的路径返回调用的结果

整个过程如下所示。
![图例](https://pic2.zhimg.com/80/v2-bd07238f5104a05889a0f242ef8e33f0_1440w.jpg)
