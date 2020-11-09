## ls
```
-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-A：显示除影藏文件“.”和“..”以外的所有文件列表；
-C：多列显示输出结果。这是默认选项；
-l：与“-C”选项功能相反，所有输出信息用单列格式输出，不输出为多列；
-F：在每个输出项后追加文件的类型标识符，具体含义：“*”表示具有可执行权限的普通文件，“/”表示目录，“@”表示符号链接，“|”表示命令管道FIFO，“=”表示sockets套接字。当文件为普通文件时，不输出任何标识符；
-b：将文件中的不可输出的字符以反斜线“”加字符编码的方式输出；
-c：与“-lt”选项连用时，按照文件状态时间排序输出目录内容，排序的依据是文件的索引节点中的ctime字段。与“-l”选项连用时，则排序的一句是文件的状态改变时间；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-f：此参数的效果和同时指定“aU”参数相同，并关闭“lst”参数的效果；
-i：显示文件索引节点号（inode）。一个索引节点代表一个文件；
--file-type：与“-F”选项的功能相同，但是不显示“*”；
-k：以KB（千字节）为单位显示文件大小；
-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-m：用“,”号区隔每个文件和目录的名称；
-n：以用户识别码和群组识别码替代其名称；
-r：以文件名反序排列并输出目录内容列表；
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；
-L：如果遇到性质为符号链接的文件或目录，直接列出该链接所指向的原始文件或目录；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；

[root@vultr ~]# ls
cron_test  mao is handsome!  shadow  

按修改时间列出文件和目录及隐藏文件详细信息
[root@vultr ~]# ls -ltra
total 5932
-rw-r--r--.  1 root root     129 Dec 29  2013 .tcshrc
-rw-r--r--.  1 root root     100 Dec 29  2013 .cshrc
-rw-r--r--.  1 root root     176 Dec 29  2013 .bash_profile
-rw-r--r--.  1 root root      18 Dec 29  2013 .bash_logout
-rwxr-xr-x   1 root root   46196 Dec  5  2019 shadowsocks-all.sh
drwxr-----   3 root root    4096 Dec  5  2019 .pki
-rw-r--r--   1 root root     619 Dec  5  2019 shadowsocks_r_qr.png
-rw-r--r--   1 root root   47464 Dec  5  2019 shadowsocks-all.log
dr-xr-xr-x. 19 root root    4096 Dec 15  2019 ..
-rw-r--r--.  1 root root     373 Dec 15  2019 .bashrc
drwxr-xr-x   8 root root    4096 Dec 15  2019 .nvm
drwx------   3 root root    4096 Dec 15  2019 .config
-rw-------   1 root root      41 Dec 16  2019 .npmrc
-rwxr-xr-x   1 root root   13834 Dec 28  2019 shadowsocks.sh
drwx------   2 root root    4096 Dec 29  2019 .ssh
drwxr-xr-x   5 root root    4096 Jun 17 12:03 .pm2
```