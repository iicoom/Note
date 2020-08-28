> working directory

## git stash
Use git stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit.
记录当前工作区的状态和index, 可以保存你当前的修改, 回到clean working directory的状态, 恢复提交和HEAD保持一致。

### git stash(贮藏) 常用命令
- git stash push: Calling git stash without any arguments is equivalent to git stash push
- git stash list：The modifications stashed away by this command can be listed with git stash list
    ```
    Zhong@LAPTOP-S26GFGQ7 MINGW64 /d/Work/crm-api (b2.0.0)
    $ git stash list
    stash@{0}: WIP on b2.0.0: 7f57b6f 配置到款账户
    stash@{1}: WIP on b2.0.0: fd9cadb 业绩汇总
    stash@{2}: WIP on b2.0.0: cb256a6 开发 详细渠道
    ```
- git stash pop：Remove a single stashed state from the stash list and apply it on top of the current working tree state, i.e., do the inverse operation of git stash push. Applying the state can fail with conflicts; in this case, it is not removed from the stash list. You need to resolve the conflicts by hand and call git stash drop manually afterwards.
- git stash drop: Remove a single stash entry from the list of stash entries.
    ```
    $ git stash drop

    Zhong@LAPTOP-S26GFGQ7 MINGW64 /d/Work/crm-api (b2.0.0)
    $ git stash list
    stash@{1}: WIP on b2.0.0: fd9cadb 业绩汇总
    stash@{2}: WIP on b2.0.0: cb256a6 开发 详细渠道
    ```
- git stash clear: Remove all the stash entries. Note that those entries will then be subject to pruning, and may be impossible to recover (see Examples below for a possible strategy).

### [git stash 使用场景](https://git-scm.com/docs/git-stash)

- 解决冲突

    When you are in the middle of something, you learn that there are upstream changes that are possibly relevant to what you are doing. When your local changes do not conflict with the changes in the upstream, a simple git pull will let you move forward.
    当你本地要提交的修改和远程相比不是最新时,而且意识到远程修改和你的修改相关, 那很有可能就会产生冲突,如果没有冲突你就直接git pull

    However, there are cases in which your local changes do conflict with the upstream changes, and git pull refuses to overwrite your changes. In such a case, you can stash your changes away, perform a pull, and then unstash, like this:
    冲突发生时，git stash就派上用场
    ```
    $ git pull
    ...
    file foobar not up to date, cannot merge.
    $ git stash
    $ git pull
    $ git stash pop
    ```
- Interrupted workflow 被打断的工作流
    你的老板让你停下手头的工作,立刻修复一个线上的bug,你的操作可能如下：
    ```
    $ git switch -c my_wip
    $ git commit -a -m "WIP"
    $ git switch master
    $ edit emergency fix
    $ git commit -a -m "Fix in a hurry"
    $ git switch my_wip
    $ git reset --soft HEAD^
    # ... continue hacking ...
    ```
    把当前工作保存到其他分支，切回主分支修改bug.修改完成，再切回保存的分支恢复
    
    可以用git stash简化上边的操作流程：
    ```
    $ git stash
    $ edit emergency fix
    $ git commit -a -m "Fix in a hurry"
    $ git stash pop
    # ... continue hacking ...
    ```