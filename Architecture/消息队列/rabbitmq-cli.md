## rabbitmqadmin
The management plugin ships with a command line tool rabbitmqadmin which can perform some of the same actions as the Web-based UI, and which may be more convenient for automation tasks. 

## rabbitmqctl
rabbitmqctl — command line for managing a RabbitMQ broker

### [xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl --help
* [xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl list_users
```
Listing users ...
cloud_ranch	[]
yunfarm	[administrator]
guest	[administrator]
```

* [xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl list_connections
```
Listing connections...
```
* [xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl list_consumers
```
Listing consumers on vhost / ...
```

### [xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl list_exchanges
[xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl list_exchanges
Listing exchanges for vhost / ...
amq.headers	headers
	direct
amq.match	headers
amq.direct	direct
amq.rabbitmq.trace	topic
amq.rabbitmq.log	topic
amq.topic	topic
amq.fanout	fanout

### [xiaomao@iZ258wvzn92Z ~]$ sudo rabbitmqctl list_queues
```
Timeout: 60.0 seconds
Listing queues for vhost 

###



