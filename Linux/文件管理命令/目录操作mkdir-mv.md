unix命令
在工作目录下，建立一个名为 AAA 新的子目录 : 　 mkdir AAA

在工作目录下的 BBB 目录中，建立一个名为 Test 的子目录。若 BBB 目录原本不存在，则建立一个： 　 mkdir -p BBB/Test（注：本例若不加 -p，且原本 BBB目录不存在，则产生错误。）

## 目录重命名
mkdir /etc/data
mv data dataY   把data 重命名为 dataY