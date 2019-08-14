# git\_workflow

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

Release分支可能从develop分支分离而来，但是一定要合并到develop和master分支上，它的习惯命名方式为：release-\*

Release分支是为新产品的发布做准备的。它允许我们在最后时刻做一些细小的修改。他们允许小bugs的修改和准备发布元数据（版本号，开发时间等等）。当在Release分支完成这些所有工作以后，对于下一次的发布，develop分支接收features会更加明确。

已经把feature 合并到develop

从develop分支创建新的Release分支的关键时刻是develop分支达到了发布的理想状态。至少所有这次要发布的features必须在这个点及时合并到develop分支。对于所有未来准备发布的features必须等到Release分支创建以后再合并。

创建一个release分支

Release分支是从develop分支创建的。例如，当前产品的发行版本号为1.1.5，同时我们有一个大的版本即将发行。develop 分支已经为下次发行做好了准备，我们得决定下一个版本是1.2（而不是1.1.6或者2.0）。所以我们将Release分支分离出来，给一个能够反映新版本号的分支名。

```text
git checkout -b release-1.2 develop
```

创建新分支以后，切换到该分支，添加版本号。这里，bump-version.sh 是一个虚构的shell脚本，它可以复制一些文件来反映新的版本（这当然可以手动改变目的就是修改一些文件）。然后版本号被提交。 package.json version

这个新分支可能会存在一段时间，直到该发行版到达它的预定目标。在此期间，bug的修复可能被提交到该分支上（而不是提交到develop分支上）。在这里严格禁止增加大的新features。他们必须合并到develop分支上，然后等待下一次大的发行版。

**完成一个release分支**

当一个release分支准备好成为一个真正的发行版的时候，有一些工作必须完成。首先，release分支要合并到master上（因为每一次提交到master上的都是一个新定义的发行版，记住）。然后，提交到master上必须打一个标签，以便以后更加方便的引用这个历史版本。最后，在release分支上的修改必须合并到develop分支上，以便未来发行版也包含这些bugs的修复。

```text
$ git checkout master
Switched to branch master
$ git merge --no-ff release-1.2
Merge made <a href="http://www.wuseyun.com/htmldata/tag/11/by.html">by</a> recursive.
(Summary of changes)

$ git tag -a 1.2
```

现在我们真正的完成了，这个release分支将被删除，因为我们不再需要它了。

```text
$ git branch -d release-1.2
Dele<a href="http://www.wuseyun.com/htmldata/tag/46/TED.html">TED</a> branch release-1.2 (was ff452fe).
```

## Hotfix

可以基于master分支，必须合并回develop和master分支。 分支名约定：hotfix-\*

热修复分支与发布分支很相似，他们都为新的生产环境发布做准备，尽管这是未经计划的。他们来自当生成环境验证缺陷必须马上修复，热修复分支可以基于master分支上,对应于线上版本的tag创建。

其本质是团队成员（在develop分支上）的工作可以继续，而另一个人准备生产环境的快速修复。

hotfix branch\(修补bug分支\)是从Master分支上面分出来的。例如，1.2版本是当前生产环境的版本并且有bug。但是开发分支（develop）变化还不稳定。我们需要分出来一个修补bug分支（hotfix branch）来解决这种情况。

```text
$ git checkout -b hotfix-1.2.1 master
Switched to a new branch "hotfix-1.2.1"
$ ./bump-version.sh 1.2.1
Files modified suc<a href="http://www.wuseyun.com/htmldata/tag/11/CES.html">CES</a>sfully, version bumped to 1.2.1.
$ git commit -a -m "Bumped version number to 1.2.1"
[hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1
1 files changed, 1 insertions(+), 1 deletions(-)
```

分支关闭的时侯不要忘了更新版本号\(bump The version\)

然后，修复bug，一次提交或者多次分开提交。 $ git commit -m "Fixed severe production problem" \[hotfix-1.2.1 abbe5d6\] Fixed severe production problem 5 files changed, 32 insertions\(+\), 17 deletions\(-\)

