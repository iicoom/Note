[Ownership and Permissions](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-navigating-ownership.html)
[Ownership and Permissions](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-navigating-ownership.html)

That was one demonstration of Linux's security features. Linux, like UNIX, is a multi-user system and file permissions are one way the system protects against malicious tampering.

All files and directories are "owned" by the person who created them. You created the file foo.txt (refer to Section 4.9.2 Using Redirection) in your login directory, so foo.txt belongs to you.

That means you can specify who is allowed to read the file, write to the file, or (if it is an application instead of a text file) who can execute the file.

Reading, writing, and executing are the three main settings in permissions. Since users are placed into a group when their accounts are created, you can also specify whether certain groups can read, write to, or execute a file.

Take a closer look at foo.txt with the ls command using the -l option (refer to Figure 4-11).

A lot of detail is provided here. You can see who can read (r) and write to (w) the file, as well as who created the file (user), and to which group the owner belongs (user). (By default, the name of your group is the same as your login name.)

```
➜  ~ ls -l
total 48
drwx------@  5 mxj  staff    170  9  4  2017 Applications
drwxr-xr-x   6 mxj  staff    204  4 20 18:05 DB
drwxr-xr-x  16 mxj  staff    544  5  1 19:07 Demo
drwx------+  7 mxj  staff    238  7 22 10:48 Desktop
drwxr-xr-x  14 mxj  staff    476  4 19 09:48 Document
drwx------+  5 mxj  staff    170  7 10 18:39 Documents
drwx------+ 25 mxj  staff    850  8  6 17:58 Downloads
drwx------@ 71 mxj  staff   2414  6 24 18:33 Library
drwx------+  3 mxj  staff    102  7  6  2017 Movies
drwx------+  8 mxj  staff    272  1  5  2018 Music
drwx------+  6 mxj  staff    204  5 11 09:34 Pictures
drwxr-xr-x+  6 mxj  staff    204  5  2 10:26 Public
drwxr-xr-x  23 mxj  staff    782  6  6 18:52 Repo
drwxr-xr-x  33 mxj  staff   1122  8  2 10:34 Work
-rw-r--r--   1 mxj  staff  15806  7 13 21:20 dump.rdb
-rw-r--r--   1 mxj  staff   4616  5 15 17:12 jmeter.log
-rw-r--r--   1 mxj  staff      0  8  7 18:07 permission.txt
drwxr-xr-x   6 mxj  staff    204  7 25 00:37 test
```

```
[xiaomao@iZ258wvzn92Z cloud-butchershop]$ ls -l
total 172
drwxrwx--- 4 git      yunfarm  4096 Jun  2  2017 butchershop-busi
drwxrwx--- 4 git      yunfarm  4096 Jun  2  2017 butchershop-core
drwxrwx--- 4 git      yunfarm  4096 Jun  2  2017 butchershop-dao
drwxrwx--- 4 git      yunfarm  4096 Feb 26  2017 butchershop-util
-rw-r--r-- 1 xiaoming yunfarm     0 Jun  5  2017 git.exe
-rw-r--r-- 1 xiaoming yunfarm 44406 Feb 27  2017 hs_err_pid10631.log
-rw-r--r-- 1 xiaoming yunfarm 64702 Jan 16  2017 hs_err_pid25660.log
drwxr-xr-x 3 xiaomao  yunfarm  4096 Aug  6 16:54 logs
-rw-r--r-- 1 xiaomao  yunfarm     0 Aug  7 20:41 nidaye.txt
-rw-r--r-- 1 root     root    31222 Jun  2  2017 pom.xml
-rw-r--r-- 1 git      yunfarm  1623 May 27  2016 README.md
-rw-r--r-- 1 git      yunfarm   694 May 27  2016 release0.2.0exportSql.md
```

Other information to the right of the group includes file size, date and time of file creation, and file name.

The first column shows current permissions; it has ten slots. The first slot represents the type of file. The remaining nine slots are actually three sets of permissions for three different categories of users.

For example:
```
-rw-rw-r-- 
```

Those three sets are the owner of the file, the group in which the file belongs, and "others," meaning other users on the system.

```
 -    (rw-)   (rw-)   (r--) 1 user user
```
The first item, which specifies the file type, will probably be one of the following:

* d — a directory

* - (dash) — a regular file (rather than directory or link)

* l — a symbolic link to another program or file elsewhere on the system


Beyond the first item, in each of the following three sets, you may see one of the following:

* r — file can be read

* w — file can be written to

* x — file can be executed (if it is a program)

* - (dash) — specific permission has not been assigned

When you see a dash in owner, group, or others, it means that particular permission has not been granted. Look again at the first column of foo.txt and identify its permissions.

```
ls -l foo.txt 
-rw-rw-r--    1 user user     150 Mar 19 08:08 foo.txt
```
The file's owner (in this case, user) has permission to read and write to the file. The group, user, has permission to read and write to foo.txt, as well. It is not a program, so neither the owner or the group has permission to execute it.


## chmod

Setting	Numerical	Meaning
-rw-------	(600)	Only the owner has read and write permissions.
-rw-r--r--	(644)	Only the owner has read and write permissions; the group and others have read only.
-rwx------	(700)	Only the owner has read, write, and execute permissions.
-rwxr-xr-x	(755)	The owner has read, write, and execute permissions; the group and others have only read and execute.
-rwx--x--x	(711)	The owner has read, write, and execute permissions; the group and others have only execute.
-rw-rw-rw-	(666)	Everyone can read and write to the file. (Be careful with these permissions.)
-rwxrwxrwx	(777)	Everyone can read, write, and execute. (Again, this permissions setting can be hazardous.)

