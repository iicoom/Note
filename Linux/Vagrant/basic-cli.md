## Command: vagrant init [name [url]]
This initializes the current directory to be a Vagrant environment by creating an initial Vagrantfile if one does not already exist.

If a first argument is given, it will prepopulate the config.vm.box setting in the created Vagrantfile.

If a second argument is given, it will prepopulate the config.vm.box_url setting in the created Vagrantfile.

## Command: vagrant up [name|id]
This command creates and configures guest machines according to your Vagrantfile.

This is the single most important command in Vagrant, since it is how any Vagrant machine is created. Anyone using Vagrant must use this command on a day-to-day basis.


## Command: vagrant global-status
This command will tell you the state of all active Vagrant environments on the system for the currently logged in user.

```shell
$ vagrant global-status
id       name    provider   state   directory
------------------------------------------------------------------------
f6ffb74  default virtualbox running E:/Joy/server

The above shows information about all known Vagrant environments
on this machine. This data is cached and may not be completely
up-to-date. To interact with any of the machines, you can go to
that directory and run Vagrant, or you can use the ID directly
with Vagrant commands from any directory. For example:
"vagrant destroy 1a2b3c4d"
```
