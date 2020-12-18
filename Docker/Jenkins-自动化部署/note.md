[doc](https://www.jenkins.io/zh/doc/)
[Pipeline](https://www.jenkins.io/zh/doc/book/pipeline/)
对Jenkins 流水线的定义被写在一个文本文件中 (成为 Jenkinsfile)，该文件可以被提交到项目的源代码的控制仓库。 [2] 这是"流水线即代码"的基础; 将CD 流水线作为应用程序的一部分，像其他代码一样进行版本化和审查。 

## 新建流水线
流水线种类 - 自由风格的软件项目

## General
1. 设置名称/描述
2. 丢弃旧的构建记录策略 log Rotation

## 源码管理
1. Git : Repository URL
2. Branch to build
3. 代码库浏览器Gitab URL Version
4. 设置子项目

## 构建
Execute shell

```shell
#set -x
set -e
export PATH=/usr/local/node/v10.8.0/bin:$PATH

ENV=dev
APIWORKSAPCE=/var/lib/jenkins/jobs/crm-project-deploy-$ENV/workspace
JOB=crm-project-$ENV
FILE=$JOB.tar.bz

HOST='47.92.3x.x1'
DISTDIR='.deploy/packages'

cd $APIWORKSAPCE/$JOB
rm -f package-lock.json
npm install --registry=https://support5.zhumaxxxvip.com
npm run doc
npm run compile
cd ..
echo $GIT_BRANCH:$DIST:$GIT_COMMIT > $JOB/INFO.txt
tar -zcf $FILE $JOB --exclude .git

scp $FILE root@$HOST:$DISTDIR
ssh root@$HOST "cd .deploy && ./deploycrm_api $ENV"

echo "success"
```

以上Jenkins完成了对仓库代码的编译打包，上传到目标服务器，登录到目标服务器的部署脚本目录，下面是部署操作：
```shell
[root@stag-app-31 .deploy]# cat deploycrm_web
#!/usr/bin/bash
set -e
set -x

ENV=$1
echo $ENV

WORKSPACE='/root/.deploy'
PACKAGESDIR=$WORKSPACE/packages

SRCDIR=crm-web-$ENV
SRC=$SRCDIR.tar.bz

DIST=`date +%Y%m%d%H%M%S`
DISTDIR=/opt/$SRCDIR
APP41HOST=192.168.1.92

WEB_DIR=/opt/crm-api-$ENV/latest/web

if [ ! -f "$PACKAGESDIR/$SRC" ]; then echo "$PACKAGESDIR/$SRC not exist" && exit 1;fi;

scp $PACKAGESDIR/$SRC root@$APP41HOST:$DISTDIR

ssh root@$APP41HOST "cd $DISTDIR && tar xf $SRC && mv $SRCDIR $DIST && chown -R root.root $DIST && rm -f $WEB_DIR && ln -s $DISTDIR/$DIST/dist $WEB_DIR && pm2 reload crm-$ENV && pm2 l  && /root/.deploy/cleanup $DISTDIR"
```
