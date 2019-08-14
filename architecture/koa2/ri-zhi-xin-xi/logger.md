# logger

## logger种类

* access
* error
* mobile

  ···

  作用记录一些关键性的操作，及操作状态结果

## middleware/index

### accessLogger\(\)

### cors\(）

### token

### session

## accessLogger

```text
const logger = log4js.getLogger('access');
```

### util/log

对log4js进行了配置，从配置文件拿到logdir, logServer 数组的形式对日志做了命名分类

