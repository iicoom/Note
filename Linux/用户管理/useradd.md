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


### Switch to the newly created user:
```
su - username

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

### 为CentOS添加 mongod用户
```
[root@f7881fcaf265 /]# useradd -u800 mongod
-u 指定uid 为800 


[root@f7881fcaf265 /]# echo 123456|passwd --stdin mongod
Changing password for user mongod.
passwd: all authentication tokens updated successfully.

-stdin  

This option is used to indicate that passwd should read the new password from standard input, which can be a pipe.  

这个选项用于从标准输入管道读入新的密码。 

使用 echo 方式来重置Linux 系统用户密码：

echo “新密码”|passwd --stdin 用户名
```

### 查看系统中存在的用户
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
