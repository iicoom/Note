[How to Securely Transfer Files Between Servers with scp](https://www.linux.com/learn/intro-to-linux/2017/2/how-securely-transfer-files-between-servers-scp)

> If you run a live or home server, moving files between local machines or two remote machines is a basic requirement. There are many ways to achieve that. In this article, we talk about scp (secure copy command) that encrypts the transferred file and password so no one can snoop. With scp you don’t have to start an FTP session or log into the system.

> The scp tool relies on SSH (Secure Shell) to transfer files, so all you need is the username and password for the source and target systems. Another advantage is that with SCP you can move files between two remote servers, from your local machine in addition to transferring data between local and remote machines. In that case you need usernames and passwords for both servers. Unlike Rsync, you don’t have to log into any of the servers to transfer data from one machine to another.

## Copy a single file from the local machine to a remote machine:
The scp command needs a source and destination to copy files from one location to another location. This is the pattern that we use:
```
scp localmachine/path_to_the_file username@server_ip:/path_to_remote_directory

```
In the following example I am copying a local file from my macOS system to my Linux server (Mac OS, being a UNIX operating system has native support for all UNIX/Linux tools).
```
scp /home/swapnil/Downloads/fedora.iso swapnil@10.0.0.75:/media/prim_5/media_server/
```

Mac OS
```
➜  ~ ls
Applications             Desktop                  Downloads                Music                    Repo                     iCloud Drive（归档）
DB                       Document                 Library                  Pictures                 Work                     test.txt
Demo                     Documents                Movies                   Public                   dump.rdb
➜  ~ scp test.txt root@10.101.111.190:/root/
root@10.101.111.190's password:
test.txt                                                                                                                                         100%    0     0.0KB/s   00:00
```

If you are running Windows 10, then you can use Ubuntu bash on Windows to copy files from the Windows system to Linux server:
```
scp /mnt/c/Users/swapnil/Downloads/fedora.iso swapnil@10.0.0.75:/media/prim_5/
  media_server/
```

## Copy a local directory to a remote server:

If you want to copy the entire local directory to the server, then you can add the -r flag to the command:
```
scp -r localmachine/path_to_the_directory username@server_ip:/path_to_remote_directory/
```

Mac OS
```
➜  ~ ls Repo
AwesomeProject          Express-api             React-news-front        dva                     gs-rest-service         my-app
Download                MERN-Stack              Server                  front-end               iicoom.github.io        react-music-player
Eslint                  Note                    antPro                  gs-accessing-data-mysql msg_client              redux-saga
➜  ~ scp -r Repo root@10.101.111.190:/root/
root@10.101.111.190's password:
.DS_Store                                                                                                                                        100%   16KB   1.2MB/s   00:00
.DS_Store                                                                                                                                        100% 8196     2.2MB/s   00:00
.editorconfig                                                                                                                                    100%  245   148.9KB/s   00:00
.eslintrc                                                                                                                                        100% 1903   857.2KB/s   00:00
.ga                                                                                                                                              100%   32    12.7KB/s   00:00
COMMIT_EDITMSG                                                                                                                                   100%    9     2.3KB/s   00:00
config                                                                                                                                           100%  347    89.8KB/s   00:00
description                                                                                                                                      100%   73    23.7KB/s   00:00
FETCH_HEAD                                                                                                                                       100%   87    21.1KB/s   00:00
```
190查看
```
➜  ~ ssh root@10.101.111.190
root@10.101.111.190's password:
Last login: Fri Apr 20 14:26:10 2018 from 10.102.104.224
[root@cache ~]# ls
163.nginx  aios-release  anaconda-ks.cfg  test.txt  thtf
[root@cache ~]# ls
163.nginx  aios-release  anaconda-ks.cfg  Repo  test.txt  thtf
```

**Make sure that the source directory doesn’t have a forward slash at the end of the path, at the same time the destination path *must* have a forward slash.**

## Copying files from remote server to local machine
If you want to make a copy of a single file, a directory or all files on the server to the local machine, just follow the same example above, just exchange the place of source and destination.

Copy a single file:
```
scp username@server_ip:/path_to_remote_directory local_machine/path_to_the_file 
```

## Copy files from one remote server to another remote server from a local machine
rsync 命令只能先登录到一台远程Linux，然后传文件到另一台Linux
SCP 命令则不需要登录到任何Linux，就可以完成2台 Linux之间的文件传输

Currently I have to ssh into one server in order to use rsync command to copy files to another server. I can use SCP command to move files between two remote servers:

Usually I ssh into that machine and then use rsync command to perform the job, but with SCP, I can do it easily without having to log into the remote server.

Copy a single file:
```
scp username@server1_ip:/path_to_the_remote_file username@server2_ip:/
  path_to_destination_directory/
```

Copy a directory from one location on a remote server to different location on the same server:
```
scp username@server1_ip:/path_to_the_remote_file username@server2_ip:/
  path_to_destination_directory/
```

Copy all files in a remote directory to a local directory
```
scp -r username@server1_ip:/path_to_source_directory/* username@server2_ip:/
  path_to_the_destination_directory/ 
```


Conclusion
As you can see, once you understand how things work, it will be quite easy to move your files around. That’s what Linux is all about, just invest your time in understanding some basics, then it’s a breeze!


## 从Linux服务器下载文件夹到本地
```
1、使用scp命令

scp /home/work/source.txt work@192.168.0.10:/home/work/ #把本地的source.txt文件拷贝到192.168.0.10机器上的/home/work目录下

scp work@192.168.0.10:/home/work/source.txt /home/work/ #把192.168.0.10机器上的source.txt文件拷贝到本地的/home/work目录下

scp work@192.168.0.10:/home/work/source.txt work@192.168.0.11:/home/work/ #把192.168.0.10机器上的source.txt文件拷贝到192.168.0.11机器的/home/work目录下

scp -r /home/work/sourcedir work@192.168.0.10:/home/work/ #拷贝文件夹，加-r参数
```

### 实例
假设从Windows登录到JumpServer,再从JumpServer登录到目标主机,现在要从目标主机回传文件到Windows,操作思路如下（使用git bash）

JumpServer ~/.ssh/config 如下：
```
Host alpha
    HostName 10.10.60.49
    Port 31122
    User doraemon
```
要下载的目标问价再 alpha 服务器的路径
```
[doraemon@alpha server]$ pwd
/doraemon/server/data.zip
```

在JumpServer上进行如下操作
```
[maoxiaojie@jumpserver ~]$ scp doraemon@alpha:/doraemon/server/data.zip ./

[maoxiaojie@jumpserver ~]$ ls
data.zip

就可以把data.zip 放到 Jump指定的 ./ 目录下
```

然后，回到Windows 使用同样的套路 把Jump上的 data.zip 下载
```
$ scp -P 32222 maoxiaojie@192.138.40.220:/home/maoxiaojie/data.zip ./
maoxiaojie@192.168.40.210's password:
data.zip          
```
下载完成！

传输前可能会用到文件打包：
## zip
zip命令可以用来解压缩文件，或者对文件进行打包操作。zip是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。

将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的html.zip：
```
zip -q -r html.zip /home/Blinux/html
```