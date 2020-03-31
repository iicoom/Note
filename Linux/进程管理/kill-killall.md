## kill
If you know a process ID, you can kill it with the command:
```
kill <processID>
```
The kill command will kill a single process at a time with the given process ID. It will send a SIGTERM signal indicating to a process to stop. It waits for the program to run its shutdown routine.

### kill -9 Linux Command
kill -9 is a useful command when you need to shut down an unresponsive service. Run it similarly as a regular kill command:
```
kill -9 <processID>

or

kill -SIGKILL <processID>
```


## killall
killall命令使用进程的名称来杀死进程，使用此指令可以杀死一组同名进程。我们可以使用kill命令杀死指定进程PID的进程，如果要找到我们需要杀死的进程，我们还需要在之前使用ps等命令再配合grep来查找进程，而killall把这两个过程合二为一，是一个很好用的命令。

killall(选项)(参数)
```
-e：对长名称进行精确匹配；
-l：忽略大小写的不同；
-p：杀死进程所属的进程组；
-i：交互式杀死进程，杀死进程前需要进行确认；
-l：打印所有已知信号列表；
-q：如果没有进程被杀死。则不输出任何信息；
-r：使用正规表达式匹配要杀死的进程名称；
-s：用指定的进程号代替默认信号“SIGTERM”；
-u：杀死指定用户的进程。
```

```
killall node
```

A killall process never kills itself (but may kill other killall processes).