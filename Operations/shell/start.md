## start_member.sh
java_projects中的文件:
log.file  logs  member.jar  start_member.sh

启动脚本：
java -jar member.jar --server.port=18880 --spring.profiles.active=functional  > /mnt/java_projects/log.file 2>&1 &