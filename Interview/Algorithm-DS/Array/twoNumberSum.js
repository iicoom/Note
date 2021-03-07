/*
给定 nums = [2, 7, 11, 15], target = 9
在nums中找到2个元素之和为9, 并返回下标
*/

// 方法一 暴力法
let twoSum = function(nums, target) {
	for (let i = 0; i < nums.length; i ++) {
		for (let j = i + 1; j < nums.length; j ++) {
			if (nums[j] === target - nums[i]) {
				return [i, j]
			} else {
				return null
			}
		}
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
// [ 0, 1 ]

// 复杂度分析：
// 时间复杂度： O(n^2)  对于每个元素，我们试图遍历数组其余部分来寻找它所对应的目标元素，这件耗费O(n)的时间
// 空间复杂度： O(1)