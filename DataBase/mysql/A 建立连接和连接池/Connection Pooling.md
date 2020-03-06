[Connection Pooling with Connector](https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-usagenotes-j2ee-concepts-connection-pooling.html)

## How Connection Pooling Works
许多应用只需要一个线程当他们使用JDBC连接处理事务的时候，仅需要几毫秒就可以完成。当不处理事务的时候这个连接就闲置了，连接池可以使得闲置的连接再次被其他线程使用去做一下有用的工作。

## Benefits of Connection Pooling

- Reduced connection creation time

- Simplified programming model

- Controlled resource usage
    控制因为而连接产生的资源浪费

## Sizing the Connection Pool

每一个MySQL连接都是会产生费用的(memory, CPU, context switches, and so forth)，无论是客户端还是服务端。

最优化的连接池大小取决于 预期负载 还有数据库事务平均消耗时间

In practice, the optimal connection pool size can be smaller than you might expect.

 a connection pool of 15-20 connections can serve a relatively moderate load (600 concurrent users) using MySQL and Tomcat with acceptable response times.

15-20的连接数可以支持600的并发。

To correctly size a connection pool for your application, create load test scripts with tools such as Apache JMeter or The Grinder, and load test your application.

正确的连接池大小需要根据应用的测试结果来定
