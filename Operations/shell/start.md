## start_member.sh
java_projects中的文件:
log.file  logs  member.jar  start_member.sh

启动脚本：
java -jar member.jar --server.port=18880 --spring.profiles.active=functional  > /mnt/java_projects/log.file 2>&1 &

## echo
➜  ~ echo "Enter your name: \c"
Enter your name: %

## printf
➜  ~ printf "Hello \n world\n"
Hello
 world

➜  ~ printf "The first program always prints '%s, %s'\n" Hello world
The first program always prints 'Hello, world'

format specifier 
%s 用于字符串
%d 用于十进制整数