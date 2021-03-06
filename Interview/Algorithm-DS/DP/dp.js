/*
什么是动态规划（Dynamic Programming）?
动态规划（英语：Dynamic programming，简称 DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。

动态规划的意义是什么？
动态规划背后的基本思想非常简单。大致上，若要解一个给定问题，我们需要解其不同部分（即子问题），再根据子问题的解以得出原问题的解。
动态规划往往用于优化递归问题，例如斐波那契数列，如果运用递归的方式来求解会重复计算很多相同的子问题，利用动态规划的思想可以减少计算量。

通常许多子问题非常相似，为此动态规划法试图仅仅解决每个子问题一次，具有天然剪枝的功能，
从而减少计算量：一旦某个给定子问题的解已经算出，则将其记忆化存储，以便下次需要同一个子问题解之时直接查表。这种做法在重复子问题的数目关于输入的规模呈指数增长时特别有用。

*/

/**
 * 动态规划 例1-凑钞票
 * 假设您是个土豪，身上带了足够的1、5、10、20、50、100元面值的钞票。现在您的目标是凑出某个金额w，需要用到尽量少的钞票。
 * 依据生活经验，我们显然可以采取这样的策略：能用100的就尽量用100的，否则尽量用50的……依次类推。在这种策略下，666=6×100+1×50+1×10+1×5+1×1，共使用了10张钞票。
 * 
 * 这种策略称为“贪心”：假设我们面对的局面是“需要凑出w”，贪心策略会尽快让w变得更小。
 * 能让w少100就尽量让它少100，这样我们接下来面对的局面就是凑出w-100。长期的生活经验表明，贪心策略是正确的。
 * 
 * 但是，如果我们换一组钞票的面值，贪心策略就也许不成立了。
 * 如果一个奇葩国家的钞票面额分别是1、5、11，那么我们在凑出15的时候，贪心策略会出错：　　
 * 15=1×11+4×1    （贪心策略使用了5张钞票）　　
 * 15=3×5         （正确的策略，只用3张钞票）　　
 * 为什么会这样呢？贪心策略错在了哪里？
 * 
 * 鼠目寸光。
 * 刚刚已经说过，贪心策略的纲领是：“尽量使接下来面对的w更小”。这样，贪心策略在w=15的局面时，会优先使用11来把w降到4；
 * 但是在这个问题中，凑出4的代价是很高的，必须使用4×1。如果使用了5，w会降为10，虽然没有4那么小，但是凑出10只需要两张5元。　　
 * 在这里我们发现，贪心是一种只考虑眼前情况的策略。
 * 
 * 那么，现在我们怎样才能避免鼠目寸光呢？
 * 
 * 那么，现在w=15的时候，我们该取那种钞票呢？当然是各种方案中，cost值最低的那一个！

　　- 取11：cost = f(4) + 1 = 5
　　- 取5： cost = f(10) + 1 = 2 + 1 = 3
　　- 取1： cost = f(14) + 1 = 4 + 1 = 5
 * 
 * 显而易见，cost值最低的是取5的方案。我们通过上面三个式子，做出了正确的决策！

　 这给了我们一个至关重要的启示—— f(n) 只与 f(n-11),f(n-5),f(n-1) 相关；更确切地说：
 * 
 * f(n) = min{f(n-1),f(n-5),f(n-11)} + 1
 
*/
function countStep(n) {
	let res = {};
	res[0] = 1;  // 最后一次剩余0  3 step 上去的方法为1
	res[1] = 1;  // 最后一次剩余1  1 step 上去的方法为1
	res[2] = 2;  // 最后一次剩余2  1 step + 1 step; 2 step 上去 的方法为 2

	for(var i = 3; i < n; i ++) {
			res[i] = res[i-1] + res[i-2] + res[i-3]
	}
	return res[n]
}

console.log(countStep(4))  // So Total ways: 7

amount = 5, coins = [1, 2, 5]
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

n-1
n-2
n-5


function change(n) {
	if(n == 1) return 1
	if(n == 2) return 0
	if(n == 3) return 2
	if(n == 4) return 2
}