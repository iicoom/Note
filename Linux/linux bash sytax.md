## Linux Bash Syntax: Meaning of &&, \, and -
What do the '&&', '\' and '-' mean at the end of bash commands?

```
gpg --keyserver keyserver.ubuntu.com --recv 26C2E075 && \
    gpg --export --armor 26C2E075 | sudo apt-key add - && \
    sudo apt-get update
```

"&&" is used to chain commands together, such that the next command is run if and only if the preceding command exited without errors (or, more accurately, exits with a return code of 0).

"\" by itself at the end of a line is a means of concatenating lines together. So the following two lines:
```
gpg --keyserver keyserver.ubuntu.com --recv 26C2E075 && \
gpg --export --armor 26C2E075
```

are processed exactly the same as if the line was written as the single line:
```
gpg --keyserver keyserver.ubuntu.com --recv 26C2E075 && gpg --export --armor 26C2E075
```

"-" is a command line argument with no specific bash function. 


## What is the difference between > and >> and >& (especially as it relates to use with the cat program)? 

**写法1**
cat temp.txt > myfile.txt

cat temp.txt >> myfile.txt

```
> writes to a file, overwriting any existing contents. >> appends to a file.
```

**写法2**
```
➜  ~ ls > capture.txt && cat capture.txt
Applications
Blog
DB
Desktop
Development
Document
Documents
Downloads
Library
Model
Movies
Music
NASH
Ngrok
Pictures
Public
Repo
Seafile
WeChatProjects
Work
capture.txt
dump.rdb
dwhelper
jmeter.log
logs
test.js
```

**写法3 把stderr 写入文件**
Type the following text into an editor and save it to a file called error.sh.
```
#!/bin/bash

echo "About to try to access a file that doesn't exist"
cat bad-filename.txt
```
➜  ~ ./error.sh
zsh: permission denied: ./error.sh

➜  ~ chmod +x error.sh
➜  ~ ./error.sh
About to try to access a file that doesn't exist
cat: bad-filename.txt: No such file or directory

➜  ~ ./error.sh >> capture.txt
➜  ~ cat capture.txt
Applications
Blog
DB
Desktop
Development
Document
Documents
Downloads
dwhelper
jmeter.log
logs
test.js
About to try to access a file that doesn't exist

>> 把内容插到了末尾

**写法4 Redirecting Both stdout and stderr**
This command will direct stdout to a file called capture.txt and stderr to a file called error.txt.

➜  ~ ./error.sh 1> capture.txt 2> error.txt
➜  ~ cat capture.txt
About to try to access a file that doesn't exist
➜  ~ cat error.txt
cat: bad-filename.txt: No such file or directory

**写法5 Redirecting stdout and stderr to the Same File**
```
./error.sh > capture.txt 2>&1
```
* ./error.sh: Launches the error.sh script file.
* > capture.txt: Redirects the stdout stream to the capture.txt file. > is shorthand for 1>.
* 2>&1: This uses the &> redirect instruction. This instruction allows you to tell the shell to make one stream got to the same destination as another stream. In this case, we’re saying “redirect stream 2, stderr, to the same destination that stream 1, stdout, is being redirected to.”

➜  ~ cat capture.txt
About to try to access a file that doesn't exist
cat: bad-filename.txt: No such file or directory

[What Are stdin, stdout, and stderr on Linux?](https://www.howtogeek.com/435903/what-are-stdin-stdout-and-stderr-on-linux/)

These values are always used for stdin, stdout, and stderr:
0: stdin
1: stdout
2: stderr