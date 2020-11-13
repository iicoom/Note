## Tag
### command line
```
0 .查看帮助文档
git tag -h

1. 查看tag列表 最简单的 git tag，可以带上 -l
git tag -l

D:\Work\crm-web>git tag -l
qa-crm0624
qa-crm0628
qa-crm06290911
qa-crm06291147
qa-crm06291650
qa-crm06292043

2. 创建标签：Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）
轻量：创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要提供标签名字：

附注：
$ git tag -a v1.4 -m "my version 1.4"
$ git tag
v0.1
v1.3
v1.4

$ git show v1.4
tag v1.4
Tagger: Ben Straub <ben@straub.cc>
Date:   Sat May 3 20:19:12 2014 -0700

my version 1.4

3. git show v1.8
D:\Work\crm-web>git show v1.8
tag v1.8
Tagger: MXJ <xiaojie.mao@zhongheschool.com>
Date:   Fri Nov 13 19:36:01 2020 +0800

fuck

commit 3bfd4e7a3eb3d30b33ad0e6236dace83cb170b08 (HEAD -> b2.4.1, tag: v1.8, origin/b2.4.1)
Merge: 4ba68d7 5aad5a5
Author: MXJ <xiaojie.mao@zhongheschool.com>
Date:   Fri Nov 13 19:12:20 2020 +0800

    Merge branch 'b2.4.1' of gitlab.zhonghebuke.com:yanfa/crm-web into b2.4.1

4. 删除标签
D:\Work\crm-web>git tag -d v1.8
Deleted tag 'v1.8' (was acf5aaa)

5. 检出标签
$ git checkout 2.0.0
Note: checking out '2.0.0'.

You are in 'detached HEAD' state. You can look around, make experimental
```

### gitlab 图形界面
Repository-new tag-[tagname和createFrom]名称和从哪个分支打

### webstorm


## release