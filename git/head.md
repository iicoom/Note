# HEAD

> [http://www.softwhy.com/article-8499-1.html](http://www.softwhy.com/article-8499-1.html)

## HEAD是什么:

HEAD是一个指针，通常情况下它可以将它与当前分支等同（其实它是指向当前分支）。

```text
git log --oneline
```

## 切换分支：

当前位于master，现在切换到Develop分支

现在再来查看HEAD文件的内容，代码如下： HEAD 指向了develop

也就是说HEAD通常会指向当前所在分支。

## detached HEAD：

当HEAD没有指向某个分支，而是指向一个commit，则会形成detached HEAD。

此概念会在单独一章节介绍，具体参阅Git detached HEAD介绍一章节。

