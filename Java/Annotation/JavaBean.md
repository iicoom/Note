A JavaBean is just a standard:

- All properties private (use getters/setters)
- A public no-argument constructor
- Implements Serializable.

> Serializability of a class is enabled by the class implementing the java.io.Serializable interface. Classes that do not implement this interface will not have any of their state serialized or deserialized. All subtypes of a serializable class are themselves serializable. The serialization interface has no methods or fields and serves only to identify the semantics of being serializable.
> 类的可序列化性是由实现java.io的Serializable接口来启用的。没有实现此接口的类的任何状态都不会被序列化或反序列化。可序列化类的所有子类型本身都是可序列化的。序列化接口没有方法或字段，只用于标识可序列化的语义。

In other words, serializable objects can be written to streams, and hence files, object databases, anything really.
换句话说，可序列化的对象可以写入流，从而写入文件、对象数据库等等。

Also, there is no syntactic difference between a JavaBean and another class -- a class is a JavaBean if it follows the standards.
另外，JavaBean和一个类之间没有语法上的区别——如果一个类遵循了标准，那么它就是JavaBean。

