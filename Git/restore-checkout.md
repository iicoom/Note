## git restore filename
重置单个未 git add 的文件
```
D:\Work\crm-api>git restore src/controller/stats.js
```

## 重置多个文件
```
git checkout .
```

## Git操作删除 untracked files
有时发现上边的git checkout . 并不能丢弃掉文件，需要使用 git clean

1. 删除 untracked files： git clean -f
2. 连 untracked 的目录也一起删掉： git clean -fd

## git restore --staged
```
D:\chong\api>git status
On branch dev
Your branch is behind 'origin/dev' by 11 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   src/main/java/com/zhonghe/api/controller/StudentController.java
        new file:   src/main/java/com/zhonghe/api/service/userim/StudentService.java


D:\chong\api>git pull
error: Your local changes to the following files would be overwritten by merge:
        src/main/java/com/zhonghe/api/service/userim/StudentService.java
Please commit your changes or stash them before you merge.
Aborting
Updating b2449f2..dea4d51


// 执行
D:\chong\api>git restore --staged src/main/java/com/zhonghe/api/controller/StudentController.java
D:\chong\api>git restore --staged src/main/java/com/zhonghe/api/service/userim/StudentService.java

D:\chong\api>git status
On branch dev
Your branch is behind 'origin/dev' by 11 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/main/java/com/zhonghe/api/controller/StudentController.java
        src/main/java/com/zhonghe/api/service/userim/StudentService.java


D:\chong\api>git clean -f
Removing src/main/java/com/zhonghe/api/controller/StudentController.java
Removing src/main/java/com/zhonghe/api/service/userim/StudentService.java
```

### 恢复被删除的文件或目录
```
D:\Work\crm-api>git status
On branch b2.5.1
Your branch is up to date with 'origin/b2.5.1'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    src/test/index.test.js
        deleted:    src/test/tests/account.js
        deleted:    src/test/tests/admin.js

先重置
D:\Work\crm-api>git restore --staged src/test/*

查看状态
D:\Work\crm-api>git status
On branch b2.5.1
Your branch is up to date with 'origin/b2.5.1'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    src/test/index.test.js
        deleted:    src/test/tests/account.js
        deleted:    src/test/tests/admin.js

然后就可以git checkout .

D:\Work\crm-api>git checkout .
Updated 26 paths from the index

再次查看状态，文件都被恢复
D:\Work\crm-api>git status
On branch b2.5.1
Your branch is up to date with 'origin/b2.5.1'.

nothing to commit, working tree clean

```
