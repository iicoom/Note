https://pm2.keymetrics.io/docs/usage/monitoring/

PM2 gives you a simple way to monitor the resource usage of your application. You can monitor memory and CPU easily and straight from your terminal:

```
pm2 monit
```

Integrating PM2 with Keymetrics
https://codeforgeek.com/nodejs-monitoring-using-pm2/

https://doc.pm2.io/en/plus/overview/

在https://doc.pm2.io 注册 创建bucket name  在node server 上使用下面命令关联
username: asd
pass: 02
```
pm2 plus
```

打开如下网址查看node 进程相关信息
https://app.pm2.io/bucket/5dc176d4729acba65bee10df/backend/overview/servers

免费的只能查看一些基本信息：物理机硬盘，内存，CPU占用，公网IP，应用占用内存，堆占用，event loop延时，http 延迟

升级为企业版可以查看 更详细的仪表盘，可以有错误上报，实时log,查看历史issue  39$/mo