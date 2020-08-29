## install
[起步 - 安装 Git](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

### 在 Linux 上安装
如果要在 Linux 上安装预编译好的 Git 二进制安装包，可以直接用系统提供的包管理工具。在 Fedora 上用 yum 安装：
```
$ yum install git-core
```

### 在 Ubuntu 这类 Debian 体系的系统上，可以用 apt-get 安装：
```
$ apt-get install git
```

### 在 Mac 上安装
（译注：还有一种是使用 homebrew（https://github.com/mxcl/homebrew）：brew install git。）

### 在 window 上安装
直接下载官网安装程序
https://git-scm.com/download/win


## git init（初始化一个repository）
一般借助github或者gitlab这样的网页服务很容易创建, 创建完成clone, 添加代码提交即可

### 克隆远程仓库
```
git clone git@gitlab.m-touch.cn:cloud-ranch/cloud_ranch.git

默认为为仓库名cloud-ranch, 可以重命名
git clone git@gitlab.m-touch.cn:cloud-ranch/cloud_ranch.git new_project_name
```

但是如果要本地初始化一个仓库,然后关联到远程就比较麻烦了, 而且同样需要在远程创建仓库：
### 同步本地新建的git仓库到远程
```
git commit -m 'first commit'
git remote add origin git@gitlab.m-touch.cn:cloud-ranch/order_consume.git
git push -u origin master
```
一般不要这么做，会出现文件不同步的问题，参考文档末尾

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

4. sourceTree 右上角设置 高级设置针对当前仓库的用户信息

### 查看本地git仓库信息
查看.git 中的config文件 输入命令git config -l即可，输入git config 会给出命令行参数提示
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

## 常见问题
### [root@cache cloud-ranch-v2]# git pull
You are not currently on a branch, so I cannot use any
'branch.<branchname>.merge' in your configuration file.

git checkout master 或检出任意别的分支即可


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

### git fetch / git pull




