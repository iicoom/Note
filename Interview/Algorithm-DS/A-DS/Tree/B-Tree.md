https://www.geeksforgeeks.org/introduction-of-b-tree-2/

> B-Tree is a self-balancing search tree. In most of the other self-balancing search trees (like AVL and Red-Black Trees), it is assumed that everything is in main memory. To understand the use of B-Trees, we must think of the huge amount of data that cannot fit in main memory. When the number of keys is high, the data is read from disk in the form of blocks. Disk access time is very high compared to the main memory access time. The main idea of using B-Trees is to reduce the number of disk accesses. Most of the tree operations (search, insert, delete, max, min, ..etc ) require O(h) disk accesses where h is the height of the tree. 
> b树是一种自平衡搜索树。在大多数其他自平衡搜索树(如AVL和红黑树)中，假设所有内容都在主存中。要理解b树的使用，我们必须考虑到无法装入主存的大量数据。当键数很高时，数据以块的形式从磁盘读取。磁盘访问时间相比于主内存访问时间是非常高的。使用b树的主要思想是减少磁盘访问次数。树的大部分操作(搜索、插入、删除、最大、最小、..)等)需要O(h)次磁盘访问，其中h是树的高度。

```
SR. NO.	   ALGORITHM  	TIME  COMPLEXITY
1.	        Search	        O(log n)
2.	        Insert	        O(log n)
3.	        Delete	        O(log n)
```
“n” is the total number of elements in the B-tree.

在讲B+树之前必须先了解二叉查找树、平衡二叉树（AVLTree）和平衡多路查找树（B-Tree），B+树即由这些树逐步优化而来。
## B+tree
B+Tree是在B-Tree基础上的一种优化，使其更适合实现外存储索引结构，InnoDB存储引擎就是用B+Tree实现其索引结构。