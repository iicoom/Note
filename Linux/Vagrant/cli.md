## Command: vagrant global-status
This command will tell you the state of all active Vagrant environments on the system for the currently logged in user.

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
