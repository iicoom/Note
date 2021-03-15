## useradd (CentOS)

https://linuxize.com/post/create-a-sudo-user-on-centos/#conclusion

```
-c<备注>：加上备注文字。备注文字会保存在passwd的备注栏位中；
-d<登入目录>：指定用户登入时的启始目录；
-D：变更预设值；
-e<有效期限>：指定帐号的有效期限；
-f<缓冲天数>：指定在密码过期后多少天即关闭该帐号；
-g<群组>：指定用户所属的群组；
-G<群组>：指定用户所属的附加群组；
-m：自动建立用户的登入目录；
-M：不要自动建立用户的登入目录；
-n：取消建立以用户名称为名的群组；
-r：建立系统帐号；
-s<shell>：指定用户登入后所使用的shell；
-u<uid>：指定用户id。


总结：1.root登录 2.添加用户 3.设置密码 4.设置组 wheel组才有使用sudo的权限
ssh root@server_ip_address

useradd username

passwd username

usermod -aG wheel username
```

1. Start by logging in to your CentOS server as the root user.
```
ssh root@server_ip_address
```

2. Create a new user account using the useradd command.
```
useradd username
```
Replace username with the user name that you want to create.

3. Use the passwd command to set a password for the new user.
```
passwd username
```
You will be prompted to confirm the password. Make sure you use a strong password.

4. Add the new user to the wheel group.
```
usermod -aG wheel username
```
第三步执行完，添加的用户就可以使用用户名密码登录了，但是sudo -i 会有问题
[sudo] password for maoie:
maoie is not in the sudoers file.  This incident will be reported.

需要执行第四步添加到wheel组

## 查看系统中存在的用户
```
[root@vultr home]# cat /etc/passwd | awk -F: '{ print $1}'
root
bin
daemon
adm
lp
sync
shutdown
halt
mail


或者：
[root@vultr home]# compgen -u
root
bin
daemon
adm
lp
sync
shutdown
halt
mail
```

