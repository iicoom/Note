https://www.jianshu.com/p/f7ed3dd0d2d8

[彻底搞懂 Git-Rebase](http://jartto.wang/2018/12/11/git-rebase/)

> 提交代码到到远程，被提示移除无用提交，应为远程使用了git hook, 使用git rebase 合并多次提交为一次

## 首先选择想要合并的提交的前一次提价 3f94aee
```
$ git rebase -i 3f94aee

1. 在出现的多次提交中 在需要前面pick 改为p, 需要压缩的pick 改为s
2. 接下来的页面 注释掉不需要的提交信息 留下一个需要的

git rebase --continue

git rebase --abort


会出现以下类似内容提示：
# This is a combination of 2 commits.
# This is the 1st commit message:

开发：GM 添加战力排行榜

# This is the commit message #2:

remove log

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Mar 20 20:28:51 2020 +0800
#
# interactive rebase in progress; onto 4322f1445
# Last commands done (4 commands done):
#    pick 9dd0da191 开发：GM 添加战力排行榜
#    squash 0045faa4c remove log
# No commands remaining.
# You are currently rebasing branch 'master' on '4322f1445'.
#
# Changes to be committed:
#       modified:   common/src/leaderboard/lib/service/client.js
#       modified:   common/src/leaderboard/lib/service/server/CombatLeaderboardService.js
#       modified:   config/protos/station.proto
#       modified:   gmtool/config/localization.csv
#       modified:   gmtool/logic/rankLogic.js
#       modified:   gmtool/routes/rankList.js
#       new file:   gmtool/views/combat_rank_item.ejs
#       modified:   gmtool/views/rank_tabs.ejs
#       new file:   station_server/remote/leaderboard/delCombatLeaderboardData.js


可以看出有2次提交分别为，【开发：GM 添加战力排行榜】【remove log】使用#注释掉不需要的  使用:wq保存
```
