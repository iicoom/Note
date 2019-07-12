## 块模式（visual block）

按ESC进入命令行模式, 按Ctrl+v,进入区块模式;

在行首使用上下选择需要注释的行

在(大写)环境下,按下键盘”I”键,进入插入模式;

然后输入注释符号(“//”, “#”等);
完成输入后按下”ESC”确定修改

```
location / {
    root   html;
    index  index.html index.htm;
}


#location / {
#    root   html;
#    index  index.html index.htm;
#}

```

## 取消块注释

进入区块模式;
选择要取消注释的行;

按下”x”或者”d”.