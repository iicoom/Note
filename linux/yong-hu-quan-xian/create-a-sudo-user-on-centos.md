# Create a Sudo User on CentOS

[https://linuxize.com/post/create-a-sudo-user-on-centos/\#conclusion](https://linuxize.com/post/create-a-sudo-user-on-centos/#conclusion)

1. Start by logging in to your CentOS server as the root user.

   ```text
   ssh root@server_ip_address
   ```

2. Create a new user account using the useradd command.

   ```text
   useradd username
   ```

   Replace username with the user name that you want to create.

3. Use the passwd command to set a password for the new user.

   ```text
   passwd username
   ```

   You will be prompted to confirm the password. Make sure you use a strong password.

4. Add the new user to the wheel group.

   ```text
   usermod -aG wheel username
   ```

Switch to the newly created user:

```text
su - username
```

To use sudo, simply prefix the command with sudo and space.

```text
sudo [COMMAND]
```

for example

```text
[root@vultr ~]# su - xiaomao
[xiaomao@vultr ~]$ ls -l /root
ls: cannot open directory /root: Permission denied


[xiaomao@vultr ~]$ sudo ls -l /root

We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for xiaomao:
total 112
drwxr-xr-x 3 root root  4096 Mar  6 14:34 prots
-rw-r--r-- 1 root root 86927 Mar  6 05:29 shaocks.log
-rwxr-xr-x 1 root root 13834 Mar  6 05:24 ssocks.sh
```

