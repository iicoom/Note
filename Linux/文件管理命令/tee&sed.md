https://man.linuxde.net/tee

## tee命令
tee命令文件过滤分割与合并
tee命令用于将数据重定向到文件，另一方面还可以提供一份重定向数据的副本作为后续命令的stdin。简单的说就是把数据重定向到给定文件和屏幕上。

![tee命令](https://cdn.shortpixel.ai/client/q_glossy,ret_img/http://man.linuxde.net/wp-content/uploads/2013/12/073315SF8.gif)

```
[doraemon@mxj-s ~]$ ls | tee dir.txt
addTwo.sh
dir.txt
myschema.sql
switch.sql
[doraemon@mxj-s ~]$ cat dir.txt
addTwo.sh
dir.txt
myschema.sql
switch.sql

or
[doraemon@mxj-s ~]$ ls | tee dir.txt | cat
addTwo.sh
dir.txt
myschema.sql
switch.sql

[doraemon@mxj-s ~]$ ls | tee dir.txt | cat -n
     1	addTwo.sh
     2	dir.txt
     3	myschema.sql
     4	switch.sql
```

## sed命令
sed是一种流编辑器，它是文本处理中非常中的工具，能够完美的配合正则表达式使用，功能不同凡响。
sed [options] 'command' file(s)

-e<script>或--expression=<script>：以选项中的指定的script来处理输入的文本文件；
  
command:
d 删除，删除选择的行。
D 删除模板块的第一行。
s 替换指定字符

```
替换操作：s命令
[doraemon@mxj-s ~]$ echo adbook-sbook-koob | sed 's/book/books/'
adbooks-sbook-koob

[doraemon@mxj-s ~]$ echo adbook-sbook-koob | sed 's/book/books /'
adbooks -sbook-koob

[doraemon@mxj-s ~]$ echo adbook-sbook-koob | sed 's/^/books /'
books adbook-sbook-koob 在输入的开头插入'books '

[doraemon@mxj-s ~]$ echo adbook-sbook-koob | sed 's/book/books/g'
adbooks-sbooks-koob
  
当需要从第N处匹配开始替换时，可以使用 /Ng：
[doraemon@mxj-s ~]$ echo sksksksksksk | sed 's/sk/SK/2g'
skSKSKSKSKSK
[doraemon@mxj-s ~]$ echo sksksksksksk | sed 's/sk/SK/3g'
skskSKSKSKSK
```

结合：
```
manager_server | tee logs/manager_server"${time}".log | sed -e 's/^/[manager_server] /' & \
room_server | tee logs/room_server"${time}".log | sed -e 's/^/[room_server] /' & \
```