完成一个hotfix分支

完成一个bugfix之后，需要把butfix合并到master和develop分支去，这样就可以保证修复的这个bug也包含到下一个发行版中。这一点和完成release分支很相似。

首先，更新master并对release打上tag：

```text
$ git checkout master
Switched to branch master
$ git merge --no-ff hotfix-1.2.1
Merge made <a href="http://www.wuseyun.com/htmldata/tag/11/by.html">by</a> recursive.
(Summary of changes)
$ git tag -a 1.2.1
```

编辑：你可能也会想使用 -sor-u 参数来对你的tag进行加密

下一步，把bugfix添加到develop分支中：

```text
$ git checkout develop
Switched to branch develop
$ git merge --no-ff hotfix-1.2.1
Merge made <a href="http://www.wuseyun.com/htmldata/tag/11/by.html">by</a> recursive.
(Summary of changes)
```

规则的一个例外是： 如果一个release分支已经存在，那么应该把hotfix合并到这个release分支，而不是合并到develop分支。当release分支完成后， 将bugfix分支合并回release分支也会使得bugfix被合并到develop分支。（如果在develop分支的工作急需这个bugfix，等不到release分支的完成，那你也可以把bugfix合并到develop分支）

最后，删除临时分支：

```text
$ git branch -d hotfix-1.2.1
Dele<a href="http://www.wuseyun.com/htmldata/tag/46/TED.html">TED</a> branch hotfix-1.2.1 (was abbe5d6).
```

## 使用图形工具的工作流SourceTree

### 开发前master和develop是保持一致的

### 然后为下一个版本做准备

例如：从develop上checkout出feature 1. 选定到develop上 点击Git工作流，首先按默认设置初始化 2. 再次点击 选择推荐动作 选择 建立新的功能 3. 然后就在feature上开发，直到开发完成 4. 开发完成在feature分支即可完成（Git工作流中完成功能）,即可自动跳转到并合并到develop上。 5. 在develop上 Git工作流--建立新版本--填写版本号 会自动切换到release分支上 6. 此时可以在发布到生产环境前做最后的测试，如果有Bug 就可以在release上进行修复，提交代码 7. release上测试通过，此时可修改下版本信息。 Git工作流--完成--填写这个版本发布的标签 作为版本记录 8. 完成后自动把 release合并到master上，并会自动从 master上push一份最新代码到 develop上以供下次开发 9. 生产环境出现问题，master分支上 Git工作流--建立hotfix 分支 填写修复版本号，对应发布版本号 10. Hotfix修复完成后，Git工作流--完成项目--填写修复的标签记录，然后自动将hotfix分支合并到master上，并且会自动合并hotfix到develop上

## 软件的版本号是如何确定的？

一般来讲大部分的软件版本号分3段，比如 A.B.C A 表示大版本号，一般当软件整体重写，或出现不向后兼容的改变时，增加A，A为零时表示软件还在开发阶段。 B 表示功能更新，出现新功能时增加B C 表示小修改，如修复bug，只要有修改就增加C除了版本号之外还会有一些修饰的词，比如： alpha: 内部版本 beta: 测试版 rc: 即将作为正式版发布 lts: 长期维护但说实话，知名的项目没有几个是遵守上述规则的。商业软件完全取决于老板的意思，有时候还会配合宣传任意地来更改版本号。而历史悠久的开源项目，往往会有自己的规则，例如Linux用奇数版本表示开发板，偶数版本表示正式版等等。

## 我们是怎么做Code Review的

[https://www.cnblogs.com/wenhx/p/How-We-Code-Review.html](https://www.cnblogs.com/wenhx/p/How-We-Code-Review.html)

## Pull Request

[http://blog.jobbole.com/76854/](http://blog.jobbole.com/76854/)

## 持续集成是什么？

[http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html](http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)

