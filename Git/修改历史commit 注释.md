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




