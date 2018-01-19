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

## router.get('/job/:id/state'）
```
{
	"state": "complete",
	"result": {
		"orderId": "5a6195c879c30a4a3a2ebbed"
	}
}
```

## router.get('/:orderId')
查询Job订单
```
{
	"_id": "5a6195c879c30a4a3a2ebbed",
	"user_id": "5a28d8877d72587761cae36a",
	"sheep_num": 1,
	"create_time": 1516344776751,
	"merchant_id": "551e45eb6c5ac465b3cf5f0c",
	"type": 1,
	"amount": 1000,
	"batch_id": "5a5819a927c1a55287d75d19",
	"update_time": 1516344776751,
	"order_code": "20180119145256558",
	"__v": 0,
	"receive_state": false,
	"pay_infos": [],
	"state": 1,
	"good_ids": [],
	"id": "5a6195c879c30a4a3a2ebbed",
	"remain_pay": 1000
}
```

## router.get('/job/:id')
### 从redis获取到job相关信息
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




