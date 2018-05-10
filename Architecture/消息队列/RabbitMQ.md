### homebrew
➜  ~ brew help
Example usage:
  brew search [TEXT|/REGEX/]
  brew info [FORMULA...]
  brew install FORMULA...
  brew update
  brew upgrade [FORMULA...]
  brew uninstall FORMULA...
  brew list [FORMULA...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA

Contributing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh

## rabbitmq  
### Installing on Mac
[Installation with Homebrew](http://www.rabbitmq.com/install-standalone-mac.html)
```
==> Summary
🍺  /usr/local/Cellar/erlang/20.3.2: 7,036 files, 277.4MB
==> Installing rabbitmq
==> Downloading https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.7.4/rabbitmq-server-generic-unix-3.7.4.tar.xz
######################################################################## 100.0%
==> /usr/bin/unzip -qq -j /usr/local/Cellar/rabbitmq/3.7.4/plugins/rabbitmq_management-3.7.4.ez rabbitmq_management-3.7.4/priv/www/cli/rabbitmqadmin
==> Caveats
Management Plugin enabled by default at http://localhost:15672

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

To have launchd start rabbitmq now and restart at login:
  brew services start rabbitmq
Or, if you don't want/need a background service you can just run:
  rabbitmq-server
==> Summary
🍺  /usr/local/Cellar/rabbitmq/3.7.4: 232 files, 12.6MB, built in 57 seconds
```
### Run RabbitMQ Server
Overview
Unlike some other installation methods, namely the Debian and RPM packages, RabbitMQ generic UNIX binary build does not require sudo. It can be uncompressed into any location and started and managed using the tools under sbin. Default data directory location will be under ./var, that is, in the installation directory.

Start the Server
To start the server, run the sbin/rabbitmq-server script. This displays a short banner message, concluding with the message "completed with [n] plugins.", indicating that the RabbitMQ broker has been started successfully.

#### 切到安装目录启动server
➜  ~ cd /usr/local/sbin
➜  sbin ls
cuttlefish           rabbitmq-defaults    rabbitmq-diagnostics rabbitmq-env         rabbitmq-plugins     rabbitmq-server      rabbitmqadmin        rabbitmqctl

```
➜  sbin sh rabbitmq-server

  ##  ##
  ##  ##      RabbitMQ 3.7.4. Copyright (C) 2007-2018 Pivotal Software, Inc.
  ##########  Licensed under the MPL.  See http://www.rabbitmq.com/
  ######  ##
  ##########  Logs: /usr/local/var/log/rabbitmq/rabbit@localhost.log
                    /usr/local/var/log/rabbitmq/rabbit@localhost_upgrade.log

              Starting broker...
 completed with 6 plugins.
```

#### 启动
➜  ~ brew services start rabbitmq

#### 停止
➜  ~ brew services stop rabbitmq

### Management Plugin
Introduction
The rabbitmq-management plugin provides an HTTP-based API for management and monitoring of your RabbitMQ server, along with a browser-based UI and a command line tool, rabbitmqadmin. 

The Web UI is located at: http://server-name:15672/

To use the web UI you will need to authenticate as a RabbitMQ user (on a fresh installation the user "guest" is created with password "guest"). From here you can manage exchanges, queues, bindings, virtual hosts, users and permissions. Hopefully the UI is fairly self-explanatory.

Web UI in Browser
http://localhost:15672/#/

