http://kafka.apache.org/documentation.html#quickstart


## 用 brew 安装

[Apache Kafka Installation on Mac using Homebrew](https://medium.com/@Ankitthakur/apache-kafka-installation-on-mac-using-homebrew-a367cdefd273)

- brew install
$ brew cask install java
$ brew install kafka

- Start Zookeeper:
$ zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties

- Setup Kafka 
$ vim /usr/local/etc/kafka/server.properties

Here uncomment the server settings and update the value from
```
listeners=PLAINTEXT://:9092
```
to
```
############################# Socket Server Settings #############################
# The address the socket server listens on. It will get the value returned from 
# java.net.InetAddress.getCanonicalHostName() if not configured.
#   FORMAT:
#     listeners = listener_name://host_name:port
#   EXAMPLE:
#     listeners = PLAINTEXT://your.host.name:9092
listeners=PLAINTEXT://localhost:9092
```
and restart the server and it will work great.

- Start Kafka server:
$ kafka-server-start /usr/local/etc/kafka/server.properties



___________ 下面👇的方法比较笨 ————————————————————————————————————————————————————————
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
