## C#中if和#if区别
if的作用是程序流控制，会直接编译、执行。
#if是对编译器的指令，其作用是告诉编译器，有些语句行希望在条件满足时才编译。

#endif 指定以 #if 指令开头的条件指令的结尾。例如，
```c#
#define DEBUG
// ...
#if DEBUG
    Console.WriteLine("Debug version");
#endif
```

```c#
	public static Job Make(IEnumerator coroutine, object client = null)
	{
#if UNITY_EDITOR
				Fangtang.Log.DebugFormat(Fangtang.LogTag.Http, "Job Make");
#endif
				return new Job(coroutine, false, client);
	}
```