> 树是一种抽象数据类型（ADT）或是实现这种抽象数据类型的数据结构，用来模拟具有树状结构性质的数据集合。
> 它是由 n(n>0)n(n>0) 个有限节点组成一个具有层次关系的集合。

把它叫做「树」是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。

它具有以下的特点：

- 每个节点都只有有限个子节点或无子节点；
- 没有父节点的节点称为根节点；
- 每一个非根节点有且只有一个父节点；
- 除了根节点外，每个子节点可以分为多个不相交的子树；
- 树里面没有环路。

https://www.geeksforgeeks.org/binary-tree-set-1-introduction/

Trees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
树:与线性数据结构的数组、链表、堆栈和队列不同，树是分层数据结构。

Tree Vocabulary: The topmost node is called root of the tree. The elements that are directly under an element are called its children. 
The element directly above something is called its parent. For example, ‘a’ is a child of ‘f’, and ‘f’ is the parent of ‘a’. 
Finally, elements with no children are called leaves.
树词汇表:最上面的节点称为树的根。直接位于元素下面的元素称为元素的子元素。
直接位于某元素之上的元素称为其父元素。例如，a是f的子结点，f是a的父结点。
最后，没有子元素的元素称为叶子。

```
      tree
      ----
       j    <-- root
     /   \
    f      k  
  /   \      \
 a     h      z    <-- leaves 
```

## Why Trees?
- One reason to use trees might be because you want to store information that naturally forms a hierarchy. 
  For example, the file system on a computer:
- Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).
  树(带有一些排序，例如BST)提供适度的访问/搜索(比链表快，比数组慢)。
- Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).
  树提供适度的插入/删除(比数组快，比无序链表慢)。
- Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.
  与链表和数组不同，树对节点的数量没有上限，因为节点是使用指针链接的。