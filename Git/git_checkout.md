## 查看远程分支
```
git branch -r

origin/HEAD -> origin/master
  origin/develop
  origin/feature/#22
  origin/feature/#29
  origin/hotfix/#26
  origin/hotfix/#27
  origin/hotfix/2.1.1
```

### 拉去远程分支
```
要检出的本地分支名称feature/deleteContract  远程分支名称origin/feature/deleteContract
该方法会检出分支后自动切换到检出的分支
[xiaomao@iZ258wvzn92Z cloud_ranch]$ sudo git checkout -b feature/deleteContract origin/feature/deleteContract
[sudo] password for xiaomao:
Branch feature/deleteContract set up to track remote branch feature/deleteContract from origin.
Switched to a new branch 'feature/deleteContract'
[xiaomao@iZ258wvzn92Z cloud_ranch]$
```

## Checkout a specific commit
```
[xiaomao@iZ258wvzn92Z cloud_bin]$ sudo git checkout d848ed5e43577cb62622329c48ea3a5a15f25834

[sudo] password for xiaomao: 
error: You have local changes to 'routes/api/order.js'; cannot switch branches.

使用短id
Admin@MXJ-PC MINGW64 /e/Joy/server-s (experiment01)
$ git checkout e47a145
Note: switching to 'e47a145'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at e47a14551 KART-3698：新增任务类型

```

## Checkout an Existing Branch
```
git checkout BRANCH-NAME
```

## Checkout a New Branch
```
git checkout -b NEW-BRANCH-NAME
```
This will automatically switch you to the new branch.

## Force a Checkout
You can pass the -f or --force option with the git checkout command to force Git to switch branches, even if you have un-staged changes (in other words, the index of the working tree differs from HEAD). Basically, it can be used to throw away local changes.

When you run the following command, Git will ignore unmerged entries:
```
git checkout -f BRANCH-NAME

# Alternative
git checkout --force BRANCH-NAME
```
## Undo Changes in your Working Directory
You can use the git checkout command to undo changes you’ve made to a file in your working directory. This will revert the file back to the version in HEAD:

```
git checkout -- FILE-NAME
```


 
