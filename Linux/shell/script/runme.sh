#!/bin/sh

set -e

BASEDIR=$(dirname "$0")

if [ "$1" = "-f" -o "$1" = "--force" ]; then
  echo "Forced to replace Vagrantfile"
  CMD="cp"
else
  echo "Generate Vagrantfile if not exist"
  CMD="cp -n"
fi

$CMD $BASEDIR/Vagrantfile.bak $BASEDIR/Vagrantfile


# 关键点
# 1. 用到了 set -e  见shell根目录 set -e.md
# 2. 用到了 $(dirname "$0")   $0: 脚本本身文件名称  dirname见根目录 dirname.md

# echo $0
# echo $BASEDIR
# 打印结果如下：
# runme.sh
# .

# 3. 最终就是根据脚本执行时传入的参数 决定是否强制复制替换文件 最终命令：
# cp ./Vagrantfile.bak ./Vagrantfile

# 4. cp -n
# -n ，-no-clobber ： 不要覆盖已存在的文件(使前面的 -i 选项失效)
