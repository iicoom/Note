[doc](https://www.jenkins.io/zh/doc/)

## [Pipeline](https://www.jenkins.io/zh/doc/book/pipeline/)
对Jenkins 流水线的定义被写在一个文本文件中 (成为 Jenkinsfile)，该文件可以被提交到项目的源代码的控制仓库。 [2] 这是"流水线即代码"的基础; 将CD 流水线作为应用程序的一部分，像其他代码一样进行版本化和审查。 

### 新建Item
1. 输入任务名
2. 选择类型 - 多分支流水线 - 可以用构建时使用shell脚本的是 - 自由风格的软件项目
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