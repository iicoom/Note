[Git官网](https://git-scm.com/docs)

## Branching and Merging
### HEAD
HEAD 就是当前活跃分支的游标。形象的记忆就是：你现在在哪儿，HEAD 就指向哪儿，所以 Git 才知道你在那儿！

不过 HEAD 并非只能指向分支的最顶端（时间节点距今最近的那个），实际上它可以指向任何一个节点，它就是 Git 内部用来追踪当前位置的东东。

HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。

我加一句 HEAD 就是你当前的工作目录所处的位置，可以用 checkout 命令改变 HEAD 指向的位置。注意 HEAD 不一定指向一个分支，也可以指向一个 commit

## GitHub的fork
[fork工作流](https://github.com/oldratlee/translations/blob/master/git-workflows-and-tutorials/workflow-forking.md)

## Release 分支
Release分支可能从develop分支分离而来，但是一定要合并到develop和master分支上，它的习惯命名方式为：release-*

Release分支是为新产品的发布做准备的。它允许我们在最后时刻做一些细小的修改。他们允许小bugs的修改和准备发布元数据（版本号，开发时间等等）。当在Release分支完成这些所有工作以后，对于下一次的发布，develop分支接收features会更加明确。

从develop分支创建新的Release分支的关键时刻是develop分支达到了发布的理想状态。至少所有这次要发布的features必须在这个点及时合并到develop分支。对于所有未来准备发布的features必须等到Release分支创建以后再合并。

创建一个release分支

Release分支是从develop分支创建的。例如，当前产品的发行版本号为1.1.5，同事我们有一个大的版本即将发行。develop 分支已经为下次发行做好了准备，我们得决定下一个版本是1.2（而不是1.1.6或者2.0）。所以我们将Release分支分离出来，给一个能够反映新版本号的分支名。

## Hotfix
