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
```

### git log --pretty=oneline
```
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


$ git log --oneline -3
04e7ec45 (HEAD -> master, origin/master, origin/HEAD) 修改历史未推到远程的记录
3cfbe44e 修改最近一次提交成功
ef146775 最近提交---
```

### git log --stat(展示更详细的文件变动数量、增减信息)
```
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
```