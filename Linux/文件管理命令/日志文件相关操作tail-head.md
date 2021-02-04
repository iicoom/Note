> head 与 tail 就像它的名字一样的浅显易懂，它是用来显示开头或结尾某个数量的文字区块，head 用来显示档案的开头至标准输出中，而 tail 想当然就是看档案的结尾，看看下面的范例：

### tail

tail filename.txt     默认读取文件结尾后10行
tail -n filename      显示文件后n行
tail -25 mail.txt     displays the last 25 lines of a file
sodu tail -50f file   展示文件后50行，并跟随

### head
head -6 readme.txt
displays the first 6 lines of a file

### head&tail 事实证明这个是扯淡的。。。
head -20 file | tail -10  结合了 head 与 tail 的指令，显示档案的第 11 行到第 20 行：


https://www.cnblogs.com/qiaoyanlin/p/6706085.html


### cat filename | grep keyword
cat log-2021.log | grep traceId