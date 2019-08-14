# Map-Set-List-Queue-Stack

> java集合的主要分为三种类型： Set（集） List（列表） Map（映射）

Collection是最基本的集合接口，声明了适用于JAVA集合（只包括Set和List）的通用方法。 Set 和List 都继承了Conllection,Map。

## Java Map 接口

Map接口中键和值一一映射. 可以通过键来获取值。 给定一个键和一个值，你可以将该值存储在一个Map对象. 之后，你可以通过键来访问对应的值。

```text
import java.util.*;

public class CollectionsDemo {

   public static void main(String[] args) {
      Map m1 = new HashMap(); 
      m1.put("Zara", "8");
      m1.put("Mahnaz", "31");
      m1.put("Ayan", "12");
      m1.put("Daisy", "14");
      System.out.println();
      System.out.println(" Map Elements");
      System.out.print("\t" + m1);
   }
}
```

以上实例编译运行结果如下：

```text
Map Elements
        {Mahnaz=31, Ayan=12, Daisy=14, Zara=8}
```

## Set

Set是最简单的一种集合。集合中的对象不按特定的方式排序，并且没有重复对象。 Set接口主要实现了两个实现类： HashSet： HashSet类按照哈希算法来存取集合中的对象，存取速度比较快 TreeSet ：TreeSet类实现了SortedSet接口，能够对集合中的对象进行排序。

```text
Set set=new HashSet();  

String s1=new String("hello");  

String s2=s1;  

String s3=new String("world");  

set.add(s1);  

set.add(s2);  

set.add(s3);  

System.out.println(set.size());//打印集合中对象的数目 为 2。
```

## List\(列表\)

List的特征是其元素以线性方式存储，集合中可以存放重复对象。

List接口主要实现类包括：（参考文章：ArrayList与LinkedList的区别） ArrayList\(\) : 代表长度可以改变得数组。可以对元素进行随机的访问，向ArrayList\(\)中插入与删除元素的速度慢。 LinkedList\(\): 在实现中采用链表数据结构。插入和删除速度快，访问速度慢。 对于List的随机访问来说，就是只随机来检索位于特定位置的元素。 List 的 get\(int index\) 方法放回集合中由参数index指定的索引位置的对象，下标从“0” 开始。最基本的两种检索集合中的所有对象的方法：

## Queue

基本上，一个队列就是一个先入先出（FIFO）的数据结构

Queue接口与List、Set同一级别，都是继承了Collection接口。LinkedList实现了Deque接 口。

[https://www.cnblogs.com/lemon-flm/p/7877898.html](https://www.cnblogs.com/lemon-flm/p/7877898.html)

## Java Stack 类

栈是Vector的一个子类，它实现了一个标准的后进先出的栈。

堆栈只定义了默认构造函数，用来创建一个空栈。 堆栈除了包括由Vector定义的所有方法，也定义了自己的一些方法。

```text
import java.util.*;

public class StackDemo {

    static void showpush(Stack<Integer> st, int a) {
        st.push(new Integer(a));
        System.out.println("push(" + a + ")");
        System.out.println("stack: " + st);
    }

    static void showpop(Stack<Integer> st) {
        System.out.print("pop -> ");
        Integer a = (Integer) st.pop();
        System.out.println(a);
        System.out.println("stack: " + st);
    }

    public static void main(String args[]) {
        Stack<Integer> st = new Stack<Integer>();
        System.out.println("stack: " + st);
        showpush(st, 42);
        showpush(st, 66);
        showpush(st, 99);
        showpop(st);
        showpop(st);
        showpop(st);
        try {
            showpop(st);
        } catch (EmptyStackException e) {
            System.out.println("empty stack");
        }
    }
}
以上实例编译运行结果如下：

stack: [ ]
push(42)
stack: [42]
push(66)
stack: [42, 66]
push(99)
stack: [42, 66, 99]
pop -> 99
stack: [42, 66]
pop -> 66
stack: [42]
pop -> 42
stack: [ ]
pop -> empty stack
```

