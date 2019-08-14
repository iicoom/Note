## Java 对象和类
Java作为一种面向对象语言。支持以下基本概念：

多态
继承
封装
抽象
类
对象
实例
方法
重载

* 对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
* 类：类是一个模板，它描述一类对象的行为和状态。

通过下面一个简单的类来理解下Java中类的定义：
```
public class Dog{
  String breed;
  int age;
  String color;
  void barking(){
  }
 
  void hungry(){
  }
 
  void sleeping(){
  }
}
```

### 实例化
* 声明：声明一个对象，包括对象名称和对象类型。
* 实例化：使用关键字new来创建一个对象。
* 初始化：使用new创建对象时，会调用构造方法初始化对象。
```
public class Puppy{
   public Puppy(String name){
      //这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name ); 
   }
   public static void main(String []args){
      // 下面的语句将创建一个Puppy对象
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
```
编译并运行上面的程序，会打印出下面的结果：
小狗的名字是 : tommy



