## "&&"
"&&" is used to chain commands together, such that the next command is run if and only if the preceding command exited without errors (or, more accurately, 
exits with a return code of 0).

```
gpg --keyserver keyserver.ubuntu.com --recv 26C2E075 && \
gpg --export --armor 26C2E075
```

## >  >>  >&
What is the difference between > and >> and >& (especially as it relates to use with the cat program)?

写法
```
cat temp.txt > myfile.txt

cat temp.txt >> myfile.txt
```
> writes to a file, overwriting any existing contents. 
>> appends to a file.

例子：
```
➜  ~ ls > capture.txt && cat capture.txt
Applications
Blog
DB
Desktop
Development
Document
test.js
```

把stderr 写入文件
```shell
#!/bin/bash

echo "About to try to access a file that doesn't exist"
cat bad-filename.txt
```
执行：
```
➜ ~ ./error.sh zsh: permission denied: ./error.sh
```
当前用户没有该文件的执行权限，先授权
```
➜ ~ chmod +x error.sh 

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


➜  ~ ./error.sh 1> capture.txt 2> error.txt
This command will direct stdout to a file called capture.txt and stderr to a file called error.txt.

➜  ~ cat capture.txt
About to try to access a file that doesn't exist
➜  ~ cat error.txt
cat: bad-filename.txt: No such file or directory
```












