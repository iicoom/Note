# 为Linux添加用户（Ubuntu）

```text
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

## 把fucker添加到sudo group中

```text
root@ubuntu:~# gpasswd -a fucker sudo
Adding user fucker to group sudo
root@ubuntu:~# sudo visudo
```

## 赋予root权限

方法一：修改 /etc/sudoers 文件，找到下面一行，把前面的注释（\#）去掉

```text
## Allows people in group wheel to run all commands
%wheel    ALL=(ALL)    ALL
```

然后修改用户，使其属于root组（wheel），命令如下 usermod -g root xiaomao

修改完毕，现在可以用tommy帐号登录，然后用命令 su - ，即可获得root权限进行操作。

方法二： 修改 /etc/sudoers 文件，找到下面一行，在root下面添加一行，如下所示：

```text
## Allow root to run any commands anywhere
root    ALL=(ALL)     ALL
tommy   ALL=(ALL)     ALL
```

修改完毕，现在可以用tommy帐号登录，然后用命令 su - ，即可获得root权限进行操作。

