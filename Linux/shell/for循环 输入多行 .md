## item 自动粘贴多行
```
for  i in 28017 28018 28019 28020
    do 
      mkdir -p /mongodb/$i/conf  
      mkdir -p /mongodb/$i/data  
      mkdir -p /mongodb/$i/log
done 

粘贴

[mongod@f7881fcaf265 ~]$ for  i in 28017 28018 28019 28020
>     do
>       mkdir -p /mongodb/$i/conf
>       mkdir -p /mongodb/$i/data
>       mkdir -p /mongodb/$i/log
> done
```
回车执行

## 手动输入
换行 shift+enter
