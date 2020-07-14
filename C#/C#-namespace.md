[C# 命名空间（Namespace）](https://www.runoob.com/csharp/csharp-namespace.html)

## 相同命名空间下的类的方法可以直接调用
```c#
using System;

namespace client
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.Write("hello world\n");
            ThreadCreationProgram.MainThread();
        }
    }
}


using System;
using System.Threading;

namespace client
{
    public class ThreadCreationProgram
    {
        public static void MainThread()
        {
            ThreadStart childref = CallToChildThread;
            Console.WriteLine("In MainThread: Creating the Child thread");
            Thread childThread = new Thread(childref);
            childThread.Start();
            // 现在中止子线程
            Console.WriteLine("In Main: Aborting the Child thread");
            childThread.Abort();
            Console.ReadKey();
        }
        
        public static void CallToChildThread()
        {
            Console.WriteLine("Child thread starts");
            // 线程暂停 5000 毫秒
            int sleepfor = 5000;
            Console.WriteLine("Child Thread Paused for {0} seconds",
                sleepfor / 1000);
            Thread.Sleep(sleepfor);
            Console.WriteLine("Child thread resumes");
        }
    }
}
```