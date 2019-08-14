# generics

[https://www.ibm.com/developerworks/cn/java/Java\_and\_Generics/index.html](https://www.ibm.com/developerworks/cn/java/Java_and_Generics/index.html)

为了使用Generics，首先必须定义支持Generics的类，接口或者方法，它与C++语言的模板的语法类似。&lt;&gt;用于包含参数化类型，参数化类型用Java标识符标识表示，通常使用大写字母，例如T，A，B等。

## 1.1\) 类和接口定义

以下是最简单的Generics类定义，定义了一个参数化类型T1： interface MyList {….. }

以下是支持多个参数化类型的接口： interface MyList {….. }

Java支持带有限制的参数化类型，这意味着在构造该类对象的时候，实际类型必须满足限制条件。在下面的例子中，T1的类型必须实现类Comparable接口，T2类型必须为Component类的子类，否则将构造失败。这些限制检查工作通常在编译的时候就可以进行。 interface MyList {}

