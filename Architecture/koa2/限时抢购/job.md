## kue创建队列
```
// 消息队列
var queue = kue.createQueue({
    prefix: 'queue',
    redis: {
        db: config.queueDB,
        port: rcc.port,
        host: rcc.host,
        auth: rcc.auth_pass
    }
});
```

## 划定生产线
```
// 创建生产线
var orderLines = [];
for (var i = 0; i < orderLineNum; i++) {
    orderLines.push('order/line-' + i); // line: order/line-1
}
```

## router('/job')
创建抢购订单

