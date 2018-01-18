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

## router.post('/job')
创建抢购job
会返回job id

## router.get('/job/:id')
获取到job相关信息

## router.post('/order')
创建订单

## router.put('/:orderId/pay'）
支付订单

## 消费

