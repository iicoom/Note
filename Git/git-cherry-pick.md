[Git cherry-pick 这个命令你会经常用到！](https://zhuanlan.zhihu.com/p/90816644)

git cherry-pick可以理解为”挑拣”提交，它会获取某一个分支的单笔提交，并作为一个新的提交引入到你当前分支上。当我们需要在本地合入其他分支的提交时，
如果我们不想对整个分支进行合并，而是只想将某一次提交合入到本地当前分支上，那么就要使用git cherry-pick了。

```
git cherry-pick [<options>] <commit-ish>...

常用options:
    --quit                退出当前的chery-pick序列
    --continue            继续当前的chery-pick序列
    --abort               取消当前的chery-pick序列，恢复当前分支
    -n, --no-commit       不自动提交
    -e, --edit            编辑提交信息
```

## git cherry-pick commitid
在本地仓库中，有两个分支:branch1和branch2，我们先来查看各个分支的提交：
```
# 切换到branch2分支
$ git checkout branch2
Switched to branch 'branch2'


# 查看最近三次提交
$ git log --oneline -3
23d9422 [Description]:branch2 commit 3
2555c6e [Description]:branch2 commit 2
b82ba0f [Description]:branch2 commit 1


# 切换到branch1分支
$ git checkout branch1
Switched to branch 'branch1'


# 查看最近三次提交
$ git log --oneline -3
20fe2f9 commit second
c51adbe commit first
ae2bd14 commit 3th
```

现在，我想要将branch2分支上的第一次提交内容合入到branch1分支上，则可以使用git cherry-pick命令：
```
$ git cherry-pick 2555c6e
error: could not apply 2555c6e... [Description]:branch2 commit 2
hint: after resolving the conflicts, mark the corrected paths
hint: with 'git add <paths>' or 'git rm <paths>'
hint: and commit the result with 'git commit'

当cherry-pick时，没有成功自动提交，这说明存在冲突，因此首先需要解决冲突,解决冲突后需要git commit手动进行提交：

$ git commit
[branch1 790f431] [Description]:branch2 commit 2
 Date: Fri Jul 13 18:36:44 2018 +0800
 1 file changed, 1 insertion(+)
 create mode 100644 only-for-branch2.txt
```