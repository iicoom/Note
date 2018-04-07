## ssh 生成公钥私钥
1. 首先需要检查你电脑是否已经有 SSH key  cd ~/.ssh
2. 创建一个 $ ssh-keygen -t rsa -C "your_email@example.com"
3. 复制公钥 cat ~/.ssh/id_rsa.pub

## ssh代理
### ssh参数
* 反向代理
ssh -fCNR

* 正向代理
ssh -fCNL

```
-f 后台执行ssh指令
-C 允许压缩数据
-N 不执行远程指令
-R 将远程主机(服务器)的某个端口转发到本地端指定机器的指定端口
-L 将本地机(客户机)的某个端口转发到远端指定机器的指定端口
-p 指定远程主机的端口

******************区分大小写啊各位亲******************
```

### 查看正在监听的端口
```
[xiaomao@iZ258wvzn92Z ~]$ netstat -lntp
(No info could be read for "-p": geteuid()=517 but you should be root.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name
tcp        0      0 101.201.197.163:6379        0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:4369                0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:10003               0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:10004               0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:3030                0.0.0.0:*                   LISTEN      -
tcp        0      0 0.0.0.0:22                  0.0.0.0:*                   LISTEN      -
```


## terminal
* 命令记忆 输入 ssh xiaomao 按arrow up自动匹配之间记忆的命令