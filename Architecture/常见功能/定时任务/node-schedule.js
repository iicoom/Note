/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

6个占位符从左到右分别代表：秒、分、时、日、月、周几

*表示通配符，匹配任意，当秒是*时，表示任意秒数都触发，其它类推

每分钟的第30秒触发： '30 * * * * *'

每小时的1分30秒触发 ：'30 1 * * * *'

每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

每周1的1点1分30秒触发 ：'30 1 1 * * 1'

*/
// Execute a cron job every 5 Minutes = */5 * * * *

var schedule = require('node-schedule');

var j = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});

// Execute a cron job when the minute is 42 (e.g. 19:42, 20:42, etc.).


/*
Linux Crontab 定时任务  使用root用户操作
https://www.runoob.com/w3cnote/linux-crontab-tasks.html

Usage:
 crontab [options] file
 crontab [options]
 crontab -n [hostname]

Options:
 -u <user>  define user
 -e         edit user's crontab
 -l         list user's crontab
 -r         delete user's crontab
 -i         prompt before deleting
 -n <host>  set host in cluster to run users' crontabs
 -c         get host in cluster to run users' crontabs
 -s         selinux context
 -x <mask>  enable debugging

1. View current user's Cronjob
Just type the following command:
crontab -l

查看所有定时任务或某个用户的定时任务
[maoxiaojie@stag-app-31 ~]$ crontab -u maoxiaojie -l
must be privileged to use -u
[maoxiaojie@stag-app-31 ~]$ sudo su
[sudo] password for maoxiaojie: 
[root@stag-app-31 maoxiaojie]# crontab -u maoxiaojie -l
* * * * * maoxiaojie sh /home/maoxiaojie/my.sh << /home/maoxiaojie/my.log

2. Remove all cron jobs
If and only if you want to stop all cron jobs, you can remove them entirely with:

crontab -r
This removes the entire crontab file for current user so be careful if you've got other cron jobs listed in there!



某个用户的定时任务往往不能执行成功，可能因为一些权限问题
[maoxiaojie@stag-app-31 ~]$ ls
my.log  my.sh   

// my.sh
#!bin/sh
set -e
now=$(date +"%Y-%m-%d %T")
echo $now '=> mao is handsome!'

[maoxiaojie@stag-app-31 ~]$ chmod +x my.sh
*/

//  */1 * * * * sh /home/maoxiaojie/my.sh << /home/maoxiaojie/my.log
// 每分钟执行一下my.sh中的内容 可以在crontab -e 中写多行任务

/** 需要开启服务
 * 
[maoxiaojie@stag-app-31 ~]$ service crond start
Redirecting to /bin/systemctl start crond.service
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ===
Authentication is required to manage system services or units.
Multiple identities can be used for authentication:
 1.  xuli
 2.  zhaoqichen
 3.  zhaohailong
 4.  aizhengzheng
 5.  fengxiaoye
 6.  wupengjun
 7.  qiaoyakun
 8.  yuanjianxin
 9.  majinlong
 10.  liaozhonghui
 11.  zhushouqiang
 12.  maoxiaojie
Choose identity to authenticate as (1-12): 12
Password: 
==== AUTHENTICATION COMPLETE ===
[maoxiaojie@stag-app-31 ~]$ 


参考链接
https://askubuntu.com/questions/408611/how-to-remove-or-delete-single-cron-job-using-linux-command
 */
