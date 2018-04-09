> pm2 = P (rocess) M (anager)2，是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。

## 任务启停
* sudo pm2 stop 28 26  停止多个任务
* pm2 stop all         #停止所有进程

* pm2 start id
* pm2 restart id
* pm2 restart all      #重启所有的进程

* pm2 delete [app-name|id] #删除并停止进程
* pm2 delete all           #删除并停止所有进程

## 查看运行的程序
* pm2 list
* pm2 monit 追踪资源运行情况

* pm2 info id
* pm2 describe [app id]

## 日志监控
* pm2 logs
* pm2 logs [app-name]
默认展示日志的后15行

## Cluster Mode
The cluster mode allows networked Node.js applications (http(s)/tcp/udp server) to be scaled accross all CPUs available, without any code modifications. This greatly increases the performance and reliability of your applications, depending on the number of CPUs available.

```
{
  "apps" : [{
    "script"    : "api.js",
    "instances" : "max",
    "exec_mode" : "cluster" 
  }]
}
```
NOTE: you need to set the exec_mode to cluster so PM2 know you want to load balance between each instances, by default it will not

Then to start the Process File:
```
pm2 start processes.json
```

### Statelessify your application
Be sure your application is stateless meaning that no local data is stored in the process, for example sessions/websocket connections, session-memory and related. Use Redis, Mongo or other databases to share states between processes.

Another resource on how to write efficient, production ready stateless application is The Twelve Factor Application manifesto.
[Twelve Factor Application](https://12factor.net/)

## Reload
As opposed to restart, which kills and restarts the process, reload achieves a 0-second-downtime reload.

To reload an app:
```
pm2 reload <app_name>
Or:

pm2 reload process.json
```

## 日志切割
[pm2按日期切割日志](https://cnodejs.org/topic/563abbc07320b237394c5a5e)
