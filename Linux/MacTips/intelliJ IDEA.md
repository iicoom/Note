### intelliJ IDEA
* 定位到方法+ alt+command+b: 查看引用 
* 生成构造方法 control + enter 弹出选择框 同样可以快速生成Getter Setter方法
* 生成interface中的override control + enter 选择对应的方法

* Linux  生成构造方法 alt + insert  
* 在某个目录下创建新文件： 光标定位到该目录 Command+N
* product_not_exist => PRODUCT_NOT_EXIST : Command+shift+U

* Intellij IDEA 提示Cannot resolve symbol 'log' 的解决方法
https://blog.csdn.net/gao_shuang/article/details/79494002
Lombok Plugin 的作用 http://plugins.jetbrains.com/plugin/6317-lombok-plugin

linux setting plugin

* Inferred type 'S' 解决办法
报错 Inferred type 'S' for type parameter 'S' is not within its bound; 解决办法
Inferred type 'S' for type parameter 'S' is not within its bound;

should extends xxxxxx
出现这种问题的原因是，springboot 版本问题，将 2。1 版本换成 1。5。4 版本。
或者是将代码改写一下
return girlRepository.findOne(id);
=> 改为
return girlRepository.findById(id).orElse(null);

* 断点调试
	在需要出打断点，使用debug方式运行方法，程序停在断点处会显示出所有变量的值

* 设置作者注释：preference - editor - file and template - includes - fileHeader 添加如下内容：
```
/** 
 * Created by ${USER} on ${DATE} ${TIME}
 */ 
``` 

* 关闭打开侧边栏：Command + 1

* Java Interface 上 option+command+鼠标点击 查看接口的实现类 或者 option+Command+B
