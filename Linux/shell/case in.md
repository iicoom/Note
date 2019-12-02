## 输入一个整数
```shell
printf "integer number: "
read num
case $num in
    1)
        echo "Monday"
        ;;
    2)
        echo "Tuesday"
        ;;
    3)
        echo "Wednesday"
        ;;
    4)
        echo "Thursday"
        ;;
    5)
        echo "Friday"
        ;;
    6)
        echo "Saturday"
        ;;
    7)
        echo "Sunday"
        ;;
    *)
        echo "error"
esac
```

## 语法
case expression in
    pattern1)
        statement1
        ;;
    pattern2)
        statement2
        ;;
    pattern3)
        statement3
        ;;
    ……
    *)
        statementn
esac

case、in 和 esac 都是 Shell 关键字，expression 表示表达式，pattern 表示匹配模式。



