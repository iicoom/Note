[负载均衡](https://help.aliyun.com/product/27537.html?spm=5176.7921785.762137.1.307441002po5Oj)

负载均衡（Server Load Balancer）是对多台云服务器进行流量分发的负载均衡服务。负载均衡可以通过流量分发扩展应用系统对外的服务能力，通过消除单点故障提升应用系统的可用性。

## SLB 实例
创建一个公网负载均衡实例，将来自客户端的请求转发到两台后端ECS上

[视频](https://help.aliyun.com/document_detail/93511.html?spm=a2c4g.11186623.2.13.1c3524f1qB1kbX#concept-lqd-mc2-lfb)

1.  创建ECS实例 - 设置创建 实例数量 2
2.  搭建应用
3.  创建负载均衡实例
4.  添加监听和后端服务器

### 域名指向SLB
在VPC或者SLB中可以配置域名和端口指向

### 负载均衡跳转到实例详情
