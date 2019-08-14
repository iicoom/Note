# 泛型

> Java 泛型（generics）是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。 泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。

[https://www.runoob.com/java/java-generics.html](https://www.runoob.com/java/java-generics.html)

## 强类型语言

指的是程序中表达的任何对象所从属的类型都必须能在编译时刻确定。常见的强类型语言有C++、Java、Apex和Python等。强类型语言在大规模信息系统开发中具有巨大优势

一些强类型编程语言支持泛型，其主要目的是 加强类型安全 及 减少类转换 的次数，但一些支持泛型的编程语言只能达到部分目的。

## 定义

如下实例演示了我们如何定义一个泛型类:

```text
public class Box<T> {
    private T t;

    public void add(T t) {
        this.t = t;
    }

    public T get() {
        return t;
    }

    public static void main(String[] args) {
        Box<Integer> integerBox = new Box<Integer>();
        Box<String> stringBox = new Box<String>();

        integerBox.add(new Integer(10));
        stringBox.add(new String('小菜比'));

        System.out.printf("整型值为 :%d\n\n", integerBox.get());
        System.out.printf("字符串为 :%s\n", stringBox.get());
    }
}
```

整型值为 :10

字符串为 :菜鸟教程

