## for Mac
brew install python3   / brew upgrade python3 升级

==> python
Python has been installed as
  /usr/local/bin/python3

Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
  /usr/local/opt/python/libexec/bin

If you need Homebrew's Python 2.7 run
  brew install python@2

You can install Python packages with
  pip3 install <package>
They will install into the site-package directory
  /usr/local/lib/python3.7/site-packages

See: https://docs.brew.sh/Homebrew-and-Python
➜  ~ pip
zsh: command not found: pip
➜  ~ pip3

Usage:
  pip3 <command> [options]

Commands:
  install                     Install packages.
  download                    Download packages.

## 安装出现问题
$ brew install python3
Warning: python3 3.6.3 is already installed, it's just not linked.
You can use `brew link python3` to link this version.
$ brew link python3

➜ brew link python3
Linking /usr/local/Cellar/python/3.7.2_1... Error: Permission denied @ dir_s_mkdir - /usr/local/Frameworks

发现/usr/local/下没有路径/usr/local/Frameworks 
需要新建该路径，并修改权限
sudo mkdir /usr/local/Frameworks
sudo chown $(whoami):admin /usr/local/Frameworks

brew link python3
Linking /usr/local/Cellar/python3/3.6.3... 1 symlinks created

➜  Repo pip3
zsh: command not found: pip3

➜  Repo brew install python3
Warning: python 3.7.2_1 is already installed and up-to-date
To reinstall 3.7.2_1, run `brew reinstall python`
需要重新安装
➜  Repo pip3

Usage:
  pip3 <command> [options]

Commands:
  install                     Install packages.

但是之前安装的flutter会受到影响，需要重新导出环境变量
➜  Repo flutter doctor
zsh: command not found: flutter

➜  Development ls
flutter
➜  Development  export PATH="$PATH:`pwd`/flutter/bin"

➜  Development flutter
Manage your Flutter app development.

Common commands:

  flutter create <output directory>


## pycharm active code
https://blog.csdn.net/qq_37489565/article/details/80612301

