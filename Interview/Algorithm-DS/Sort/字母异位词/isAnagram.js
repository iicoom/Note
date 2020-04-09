// 1. 排序算法
function isAnagram(s, t) {
	if(s.length !== t.length) {
		return false;
	} else {
		let sort_s = s.toLowerCase().split("").sort().join("");
		let sort_t = t.toLowerCase().split("").sort().join("");
		return sort_s === sort_t
	}
}

const s = "dog";
const t = "God";

console.log(isAnagram(s, t))

/**
 * 复杂度分析：
 * 时间复杂度：O(n \log n)O(nlogn)，假设 nn 是 ss 的长度，排序成本 O(n\log n)O(nlogn) 和比较两个字符串的成本 O(n)O(n)。排序时间占主导地位，总体时间复杂度为 O(n \log n)O(nlogn)。
 * 空间复杂度：O(1)O(1)，空间取决于排序实现，如果使用 heapsort，通常需要 O(1)O(1) 辅助空间。
 */


// 2. 哈希表
// 为了检查 tt 是否是 ss 的重新排列，我们可以计算两个字符串中每个字母的出现次数并进行比较。因为 SS 和 TT 都只包含 A-ZA−Z 的字母，所以一个简单的 26 位计数器表就足够了。

/*
复杂度分析

时间复杂度：O(n)O(n)。时间复杂度为 O(n)O(n) 因为访问计数器表是一个固定的时间操作。
空间复杂度：O(1)O(1)。尽管我们使用了额外的空间，但是空间的复杂性是 O(1)O(1)，因为无论 NN 有多大，表的大小都保持不变。
进阶：
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

解答：
使用哈希表而不是固定大小的计数器。想象一下，分配一个大的数组来适应整个 Unicode 字符范围，这个范围可能超过 100万。哈希表是一种更通用的解决方案，可以适应任何字符范围。
*/
