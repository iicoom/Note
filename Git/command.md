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
### 查看分支
```
git branch

  HEAD
  develop
  feature/new_feature
  hotfix/hotfix-1.0.1
* master
```

### 删除分支
```
git branch -d HEAD

Deleted branch HEAD (was 8ba8409).
```