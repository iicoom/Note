const kafka = require('./kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);

class Queue {

    constructor(topic, strategy) {
        this.topic = topic;
        this.strategy = strategy;
        this.init([Queue.TOPIC_WORK_ONLINE_CHANGE]);
    }

    init(topics) {
        producer.on('ready', () => {
            if (!producer.inited) {
                producer.createTopics(topics, (err, data) => {
                    if (err != null) {
                        console.log(`创建话题失败: [${err}]`);
                    }
                    console.log(`创建话题成功: ${topics}`)
                })
            }
        })
    }

    send(data) {
        let payload = {
            topic: this.topic,
            messages: [data],
            partition: 0,
            attributes: 2
        }
        producer.send([payload], (err, data) => {
            if (err === null) {
                console.log('成功发送消息: \n', data)
            } else {
                console.log(`发送消息错误${err}`)
            }
        })
    }
}

Queue.TOPIC_WORK_ONLINE_CHANGE = "WORK_ONLINE_CHANGE";  //上下线通知

// https://github.com/SOHU-Co/kafka-node#install-kafka

// Events
// ready: this event is emitted when producer is ready to send messages.
// error: this is the error event propagates from internal client, producer should always listen it.