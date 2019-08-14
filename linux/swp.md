# .nginx.conf.swp

使用vim打开某文件一直出现Swap file ".nginx.conf.swp" already exists!

故障：在使用vim编辑nginx的配置文件的时候，一直出现swp文件已存在的现象：

在使用vim编辑某文件的时候，会产生一个swp文件

```text
        .FILENAME.swp
```

在正常编辑结束退出的时候，该文件会被自动删除 一般，在使用vim打开某文件的时候出现这种问题的原因有两种：

```text
1.此时该文件已经被打开
```

在这种情况下可以使用只读方式打开

```text
2.就是由于swp文件存在，可能是由于上次编辑的时候崩溃造成的
```

rm .FILENAME.swp可以删除该文件（确保不会使用该文件做恢复）

