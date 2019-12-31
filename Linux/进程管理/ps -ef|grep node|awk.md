## 【杀死所有nodejs相关进程】
```
ps -ef|grep node|awk '{print $2}'|xargs kill -9

ps -ef查看进程
grep node是过滤进程里的和node相关的所有进程
awk '{print $2}' 取出进程号
xargs kill -9 杀掉该进程
```
