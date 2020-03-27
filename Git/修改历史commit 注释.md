https://www.jianshu.com/p/098d85a58bf1

## Git 修改已提交的commit注释
### amend-只能修改最近一次-并且时本地未提交远程的
```
git commit --amend


最近提交

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Mar 27 19:57:32 2020 +0800
#
# On branch master
# Your branch is ahead of 'origin/master' by 1 commit.
#   (use "git push" to publish your local commits)
#
# Changes to be committed:
#       new file:   DataBase/mysql/SQL/IN.sql
#       deleted:    "Git/\344\277\256\346\224\271commit \346\263\250\351\207\212.md"
#       new file:   "Git/\344\277\256\346\224\271\345\216\206\345\217\262commit \346\263\250\351\207\212.md"
#       modified:   Interview/Design pattern/JS/Singleton.js
#
```
修改第9行 最近提交-   刷新发现已经修改成功


### git rebase + git remend 修改之前的提交
```
$ git log
commit d592c22e307fb1afaa349b273e463b3e9fb2d11d (HEAD -> master)
Author: Xiaojie Mao <maoxiaojie@nextjoy.com>
Date:   Fri Mar 27 20:05:01 2020 +0800

    修改最近一次提交成功

commit 804aa7aae7448e16871804ec51355ac0dec83729
Author: Xiaojie Mao <maoxiaojie@nextjoy.com>
Date:   Fri Mar 27 19:57:32 2020 +0800

    最近提交-

commit d8116ded642def99b0d1d5a30974b12d8480d6f6 (origin/master, origin/HEAD)
Author: Xiaojie Mao <maoxiaojie@nextjoy.com>
Date:   Thu Mar 26 21:30:13 2020 +0800

    ll
```
目标要修改 【commit 804aa7aae7448e16871804ec51355ac0dec83729】最近提交-  的提交注释

```
执行, 选前一次的节点
$ git rebase -i d8116ded642def99b0d1d5a30974b12d8480d6f6

出现下面vim

pick 804aa7aa 最近提交-
pick d592c22e 修改最近一次提交成功

# Rebase d8116ded..d592c22e onto d8116ded (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
#       However, if you remove everything, the rebase will be aborted.
#
#
# Note that empty commits are commented out

倒序提交 修改 pick 804aa7aa 最近提交-   前的pick为 e


:wq 保存退出


出现下面提示
Admin@MXJ-PC MINGW64 /e/Joy/Note (master)
$ git rebase -i d8116ded642def99b0d1d5a30974b12d8480d6f6
Stopped at 804aa7aa...  最近提交-
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue



执行git commit --amend 出现 vim，修改提交信息  :wq  保存退出

执行 git rebase --continue 出现下面 修改成功提示（需要重启sourceTree）

Admin@MXJ-PC MINGW64 /e/Joy/Note (master|REBASE-i 1/2)
  $ git rebase --continue
  Successfully rebased and updated refs/heads/master.

```