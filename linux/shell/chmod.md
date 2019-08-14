# 脚本授权

\[root@cache cloud-ranch-v2\]\# ./dev-restart.sh -bash: ./dev-restart.sh: 权限不够

\[root@cache cloud-ranch-v2\]\# chmod +x dev-restart.sh \[root@cache cloud-ranch-v2\]\# ./dev-restart.sh

chmod命令用来变更文件或目录的权限。在UNIX系统家族里，文件或目录权限的控制分别以读取、写入、执行3种一般权限来区分，另有3种特殊权限可供运用。用户可以使用chmod指令去变更文件与目录的权限，设置方式采用文字或数字代号皆可。符号连接的权限无法变更，如果用户对符号连接修改权限，其改变会作用在被连接的原始文件。

r=读取属性 //值＝4 w=写入属性 //值＝2 x=执行属性 //值＝1

