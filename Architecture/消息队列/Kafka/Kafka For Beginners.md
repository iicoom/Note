https://medium.com/@rinu.gour123/kafka-for-beginners-74ec101bc82d

## What is Kafka?

We use Apache Kafka when it comes to enabling communication between producers and consumers using message-based topics. Apache Kafka is a fast, scalable, fault-tolerant, publish-subscribe messaging system. 

One of the best features of Kafka is, it is highly available and resilient to node failures and supports automatic recovery. 

In addition, core abstraction Kafka offers a Kafka broker, a Kafka Producer, and a Kafka Consumer. 

A Kafka Producer pushes the message into the message container called the Kafka Topic. Whereas a Kafka Consumer pulls the message from the Kafka Topic.

### Messaging System in Kafka

When we transfer data from one application to another, we use the Messaging System.

There are two types of messaging patterns available, i.e. point to point and publish-subscribe (pub-sub) messaging system. However, most of the messaging patterns follow pub-sub.

- Point to Point Messaging System

Here, messages are persisted in a queue.
if one or more consumers can consume the messages in the queue. Also, it makes sure that as soon as a consumer reads a message in the queue, it disappears from that queue.

- Publish-Subscribe Messaging System

Here, messages are persisted in a topic.
In this system, Kafka Consumers can subscribe to one or more topic and consume all the messages in that topic. Moreover, message producers refer publishers and message consumers are subscribers here.


## Why Should we use Apache Kafka Cluster?

when it comes to big data, there are two main challenges. One is to collect the large volume of data, while another one is to analyze the collected data.

There are numerous benefits of Apache Kafka such as:

- Alerting and reporting the operational metrics.
- Transforming data into the standard format.
- Continuous processing of streaming data to the topics.

## Importance of Java in Apache Kafka

Apache Kafka is written in pure Java and also Kafka’s native API is java.

## Kafka Use Cases

- Messaging
    Kafka has better throughput, built-in partitioning, replication, and fault-tolerance

- Event Sourcing


