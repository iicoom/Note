const express = require('express');

const app = express();
const redis = require('../redisService');
const rc = require("redis");

const log = require('../log');
const logger = log.getLogger();
logger.level = 'debug';

const config = {
        port: 6379,
        host: '127.0.0.1',
        // auth_pass: 'xcfjli'
    };
const client =  rc.createClient(config.port, config.host);

class onOrderPayed {
	constructor(args) {
		// code
	}

	// methods
	static publish(orderId) {
		// 订单支付完成
		redis.publish("order_finish", orderId);
		logger.debug('order published!');
	}
}
// 发布msg
onOrderPayed.publish('orderId-2018');

// 监听msg
client.on('message', function (channel, message) {
    logger.info('channel: %s, message: %s', channel, message);

    if (channel === 'order_finish') {
        // couponCardSend(message);
        logger.info(message)
    }

    if(channel === 'send_message'){
        sendMessage(message);
    }
});

client.subscribe('order_finish');  //订阅 订单完成 频道
client.subscribe('send_message');  //订阅 发送系统消息 频道


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://', host, port);
});
