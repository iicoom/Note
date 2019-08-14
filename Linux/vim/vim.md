## vim 设置文件头 
1. Ubuntu
sudo -i
cd /etc/vim
vim vimrc
```
"################### 以下为自定义配置 Add by MXJ ####################"
set number
syntax on         "自动语法高亮
set showmatch     "高亮显示对应的括号
set cursorcolumn  "set cursorline
set cindent       "C风格的对齐方式
set autoindent    "自动对齐
set tabstop=4     "Tab键的宽度

              "autocmd BufNewFile *.py,*.sh, exec ":call SetTitle()"
let $author_name = "MXJ"
let $author_email = "asdfpeng@qq.com"
func SetTitle()
         if &filetype == 'sh'
                 call setline(1,"\##########################################################################")
                 call append(line("."), "\# File Name: ".expand("%"))
                 call append(line(".")+1, "\# Author:".$author_name)
                 call append(line(".")+2, "\# Email:".$author_email)
                 call append(line(".")+3, "\# Created Time:".strftime("%c"))
                 call append(line(".")+4, "\#=======================================================================")
                 call append(line(".")+5, "\#!/bin/bash")
                 call append(line(".")+6, "")
         else
                 call setline(1,"###########################################################################")
                 call append(line("."), "\# File Name: ".expand("%"))
                 call append(line(".")+1, "\# Author:".$author_name)
                 call append(line(".")+2, "\# Email:".$author_email)
                 call append(line(".")+3, "\# Created Time:".strftime("%c"))
                 call append(line(".")+4, "\#=======================================================================")
                call append(line(".")+5, "\#!/usr/bin/python")
                call append(line(".")+6, "")
        endif
autocmd BufNewFile * normal G
endfunc

```
2. Mac
https://blog.csdn.net/yuanmengong886/article/details/52914714
vim 在Mac电脑下的配置和Linux下的一样，只是配置的路径不一样

在liunx 系统下, vim 的配置是在/etc 的vimrc 的配置目录下

在unix 的Mac 本下 vim 的配置路径如下：
```
- 首先执行  cp /usr/share/vim/vimrc ~/.vim   "拷贝默认的配置文件

- vim  ～/.vimrc    打开该文件，在文件的加入以下的配置信息:

```

## 待开发
```
VIM常用命令
常用命令

1) 光标命令
k,j,h,l---上下左右光标移动命令，虽然可以在Linux中使用键盘右边的四个光标键， 但是记住这四个命令还有非常有用的，也就是右手在键盘上放置的位置部分
nG ----n为行数，该命令立即使光标跳到指定行。
Ctrl+G-----光标所在位置的行数和列数报告
w,b------使光标向前或向后跳过一个单词  在非INSERT 状态下 b（begin）调到单词首  e（end）调到单词尾
2) 编辑命令
i,a,r -------在光标的前,后,上方插入字符命令(i=insert,a=append,r=replace) 
cw,dw------ 改变(置换)/删除光标所在处的单词的命令 (c=change,d=delete) 
x,d$,dd -----删除一个字符，光标所在处到行尾的所有字符，和整行的命令
3) 查找命令 
/string, ?string-----从光标所在处向后/向前查找相应的字符串的命令
4)拷贝复制命令 
yy,p -----拷贝一行到剪贴板/取出剪贴板中内容的命令

常见问题及应用技巧
1) 在一个新文件中读/etc/passwd中的内容，取出用户名部分 
vi file 
:r /etc/passwd 在打开的文件file中光标所在处读入/etc/passwd 
:%s/:.*//g 删除/etc/passwd中用户名后面的从冒号开始直到行尾的所有部分 
:3r /etc/passwd 这是在指定的行号后面读入文件内容
另外一种方法删掉文件中所有的空行及以#开始的注释行 
#cat squid.conf.default | grep -v '^$' | grep -v '^#' 

2) 在打开一个文件编辑后才知道登录的用户对该文件没有写权，不能存盘
vi file
:w /tmp/1 既然没法存盘，不想放弃所做的所有修改，先临时存到/tmp/1
:20,59w /tmp/1 或者仅仅把第20到59行之间的内容存盘成文件/tmp/1
3) 用VI编辑一个文件，但需要删除大段大段的内容 
vi file 
Ctrl+G 把光标移到需要删除的行的处按ctrl+G显示行号，再到结尾处再按Ctrl+G. 
:23,1045d 假定两次行号为23和1045，则把这几间的内容全删除

也可以在开始和结束两行中用ma,mb命令标记后用:'a,'bd删除.
4) 在整个文件或某几行中在行首或行尾加一些字符串 
vi file 
:3,$s/^/some string / 在文件的第一行至最后一行的行首前插入some string 
:%s/$/ some string/g 在整个文件每一行的行尾添加 some string 

:%s/string1/string2/g 在整个文件中替换string1成string2 
:3,7s/string1/string2/ 仅替换文件中的第三到七行中的string1成string2 

Note: s为substitute,%表示所有行,g表示global 

5) 同时编辑两个文件,在两个文件中拷贝剪贴文本 
vi file1 file2 
yy 同时打开两个文件,在文件1的光标所在处拷贝所在行 
:n 切换到文件2 (n=next) 
p 在文件2的光标所在处粘贴所拷贝的行 
:N 切换回文件1
6) 替换文件中的路径 

:%s#/usr/bin#/bin#g 把文件中所有路径/usr/bin换成/bin 
或者用 
:%s//usr/bin//bin/g 在'/'前用符号指出'/'是真的单个字符'/'
7) 用 vi 多行注释
如果要给多行程序作注释，一个笨办法就是 插入 # ，然后用 j 跳到下一行用 . 命令，重复上个命令。如果要注释几百行，这样的方法恐怕太愚蠢了。一个聪明的办法是：
:.,+499 s/^/#/g
```