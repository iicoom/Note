# 数据结构&算法

[Big-O-CheetSheet](https://www.bigocheatsheet.com/)

## Data Structure

* Array
* Stack/Queue
* PriorityQueue\(heap\)
* Tree/Binary Tree
* Binary Search Tree
* HashTable
* Disjoint Set
* Trie
* BloomFilter
* LRU Cache

### Array

#### Linked-list

[JavaScript实现链表Linked-list](https://www.jianshu.com/p/f254ec665e57)

## Algorithm

* General Coding
* In-order/Pre-order/Post-order tranversal
* Greedy
* Recursion/Backtrace
* Breadth-first search
* Depth-first search
* Divide and Conquer
* Dynamic Programming
* Binary Search
* Graph

> 渐进分析法最常用的表示方法是用于描述函数渐近行为的数学符号，更确切地说，它是用另一个（通常更简单的）函数来描述一个函数数量级的渐近上界。大O符号是由德国数论学家保罗·巴赫曼（Paul Bachmann）在其1892年的著作《解析数论》（Analytische Zahlentheorie）首先引入的。

大O符号（Big O notation）是用于描述函数渐进行为的数学符号。更确切地说，它是用另一个（通常更简单的）函数来描述一个函数数量级的渐近上界。在数学中，它一般用来刻画被截断的无穷级数尤其是渐近级数的剩余项；在计算机科学中，它在分析算法复杂性的方面非常有用。

### Big O notation（大O表示法）

O\(1\): Constant Complexity: 常数复杂度 O\(log n\): Logarithmic Complexity: 对数复杂度 O\(n\): Linear Complexity: 线性时间复杂度 O\(n^2\): N square Complexity 平方 O\(n^3\): 立方 O\(2^n\): Exponential Growth 指数 O\(n!\): Factorial 阶乘

```text
O(N)

for(int i=1; i<=n; i++) {
    System.out.println("Hey-I'm busy looking at:" + i);
}


O(N^2)

for(int i=1; i<=n; i++) {
    for(int j=1; j<=n; j++) {
        System.out.println("Hey-I'm busy looking at:" + i + "and" + j)
    }
}


To calculate: 1+2+3+ ... +n 

* 1+2+3+...+n(共累加n次)

y = 0
for i=1 to n:
y=i+y



* 求和公式：n(n+1)/2

y = n*(n+1)/2
```

What if recursion?

* Fibonacci array: 1,1,2,3,5,8,13,21,34,...

  F\(n\)=F\(n-1\)+F\(n-2\)

```text
def fib(n):
    if n == 0 or n == 1:
        return n
    return fib(n-1) + fib(n-2)



>>> def fib(n):
...     if n == 0 or n ==1:
...             return n
...     return fib(n-1) + fib(n-2)
...
>>> fib(1)
1
>>> fib(0)
0
>>> fib(2)
1
>>> fib(3)
2
>>> fib(4)
3
>>> fib(5)
5
>>> fib(6)
8
>>>
```

