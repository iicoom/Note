# rabbitmq-cli

## rabbitmqadmin

The management plugin ships with a command line tool rabbitmqadmin which can perform some of the same actions as the Web-based UI, and which may be more convenient for automation tasks.

## rabbitmqctl

rabbitmqctl — command line for managing a RabbitMQ broker

### \[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl --help

* \[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl list\_users

  ```text
  Listing users ...
  cloud_ranch    []
  yunfarm    [administrator]
  guest    [administrator]
  ```

* \[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl list\_connections

  ```text
  Listing connections...
  ```

* \[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl list\_consumers

  ```text
  Listing consumers on vhost / ...
  ```

### \[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl list\_exchanges

\[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl list\_exchanges Listing exchanges for vhost / ... amq.headers headers direct amq.match headers amq.direct direct amq.rabbitmq.trace topic amq.rabbitmq.log topic amq.topic topic amq.fanout fanout

### \[xiaomao@iZ258wvzn92Z ~\]$ sudo rabbitmqctl list\_queues

\`\`\` Timeout: 60.0 seconds Listing queues for vhost

