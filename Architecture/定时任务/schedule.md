> 场景: 数据库的一条数据assignTime:now 创建时的时间, 距离创建时间超过2个小时候需要更新follower字段

解决方法:
1. 查询数据的时候检测当前时间和创建时间的关系,然后更新数据,过滤后的数据返回=>缺点增加了接口查询时间[多了一个更新操作]
2. 创建的时候设置定时器,到期自动更新数据,缺点=> 进程不能停 否则定时器丢失
3. 借助redis key ttl

前端cutdown计数动画 => 时分秒 格式
1小时 60m*60s
大于1h => 00h:00m:00s

## setTimeout/setInterval

## node-schedule
Node Schedule is for time-based scheduling, not interval-based scheduling. While you can easily bend it to your will, if you only want to do something like "run this function every 5 minutes", you'll find setInterval much easier to use, and far more appropriate. But if you want to, say, "run this function at the :20 and :50 of every hour on the third Tuesday of every month," you'll find that Node Schedule suits your needs better.

[让Nodejs来管理定时任务later](http://blog.fens.me/nodejs-cron-later/)

> 一个完整的系统少不了定时任务，大多数情况我们都选用使用Linux CRON，通过操作系统命令进行定时任务。当我们要维护多台计算机，几十个，几百个定时任务的时候，用CRON会带来非常大的运维成本。可能写到程序中，就是一个不错的选择了。

