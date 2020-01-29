[crontab命令进程和作业管理](https://man.linuxde.net/crontab)

Linux下的任务调度分为两类：系统任务调度和用户任务调度。

系统任务调度：系统周期性所要执行的工作，比如写缓存数据到硬盘、日志清理等。在/etc目录下有一个crontab文件，这个就是系统任务调度的配置文件。

```
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
```

## service crond status 查看crontab服务状态：
```
[doraemon@mxj-s etc]$ service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2020-01-16 11:20:02 CST; 4 days ago
 Main PID: 2583 (crond)
   CGroup: /system.slice/crond.service
           └─2583 /usr/sbin/crond -n

Jan 16 11:20:02 mxj-s.doraemonkart.com systemd[1]: Started Command Scheduler.
Jan 16 11:20:02 mxj-s.doraemonkart.com crond[2583]: (CRON) INFO (Syslog will be used instead of sendmail.)
Jan 16 11:20:02 mxj-s.doraemonkart.com crond[2583]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 86% if used.)
Jan 16 11:20:02 mxj-s.doraemonkart.com crond[2583]: (CRON) INFO (running with inotify support)
```

## 使用-l参数列出crontab文件:
```
[root@mxj-s example_user]# crontab -l
no crontab for root
```

每月1、10、22日的4 : 45重启smb 
```
45 4 1,10,22 * * /etc/init.d/smb restart
```
