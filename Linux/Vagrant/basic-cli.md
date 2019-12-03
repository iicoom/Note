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

Admin@PS2019DXNBJQRZ MINGW64 /e/Joy/server (master)
$ vagrant global-status
id       name    provider   state    directory
-------------------------------------------------------------------------
1334fb2  default virtualbox poweroff E:/Joy/server

The above shows information about all known Vagrant environments
on this machine. This data is cached and may not be completely
up-to-date. To interact with any of the machines, you can go to
that directory and run Vagrant, or you can use the ID directly
with Vagrant commands from any directory. For example:
"vagrant destroy 1a2b3c4d"
状态变为 poweroff
```

## Command: vagrant halt [name|id]
Vagrant will first attempt to gracefully shut down the machine by running the guest OS shutdown mechanism. If this fails, or if the --force flag is specified, Vagrant will effectively just shut off power to the machine.
-f or --force - Do not attempt to gracefully shut down the machine. This effectively pulls the power on the guest machine.
```shell
Admin@PS2019DXNBJQRZ MINGW64 /e/Joy/server (master)
$ vagrant halt 1334fb2
==> default: Attempting graceful shutdown of VM...
==> default: Forcing shutdown of VM...

```

## Command: vagrant reload [name|id]
The equivalent of running a halt followed by an up.
This command is usually required for changes made in the Vagrantfile to take effect. After making any modifications to the Vagrantfile, a reload should be called.
这个命令相当于先执行vagrant halt 在执行vagrant up. 用于Vagrantfile修改之后，使之生效。


## Command: vagrant suspend [name|id]
This suspends the guest machine Vagrant is managing, rather than fully shutting it down or destroying it.

A suspend effectively saves the exact point-in-time state of the machine, so that when you resume it later, it begins running immediately from that point, rather than doing a full boot.

This generally requires extra disk space to store all the contents of the RAM within your guest machine, but the machine no longer consumes the RAM of your host machine or CPU cycles while it is suspended.

## Command: vagrant resume [name|id]
This resumes a Vagrant managed machine that was previously suspended, perhaps with the suspend command.


