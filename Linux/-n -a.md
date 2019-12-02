## -n
shell 中利用 -n 来判定字符串非空。

```shell
ARGS=$*

if [ -n "$ARGS"  ]

then

   print "with argument"

fi

print " without argument"
```

## 
```shell
if [ -n "$1" -a "$1" = "debug" ]
then
	node --inspect-brk http_server.js name=TimerServer route=timer
else
	node http_server.js name=TimerServer route=timer
fi
```
