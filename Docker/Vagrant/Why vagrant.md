> 对于运维人员来说，Vagrant可以给你提供一次性，并且与线上一致的服务器环境，你可以利用VirtualBox来测试你的管理脚本，不需要再登录到线上服务器测试了。
对于设计人员来说，Vagrant可以帮你处理一切，你只需要专注在设计上就好了。一旦开发人员帮你配置好了Vagrant之后，你只需要执行vagrant up，然后开始设计。

## 基本命令
https://www.jianshu.com/p/30c347c31fe0


## Mac 下遇到的问题
```
➜  server-s git:(master) vagrant up
The VirtualBox VM was created with a user that doesn't match the
current user running Vagrant. VirtualBox requires that the same user
be used to manage the VM that was created. Please re-run Vagrant with
that user. This is not a Vagrant issue.

The UID used to create the VM was: 0
Your UID is: 501


上面的问题是因为当前用户的权限不足，使用sudo可以正常启动
➜  server-s git:(master) sudo vagrant up
```