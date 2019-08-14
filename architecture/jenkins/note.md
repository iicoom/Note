# note

> Continuous Integration and Continuous Delivery 持续集成，持续交付 As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.

## Download

jenkins.war

## install

[https://jenkins.io/doc/book/installing/](https://jenkins.io/doc/book/installing/)

The Web application ARchive \(WAR\) file version of Jenkins can be installed on any operating system or platform that supports Java.

```text
java -jar jenkins.war
```

Note: You can change the port by specifying the --httpPort option when you run the java -jar jenkins.war command. For example, to make Jenkins accessible through port 9090, then run Jenkins using the command: java -jar jenkins.war --httpPort=9090

```text
Jul 08, 2018 6:50:38 PM jenkins.install.SetupWizard init
INFO: 

*************************************************************
*************************************************************
*************************************************************

Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

e29791b2467e4c6c9783b8eb6f037d8d

This may also be found at: /home/mxj/.jenkins/secrets/initialAdminPassword

*************************************************************
*************************************************************
*************************************************************

Jul 08, 2018 6:50:48 PM hudson.model.UpdateSite updateData
INFO: Obtained the latest update center data file for UpdateSource default
Jul 08, 2018 6:50:49 PM hudson.model.UpdateSite updateData
INFO: Obtained the latest update center data file for UpdateSource default
Jul 08, 2018 6:50:49 PM jenkins.InitReactorRunner$1 onAttained
INFO: Completed initialization
Jul 08, 2018 6:50:49 PM hudson.WebAppMain$3 run
INFO: Jenkins is fully up and running
Jul 08, 2018 6:50:50 PM hudson.model.DownloadService$Downloadable load
INFO: Obtained the updated data file for hudson.tasks.Maven.MavenInstaller
Jul 08, 2018 6:50:50 PM hudson.model.AsyncPeriodicWork$1 run
INFO: Finished Download metadata. 13,845 ms

INFO: Jenkins is fully up and running
```

/home/mxj/.jenkins/secrets/initialAdminPassword

## 选择推荐安装的插件

## Create first admin User

如果登录不了，重新启动服务

## install plugins

系统管理-插件管理-可选插件

* rebuilder
* Safe Restart

install without restart

## basic config

