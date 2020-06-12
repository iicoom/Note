> Redis同样支持消息的发布/订阅（Pub/Sub）模式，这和中间件activemq有些类似。订阅者（Subscriber）可以订阅自己感兴趣的频道（Channel），发布者（Publisher）可以将消息发往指定的频道（Channel），正式通过这种方式，可以将消息的发送者和接收者解耦。另外，由于可以动态的Subscribe和Unsubscribe，也可以提高系统的灵活性和可扩展性。

## 连接到redis
```
C:\Users\Admin>redis-cli
127.0.0.1:6379> keys *
(error) NOAUTH Authentication required.
127.0.0.1:6379> auth 3E=2DR?bReHn1
OK
```

## 订阅频道
127.0.0.1:6379> subscribe channel [channel ...]  

需要注意的是，redis-cli客户端在进入subscribe模式以后，将不能再响应其他的任何命令：
```
127.0.0.1:6379> subscribe china
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "china"
3) (integer) 1
```
Instead, redis-cli blocks waiting for messages on the bus (only to be unsubcribed via a ctrl+c).
使用redis-cli订阅channel后，该客户端将不能响应任何命令。除非按下（ctrl+c）

## 发布消息
连接另一个client
```
127.0.0.1:6379> publish china "Hello"
(integer) 2
127.0.0.1:6379>
```

在订阅者的窗口已经收到发布的消息：
```
127.0.0.1:6379> subscribe china
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "china"
3) (integer) 1
1) "message"
2) "china"
3) "Hello"
```

可以中途加入新的订阅者，同样可以收到发布者的消息，即一个生产者对多个消费者