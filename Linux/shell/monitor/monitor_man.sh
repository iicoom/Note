##########################################################################
# File Name: monitor_man.sh
# Author:MXJ
# Email:asdfpeng@qq.com
# Created Time:二 10/16 17:49:37 2018
#=======================================================================
#!/bin/bash

resettem=$(tput sgr0)
		declare -a ssharray
		i=0
		numbers=""

		for script_file in `ls "monitor_man.sh" ./`
		do
			echo -e "\e[1;35m" "The Script:" ${i} '==>' ${resettem} ${script_file}
			i=$((i+1))
		done
