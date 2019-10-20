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


## What is the difference between > and >> (especially as it relates to use with the cat program)? 
cat temp.txt > myfile.txt

cat temp.txt >> myfile.txt

```
> writes to a file, overwriting any existing contents. >> appends to a file.
```

## what is >> symbol and >& in unix/Linux? [duplicate]
