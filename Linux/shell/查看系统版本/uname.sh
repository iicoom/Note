os=`uname`
if [[ $os == *"NT"* ]]
then
    suffix=.exe
else
    suffix=
fi

echo $os