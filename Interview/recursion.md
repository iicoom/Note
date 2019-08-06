## recursion 递归 

// 求 ans 的阶乘
function factorial(x, ans) {
	
	if (x === 1) {
		return ans;
	} else {
		return factorial(x-1, ans*x);
	}
	
}

> factorial(2,3)
6
> factorial(3, 4)
24
>


## 递归与循环的区别于联系

相同点：
（1）都是通过控制一个变量的边界（或者多个），来改变多个变量为了得到所需要的值，而反复而执行的；
（2）都是按照预先设计好的推断实现某一个值求取；（请注意，在这里循环要更注重过程，而递归偏结果一点）

不同点：
（1）递归通常是逆向思维居多，“递”和“归”不一定容易发现（比较难以理解）；而循环从开始条件到结束条件，包括中间循环变量，都需要表达出来（比较简洁明了）。

简单的来说就是：用循环能实现的，递归一般可以实现，但是能用递归实现的，循环不一定能。因为有些题目①只注重循环的结束条件和循环过程，而往往这个结束条件不易表达（也就是说用循环并不好写）；②只注重循环的次数而不注重循环的开始条件和结束条件（这个循环更加无从下手了）。



