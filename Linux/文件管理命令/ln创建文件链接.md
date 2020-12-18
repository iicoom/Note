> ln命令用来为文件创件连接，连接类型分为硬连接和符号连接两种，默认的连接类型是硬连接。如果要创建符号连接必须使用"-s"选项。[oo](https://man.linuxde.net/ln)

## 参数
- 源文件：指定连接的源文件。如果使用-s选项创建符号连接，则“源文件”可以是文件或者目录。创建硬连接时，则“源文件”参数只能是文件；
- 目标文件：指定源文件的目标连接文件。

### 硬链接
将目录/usr/mengqc/mub1下的文件m2.c链接到目录/usr/liu下的文件a2.c
```shell
cd /usr/mengqc
ln /mub1/m2.c /usr/liu/a2.c
```

### 符号链接
在目录/usr/liu下建立一个符号链接文件abc，使它指向目录/usr/mengqc/mub1
```
ln -s /usr/mengqc/mub1 /usr/liu/abc
```
执行该命令后，/usr/mengqc/mub1代表的路径将存放在名为/usr/liu/abc的文件中。

