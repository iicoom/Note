### linux复制指定目录下的全部文件到另一个目录中
https://www.cnblogs.com/zdz8207/p/linux-cp-dir.html
cp [选项] 源文件或目录 目标文件或目录
该命令的各选项含义如下：
- a 该选项通常在拷贝目录时使用。它保留链接、文件属性，并递归地拷贝目录，其作用等于dpR选项的组合。
- d 拷贝时保留链接。
- f 删除已经存在的目标文件而不提示。
- i 和f选项相反，在覆盖目标文件之前将给出提示要求用户确认。回答y时目标文件将被覆盖，是交互式拷贝。
- p 此时cp除复制源文件的内容外，还将把其修改时间和访问权限也复制到新文件中。
- r 若给出的源文件是一目录文件，此时cp将递归复制该目录下所有的子目录和文件。此时目标文件必须为一个目录名。
- l 不作拷贝，只是链接文件。

cp -r myAntPro/. antdPro

### mv
将apache-tomcat-8.5.9.tar.gz文件移动到/usr/local/下
sudo mv /Users/feng/Downloads/apache-tomcat-8.5.9.tar.gz /usr/local/

在Linux下重命名文件或目录，可以使用mv命令或rename命令
[root@vultr data]# ls
dist  iicoom.github.io  www

[root@vultr data]# mv iicoom.github.io iicoom
[root@vultr data]# ls
dist  iicoom  www

#### 出现替换的情况
[root@iZ258wvzn92Z target]# ls
butchershop-busi  butchershop-busi.war  classes  generated-sources  maven-archiver  maven-status
[root@iZ258wvzn92Z target]# mv butchershop-busi.war /mnt/tomcat/current/webapps/
mv: overwrite `/mnt/tomcat/current/webapps/butchershop-busi.war'? Y