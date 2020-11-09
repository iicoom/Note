## usermod可用来修改用户帐号的各项设定（修改用户密码）
```
-c<备注> 　修改用户帐号的备注文字。
-d登入目录> 　修改用户登入时的目录。
-e<有效期限> 　修改帐号的有效期限。
-f<缓冲天数> 　修改在密码过期后多少天即关闭该帐号。
-g<群组> 　修改用户所属的群组。
-G<群组> 　修改用户所属的附加群组。
-l<帐号名称> 　修改用户帐号名称。
-L 　锁定用户密码，使密码无效。
-s<shell> 　修改用户登入后所使用的shell。
-u<uid> 　修改用户ID。
-U 　解除密码锁定。
```

用户管理的一项重要内容是用户口令的管理。用户账号刚创建时没有口令，但是被系统锁定，无法使用，必须为其指定口令后才可以使用，即使是指定空口令。

指定和修改用户口令的Shell命令是passwd。超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令。命令的格式为：
passwd 选项 用户名
-l 锁定口令，即禁用账号。
-u 口令解锁。
-d 使账号无口令。
-f 强迫用户下次登录时修改口令。

例如，假设当前用户是sam，则下面的命令修改该用户自己的口令：
```
$ passwd 
Old password:****** 
New password:******* 
Re-enter new password:*******
```

如果是超级用户，可以用下列形式指定任何用户的密码，不需要知道原密码：
```
# passwd sam 
New password:******* 
Re-enter new password:*******
```

### 修改正在登录的用户shell
添加一个不能登录的用户
useradd -d /usr/local/apache -g apache -s /bin/false apache
```
1. usermod -s /sbin/false jack
当jack再次登陆时,会一直提示密码错误，知道次数用完


2. usermod -s /sbin/nologin jack

当jack再次登陆时，会礼貌的向用户显示一条信息，并拒绝用户登录：
Last login: Mon Nov  9 08:37:37 2020 from 123.xx4.46.184
This account is currently not available.

Connection closing...Socket close.

Connection closed by foreign host.

Disconnected from remote host(xx.11x.250.xx:22) at 17:18:02.
```