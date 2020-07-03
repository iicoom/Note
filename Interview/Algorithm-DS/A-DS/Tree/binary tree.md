> 元素最多有2个子元素的树称为二叉树。由于二叉树中的每个元素只能有2个子元素，我们通常将它们命名为left和right子元素。

![oo](https://www.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png)

A Binary Tree node contains following parts.

- ata
- ointer to left child
- ointer to right child

## 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。


示例：
给定二叉树 [3,9,20,null,null,15,7]，
```
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。

