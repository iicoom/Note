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

#### 切到安装目录启动server
➜  ~ cd /usr/local/sbin
➜  sbin ls
cuttlefish           rabbitmq-defaults    rabbitmq-diagnostics rabbitmq-env         rabbitmq-plugins     rabbitmq-server      rabbitmqadmin        rabbitmqctl

```
➜  sbin sh rabbitmq-server

  ##  ##
  ##  ##      RabbitMQ 3.7.4. Copyright (C) 2007-2018 Pivotal Software, Inc.
  ##########  Licensed under the MPL.  See http://www.rabbitmq.com/
  ######  ##
  ##########  Logs: /usr/local/var/log/rabbitmq/rabbit@localhost.log
                    /usr/local/var/log/rabbitmq/rabbit@localhost_upgrade.log

              Starting broker...
 completed with 6 plugins.
```

#### 启动
➜  ~ brew services start rabbitmq

#### 停止
➜  ~ brew services stop rabbitmq

### Management Plugin
Introduction
The rabbitmq-management plugin provides an HTTP-based API for management and monitoring of your RabbitMQ server, along with a browser-based UI and a command line tool, rabbitmqadmin. 

The Web UI is located at: http://server-name:15672/

To use the web UI you will need to authenticate as a RabbitMQ user (on a fresh installation the user "guest" is created with password "guest"). From here you can manage exchanges, queues, bindings, virtual hosts, users and permissions. Hopefully the UI is fairly self-explanatory.

Web UI in Browser
http://localhost:15672/#/

[clitool](http://www.rabbitmq.com/management-cli.html)

### 消费模式
[官方文档](http://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)
#### Round-robin dispatching （循环分配）
One of the advantages of using a Task Queue is the ability to easily parallelise work. If we are building up a backlog of work, we can just add more workers and that way, scale easily.

First, let's try to run two worker.js scripts at the same time. They will both get messages from the queue, but how exactly? Let's see.

By default, RabbitMQ will send each message to the next consumer, in sequence. On average every consumer will get the same number of messages. This way of distributing messages is called round-robin. Try this out with three or more workers.

If a consumer dies (its channel is closed, connection is closed, or TCP connection is lost) without sending an ack, RabbitMQ will understand that a message wasn't processed fully and will re-queue it. If there are other consumers online at the same time, it will then quickly redeliver it to another consumer. That way you can be sure that no message is lost, even if the workers occasionally die.

Message acknowledgments have been turned off in previous examples. It's time to turn them on using the {noAck: false} (you may also remove the options altogether) option and send a proper acknowledgment from the worker, once we're done with a task.

**Message durability**
We have learned how to make sure that even if the consumer dies, the task isn't lost. But our tasks will still be lost if RabbitMQ server stops.

When RabbitMQ quits or crashes it will forget the queues and messages unless you tell it not to. Two things are required to make sure that messages aren't lost: we need to mark both the queue and messages as durable.

First, we need to make sure that RabbitMQ will never lose our queue. In order to do so, we need to declare it as durable:
```
ch.assertQueue('hello', {durable: true});
```

At this point we're sure that the task_queue queue won't be lost even if RabbitMQ restarts. Now we need to mark our messages as persistent - by using the persistent option Channel.sendToQueue takes.
```
ch.sendToQueue(q, new Buffer(msg), {persistent: true});
```

### Exchanges
The core idea in the messaging model in RabbitMQ is that the producer never sends any messages directly to a queue. Actually, quite often the producer doesn't even know if a message will be delivered to any queue at all.

### Bindings
We've already created a fanout exchange and a queue. Now we need to tell the exchange to send messages to our queue. That relationship between exchange and a queue is called a binding.
```
ch.bindQueue(queue_name, 'logs', '');
```
From now on the logs exchange will append messages to our queue.




