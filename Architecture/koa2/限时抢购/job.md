## kue创建队列
[官方文档](https://www.npmjs.com/package/kue)
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

> 限时抢购流程：
1. 先提交到 router.post('/job')，返回
{jobId: 2714}
2. 查看job的状态，获取任务 /api/order/job/2714/state? 返回
{state: "complete", result: {orderId: "5aa0cfd579c30a4a3a2ebd61"}}


## router.post('/job')
一系列的校验后
```
job = queue.create(line, {
                user_id: uid,
                batch_id: batch_id,
                sheep_num: sheep_num,
                presentInfo: presentInfo || {}
            }).attempts(3).backoff(true).ttl(5 * 1000).save(function(err) {
                if (err) return deferred.reject(ranchUtil.generateErr(ErrorCode.CreateOrderFail, '下单失败，请重新下单'));
                deferred.resolve(job);
            });

return res.json({
                jobId: job.id
            });

```

返回的job信息：
```
{
    "jobInfo": {
        "id": 8,
        "type": "[order_line]",
        "data": {
            "user_id": "123456",
            "sheep_num": "2"
        },
        "priority": 0,
        "progress": 0,
        "state": "inactive",
        "created_at": 1520997584730,
        "promote_at": 1520997584730,
        "ttl": 5000,
        "attempts": {
            "made": 0,
            "remaining": 3,
            "max": 3
        }
    }
}
```

### Job TTL
Job producers can set an expiry value for the time their job can live in active state, so that if workers didn't reply in timely fashion, Kue will fail it with TTL exceeded error message preventing that job from being stuck in active state and spoiling concurrency.
```
queue.create('email', {title: 'email job with TTL'}).ttl(milliseconds).save();
```

## 查询job


## order_create
自动监听队列，创建订单，此阶段为那个排队过程

## 订单支付
put('/:orderId/pay'）
1. 先获取订单信息，查看amount
2. 再查询account api/accounts
3. 查积分 /api/jifen
4. 选支付method 提交到接口
```
order.findOne
扣云币
[2018-03-08 15:16:15.677] [INFO] order - 尝试支付订单
[2018-03-08 15:16:15.677] [INFO] order - { order_id: '5aa0d9a779c30a4a3a2ebd63',
  jifen: 1000,
  balance: 0,
  otherPay: null }
[2018-03-08 15:16:15.677] [INFO] order - otherPayAmount: 0, otherPayType: default
order.getOrderInfo
order.calRemainPayInfo
order.getOrderInfo
calRemainPayInfo: 1000
[2018-03-08 15:16:15.680] [INFO] order - 添加云币支付信息
jifen.transfer
[2018-03-08 15:16:15.680] [INFO] jifen - =========================云币转账开始========================
[2018-03-08 15:16:15.680] [INFO] jifen - fromUid: 5a28d8877d72587761cae36a, toUid: 551e45eb6c5ac465b3cf5f0c, count: 1000, explain: 购羊抵现扣除, others: [object Object]
jifen.findJieFenByUid
jifen.findJieFenByUid
jifen_bill.save
jifen_balance.save
jifen_balance.save
jifen.safeSave
jifen.findJiFenByID
jifen.safeSave
jifen.findJiFenByID
[2018-03-08 15:16:15.695] [INFO] jifen - ----------------------云币转账结束----------------------
jifen_read.unread
jifen_read.unread
[2018-03-08 15:16:15.696] [INFO] order - 添加云币支付信息1000
[2018-03-08 15:16:15.696] [INFO] order - 支付信息长度1
order.updateOrderInfoById
order.updateOrderInfo
[2018-03-08 15:16:15.700] [INFO] order - 检查是否支付完成
order.calRemainPayInfo
order.getOrderInfo
calRemainPayInfo: 0
order.updateOrderInfoById
order.updateOrderInfo
[2018-03-08 15:16:15.704] [INFO] order - order_id: 5aa0d9a779c30a4a3a2ebd63
tasksConsume.sendData
======task_consume_buySheep========
{ orderId: '5aa0d9a779c30a4a3a2ebd63' }
order.getOrderInfo
ali_push.push
msg.queryMsgCount
记录支付方式
order.recordPayment
order.findByOrderCode
[2018-03-08 15:16:15.724] [DEBUG] system-msg - system for send order pay success message about batchcode:  { repurchase_price: 1031.67,
  unit_price: 1000,
  yield: 0.09,
  _id: 5aa0966dfebfb4fd4d14d4f1,
  main_title: '标题就是抢羊',
  subtitle: '未知',
  batch_code: '030504',
  start_time: 1520480405000,
  end_time: 1520494805000,
  total_num: 5,
  create_time: 1520473709589,
  limit: { batchNoPayOrderNum: 2 },
  target_state: '2',
  stage: 1,
  current_stage: 1,
  product_id: '58b246cfc733c99d6766b136',
  product_type: 0,
  period: 235,
  product_period: 100,
  company_id: '56c6b425df7664ee42df71a5',
  __v: 0,
  is_create_contract: false,
  repurchase_state: false,
  sell_num: 2 }
RANCH_PAYFINISH_ORDER
[2018-03-08 15:16:15.729] [INFO] alipush - =========推送请求参数=========
[2018-03-08 15:16:15.729] [INFO] alipush - http://101.201.197.163:18080/msc_notify/api/notify
[2018-03-08 15:16:15.729] [INFO] alipush - { appKeyId: '23372525',
  title: '付款成功',
  body: '主人，付款已成功，您的羊群正在赶来的路上！',
  target: 'account',
  type: 1,
  deviceType: 3,
  msgId: '7236a7d4-92f7-4e95-9ad8-65adc0471ab6',
  targetValue: '5a28d8877d72587761cae36a' }
========== 5aa0e33ffebfb4fd4d14d512
push
创建sinapay订单
扣第三方 0
order.onOrderPayed
订单支付完成
order.findById
修改订单状态
=================
'5aa0d9a779c30a4a3a2ebd63'
[2018-03-08 15:16:15.764] [INFO] subscribe - order_finish: 5aa0d9a779c30a4a3a2ebd63
创建羊
sheep.createSheep
创建回购订单.
[2018-03-08 15:16:15.782] [INFO] alipush - =========返回数据=========
[2018-03-08 15:16:15.782] [INFO] alipush - 1
activity.update
activity.update
更新活动状态成功完成
order.queryOrders
batch.findFullBatchById
batch.findFullBatchById
batch.findFullBatchById
jifen.findUserJieFenByUid
variety.findById
variety.findById
variety.findById
msg.queryMsgCount
msg.queryMsgCount
[2018-03-08 15:17:01.634] [INFO] event420 - { service: 'query_balance',
  version: '1.0',
  request_time: '20180308151701',
  partner_id: '200004595271',
  _input_charset: 'UTF-8',
  sign: '84c5c0bf7bf0b291da9fbe94c09d967d',
  sign_type: 'MD5',
  sign_version: '1.0',
  encrypt_version: '1.0',
  notify_url: 'http://101.201.197.163/sina_pay/api/notify/query_balance',
  return_url: 'http://101.201.197.163/myfarm/api/v2/weibopay/front/query_balance',
  memo: '',
  identity_id: '54df318e1c701cc40b708d89',
  identity_type: 'UID',
  account_type: 'SAVING_POT',
  extend_param: null }
[2018-03-08 15:17:02.020] [INFO] event420 - ==========response body=========
[2018-03-08 15:17:02.020] [INFO] event420 - %7B%22response_time%22%3A%2220180308151702%22%2C%22partner_id%22%3A%22200004595271%22%2C%22_input_charset%22%3A%22UTF-8%22%2C%22sign%22%3A%22e72bf2db7d150702bed244a90858b950%22%2C%22sign_type%22%3A%22MD5%22%2C%22sign_version%22%3A%221.0%22%2C%22response_code%22%3A%22APPLY_SUCCESS%22%2C%22response_message%22%3A%22%E6%8F%90%E4%BA%A4%E6%88%90%E5%8A%9F%22%2C%22balance%22%3A%225295.27%22%2C%22available_balance%22%3A%225295.27%22%2C%22bonus%22%3A%220.52%5E14.56%5E1197.92%22%7D
[2018-03-08 15:17:02.020] [INFO] event420 - { response_time: '20180308151702',
  partner_id: '200004595271',
  _input_charset: 'UTF-8',
  sign: 'e72bf2db7d150702bed244a90858b950',
  sign_type: 'MD5',
  sign_version: '1.0',
  response_code: 'APPLY_SUCCESS',
  response_message: '提交成功',
  balance: '5295.27',
  available_balance: '5295.27',
  bonus: '0.52^14.56^1197.92' }
order.queryOrders
batch.findFullBatchById
batch.findFullBatchById
batch.findFullBatchById
variety.findById
variety.findById
variety.findById
jifen.findUserJieFenByUid
msg.queryMsgCount
msg.queryMsgCount
account_set.getAccountSet
account_set.getAccountSet
[2018-03-08 15:17:34.989] [INFO] event420 - { service: 'modify_pay_password',
  version: '1.0',
  request_time: '20180308151734',
  partner_id: '200004595271',
  _input_charset: 'UTF-8',
  sign: '9bd52be7a61fa8ab7d3afcdc7a320b77',
  sign_type: 'MD5',
  sign_version: '1.0',
  encrypt_version: '1.0',
  notify_url: 'http://101.201.197.163/sina_pay/api/notify/modify_pay_password',
  return_url: 'http://101.201.197.163/myfarm/api/v2/weibopay/front/modify_pay_password',
  memo: '',
  identity_id: '54df318e1c701cc40b708d89',
  identity_type: 'UID',
  extend_param: null }
[2018-03-08 15:17:35.217] [INFO] event420 - ==========response body=========
[2018-03-08 15:17:35.217] [INFO] event420 - %7B%22response_time%22%3A%2220180308151735%22%2C%22partner_id%22%3A%22200004595271%22%2C%22_input_charset%22%3A%22UTF-8%22%2C%22sign%22%3A%22a5c0a01763f4c2b8df7d252e38170fa4%22%2C%22sign_type%22%3A%22MD5%22%2C%22sign_version%22%3A%221.0%22%2C%22response_code%22%3A%22APPLY_SUCCESS%22%2C%22response_message%22%3A%22%E6%8F%90%E4%BA%A4%E6%88%90%E5%8A%9F%22%2C%22redirect_url%22%3A%22https%3A%2F%2Ftest.pay.sina.com.cn%2Fredirect%2Fwebsite%2FpwdModify%3Fft%3D2b7868d1-a0f2-4a76-8dc8-1f38983548ae%22%7D
[2018-03-08 15:17:35.217] [INFO] event420 - { response_time: '20180308151735',
  partner_id: '200004595271',
  _input_charset: 'UTF-8',
  sign: 'a5c0a01763f4c2b8df7d252e38170fa4',
  sign_type: 'MD5',
  sign_version: '1.0',
  response_code: 'APPLY_SUCCESS',
  response_message: '提交成功',
  redirect_url: 'https://test.pay.sina.com.cn/redirect/website/pwdModify?ft=2b7868d1-a0f2-4a76-8dc8-1f38983548ae' }
activity.update
activity.update
更新活动状态成功完成
order.queryOrders
msg.queryMsgCount
msg.queryMsgCount
batch.query
sheep.aggregate
batch.query
batch.findFullBatchById
batch.findFullBatchById
batch.findFullBatchById
sheep.aggregate
recommend_code.getRandomCodeInfoByUserId
batch.query
variety.findById
variety.findById
variety.findById
order.queryOrders
announcement.query
order.queryOrders
msg.queryMsgCount
jifen.findUserJieFenByUid
batch.findFullBatchById
batch.findFullBatchById
batch.findFullBatchById
msg.queryMsgCount
```

5. 管理后台收款
router.put('/:orderId/payInfo'）

6. 超过抢购时间后抢购页面就没有产品了


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






