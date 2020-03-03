## Git Reset 三种模式
git reset 命令可以将当前的HEAD重置到特定的状态。
首先要搞清楚下面几个概念

- HEAD: HEAD就是指向当前分支当前版本的游标
- Index: Index即为暂存区，当你修改了你的git仓库里的一个文件时，这些变化一开始是unstaged状态，为了提交这些修改，你需要使用git add把它加入到index，使它成为staged状态。当你提交一个commit时，index里面的修改被提交。
- working tree: 即当前的工作目录。

```
git reset [<mode>] [<commit>]
```
  
常用的有三种模式，--soft, --mixed, --hard，如果没有给出<mode>则默认是--mixed
  
1. 使用 --soft参数将会仅仅重置HEAD到制定的版本，不会修改index和working tree
而本地文件的内容并没有发生变化，而index中仍然有最近一次提交的修改，这时执行git status会显示这些修改已经在再暂存区中了，无需再一次执行git add

2. 使用 --mixed参数与--soft的不同之处在于，--mixed修改了index，使其与第二个版本匹配。index中给定commit之后的修改被unstaged。

3. 使用 --hard同时也会修改working tree，也就是当前的工作目录，如果我们执行git reset --hard HEAD~，那么最后一次提交的修改，包括本地文件的修改都会被清楚，彻底还原到上一次提交的状态且无法找回。所以在执行reset --hard之前一定要小心

在sourceTree中操作，选定某次之前的提交，右击 重置当前分支到此次提交，选择 使用模式-对应上边三种

### 本地代码库回滚

git reset --hard commit-id :回滚到commit-id，讲commit-id之后提交的commit都去除

git reset --hard HEAD~3：将最近3次的提交回滚

### 远程代码库回滚

这个是重点要说的内容，过程比本地回滚要复杂

应用场景：自动部署系统发布后发现问题，需要回滚到某一个commit，再重新发布

原理：先将本地分支退回到某个commit，删除远程分支，再重新push本地分支

1. 在最新的一次提交执行
```
git revert
此时本地会落后于远程提交，然后使用
git push -f
强行推送到远程, 可以恢复到错误提交之前的状态，但是会产生一次无用的 revert 提交
```
2. 在本地先执行 git reset, 重置到某次提交
```
git reset --hard commitid
此时本地已经重置回之前的版本，出现落后于远程 几次 提交，此时远程的提交记录依然存在

不需要拉去落后版本，然后执行
git push -f
执行完成，远程之前的错误提交不见了，这个不安全的操作仅限操作自己的分支
```
3. 团队公有远程分支的回退
程序员A 在共有分支上进行2次提交，B进行一次提交, 如下：
A1-A2-B1
现在A发现 A2提交有误，团队成员现在都拉去了最新的远程提交，A执行了从B1回退到A1的操作，不仅A2的错误提交内容不见了，B1的提交也不见了
所以这顿操作很不安全，需要告知所有有关成员，做好自己分支的本分，需要在回到A1后，重新合并到共有分支。

[参考](https://www.cnblogs.com/Super-scarlett/p/8183348.html)

## git revert 【git】误提交回滚
使用git revert也能起到回退版本的作用，不同之处在于
- git revert <commit>会回退到<commit>之前的那次提交，比如git revert HEAD~3会回退到最近的第4个提交的状态，而不是第3个
- git revert会产生一个新的commit，将这次回退作为一次修改记录提交，这样的好处是不修改历史提交记录。

[参考](https://blog.csdn.net/bingleihenshang/article/details/80619004)

