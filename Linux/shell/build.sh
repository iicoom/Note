#!/bin/sh
set -e

BASEDIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

echo $BASEDIR   # /e/Joy/Note/Linux/shell 就为了取个当前目录上条命令就写得那么复杂！！ 笑死老夫了

if [ $1 ]
then
    export GOPATH=$1
else
    export GOPATH=$BASEDIR/../../..
fi
# echo GOPATH=$GOPATH    # GOPATH=/e/Joy/Note/Linux/shell/../../..

# echo $PATH    # Windows 下用户环境变量 /c/Users/Admin/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/bin:/mingw64/bin:/usr/bin:/c/Users/Admin/bin:/c/Windows/system32:/c/Windows:/c/Windows/System32/Wbem:/c/Windows/System32/WindowsPowerShell/v1.0:/c/Windows/System32/OpenSSH:/d/software/nodejs:/c/Program Files (x86)/GtkSharp/2.12/bin:/c/Program Files/dotnet:/d/software/TortoiseSVN/bin:/d/software/HashiCorp/Vagrant/bin:/cmd:/d/Go/bin:/d/Program Files/TortoiseGit/bin:/c/Program Files/MySQL/MySQL Server 8.0/bin:/c/ProgramData/chocolatey/bin:/d/software/Microsoft VS Code/bin:/c/Users/Admin/AppData/Local/nvs:/usr/bin/vendor_perl:/usr/bin/core_perl
# export PATH=$GOPATH/bin:$PATH      #  export 作用详见shell/设置环境变量

export PATH=$BASEDIR/bin:$PATH


# Build stringer
os=`uname`
if [[ $os == *"NT"* ]]
then
    output=$BASEDIR/bin/stringer.exe
else
    output=$BASEDIR/bin/stringer
fi

echo $output   # /e/Joy/Note/Linux/shell/bin/stringer.exe

go build -o $output fang/domon/vendor/golang.org/x/tools/cmd/stringer