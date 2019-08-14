## less 中的& and符号
当在less的继承关系中 中需要伪类的时候 可以使用& 表示自己，否则默认是表示子代

```
a { 
	 color: red; 
	 text-decoration: none; 
	 &:hover {// 有 & 时解析的是同一个元素或此元素的伪类，没有 & 解析是后代元素
	  color: black; 
	  text-decoration: underline; 
	 } 
 }
```
