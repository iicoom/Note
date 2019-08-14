# file location

> This Linux tutorial will explain the three “W” commands. The three “W”s are whatis, whereis and which commands.

Now, these three W commands will help you to locate more stuff from Linux command line.

## 查找程序所在的位置

### II. Linux whereis Command

Whereis command is helpful to locate binary, source and manual pages of commands in the Linux system. It is very simple utility and provides several options which are given below with examples.

$ whereis \[-options\]

For example, whereis command is run without any option.

```text
$ whereis open
open: /bin/open /usr/share/man/man1/open.1.gz /usr/share/man/man2/open.2.gz
```

If we want to locate binary of Linux command, use “-b” option.

```text
$ whereis -b whereis
whereis: /usr/bin/whereis /usr/bin/X11/whereis
```

If we want to locate man page of Linux command, use “-m” option.

```text
$ whereis -m whereis
whereis: /usr/share/man/man1/whereis.1.gz
```

It locates man page of “whereis” command and displays path where man page of command is available in the system.

If we want to locate source of Linux command, use “-s” option.

```text
$ whereis -s whereis
whereis:
```

It locates source of “whereis” command, but source of “whereis” command does not exist in the system, so it did not display path for source of command in the system.

### III. Linux which Command

Which command is very small and simple command to locate executables in the system. It allows user to pass several command names as arguments to get their paths in the system. “which” commands searches the path of executable in system paths set in $PATH environment variable.

$ which \[-option\]

