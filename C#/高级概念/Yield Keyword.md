[C# Yield Keyword](https://www.tutlane.com/tutorial/csharp/csharp-yield-keyword)

```c#
using System;
using System.Collections.Generic;

namespace TutlaneExamples
{

    class Program

    {

        static void Main(string[] args)

        {

            foreach (int i in Multiply(2, 10))

            {

                Console.Write("{0} ", i);

            }

            Console.ReadLine();

        }

        public static IEnumerable<int> Multiply(int number, int range)

        {

            int result = 1;

            for (int i = 1; i < range; i++)

            {

                result = result * number;

                yield return result;

            }

        }

    }

}
```
<!--依次输出 2 4 8 16 32 64 128 256 512 -->