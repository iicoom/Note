## git restore filename
重置单个未 git add 的文件
```
D:\Work\crm-api>git restore src/controller/stats.js
```

## 重置多个文件
```
git checkout .
```

## Git操作删除 untracked files
有时发现上边的git checkout . 并不能丢弃掉文件，需要使用 git clean

1. 删除 untracked files： git clean -f
2. 连 untracked 的目录也一起删掉： git clean -fd