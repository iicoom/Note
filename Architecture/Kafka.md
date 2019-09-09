http://kafka.apache.org/documentation.html#quickstart

## 安装
Step 1: Download the code

Download the 2.3.0 release and un-tar it.
> tar -xzf kafka_2.12-2.3.0.tgz
> cd kafka_2.12-2.3.0


Step 2: Start the server

Kafka uses ZooKeeper so you need to first start a ZooKeeper server if you don't already have one.

### ZooKeeper

https://zookeeper.apache.org/


- Step 2.1: Download ZooKeeper

- Step 2.2: Extract the tar file
$ tar -zxf zookeeper-3.4.6.tar.gz
$ cd zookeeper-3.4.6
$ mkdir data

- Step 2.3: Create configuration file

- Step 2.4: Start ZooKeeper server
```
$ bin/zkServer.sh start

```

[Apache Kafka Installation on Mac using Homebrew](https://medium.com/@Ankitthakur/apache-kafka-installation-on-mac-using-homebrew-a367cdefd273)

