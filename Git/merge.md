> 在很多介绍GItFlow工作流的文章里面，都会推荐在合并分支的时候加上--no-ff参数

## git merge和git merge --no-ff的区别
```
--ff
When the merge resolves as a fast-forward, only update the branch pointer, without creating a merge commit. 
This is the default behavior.

--no-ff
Create a merge commit even when the merge resolves as a fast-forward. 
This is the default behaviour when merging an annotated (and possibly signed) tag.

--squash
--no-squash
Produce the working tree and index state as if a real merge happened (except for the merge information), 
but do not actually make a commit, move the HEAD, or record $GIT_DIR/MERGE_HEAD 
(to cause the next git commit command to create a merge commit). 
This allows you to create a single commit on top of the current branch whose effect is the same as
merging another branch (or more in case of an octopus).

With --no-squash perform the merge and commit the result. This option can be used to override --squash.
```

而我们平常什么都不加的时候，则使用默认的 --ff ， 即 fast-forward 方式

通常我们把 master 作为主分支，上面存放的都是比较稳定的代码，提交频率也很低，而 develop 是用来开发特性的，上面会存在许多零碎的提交，
快进式合并会把 develop 的提交历史混入到 master 中，搅乱 master 的提交历史。
所以如果你根本不在意提交历史，也不爱管 master 干不干净，那么 –no-ff 其实没什么用。
不过，如果某一次 master 出现了问题，你需要回退到上个版本的时候，比如上例，你就会发现退一个版本到了 commint-3，而不是想要的 commit-2，
因为 feature 的历史合并进了 master 里。这也就是很多人都会推荐 –no-ff 的原因了吧。
