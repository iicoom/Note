[What Are stdin, stdout, and stderr on Linux?](https://www.howtogeek.com/435903/what-are-stdin-stdout-and-stderr-on-linux/)

These values are always used for stdin, stdout, and stderr:
0: stdin
1: stdout
2: stderr

stdin, stdout, and stderr are three data streams created when you launch a Linux command.

Data streams, like water streams, have two ends. 
They have a source and an outflow. Whichever Linux command you’re using provides one end of each stream. 
The other end is determined by the shell that launched the command. 
That end will be connected to the terminal window, connected to a pipe, or redirected to a file or other command, 
according to the command line that launched the command.

```
[doraemon@mxj-s ~]$ ls
addTwo.sh  dir.txt  myschema.sql.tgz  switch.sql
[doraemon@mxj-s ~]$ ls > capture.txt
[doraemon@mxj-s ~]$ cat capture.txt 
addTwo.sh
capture.txt
dir.txt
myschema.sql.tgz
switch.sql
```

## 控制和重定向操作符
[What are the shell's control and redirection operators?](https://unix.stackexchange.com/questions/159513/what-are-the-shells-control-and-redirection-operators)

### Control operators
&   &&   (   )   ;   ;;   <newline>   |   ||

- List terminators
; : Will run one command after another has finished, irrespective of the outcome of the first.
```
command1 ; command2
```
First command1 is run, in the foreground, and once it has finished, command2 will be run.

& : This will run a command in the background, allowing you to continue working in the same shell.
```
command1 & command2
```
Here, command1 is launched in the background and command2 starts running in the foreground immediately, 
without waiting for command1 to exit.

### Logical operators
&& : Used to build AND lists, it allows you to run one command only if another exited successfully.
```
 command1 && command2
```
Here, command2 will run after command1 has finished and only if command1 was successful (if its exit code was 0). 
Both commands are run in the foreground.

|| : Used to build OR lists, it allows you to run one command only if another exited unsuccessfully.

### Pipe operator
| : The pipe operator, it passes the output of one command as input to another. 
A command built from the pipe operator is called a pipeline.
```
command1 | command2
```
Any output printed by command1 is passed as input to command2.

|& : This is a shorthand for 2>&1 | in bash and zsh. It passes both standard output and standard error of one command as input to another.
```
command1 |& command2
```

## Redirection Operators
<     >     >|     <<     >>     <&     >&     <<-     <>

These allow you to control the input and output of your commands. They can appear anywhere within a simple command or may follow a command. 
Redirections are processed in the order they appear, from left to right.
1. 
```
< : Gives input to a command.

command < file.txt
```
2. 
```
<> : same as above, but the file is open in read+write mode instead of read-only:
command <> file.txt
```
If the file doesn't exist, it will be created.

3.
```
> : Directs the output of a command into a file.

command > out.txt

This operator is also often used to choose whether something should be printed to standard error or standard output:

command >out.txt 2>error.txt
```

4.
```
>| : Does the same as >, but will overwrite the target, even if the shell has been configured to refuse 
overwriting (with set -C or set -o noclobber).

command >| out.txt

If out.txt exists, the output of command will replace its content. If it does not exist it will be created.
```

5.
```
>> : Does the same as >, except that if the target file exists, the new data are appended.

command >> out.txt

If out.txt exists, the output of command will be appended to it, after whatever is already in it. 
If it does not exist it will be created.
```





