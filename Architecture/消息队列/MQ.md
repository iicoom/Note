> 消息队列中间件（简称消息中间件）是指利用高效可靠的消息传递机制进行与平台无关的数据交流，并基于数据通信来进行分布式系统的集成。通过提供消息传递和消息排队模型，它可以在分布式环境下提供 
应用解耦、
弹性伸缩、
冗余存储、
流量削峰、
异步通信、
数据同步等等功能，其作为分布式系统架构中的一个重要组件，有着举足轻重的地位。
比如 ActiveMQ、RabbitMQ、Kafka、RocketMQ、ZeroMQ 等。不管选择其中的哪一款，都会有用的不趁手的地方，毕竟不是为你量身定制的。

[消息中间件选型分析](https://juejin.im/post/5acf29316fb9a028cb2e04ce)

RabbitMQ 是采用 Erlang 语言实现的 AMQP 协议的消息中间件，最初起源于金融系统，用于在分布式系统中存储转发消息。RabbitMQ 发展到今天，被越来越多的人认可，这和它在可靠性、可用性、扩展性、功能丰富等方面的卓越表现是分不开的。

## 功能维度
功能维度又可以划分个多个子维度，大致可以分为以下这些：

### 优先级队列
优先级队列不同于先进先出队列，优先级高的消息具备优先被消费的特权，这样可以为下游提供不同消息级别的保证。不过这个优先级也是需要有一个前提的：如果消费者的消费速度大于生产者的速度，并且消息中间件服务器（一般简单的称之为 Broker）中没有消息堆积，那么对于发送的消息设置优先级也就没有什么实质性的意义了，因为生产者刚发送完一条消息就被消费者消费了，那么就相当于 Broker 中至多只有一条消息，对于单条消息来说优先级是没有什么意义的。

### 延迟队列
当你在网上购物的时候是否会遇到这样的提示：“三十分钟之内未付款，订单自动取消”？这个是延迟队列的一种典型应用场景。

### 死信队列
由于某些原因消息无法被正确的投递，为了确保消息不会被无故的丢弃，一般将其置于一个特殊角色的队列，这个队列一般称之为死信队列。与此对应的还有一个“回退队列”的概念，试想如果消费者在消费时发生了异常，那么就不会对这一次消费进行确认（Ack）, 进而发生回滚消息的操作之后消息始终会放在队列的顶部，然后不断被处理和回滚，导致队列陷入死循环。为了解决这个问题，可以为每个队列设置一个回退队列，它和死信队列都是为异常的处理提供的一种机制保障。实际情况下，回退队列的角色可以由死信队列和重试队列来扮演。

### 重试队列
重试队列其实可以看成是一种回退队列，具体指消费端消费消息失败时，为防止消息无故丢失而重新将消息回滚到 Broker 中。与回退队列不同的是重试队列一般分成多个重试等级，每个重试等级一般也会设置重新投递延时，重试次数越多投递延时就越大。

### 消费模式
消费模式分为推（push）模式和拉（pull）模式。推模式是指由 Broker 主动推送消息至消费端，实时性较好，不过需要一定的流制机制来确保服务端推送过来的消息不会压垮消费端。而拉模式是指消费端主动向 Broker 端请求拉取（一般是定时或者定量）消息，实时性较推模式差，但是可以根据自身的处理能力而控制拉取的消息量。

### 广播消费
消息一般有两种传递模式：点对点（P2P，Point-to-Point）模式和发布 / 订阅（Pub/Sub）模式。对于点对点的模式而言，消息被消费以后，队列中不会再存储，所以消息消费者不可能消费到已经被消费的消息。虽然队列可以支持多个消费者，但是一条消息只会被一个消费者消费。发布订阅模式定义了如何向一个内容节点发布和订阅消息，这个内容节点称为主题（topic），主题可以认为是消息传递的中介，消息发布者将消息发布到某个主题，而消息订阅者则从主题中订阅消息。
RabbitMQ 是一种典型的点对点模式

作者：AI前线
链接：https://juejin.im/post/5acf29316fb9a028cb2e04ce
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


### homebrew
➜  ~ brew help
Example usage:
  brew search [TEXT|/REGEX/]
  brew info [FORMULA...]
  brew install FORMULA...
  brew update
  brew upgrade [FORMULA...]
  brew uninstall FORMULA...
  brew list [FORMULA...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA

Contributing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh

## rabbitmq  
### Installing on Mac
[Installation with Homebrew](http://www.rabbitmq.com/install-standalone-mac.html)
```
==> Summary
🍺  /usr/local/Cellar/erlang/20.3.2: 7,036 files, 277.4MB
==> Installing rabbitmq
==> Downloading https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.7.4/rabbitmq-server-generic-unix-3.7.4.tar.xz
######################################################################## 100.0%
==> /usr/bin/unzip -qq -j /usr/local/Cellar/rabbitmq/3.7.4/plugins/rabbitmq_management-3.7.4.ez rabbitmq_management-3.7.4/priv/www/cli/rabbitmqadmin
==> Caveats
Management Plugin enabled by default at http://localhost:15672

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

To have launchd start rabbitmq now and restart at login:
  brew services start rabbitmq
Or, if you don't want/need a background service you can just run:
  rabbitmq-server
==> Summary
🍺  /usr/local/Cellar/rabbitmq/3.7.4: 232 files, 12.6MB, built in 57 seconds
```
### Run RabbitMQ Server
Overview
Unlike some other installation methods, namely the Debian and RPM packages, RabbitMQ generic UNIX binary build does not require sudo. It can be uncompressed into any location and started and managed using the tools under sbin. Default data directory location will be under ./var, that is, in the installation directory.

Start the Server
To start the server, run the sbin/rabbitmq-server script. This displays a short banner message, concluding with the message "completed with [n] plugins.", indicating that the RabbitMQ broker has been started successfully.

#### 启动
➜  ~ brew services start rabbitmq

#### 停止
➜  ~ brew services stop rabbitmq

### Management Plugin
Introduction
The rabbitmq-management plugin provides an HTTP-based API for management and monitoring of your RabbitMQ server, along with a browser-based UI and a command line tool, rabbitmqadmin. 

The Web UI is located at: http://server-name:15672/

To use the web UI you will need to authenticate as a RabbitMQ user (on a fresh installation the user "guest" is created with password "guest"). From here you can manage exchanges, queues, bindings, virtual hosts, users and permissions. Hopefully the UI is fairly self-explanatory.

