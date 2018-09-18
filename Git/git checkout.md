## git log 

commit 665c744ec46b062ba4da23d26f451e68eca3aeb9
Author: 朱浩 <zhuhao@yunfarm.cn>
Date:   Mon Sep 17 18:05:07 2018 +0800

    昨日收益调整

commit d848ed5e43577cb62622329c48ea3a5a15f25834
Merge: ed0f06c f459f9a
Author: 毛小杰 <maoxiaojie@yunfarm.cn>
Date:   Mon Sep 17 11:12:43 2018 +0800

    Merge branch 'master' into develop

## Checkout a specific commit
```
[xiaomao@iZ258wvzn92Z cloud_bin]$ sudo git checkout d848ed5e43577cb62622329c48ea3a5a15f25834

[sudo] password for xiaomao: 
error: You have local changes to 'routes/api/order.js'; cannot switch branches.
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


 