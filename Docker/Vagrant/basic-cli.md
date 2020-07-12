## Command: vagrant init [name [url]]
This initializes the current directory to be a Vagrant environment by creating an initial Vagrantfile if one does not already exist.

If a first argument is given, it will prepopulate the config.vm.box setting in the created Vagrantfile.

If a second argument is given, it will prepopulate the config.vm.box_url setting in the created Vagrantfile.

```
➜  ~ cd Centos7
➜  Centos7 vagrant init centos/7
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
```
上面的操作在Centos7初始化了 box 为 centos/7 的 Vagrantfile，看一下里边的内容：
```
# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "centos/7"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end
```

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

## 操作流程
Windows关机不需要对vagrant做任何处理
1. 开机查看
```
Admin@PS2019DXNBJQRZ MINGW64 ~
$ vagrant box list
doraemonkart (virtualbox, 0)

全局状态
Admin@PS2019DXNBJQRZ MINGW64 ~
$ vagrant global-status
id       name    provider   state   directory
------------------------------------------------------------------------
1334fb2  default virtualbox aborted E:/Joy/server

The above shows information about all known Vagrant environments
on this machine. This data is cached and may not be completely
up-to-date. To interact with any of the machines, you can go to
that directory and run Vagrant, or you can use the ID directly
with Vagrant commands from any directory. For example:
"vagrant destroy 1a2b3c4d"

状态变成 aborted
```
2. 尝试连接
```
Admin@PS2019DXNBJQRZ MINGW64 ~
$ vagrant ssh
A Vagrant environment or target machine is required to run this
command. Run `vagrant init` to create a new Vagrant environment. Or,
get an ID of a target machine from `vagrant global-status` to run
this command on. A final option is to change to a directory with a
Vagrantfile and to try again.
没有在环境目录下操作出现上面问题
```
3. 切换目录
```
Admin@PS2019DXNBJQRZ MINGW64 /e/Joy/server (master)
$ vagrant ssh
VM must be running to open SSH connection. Run `vagrant up`
to start the virtual machine.
```
4. 启动之前的环境
```bash
vagrant up

启动后可以通过vagrant ssh 连接， 之前配置的公钥登录也可以登录
```



