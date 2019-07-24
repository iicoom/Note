/**
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */

let twoSum = function(nums, target) {
	const map = new Map()
	for(let i = 0; i < nums.length; i++){
		if (map.has(target-nums[i])) {
			return [ map.get(target - nums[i]), i ]
		}
		map.set(nums[i], i)
	}
}

/**
 * 第一次执行 
 * map 存入 2 -> 0
 *
 * 第二次执行
 * map 找到结果2 返回 [0, 1]
 */