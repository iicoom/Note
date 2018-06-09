## git init

## 移除.git
ls -a
rm -rf .git

## 查看git用户配置
1. git config --list
```
credential.helper=osxkeychain
user.name=毛小杰
user.email=maoxiaojie@yunfarm.cn
core.excludesfile=/Users/mxj/.gitignore_global
difftool.sourcetree.cmd=opendiff "$LOCAL" "$REMOTE"
difftool.sourcetree.path=
```
2. 全局配置用户信息
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

3. 在当前git仓库配置用户信息
去掉--global

## 克隆远程仓库
```
git clone git@gitlab.m-touch.cn:cloud-ranch/cloud_ranch.git
```

## 同步本地新建的git仓库到远程
```
git commit -m 'first commit'
git remote add origin git@gitlab.m-touch.cn:cloud-ranch/order_consume.git
git push -u origin master
```
### 本地和远程仓库无法合并的问题
是由于不同的git操作历史造成的
```
➜  girl git:(master) git pull git@github.com:iicoom/girl.git
From github.com:iicoom/girl
 * branch            HEAD       -> FETCH_HEAD
fatal: refusing to merge unrelated histories

➜  girl git:(master) git pull git@github.com:iicoom/girl.git --allow-unrelated-histories

出现以下merge的提示：
Merge github.com:iicoom/girl

# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.

:q 退出

From github.com:iicoom/girl
 * branch            HEAD       -> FETCH_HEAD
Already up-to-date!
Merge made by the 'recursive' strategy.
```
### 移除与远程关联
git remote remove origin

### 建立和远程的关联
```
➜  girl git:(master) git remote add origin git@github.com:iicoom/girl.git
➜  girl git:(master) git pull
From github.com:iicoom/girl
 * [new branch]      master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=<remote>/<branch> master

这样做
➜  girl git:(master) git pull orign master
From github.com:iicoom/girl
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> orign/master
Already up-to-date.

➜  girl git:(master) git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

➜  girl git:(master) git push --set-upstream origin master
Counting objects: 31, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (23/23), done.
Writing objects: 100% (31/31), 48.80 KiB | 8.13 MiB/s, done.
Total 31 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
To github.com:iicoom/girl.git
   114db2b..9f90433  master -> master
Branch master set up to track remote branch master from origin.
```

### 查看本地git仓库信息
查看.git 中的config文件
```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
[user]
        name = Leo
        email = asdfpeng@qq.com
[remote "orign"]
        url = git@github.com:iicoom/girl.git
        fetch = +refs/heads/*:refs/remotes/orign/*
```


## 分支操作
### 查看远程仓库信息
```
[xiaomao@iZ258wvzn92Z cloud_ranch]$ git remote -v
origin	git@gitlab.m-touch.cn:cloud-ranch/cloud_ranch.git (fetch)
origin	git@gitlab.m-touch.cn:cloud-ranch/cloud_ranch.git (push)
如果没有推送权限就看不到psuh 地址
```

### 查看分支: 本地、远程、所有
```
git branch

  HEAD
  develop
  feature/new_feature
  hotfix/hotfix-1.0.1
* master


git branch -r

origin/HEAD -> origin/master
  origin/develop
  origin/feature/#22
  origin/feature/#29
  origin/hotfix/#26
  origin/hotfix/#27
  origin/hotfix/2.1.1


[xiaomao@iZ258wvzn92Z cloud_ranch]$ git branch -a
  develop
  feature/batchFeedingItem
  feature/campany_camera
  feature/checkNextOrder
* feature/verifyTime
  hotfix/5.0.42
  master
  release/5.0.34
  release/5.0.54
  remotes/origin/HEAD -> origin/master
  remotes/origin/develop
  remotes/origin/feature/#22
  remotes/origin/feature/#29
  remotes/origin/feature/VoiceCode
  remotes/origin/feature/WeiboPayWithRSA
  remotes/origin/hotfix/4.1.3
  remotes/origin/hotfix/4.1.4
  remotes/origin/hotfix/4.1.5
  remotes/origin/hotfix/4.1.6
  remotes/origin/iscroll_2
  remotes/origin/issue/#27
  remotes/origin/issue/#30
  remotes/origin/issue/#31
  remotes/origin/issue/#32
  remotes/origin/issue/#33
  remotes/origin/issue/#34
  remotes/origin/issue/countdown-and-unifylog
  remotes/origin/issue/withdraw-double-click
  remotes/origin/issues/#23
  remotes/origin/issues/#24
  remotes/origin/issues/#28
  remotes/origin/master
  remotes/origin/release/#31
  remotes/origin/release/2.4
  remotes/origin/release/2.4.3
  remotes/origin/release/2.5
  remotes/origin/release/3.0.0
  remotes/origin/release/3.1.0
 
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


拉取远程分支但不切换
git fetch origin feature/deleteContract:feature/deleteContract
```

