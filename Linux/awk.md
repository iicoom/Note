## awk '条件1 {动作 1} 条件 2 {动作 2} …' 文件名

[doraemon@mxj server]$ ps -ef|grep node
doraemon 27100 14596  0 12:04 pts/0    00:00:00 grep --color=auto node

[doraemon@mxj server]$ ps -ef|grep node|awk '{print $2}'
27097

[root@localhost ~]# awk '{printf $2 "\t" $6 "\n"}' student.txt
#输出第二列和第六列的内容
Name Average
Liming 87.66
Sc 85.66
Gao 91.66
