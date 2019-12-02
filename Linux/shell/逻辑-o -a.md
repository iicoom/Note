## 逻辑操作符
-a 逻辑  与And
-o 逻辑  或Or

```shell
if [ "$1" = "-f" -o "$1" = "--force" ]; then
  echo "Forced to replace game configuration files"
  CMD="cp"
else
  echo "Generate game configuration files if not exist"
  CMD="cp -n"
fi
```

如果命令行第一个参数等于"-f"或者"--force"