### 推送本地分支到远程
```
➜  Note git:(master) ✗ git checkout -b feature/cli_fuck
M	Git/command.md
Switched to a new branch 'feature/cli_fuck'
➜  Note git:(feature/cli_fuck) ✗ git push
fatal: The current branch feature/cli_fuck has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/cli_fuck

与远程关联
git push --set-upstream origin feature/cli_fuck
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/iicoom/Note.git
 * [new branch]      feature/cli_fuck -> feature/cli_fuck
Branch feature/cli_fuck set up to track remote branch feature/cli_fuck from origin.
```

### 删除分支
```
删除本地分支：
git branch -d HEAD

Deleted branch HEAD (was 8ba8409).


git branch -D feature/exchange

删除远程分支：
➜  Note git:(feature/cli_fuck) ✗ git branch -r
 origin/HEAD -> origin/master
  origin/develop
  origin/feature/cli_fuck
  origin/feature/new_feature
  origin/hotfix/hotfix-1.0.1
  origin/hotfix/hotfix-1.0.2
  origin/master
  origin/release/release-1.0
➜  Note git:(feature/cli_fuck) ✗ git branch -r -d origin/feature/cli_fuck
Deleted remote-tracking branch origin/feature/cli_fuck (was f51e08c).
```

### 查看当前分支状态
```
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

➜  Note git:(feature/cli_fuck) ✗ git add -A
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   Git/command.md

commit:
➜  Note git:(feature/cli_fuck) ✗ git commit -m "just a fuck feature"
[feature/cli_fuck 42c4d8d] just a fuck feature
 1 file changed, 55 insertions(+)


➜  tool git:(master) ✗ git commit -am "video"
[master d5d9717] video
 1 file changed, 1 insertion(+), 1 deletion(-)
```

### 切换分支，合并分支，解决冲突
```
➜  Note git:(master) ✗ git merge feature/cli_fuck
出现冲突提示：
Auto-merging Git/command.md
CONFLICT (content): Merge conflict in Git/command.md
Automatic merge failed; fix conflicts and then commit the result.

到冲突文件Git/command.md查看，如下：

```

从<<<<<<< HEAD开始到=========之上，是当前所在分支的文档内容，
从===========到>>>>>>> feature/cli_fuck是要合并的分支内容，决定留下一个即可

修改后需要提交当前文件的改变，然后再次合并
➜  Note git:(master) ✗ git add -A
➜  Note git:(master) ✗ git commit -m "fix conflicts"
[master 61369d2] fix conflicts
➜  Note git:(master) git merge feature/cli_fuck
Already up-to-date.

如下是冲突文件标记：
<<<<<<< HEAD
```

查看当前分支状态
```
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

➜  Note git:(feature/cli_fuck) ✗ git add -A
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   Git/command.md

commit:
➜  Note git:(feature/cli_fuck) ✗ git commit -m "just a fuck feature"
[feature/cli_fuck 42c4d8d] just a fuck feature
 1 file changed, 55 insertions(+)
```

### 切换分支，合并分支



=======
```

查看当前分支状态
```
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

➜  Note git:(feature/cli_fuck) ✗ git add -A
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   Git/command.md

commit:
➜  Note git:(feature/cli_fuck) ✗ git commit -m "just a fuck feature"
[feature/cli_fuck 42c4d8d] just a fuck feature
 1 file changed, 55 insertions(+)
>>>>>>> feature/cli_fuck
```

## 提交相关操作
### git log
```
commit 9c899f2a3ff4e3fae10683b8ed20932eba3e71e2 (HEAD -> master, origin/master, origin/HEAD)
Author: Leo <asdfpeng@qq.com>
Date:   Sun Apr 8 18:28:51 2018 +0800

    statistic

commit f26aca9fbaa39b34374e930246f2b51b0a3d4f46
Author: Leo <asdfpeng@qq.com>
Date:   Mon Apr 2 13:57:58 2018 +0800

    token

commit 60f7c3c3d8be21f5510d86187906753cb02d5ec6
Author: Leo <asdfpeng@qq.com>
Date:   Fri Mar 30 11:06:29 2018 +0800

    statistics
```
按q退出

### stage files
git add .
或
git add -A

### commit
git commit -m "comments"

### git commit -m 与 git commit -am 的区别
当修改已经通过git add <change file>将其添加到stage，可以通过git commit -m "<message>"为这所有已经进入stage的改变添加一个commit信息。什么是在stage中？

如果你的文件之前已经提交过，但这次的改动还没有进stage
可以直接使用git commit -am "<message>"，将所有修改，但未进stage的改动加入stage，并记录commit信息。

### git checkout .
丢弃文件修改







