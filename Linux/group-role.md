## 查看当前用户的用户组命令：
```
[root@gitlab ~]# groups
root
```

## 切换用户角色
```
[xiaomao@iZ258wvzn92Z ~]$ su
Password: root的密码

[xiaomao@iZ258wvzn92Z ~]$ sudo -i
[sudo] password for xiaomao:当前用户的密码
```

## 为Linux添加用户（Ubuntu）
```
mxj@ubuntu:~$ adduser
adduser: Only root may add a user or group to the system.
mxj@ubuntu:~$ sudo -s
[sudo] password for mxj: 
root@ubuntu:~# adduser fucker
Adding user `fucker' ...
Adding new group `fucker' (1001) ...
Adding new user `fucker' (1001) with group `fucker' ...
Creating home directory `/home/fucker' ...
Copying files from `/etc/skel' ...
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
Changing the user information for fucker
Enter the new value, or press ENTER for the default
                                        Full Name []: Fucker
                                        Room Number []: 419
                                        Work Phone []: 123
                                        Home Phone []: 
                                        Other []: 
Is the information correct? [Y/n] Y
```

### 把fucker添加到sudo group中
```
root@ubuntu:~# gpasswd -a fucker sudo
Adding user fucker to group sudo
root@ubuntu:~# sudo visudo
```

## 为Linux添加用户（CentOS）
```
1. 先添加普通用户 [root@server ~]# useradd xiaomao   //添加一个名为xiaomao的用户
2. [root@server ~]# passwd xiaomao    //修改密码
Changing password for user xiaomao.
New UNIX password:                   //在这里输入新密码
Retype new UNIX password:            //再次输入新密码
passwd: all authentication tokens updated successfully
3. 赋予root权限
方法一：[root@server ~]# sudo visudo       在root那里模仿一个
方法二：[root@server ~]# usermod -g apache xiaomao      把xiaomao授权apache组的权限（Apache组有root权限）
4. gpasswd -d user group  把user从group中删除
组操作详细 http://cnzhx.net/blog/linux-add-user-to-group/
```
### 赋予root权限 
方法一：修改 /etc/sudoers 文件，找到下面一行，把前面的注释（#）去掉
```
## Allows people in group wheel to run all commands
%wheel    ALL=(ALL)    ALL
```
然后修改用户，使其属于root组（wheel），命令如下
usermod -g root xiaomao

修改完毕，现在可以用tommy帐号登录，然后用命令 su - ，即可获得root权限进行操作。

方法二： 修改 /etc/sudoers 文件，找到下面一行，在root下面添加一行，如下所示：
```
## Allow root to run any commands anywhere
root    ALL=(ALL)     ALL
tommy   ALL=(ALL)     ALL
```
修改完毕，现在可以用tommy帐号登录，然后用命令 su - ，即可获得root权限进行操作。

#### Wheel组
 先来看看维基百科中对wheel组的一段描述：
   Wheel group：
                  Modern Unix systems use user groups to control access privileges. The wheel group is a special user   group 
used on some Unix systems to control access to the su command, which allows a user to masquerade as another 
user (usually the super user).

### 删除用户
如果一个用户的账号不再使用，可以从系统中删除。删除用户账号就是要将/etc/passwd等系统文件中的该用户记录删除，必要时还删除用户的主目录。

删除一个已有的用户账号使用userdel命令，其格式如下：
```
userdel 选项 用户名
```
常用的选项是 -r，它的作用是把用户的主目录一起删除。
```
userdel -r sam
```
此命令删除用户sam在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group等）的记录，同时删除用户的主目录。


### 用户口令的管理（修改用户密码）
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
如果是超级用户，可以用下列形式指定任何用户的口令：
```
# passwd sam 
New password:******* 
Re-enter new password:*******
```

### 新用户第一次使用sudo
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for xiaojie:

xiaojie is not in the sudoers file.  This incident will be reported.
### 需要把用户添加到相关组中授权
usermod可用来修改用户帐号的各项设定
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

usermod -g root xiaomao 把xiaomao添加到root组

[Linux 用户和用户组管理](http://www.runoob.com/linux/linux-user-manage.html)
### Linux系统用户组的管理
每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。

#### 增加一个新的用户组使用groupadd命令
```
groupadd 选项 用户组
```
#### 如果要删除一个已有的用户组，使用groupdel命令，其格式如下：
```
groupdel 用户组
```


## 查看当前用户角色
```
root@ubuntu:~/project# whoami
root
root@ubuntu:~/project# whoami --version
whoami (GNU coreutils) 8.21
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```
### 切换角色
sudo : 暂时切换到超级用户模式以执行超级用户权限，提示输入密码时该密码为当前用户的密码，而不是超级账户的密码。不过有时间限制，Ubuntu默认为一次时长15分钟。
su ： 切换到某某用户模式，提示输入密码时该密码为切换后账户的密码，用法为“su 账户名称”。如果后面不加账户时系统默认为root账户，密码也为超级账户的密码。没有时间限制。
sudo -i: 为了频繁的执行某些只有超级用户才能执行的权限，而不用每次输入密码，可以使用该命令。提示输入密码时该密码为当前账户的密码。没有时间限制。执行该命令后提示符变为“#”而不是“$”。想退回普通账户时可以执行“exit”或“logout” 。

## 查看现在登录的用户
### who
查看最近登录的用户
➜  ~ who
mxj      console  Jan 29 09:47
mxj      ttys000  Jan 31 17:50
mxj      ttys002  Jan 31 15:49

### finger
```
Login    Name                 TTY  Idle  Login  Time   Office  Phone
mxj      MXJ                 *con  7:37  日    09:19
mxj      MXJ                  s00        日    16:57
```

/****************************************************************************
****************************************************************************
*******************      用户和用户组的管理      ******************************
****************************************************************************
****************************************************************************/
> 完成用户管理的工作有许多种方法，但是每一种方法实际上都是对有关的系统文件进行修改。

与用户和用户组相关的信息都存放在一些系统文件中，这些文件包括/etc/passwd, /etc/shadow, /etc/group等。

下面分别介绍这些文件的内容。

1. /etc/passwd文件是用户管理工作涉及的最重要的一个文件
Linux系统中的每个用户都在/etc/passwd文件中有一个对应的记录行，它记录了这个用户的一些基本属性。

这个文件对所有用户都是可读的。它的内容类似下面的例子：
```
＃ cat /etc/passwd

