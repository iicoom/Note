## history
The history command shows a list of the commands entered since you started the session.
```
[moxaoie@app-31 ~]$ history
    1  ls
    2  sudo su
    3  exit
    4  cd ~/.ssh
    5  pwd
```

The history file is stored in a file that you can modify, as well. Bash shell users find it in their home directory as .bash_history.


```
[moxaoie@app-31 ~]$ ls -a
.  ..  .bash_history  .bash_logout  .bash_profile  .bashrc
```

## help history
```
[moxaoie@app-31 ~]$ help history
history: history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg [arg...]

Display or manipulate the history list.

Display the history list with line numbers, prefixing each modified
entry with a `*'.  An argument of N lists only the last N entries.

Options:
  -c	clear the history list by deleting all of the entries
  -d  offset	delete the history entry at offset OFFSET.

  -a	append history lines from this session to the history file
  -n	read all history lines not already read from the history file
  -r	read the history file and append the contents to the history
  list
  -w	write the current history to the history file
  and append them to the history list

  -p	perform history expansion on each ARG and display the result
  without storing it in the history list
  -s	append the ARGs to the history list as a single entry

If FILENAME is given, it is used as the history file.  Otherwise,
if $HISTFILE has a value, that is used, else ~/.bash_history.

If the $HISTTIMEFORMAT variable is set and not null, its value is used
as a format string for strftime(3) to print the time stamp associated
with each displayed history entry.  No time stamps are printed otherwise.

Exit Status:
Returns success unless an invalid option is given or an error occurs.
```

每个用户都有自己的history
### 清除当前用户的history
```
[root@vultr ~]# history -c
```

### [moxaoie@moxaoie ~]$ history -c
```
[moxaoie@vultr ~]$ history
    1  sudo -i
    2  w
    3  pkill -9 -u root
    4  sudo -i
    5  w
    6  sudo -i
    7  history
```