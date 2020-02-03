## 定位到某次提交
右上角-跳转到-提交...-输入 e47a145

## 拉去过程中发生的错误
git pull时出现 unable to unlink old 一个不该犯下的错误

在日常开发中，当团队内有人将新的代码打成jar文件提交，并且未改名的时候，可能会出现这样的错误“error: unable to unlink old 'Test/lib/xxx-1.0.0.jar' (Invalid argument)”    。咋一看很疑惑，说是无法取消旧的链接，还以为是jar包内部的更改导致冲突，其实这只是jar包正在被使用导致的，解决办法就是将运行的代码停止后在重新git pull一下就可以了。

## 推送过程中发生的错误
remote: 
remote: 检查无用提交        

remote: [POLICY] 你需要移除无用提交        
remote: error: hook declined to update refs/heads/experiment01 

解决：
恢复到merge之前的一次提交

这个是因为在experiment01开发完成本地提交后，远程experiment01分支存在其他人提交的新内容，拉取与本地合并采用的方式是：
立即提交合并的改动

这样在merge之后就产生了 冗余的提交

避免方法 使用变基代替合并： 这样拉去代码后 推送就没有问题