## 修改密码
1. 我们使用 root 账户修改 lamp 普通用户的密码，可以使用如下命令：
```
[root@localhost ~]# passwd lamp
Changing password for user lamp.
New password: <==直接输入新的口令，但屏幕不会有任何反应
BAD PASSWORD: it is WAY too short <==口令太简单或过短的错误！这里只是警告信息，输入的密码依旧能用
Retype new password:  <==再次验证输入的密码，再输入一次即可
passwd: all authentication tokens updated successfully.  <==提示修改密码成功
```
如果被修改密码的用户，有正在登录的会话，仍然可以使用之前的旧密码进行sudo -i,新建立的会话则需要使用新密码，否则提示密码Permission denied, please try again.
要阻止被改密码的用户还在旧的会话中进行操作，[需要将其踢出](##踢出当前在线的用户)

passwd 参数：
```
[root@localhost ~]#passwd [选项] 用户名

-S：查询用户密码的状态，也就是 /etc/shadow 文件中此用户密码的内容。仅 root 用户可用；
-l：暂时锁定用户，该选项会在 /etc/shadow 文件中指定用户的加密密码串前添加 "!"，使密码失效。仅 root 用户可用；
-u：解锁用户，和 -l 选项相对应，也是只能 root 用户使用；
--stdin：可以将通过管道符输出的数据作为用户的密码。主要在批量添加用户时使用；
-n 天数：设置该用户修改密码后，多长时间不能再次修改密码，也就是修改 /etc/shadow 文件中各行密码的第 4 个字段；
-x 天数：设置该用户的密码有效期，对应 /etc/shadow 文件中各行密码的第 5 个字段；
-w 天数：设置用户密码过期前的警告天数，对于 /etc/shadow 文件中各行密码的第 6 个字段；
-i 日期：设置用户密码失效日期，对应 /etc/shadow 文件中各行密码的第 7 个字段。
```

2. 普通用户修改自己密码
```
[maojie@vultr ~]$ passwd
passwd直接回车代表修改当前用户的密码

Changing password for user maojie
Changing password for maojie
(current) UNIX password: <==这里输入『原有的旧口令』
New password: <==这里输入新口令
BAD PASSWORD: it is WAY too short <==口令检验不通过，请再想个新口令
New password: <==这里再想个来输入吧
Retype new password: <==通过口令验证！所以重复这个口令的输入
passwd: all authentication tokens updated successfully. <==成功修改用户密码
```

可以看到，与使用 root 账户修改普通用户的密码不同，普通用户修改自己的密码需要先输入自己的旧密码，只有旧密码输入正确才能输入新密码。不仅如此，此种修改方式对密码的复杂度有严格的要求，新密码太短、太简单，都会被系统检测出来并禁止用户使用。

```
# root用户查看其他用户密码的状态
[root@localhost ~]# passwd -S lamp
lamp PS 2013-01-06 0 99999 7 -1 (Password set, SHA512 crypt.)
#上面这行代码的意思依次是：用户名 密码 设定时间(2013*01-06) 密码修改间隔时间(0) 密码有效期(99999) 警告时间(7) 密码不失效(-1)，密码已使用


#锁定 lamp 用户
[root@localhost ~]# passwd -I lamp
Locking password for user lamp.
passwd:Successg
#用"-S"选项査看状态，很清楚地提示密码已被锁定
[root@localhost ~]# passwd -S lamp
lamp LK 2013-01-06 0 99999 7 -1 (Password locked.)
[root@localhost ~]# grep "lamp" /etc/shadow
lamp:!! $6$ZTq7o/9o $lj07iZ0bzW.D1zBa9CsY43d04onskUCzjwiFMNt8PX4GXJoHX9zA1S C9.i Yzh9LZA4fEM2lg92hM9w/p6NS50.:15711:0:99999:7:::
#可以看到，锁定其实就是在加密密码之前加入了"!!"，让密码失效而已
```

## 禁用用户
1. 最简单的方法就是使用 passwd username 给用户修改密码就好了

2. 把账号禁用可以有几个方法：
```
1. # usermod -L <username>
   # usermod -U <username>                // 解除禁用
2. 修改/etc/passwd文件，可以有几个地方
1）把第二个字段中的"x"变成其它的字符，该账号就不能登录
2）把/bin/bash修改成/sbin/nologin
3. 修改/etc/shadow文件
1）在第二个密码字段的前面加上一个“!”，该账号就不能登录，这个其实就是usermod -L命令的结果
2）在最后两个冒号之间加上数字"1"，表示该账号的密码自1970年1月1日起，过一天后立即过期，当然现在自然就不能登录了。
如果想解禁，把修改的东西去掉就可以了。
# usermod -L <username>
# usermod -U <username>                // 解除禁用
```

## 踢出当前在线的用户
### 查看当前登录的用户
[root@vultr ~]# whatis w
w (1)   - Show who is logged on and what they are doing.
```
[root@vultr ~]# w
 09:21:12 up 1 day,  1:21,  6 users,  load average: 0.00, 0.01, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/1    123.112.67.133   08:39   35:36   0.04s  0.04s -bash
root     pts/2    123.112.67.133   08:54   20:00   0.03s  0.03s -bash
maoxiaoj pts/3    123.112.67.133   09:00   19:52   0.02s  0.05s sshd: maoxiaojie [priv]
maoxiaoj pts/4    123.112.67.133   09:02   19:09   0.00s  0.00s -bash
root     pts/5    123.112.67.133   09:19    0.00s  0.03s  0.00s w
maoxiaoj pts/6    123.112.67.133   09:19   16.00s  0.00s  0.00s -bash
```
### 踢出当前在线的用户
[root@vultr ~]# whatis pkill 
pkill [pgrep]  (1) - look up or signal processes based on name and other attributes
```
[root@vultr ~]# pkill -9 -u maoxiao

# 对方的会话被关闭
[maoxiao@vultr ~]$ Connection to 45.3r.1x.6w closed by remote host.
Connection to 45.3r.1x.6w closed.

# 即使maoxiao正在以root的身份操作，也会被踢出
[root@vultr ~]# Connection to 45.3r.1x.6w closed by remote host.
Connection to 45.3r.1x.6w closed.

# 普通用户pkill root
[maoxiao@vultr ~]$ pkill -9 -u root
pkill: killing pid 29066 failed: Operation not permitted

# 普通用户切到root pkill root, 真正的root会被踢出，自己也变回普通身份
[root@vultr ~]# pkill -9 -u root
Killed

[maoxiao@vultr ~]$
```

## 删除用户
```
[root@vultr ~]# userdel -h
Usage: userdel [options] LOGIN

Options:
  -f, --force                   force some actions that would fail otherwise
                                e.g. removal of user still logged in
                                or files, even if not owned by the user
  -h, --help                    display this help message and exit
  -r, --remove                  remove home directory and mail spool
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
  -Z, --selinux-user            remove any SELinux user mapping for the user
```

> 其他系统添加用户
## useradd Unbuntu
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


### 新用户第一次使用sudo
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for xiaojie:

xiaojie is not in the sudoers file.  This incident will be reported.
