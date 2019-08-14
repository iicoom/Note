# start

## start\_member.sh

java\_projects中的文件: log.file logs member.jar start\_member.sh

启动脚本： java -jar member.jar --server.port=18880 --spring.profiles.active=functional &gt; /mnt/java\_projects/log.file 2&gt;&1 &

## echo

➜ ~ echo "Enter your name: \c" Enter your name: %

## printf

➜ ~ printf "Hello \n world\n" Hello world

➜ ~ printf "The first program always prints '%s, %s'\n" Hello world The first program always prints 'Hello, world'

format specifier %s 用于字符串 %d 用于十进制整数

## if 语句

```text
if  条件
then
   Command1
[else
   Command2]  #中括号表示else语句可以没有
fi            #别忘了这个结尾

if语句忘了结尾fi,在运行时报错如下：
test.sh: line xx: syntax error: unexpected end of fi
```

以上语句的意思是当"条件"的结果为真值时，进入then后面的语句command1，否则执行else语句中command2。执行完command 或 没有else语句，命令就走到fi结束该if语句

## 切换目录

### pushd

Save and then change the current directory. With no arguments, pushd exchanges the top two directories. pushd命令常用于将目录加入到栈中，加入记录到目录栈顶部，并切换到该目录；若pushd命令不加任何参数，则会将位于记录栈最上面的2个目录对换位置

### popd

Remove the top entry from the directory stack, and cd to the new top directory. 用于删除目录栈中的记录；如果popd命令不加任何参数，则会先删除目录栈最上面的记录，然后切换到删除过后的目录栈中的最上面的目录

[shell 中的&lt;,&lt;&lt;,&gt;,&gt;&gt;](https://www.cnblogs.com/qwj-sysu/p/4989656.html)

## 文件描述符

linux启动后，会默认打开3个文件描述符，分别是：标准输入standard input 0,正确输出standard output 1,错误输出：error output 2

以后打开文件后。新增文件绑定描述符 可以依次增加。 一条shell命令执行，都会继承父进程的文件描述符。因此，所有运行的shell命令，都会有默认3个文件描述符。

### &gt;,&gt;&gt;

输出重定向：表示把将输出重定向到屏幕或者设备或者文件

```text
qiweijie@qiweijie:~/study_shell$ ls t.txt t.txt1
ls: 无法访问t.txt1: 没有那个文件或目录
t.txt


qiweijie@qiweijie:~/study_shell$ ls t.txt t.txt1 >suc.txt
ls: 无法访问t.txt1: 没有那个文件或目录
qiweijie@qiweijie:~/study_shell$ cat suc.txt 
t.txt

# 正确输出和错误输出分别输出到不同的文件
qiweijie@qiweijie:~/study_shell$ ls t.txt t.txt1 1>suc.txt 2>err.txt
qiweijie@qiweijie:~/study_shell$ cat suc.txt err.txt 
t.txt
ls: 无法访问t.txt1: 没有那个文件或目录
```

> > 这样写表示追加到文件
> >
> > ```text
> > qiweijie@qiweijie:~/study_shell$ ls t.txt t.txt1 1>>suc.txt 2>>err.txt
> > qiweijie@qiweijie:~/study_shell$ cat suc.txt err.txt 
> > t.txt
> > t.txt
> > ls: 无法访问t.txt1: 没有那个文件或目录
> > ls: 无法访问t.txt1: 没有那个文件或目录
> > ```

