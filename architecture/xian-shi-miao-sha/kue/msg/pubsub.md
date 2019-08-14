# pubsub

## publish （channel, message）

## 监听channel上发布的message

## 执行相关消息通知操作

其实是把消息内容 保存到数据库

```text
client.on('message', function (channel, message) {
    logger.info('channel: %s, message: %s', channel, message);

    if (channel === 'order_finish') {
        couponCardSend(message);
    }

    if(channel === 'send_message'){
        sendMessage(message);
    }
});
```

## 下一步是消息推送

* SMS
* 系统消息
* 
