https://www.mongodb.com/compare/mongodb-mysql

What are the main differences between MongoDB and MySQL?
MySQL is a relational database management system (RDBMS) from the Oracle Corporation. Like other relational systems, MySQL stores data in tables and uses structured query language (SQL) for database access. When MySQL developers need to access data in an application, they merge data from multiple tables together in a process called a join. In MySQL, you predefine your database schema and set up rules to govern the relationships between fields in your tables.
MySQL 是Oracle开发的关系型管理系统。与其他关系型数据库相同，MySQL使用sql查询数据。
1. 可能需要通过join连接将多表数据合并到一起
2. 需要实现定义schema，设置和管理有关联的表的字段

MongoDB is a NoSQL database that stores data as JSON-like documents. Documents store related information together and use the MongoDB query language (MQL) for access. Fields can vary from document to document - there is no need to declare the structure of documents to the system, as documents are self-describing. Optionally, schema validation can be used to enforce data governance controls over each collection.
MongoDB 以类似JSON结构的文档来存储数据。
1. 不用声明文档结构
2. schema校验可以用来管理collection

## SQL&NoSQL
### 关系型数据库
关系型数据库是指采用了关系模型来组织数据的数据库。简单来说，关系模式就是二维表格模型。

主要代表：SQL Server，Oracle,Mysql,PostgreSQL。

优点：
易于维护，数据库的ACID属性，大大降低了数据冗余和数据不一致的概率

瓶颈：
1. 海量数据的读写效率：对于网站的并发量高，往往达到每秒上万次的请求，对于传统关系型数据库来说，硬盘I/o是一个很大的挑战。  
2. 高扩展性和可用性：
在基于web的结构中，数据库是最难以横向拓展的，当一个应用系统的用户量和访问量与日俱增的时候，数据库没有办法像web Server那样简单的通过添加更多的硬件和服务节点来拓展性能和负载能力。

> 关系型数据库的最大优点就是事务的一致性，这个特性，使得关系型数据库中可以适用于一切要求一致性比较高的系统中。比如：银行系统。
但是在网页应用中，对这种一致性的要求不是那么的严格，允许有一定的时间间隔，所以关系型数据库这个特点不是那么的重要了。相反，关系型数据库为了维护一致性所付出的巨大代价就是读写性能比较差。而像微博、facebook这类应用，对于并发读写能力要求极高，关系型数据库已经无法应付。所以必须用一种新的数据结构存储来替代关系型数据库。所以非关系型数据库应用而生。

### 非关系型数据库
NoSQL非关系型数据库，主要指那些非关系型的、分布式的，且一般不保证ACID的数据存储系统，主要代表MongoDB，Redis、CouchDB。

优点：
key-value数据库：主要特点是具有极高的并发读写性能，例如Redis
面向文档数据库：可以在海量的数据库快速的查询数据，例如MongoDB

缺点：
不能够像sql那样提供where字段属性的查询。因此适合存储较为简单的数据。有一些不能够持久化数据，所以需要和关系型数据库结合。

## 对比差别
**预定义结构VS.动态结构**

在sql中，必须定义好地段和表结构之后，才能够添加数据，例如定义表的主键、索引、外键等。表结构可以在定义之后更新，但是如果有比较大的结构变更，就会变的比较复杂。

在Nosql数据库中，数据可以在任何时候任何地方添加。不需要预先定义。

**纵向扩容VS横向扩容** 

SQL和NoSQL数据库最大的差别可能是在扩展方式上，要支持日益增长的需求当然要扩展。要支持更多并发量，SQL数据库是纵向扩展，也就是说提高处理能力，使用速度更快速的计算机，这样处理相同的数据集就更快了。因为数据存储在关系表中，操作的性能瓶颈可能涉及很多个表，这都需要通过提高计算机性能来客服。虽然SQL数据库有很大扩展空间，但最终肯定会达到纵向扩展的上限。而NoSQL数据库是横向扩展的。非关系型数据存储天然就是分布式的，NoSQL数据库的扩展可以通过给资源池添加更多普通的数据库服务器(节点)来分担负载


数据库
SQL数据库                          NoSQL数据库
实时一直性                          简单便捷
事务                               方便扩展
多表联合查询                        更好的性能

mongodb 不支持事务
redis 支持部分事务
[全面梳理SQL和NoSQL数据库的技术差别](https://searchdatabase.techtarget.com.cn/7-21820/)

## 术语和概念
MySQL中的许多概念在MongoDB中具有相近的类比。本表概述了每个系统中的一些常见概念。
```
MySQL		MongoDB
表			集合
行			文档
列			字段
joins		嵌入文档或者链接
```

## MongoDB场景使用场景？
MongoDB是用于各种用例的通用数据库。 MongoDB最常见的用例包括单视图，物联网，移动，实时分析，个性化，目录和内容管理。

## 何时用MySQL比较合适
虽然大多数现代应用程序需要一个灵活的可扩展系统，如MongoDB，但是有一些关系数据库（如MySQL）将更适合使用的情况。需要复杂的多行事务的应用程序（例如双记录bookkeep系统）将是很好的例子。 MongoDB不是围绕关系数据模型和SQL构建的遗留应用程序的替代方法。

一个具体的例子是旅行预订系统背后的预订引擎，通常还涉及复杂的事务。虽然核心预订引擎可能在MySQL上运行，但是与用户互动的应用程序部分 - 提供内容，与社交网络集成，管理会话 - 将更好地放在MongoDB中

https://dev.to/jignesh_simform/comparing-mongodb--mysql-bfa

