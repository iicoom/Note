dirname命令可以取给定路径的目录部分，如果给定的参数本身为一个目录，那就取当前目前的上一层目录。
这个命令很少直接在shell命令行中使用，一般把它用在shell脚本中，用于取得脚本文件所在目录，然后将当前目录切换过去。

```bash
BASEDIR=$(dirname "$0")

echo $BASEDIR
.

cd $BASEDIR
```