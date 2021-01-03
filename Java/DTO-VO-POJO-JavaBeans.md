[Difference between DTO, VO, POJO, JavaBeans?](https://stackoverflow.com/questions/1612334/difference-between-dto-vo-pojo-javabeans)

## [JavaBeans](Annotation/JavaBean.md)

## POJO
A Plain Old Java Object or POJO is a term initially introduced to designate a simple lightweight Java object, not implementing any javax.ejb interface, as opposed to heavyweight EJB 2.x (especially Entity Beans, Stateless Session Beans are not that bad IMO). Today, the term is used for any simple object with no extra stuff. Again, Wikipedia does a good job at defining POJO:

普通旧Java对象或POJO是最初引入的术语，用于指定简单的轻量级Java对象，而不是实现任何javax。ejb接口，与重量级ejb 2相对。x(特别是实体bean，无状态会话bean在IMO上并不是那么糟糕)。今天，这个词用于任何没有额外东西的简单物体。再次，维基百科在定义POJO方面做得很好:
POJO是普通旧Java对象的缩写。这个名称是用来强调所讨论的对象是一个普通的Java对象，不是一个特殊的对象，特别是不是企业JavaBean(特别是在EJB 3之前)。这个术语是由Martin Fowler、Rebecca Parsons和Josh MacKenzie在2000年9月创造的:

## VO (Value Object)
A Value Object or VO is an object such as java.lang.Integer that hold values (hence value objects). For a more formal definition, I often refer to Martin Fowler's description of Value Object:
值对象或VO是像java.lang这样的对象。保存值的整数(即值对象)。对于更正式的定义，我经常参考马丁·福勒对价值对象的描述:
在企业应用程序体系结构模式中，我将值对象描述为一个小对象，如金钱或日期范围对象。它们的关键特性是遵循值语义而不是引用语义。

## DTO (Data Transfer Object)
Data Transfer Object or DTO is a (anti) pattern introduced with EJB. Instead of performing many remote calls on EJBs, the idea was to encapsulate data in a value object that could be transfered over the network: a Data Transfer Object. Wikipedia has a decent definition of Data Transfer Object:
数据传输对象(DTO)是EJB引入的一种(反)模式。与其对ejb执行许多远程调用，其思想是将数据封装在可以通过网络传输的值对象中:数据传输对象。维基百科对数据传输对象有一个很好的定义:
数据传输对象(DTO)，以前称为值对象或VO，是一种用于在软件应用程序子系统之间传输数据的设计模式。dto通常与数据访问对象一起使用，从数据库中检索数据。

## 阿里巴巴Java开发手册中的DO、DTO、BO、AO、VO、POJO定义
分层领域模型规约：

DO（ Data Object）：与数据库表结构一一对应，通过DAO层向上传输数据源对象。
DTO（ Data Transfer Object）：数据传输对象，Service或Manager向外传输的对象。
BO（ Business Object）：业务对象。 由Service层输出的封装业务逻辑的对象。
AO（ Application Object）：应用对象。 在Web层与Service层之间抽象的复用对象模型，极为贴近展示层，复用度不高。
VO（ View Object）：显示层对象，通常是Web向模板渲染引擎层传输的对象。
POJO（ Plain Ordinary Java Object）：在本手册中， POJO专指只有setter/getter/toString的简单类，包括DO/DTO/BO/VO等。
Query：数据查询对象，各层接收上层的查询请求。 注意超过2个参数的查询封装，禁止使用Map类来传输。
领域模型命名规约：

数据对象：xxxDO，xxx即为数据表名。
数据传输对象：xxxDTO，xxx为业务领域相关的名称。
展示对象：xxxVO，xxx一般为网页名称。
POJO是DO/DTO/BO/VO的统称，禁止命名成xxxPOJO。