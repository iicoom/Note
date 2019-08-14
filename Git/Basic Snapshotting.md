## git status
显示当前已经变更了的文件

## git add
git add -a
Add file contents to the index

## git commit 
git commit -m "some feature"

## git log

```
git log 显示简要信息(作者、分支、时间、提交说明Show commit logs)：

commit b0ee813aa4d66210e973f79dca46f12ade83a6f9 (HEAD -> develop, origin/develop)
Author: fyibmsd <fyibmsd@gmail.com>
Date:   Fri Dec 28 17:26:48 2018 +0800

    点评数据展示

commit bf52729756f52a5924e27cb28d7e0a13a53be8b6 (origin/master, origin/HEAD, master)
Merge: 421ad6e f71feb0
Author: MXJ <maoxiaojie@fnxy.net.cn>
Date:   Thu Dec 27 16:23:08 2018 +0800

    Merge branch 'feature/autoseq' into develop

commit f71feb0f61c3ba6c328903523f02d0875149206a (feature/autoseq)
Author: MXJ <maoxiaojie@fnxy.net.cn>
Date:   Thu Dec 27 16:22:41 2018 +0800

    ppt 自动排序

commit 399445e58cdfcde799ebbe44afe51da732580788
Author: MXJ <maoxiaojie@fnxy.net.cn>
Date:   Wed Dec 26 19:09:34 2018 +0800

    autoseq ppt

commit 421ad6e365dd4a646382a668aed4cd2aa08c6a05
Author: MXJ <maoxiaojie@fnxy.net.cn>
Date:   Tue Dec 25 18:29:37 2018 +0800

    entrylist add name column


git log --stat(展示更详细的文件变动数量、增减信息)

commit b0ee813aa4d66210e973f79dca46f12ade83a6f9 (HEAD -> develop, origin/develop)
Author: fyibmsd <fyibmsd@gmail.com>
Date:   Fri Dec 28 17:26:48 2018 +0800

    点评数据展示

 config/router.config.js             |   5 +++++
 src/locales/zh-CN.js                |   3 ++-
 src/pages/Dashboard/Comments.js     | 161 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 src/pages/Dashboard/models/chart.js |  32 +++++++++++++++++++++++++++++++
 src/services/analyses.js            |   4 ++++
 5 files changed, 204 insertions(+), 1 deletion(-)

commit bf52729756f52a5924e27cb28d7e0a13a53be8b6 (origin/master, origin/HEAD, master)
Merge: 421ad6e f71feb0
Author: MXJ <maoxiaojie@fnxy.net.cn>
Date:   Thu Dec 27 16:23:08 2018 +0800

    Merge branch 'feature/autoseq' into develop

commit f71feb0f61c3ba6c328903523f02d0875149206a (feature/autoseq)
Author: MXJ <maoxiaojie@fnxy.net.cn>
Date:   Thu Dec 27 16:22:41 2018 +0800

    ppt 自动排序

 src/pages/Library/LessonAdd.js | 82 +++++++++++++++++++++++++++++++++++++++++++++++-----------------------------------
 1 file changed, 47 insertions(+), 35 deletions(-)

commit 399445e58cdfcde799ebbe44afe51da732580788
Author: MXJ <maoxiaojie@fnxy.net.cn>


我们常用 -p 选项展开显示每次提交的内容差异，用 -2 则仅显示最近的两次更新
$ git log -p -2

控制输出样式
$ git log --pretty=oneline 展示更多内容

b0ee813aa4d66210e973f79dca46f12ade83a6f9 (HEAD -> develop, origin/develop) 点评数据展示
bf52729756f52a5924e27cb28d7e0a13a53be8b6 (origin/master, origin/HEAD, master) Merge branch 'feature/autoseq' into develop
f71feb0f61c3ba6c328903523f02d0875149206a (feature/autoseq) ppt 自动排序
399445e58cdfcde799ebbe44afe51da732580788 autoseq ppt
421ad6e365dd4a646382a668aed4cd2aa08c6a05 entrylist add name column
b3fad95ebf71bec079501bbca2eec89a90c8fb36 Merge branch 'develop' of ssh://git.fnxy.net.cn:10022/fnxy_admin/yasuo-frontend into develop
eab804af252d7631a66471edecd8f63c39f5e1e1 roadmap  nav btn
a5f509bffb752050124b4a14b7bb4d3ea9c26a3e update antd

```

## git diff
git diff master develop 对比2个分支之间的变化
```
diff --git a/config/router.config.js b/config/router.config.js
index 04b243d..2b098e3 100644
--- a/config/router.config.js
+++ b/config/router.config.js
@@ -41,6 +41,11 @@ export default [
             name: 'workplace',
             component: './Dashboard/Workplace',
           },
+          {
+            path: 'comments',
+            name: 'comments',
+            component: './Dashboard/Comments',
+          },
         ],
       },
 
diff --git a/src/locales/zh-CN.js b/src/locales/zh-CN.js
index 9d337c4..e664022 100644
--- a/src/locales/zh-CN.js
+++ b/src/locales/zh-CN.js
@@ -78,10 +78,11 @@ export default {
   'component.noticeIcon.cleared': '清空了',
   'component.noticeIcon.empty': '暂无数据',
   'menu.home': '首页',
-  'menu.dashboard': 'Dashboard',
+  'menu.dashboard': '数据面板',
   'menu.dashboard.analysis': '分析页',
   'menu.dashboard.monitor': '监控页',
   'menu.dashboard.workplace': '工作台',
+  'menu.dashboard.comments': '点评',
   'menu.components': '组件库',

git diff HEAD^  与上次 commit 之间的差别


```

## reset
git-reset - Reset current HEAD to the specified state

git reset [<mode>] [<commit>]

This form resets the current branch head to <commit> and possibly updates the index (resetting it to the tree of <commit>) and the working tree depending on <mode>. If <mode> is omitted, defaults to "--mixed". The <mode> must be one of the following:
--soft
Does not touch the index file or the working tree at all (but resets the head to <commit>, just like all modes do). This leaves all your changed files "Changes to be committed", as git status would put it.

--mixed
Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated. This is the default action.

If -N is specified, removed paths are marked as intent-to-add (see git-add[1]).

--hard
Resets the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.

--merge
Resets the index and updates the files in the working tree that are different between <commit> and HEAD, but keeps those which are different between the index and working tree (i.e. which have changes which have not been added). If a file that is different between <commit> and the index has unstaged changes, reset is aborted.

In other words, --merge does something like a git read-tree -u -m <commit>, but carries forward unmerged index entries.

--keep
Resets index entries and updates files in the working tree that are different between <commit> and HEAD. If a file that is different between <commit> and HEAD has local changes, reset is aborted.