## useradd (CentOS)

https://linuxize.com/post/create-a-sudo-user-on-centos/#conclusion

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


Switch to the newly created user:
```
su - username
```

To use sudo, simply prefix the command with sudo and space.
```
sudo [COMMAND]
```

for example
```
[root@vultr ~]# su - xiaomao
[xiaomao@vultr ~]$ ls -l /root
ls: cannot open directory /root: Permission denied


[xiaomao@vultr ~]$ sudo ls -l /root

We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for xiaomao:
total 112
drwxr-xr-x 3 root root  4096 Mar  6 14:34 prots
-rw-r--r-- 1 root root 86927 Mar  6 05:29 shaocks.log
-rwxr-xr-x 1 root root 13834 Mar  6 05:24 ssocks.sh
```

https://www.runoob.com/linux/linux-comm-useradd.html
-c<备注> 　加上备注文字。备注文字会保存在passwd的备注栏位中。
-d<登入目录> 　指定用户登入时的启始目录。
-D 　变更预设值．
-e<有效期限> 　指定帐号的有效期限。
-f<缓冲天数> 　指定在密码过期后多少天即关闭该帐号。
-g<群组> 　指定用户所属的群组。
-G<群组> 　指定用户所属的附加群组。
-m 　自动建立用户的登入目录。
-M 　不要自动建立用户的登入目录。
-n 　取消建立以用户名称为名的群组．
-r 　建立系统帐号。
-s<shell>　 　指定用户登入后所使用的shell。
-u<uid> 　指定用户ID。

### 为CentOS添加 mongod用户
**[root@f7881fcaf265 /]# useradd -u800 mongod**
-u 指定uid 为800 

**[root@f7881fcaf265 /]# echo 123456|passwd --stdin mongod**
Changing password for user mongod.
passwd: all authentication tokens updated successfully.

-stdin  

This option is used to indicate that passwd should read the new password from standard input, which can be a pipe.  

这个选项用于从标准输入管道读入新的密码。 

使用 echo 方式来重置Linux 系统用户密码：

echo “新密码”|passwd --stdin 用户名


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