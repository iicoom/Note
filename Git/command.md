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

## 分支操作
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
[xiaomao@iZ258wvzn92Z cloud_ranch]$ sudo git checkout -b feature/deleteContract origin/feature/deleteContract
[sudo] password for xiaomao:
Branch feature/deleteContract set up to track remote branch feature/deleteContract from origin.
Switched to a new branch 'feature/deleteContract'
[xiaomao@iZ258wvzn92Z cloud_ranch]$
```

### 删除分支
```
git branch -d HEAD

Deleted branch HEAD (was 8ba8409).
```




