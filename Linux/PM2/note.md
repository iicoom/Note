> pm2 = P (rocess) M (anager)2，是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。

Forever Alive
Once started, your app is forever alive, auto-restarting across crashes and machine restarts.
This is as simple as running:
```
pm2 start app.js
```

## Ecosystem File
The object has two properties:
* apps, an array that contains the configuration for each process
* deploy, an object that contains the configuration for the deployments
```
module.exports = {
  apps: [{}, {}],
  deploy: {}
}
```

## Installation
With yarn:

yarn global add pm2

With npm:

npm install pm2 -g

## 首次部署
pm2 start app.js 
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬───────────┬──────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼───────────┼──────┼──────────┤
│ www      │ 0  │ fork │ 17667 │ online │ 0       │ 0s     │ 1%  │ 10.9 MB   │ root │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴───────────┴──────┴──────────┘
### CheatSheet
Here are some commands that are worth knowing. Just try them with a sample application or with your current web application on your development machine:

#### Fork mode
pm2 start app.js --name my-api # Name process

#### Cluster mode
pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max      # Same as above, but deprecated.

#### Listing

pm2 ls                 # Display all processes status
pm2 list               # Display all processes status
pm2 jlist              # Print process list in raw JSON
pm2 prettylist         # Print process list in beautified JSON

pm2 describe 0         # Display all informations about a specific process

pm2 monit              # Monitor all processes

#### Logs

pm2 logs [--raw]       # Display all processes logs in streaming

**only app logs**
pm2 logs app

pm2 flush              # Empty all log files
pm2 reloadLogs         # Reload all logs

#### Actions

pm2 stop all           # Stop all processes
pm2 restart all        # Restart all processes

pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0             # Stop specific process id
pm2 restart 0          # Restart specific process id

pm2 delete 0           # Will remove process from pm2 list
pm2 delete all         # Will remove all processes from pm2 list

#### Misc

pm2 reset <process>    # Reset meta data (restarted time...)
pm2 updatePM2          # Update in memory pm2
pm2 ping               # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart

#### Environment management 环境管理
[When starting a new process](http://pm2.keymetrics.io/docs/usage/environment/#when-starting-a-new-process)
[root@cache task_consume]# NODE_ENV=development pm2 start bin/development.js --name task_consume

NODE_ENV=development node ./bin/www


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

## 日志管理（路径、切割）
```
module.exports = {
  apps: [{
      name: 'app',
      script: 'app.js',
      output: './out.log',
      error: './error.log',
	    log: './combined.outerr.log',
    }]
}
```
output is only standard output (console.log)
error is only error output (console.error)
log combines output and error, disabled by default

### Rotating Logs
If you want to split logs into multiple files instead of a big one, use the logrotate:
```
pm2 install pm2-logrotate
```

### Merging Logs
In cluster mode, each cluster has his own log files. You can use the merge options to gather all logs into a single file:
```
module.exports = {
  apps: [{
      name: 'app',
      script: 'app.js',
      output: './out.log',
      error: './error.log',
      merge_logs: true,
    }]
}
```

[pm2按日期切割日志](https://cnodejs.org/topic/563abbc07320b237394c5a5e)