root:x:0:0:Superuser:/:
daemon:x:1:1:System daemons:/etc:
bin:x:2:2:Owner of system commands:/bin:
sys:x:3:3:Owner of system files:/usr/sys:
adm:x:4:4:System accounting:/usr/adm:
uucp:x:5:5:UUCP administrator:/usr/lib/uucp:
auth:x:7:21:Authentication administrator:/tcb/files/auth:
cron:x:9:16:Cron daemon:/usr/spool/cron:
listen:x:37:4:Network daemon:/usr/net/nls:
lp:x:71:18:Printer administrator:/usr/spool/lp:
sam:x:200:50:Sam san:/usr/sam:/bin/sh
```
从上面的例子我们可以看到，/etc/passwd中一行记录对应着一个用户，每行记录又被冒号(:)分隔为7个字段，其格式和具体含义如下：

用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell

2. /etc/shadow中的记录行与/etc/passwd中的一一对应，它由pwconv命令根据/etc/passwd中的数据自动产生

它的文件格式与/etc/passwd类似，由若干个字段组成，字段之间用":"隔开。这些字段是：

登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志
```
fengcao1:$6$Pzm20q2n$xdOPdGNPyfnFt9kCut6.fp5jJDLgQJUw9xaMHdOJcaR4/VnioDn9LOqUUCsT10MuBJGuesrZGYzLtVOU8MYC.1:17304:0:99999:7:::
hongri:!!:17393:0:99999:7:::
jiayuan:$6$WZrs.LBW$HgteB32c/LetfZwvwiNkF1t7nSIEmw9o.JhB33nHPlKQN250jl9XAL9Akkh8hgrSGgmvgjrkU//GF9qy40bav/:17396:0:99999:7:::
xiaojie:!!:17426:0:99999:7:::
xiaomao:$6$ZGlD1zHW$NmQyMmhRJrcnp4dwlmY4wrO8l5IqoTe8pxVayC8sfuL8hr9gq5Ke3BfH6SqdXnG6a.6s9gEXDrCsLJecSPiHG1:17463:0:99999:7:::
```

3. 用户组的所有信息都存放在/etc/group文件中。
将用户分组是Linux 系统中对用户进行管理及控制访问权限的一种手段。

每个用户都属于某个用户组；一个组中可以有多个用户，一个用户也可以属于不同的组。

组名:口令:组标识号:组内用户列表
root::0:root
bin::2:root,bin
sys::3:root,uucp
adm::4:root,adm
daemon::5:root,daemon
lp::7:root,lp
users::20:root,sam




