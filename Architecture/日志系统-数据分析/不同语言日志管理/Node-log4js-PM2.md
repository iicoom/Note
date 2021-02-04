https://pm2.keymetrics.io/docs/usage/log-management/

## pm2 logs
```
# Display all apps logs
pm2 logs

# Display only `api` application logs
pm2 logs api

# Display X lines of api log file
pm2 logs big-api --lines 1000
```

## log4js
PM2启动是否导致log4js没有输出日志