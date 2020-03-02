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

### 本地代码库回滚

git reset --hard commit-id :回滚到commit-id，讲commit-id之后提交的commit都去除

git reset --hard HEAD~3：将最近3次的提交回滚

### 远程代码库回滚

这个是重点要说的内容，过程比本地回滚要复杂

应用场景：自动部署系统发布后发现问题，需要回滚到某一个commit，再重新发布

原理：先将本地分支退回到某个commit，删除远程分支，再重新push本地分支



## git revert 【git】误提交回滚

使用git revert也能起到回退版本的作用，不同之处在于
- git revert <commit>会回退到<commit>之前的那次提交，比如git revert HEAD~3会回退到最近的第4个提交的状态，而不是第3个
- git revert会产生一个新的commit，将这次回退作为一次修改记录提交，这样的好处是不修改历史提交记录。

https://blog.csdn.net/bingleihenshang/article/details/80619004

