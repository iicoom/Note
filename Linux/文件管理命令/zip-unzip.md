## zip
zip命令可以用来解压缩文件，或者对文件进行打包操作。zip是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。

将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的html.zip：
```
zip -q -r html.zip /home/Blinux/html
```

## unzip
https://man.linuxde.net/unzip

unzip命令用于解压缩由zip命令压缩的“.zip”压缩包。

1. 将压缩文件text.zip在当前目录下解压缩。
```
unzip test.zip
```

2. 将压缩文件text.zip在指定目录/tmp下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。
```
unzip -n test.zip -d /tmp
```

3. 将压缩文件test.zip在指定目录/tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件。
```
unzip -o test.zip -d tmp/
```
