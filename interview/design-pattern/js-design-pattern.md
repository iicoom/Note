# JS Design pattern

[https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)

## Design Pattern Categorization

设计模式分类

最流行的分类模式如下：

* Creational design patterns
* Structural design patterns
* Behavioral design patterns
* Concurrency design patterns
* Architectural design patterns

### Creational Design Patterns

> These patterns deal with object creation mechanisms which optimize object creation

* Factory method
* Abstract factory
* Builder
* Prototype
* Singleton

### Structural Design Patterns

> These patterns deal with object relationships. They ensure that if one part of a system changes,the entire system doesn't need to change along with it.

* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Flyweight
* Proxy

### Behavioral Design Patterns

> These types of patterns recognize,implement, and improve communication between disparate objects in a system.

* Chain of responsibility
* Command
* Iterator
* Mediator
* Memento
* Observer
* State
* Strategy
* Visitor

### Concurrency Design Patterns

> These types of design patterns deal with multi-threaded programming paradigms.

* Active object
* Nuclear reaction
* Scheduler

## Design Pattern Examples

> Each of the design patterns represents a specific type of solution to a specific type of problem,没有哪一种是可以普遍适用的，Once we are familiar with the patterns and scenarios they are best suited for, we can easily determine whether or not a specific pattern is good fit gor a given problem.

### Observer Pattern

> 非常有用的工具 可以提升系统中不同部分的 communication，降低 objects 之间的耦合。

组成部分：

subject：handle all of the operations the observer subscribe to, and notify observers about a certain topic when an event is published.

