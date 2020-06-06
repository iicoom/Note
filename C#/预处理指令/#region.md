利用 #region，可以指定在使用代码编辑器的大纲功能时可展开或折叠的代码块。 
在较长的代码文件中，能够折叠或隐藏一个或多个区域会十分便利，这样，可将精力集中于当前处理的文件部分。 下面的示例演示如何定义区域：

```c#
#region MyClass definition  
public class MyClass
{  
    static void Main()
    {  
    }  
}  
#endregion
```
备注
#region 块必须通过 #endregion 指令终止。
#region 块不能与 #if 块重叠。 但是，可以将 #region 块嵌套在 #if 块内，或将 #if 块嵌套在 #region 块内。