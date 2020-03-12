## 逻辑操作符
### -a 逻辑  与And
### -o 逻辑  或Or

```shell
if [ "$1" = "-f" -o "$1" = "--force" ]; then
  echo "Forced to replace game configuration files"
  CMD="cp"
else
  echo "Generate game configuration files if not exist"
  CMD="cp -n"
fi

$CMD $BASEDIR/gameConfig.bak.json $BASEDIR/gameConfig.json
```

如果命令行第一个参数等于"-f"或者"--force"

if中的CMD是声明的一个变量 cp命令  
cp -n  
-n ，-no-clobber ： 不要覆盖已存在的文件(使前面的 -i 选项失效)

最后一行完成了将$BASEDIR/gameConfig.bak.json 文件内容复制一份到$BASEDIR/gameConfig.json

### -n 字符串非空
shell 中利用 -n 来判定字符串非空。

```shell
ARGS=$*

if [ -n "$ARGS"  ]

then

   print "with argument"

fi

print " without argument"
```

## 应用
```shell
#!/bin/sh

if [ -n "$1" -a "$1" = "debug" ]
then
	node --inspect-brk http_server.js name=TimerServer route=timer
else
	node http_server.js name=TimerServer route=timer
fi
```

