[Linux 用户和用户组管理](http://www.runoob.com/linux/linux-user-manage.html)
## Linux系统用户组的管理
每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。

完成用户管理的工作有许多种方法，但是每一种方法实际上都是对有关的系统文件进行修改。
与用户和用户组相关的信息都存放在一些系统文件中，这些文件包括/etc/passwd, /etc/shadow, /etc/group等。
下面分别介绍这些文件的内容。

### /etc/passwd
/etc/passwd 文件是用户管理工作涉及的最重要的一个文件
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

### /etc/shadow
/etc/shadow 中的记录行与/etc/passwd中的一一对应，它由pwconv命令根据/etc/passwd中的数据自动产生

它的文件格式与/etc/passwd类似，由若干个字段组成，字段之间用":"隔开。这些字段是：

登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志
```
fengcao1:$6$Pzm20q2n$xdOPdGNPyfnFt9kCut6.fp5jJDLgQJUw9xaMHdOJcaR4/VnioDn9LOqUUCsT10MuBJGuesrZGYzLtVOU8MYC.1:17304:0:99999:7:::
hongri:!!:17393:0:99999:7:::
jiayuan:$6$WZrs.LBW$HgteB32c/LetfZwvwiNkF1t7nSIEmw9o.JhB33nHPlKQN250jl9XAL9Akkh8hgrSGgmvgjrkU//GF9qy40bav/:17396:0:99999:7:::
xiaojie:!!:17426:0:99999:7:::
xiaomao:$6$ZGlD1zHW$NmQyMmhRJrcnp4dwlmY4wrO8l5IqoTe8pxVayC8sfuL8hr9gq5Ke3BfH6SqdXnG6a.6s9gEXDrCsLJecSPiHG1:17463:0:99999:7:::
```

### /etc/group 
用户组的所有信息都存放在/etc/group文件中。
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

```
[root@vultr home]# cat /etc/group
root:x:0:
bin:x:1:
daemon:x:2:
sys:x:3:
adm:x:4:
tty:x:5:
disk:x:6:
lp:x:7:
mem:x:8:
kmem:x:9:
wheel:x:10:xiaojie
cdrom:x:11:
mail:x:12:postfix

[root@vultr home]# cat /etc/group | awk -F: '{ print $1}'
root
bin
daemon
sys
adm
tty
disk
lp
mem
kmem
wheel
cdrom
mail
```


### groups 查看当前登录用户所属组
```
[maoxiaojie@stag-app ~]$ groups
maoxiaojie wheel
```

### Wheel组
 先来看看维基百科中对wheel组的一段描述：
   Wheel group：
                  Modern Unix systems use user groups to control access privileges. The wheel group is a special user   group 
used on some Unix systems to control access to the su command, which allows a user to masquerade as假扮，乔装，伪装 another 
user (usually the super user).

Unix systems使用用户分组来控制权限，wheel group是特殊的组（用于控制su权限的使用），是用户可以使用超管角色


### groupadd 增加一个新的用户组使用
```
groupadd 选项 用户组
```

### groupdel 删除一个已有的用户组
```
groupdel 用户组
```

### groupmod 更改群组识别码或名称
```
-g<群组识别码>：设置欲使用的群组识别码；
-o：重复使用群组识别码；
-n<新群组名称>：设置欲使用的群组名称。
```