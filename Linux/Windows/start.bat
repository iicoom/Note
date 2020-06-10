REM Server-Start-bat file
TITLE Server-Start-bat file
COLOR 9E

@echo off
echo "Welcome to server start bat system!"
echo "Go to dk_nodejs directory..."
cd /d E:\Joy\server-s\dk_nodejs\out     REM NOTE!!! replace it with your own [server\dk_nodejs\out directory]
start C:\Program" "Files\Git\git-bash.exe --cd=E:\Joy\server-s\dk_nodejs\out -c "sh start_manage.sh"
echo "Successful start shart_manage.sh! GoodLuck~~"
set filename="%date:~0,4%-%date:~5,2%-%date:~8,2%.log"
echo "Today's Pvp log: %filename%"
start C:\Program" "Files\Git\git-bash.exe --cd=E:\Joy\server-s\dk_nodejs\out\pvp_server\logs -c "tail -20f %filename%"
echo "Successful listen on %filename%! You're ready to rock, Buddy"
pause