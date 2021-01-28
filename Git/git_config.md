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