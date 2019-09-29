[官网](http://nginx.org/en/docs/http/load_balancing.html)

在多个应用实例之间做负载均衡是 优化资源利用、增加吞吐量、减少延迟、保证容错性 最常用的技术。

Nginx就是一个非常高效的http请求的负载均衡器，它可以把服务请求分发到多个应用服务器，来提高web应用的性能
(伸缩性、可靠性)

Load balancing methods
- round-robin — requests to the application servers are distributed in a round-robin fashion

- least-connected — next request is assigned to the server with the least number of active connections

- ip-hash — a hash-function is used to determine what server should be selected for the next request (based on the client’s IP address)


Default load balancing configuration：

The simplest configuration for load balancing with nginx may look like the following:
```
http {
    upstream myapp1 {
        server srv1.example.com;
        server srv2.example.com;
        server srv3.example.com;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://myapp1;
        }
    }
}
```

Weighted load balancing

When the weight parameter is specified for a server, the weight is accounted as part of the load balancing decision.
```
upstream myapp1 {
    server srv1.example.com weight=3;
    server srv2.example.com;
    server srv3.example.com;
}
```
With this configuration, every 5 new requests will be distributed across the application instances as the following: 3 requests will be directed to srv1, one request will go to srv2, and another one — to srv3.