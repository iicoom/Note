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
### 排队
### 会返回job id

## router.get('/job/:id')
### 获取到job相关信息
```
"user_id": "uid",
"batch_id": "batch_id",
"sheep_num": "sheep_num",
"presentInfo": {}
```

## router.post('/order')
### 创建订单
1. 是否有未支付订单
2. 是否超过了购买数量限制
3. 占，更新数据库剩余数量

## router.put('/:orderId/pay'）
支付订单

## 消费




