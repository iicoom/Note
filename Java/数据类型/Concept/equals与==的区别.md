使用==比较原生类型如：boolean、int、char等等-值比较，使用equals()比较对象-引用比较。

## ==
==就是用来比较值是否相等
```java
public class Main {

    /**
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        
        int n=3;
        int m=3;
        
        System.out.println(n==m); // true - 基本数据类型是值比较
        
        String str = new String("hello");
        String str1 = new String("hello");
        String str2 = new String("hello");
        
        System.out.println(str1==str2); // false - String 包装类 不能用简单的值比较 
        
        str1 = str;
        str2 = str;
        System.out.println(str1==str2); // true

        String str3 = new String("hello");
        String str4 = new String("hello");
        
        System.out.println(str1.equals(str2)); // true - equals方法是用来比较两个对象的引用是否相等，即是否指向同一个对象
        // 可以看出，String类对equals方法进行了重写，用来比较指向的字符串对象所存储的字符串是否相等。
        // 其他的一些类诸如Double，Date，Integer等，都对equals方法进行了重写用来比较指向的对象所存储的内容是否相等。
    }

}
```

