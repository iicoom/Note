> 用户管理包括增加用户，删除用户，查看用户列表，修改用户密码。

## 用户管理
(1) 新增一个用户

rabbitmqctl  add_user  Username  Password

(2) 删除一个用户

rabbitmqctl  delete_user  Username

(3) 修改用户的密码

rabbitmqctl  change_password  Username  Newpassword

(4) 查看当前用户列表

rabbitmqctl  list_users

## 用户角色
按照个人理解，用户角色可分为五类，超级管理员, 监控者, 策略制定者, 普通管理者以及其他。
(1) 超级管理员(administrator)

可登陆管理控制台(启用management plugin的情况下)，可查看所有的信息，并且可以对用户，策略(policy)进行操作。

(2) 监控者(monitoring)

可登陆管理控制台(启用management plugin的情况下)，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)

(3) 策略制定者(policymaker)

可登陆管理控制台(启用management plugin的情况下), 同时可以对policy进行管理。但无法查看节点的相关信息(上图红框标识的部分)。

(4) 普通管理者(management)

仅可登陆管理控制台(启用management plugin的情况下)，无法看到节点信息，也无法对策略进行管理。

(5) 其他

无法登陆管理控制台，通常就是普通的生产者和消费者。

了解了这些后，就可以根据需要给不同的用户设置不同的角色，以便按需管理。

设置用户角色的命令为：

rabbitmqctl  set_user_tags  User  Tag
User为用户名， Tag为角色名(对应于上面的administrator，monitoring，policymaker，management，或其他自定义名称)。

也可以给同一用户设置多个角色，例如

rabbitmqctl  set_user_tags  hncscwc  monitoring  policymaker

## 用户权限

用户权限指的是用户对exchange，queue的操作权限，包括配置权限，读写权限。配置权限会影响到exchange，queue的声明和删除。读写权限影响到从queue里取消息，向exchange发送消息以及queue和exchange的绑定(bind)操作。

例如： 将queue绑定到某exchange上，需要具有queue的可写权限，以及exchange的可读权限；向exchange发送消息需要具有exchange的可写权限；从queue里取数据需要具有queue的可读权限。详细请参考官方文档中"How permissions work"部分。

相关命令为：

(1) 设置用户权限

rabbitmqctl  set_permissions  -p  VHostPath  User  ConfP  WriteP  ReadP

(2) 查看(指定hostpath)所有用户的权限信息

rabbitmqctl  list_permissions  [-p  VHostPath]

(3) 查看指定用户的权限信息

rabbitmqctl  list_user_permissions  User

(4)  清除用户的权限信息

rabbitmqctl  clear_permissions  [-p VHostPath]  User

[guanwang](http://www.rabbitmq.com/rabbitmqctl.8.html)