/**
 * 数组元素去重
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4
 */

var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (nums[i] === nums[j]) {
            nums.splice(j, 1);
        }
        console.log(nums);
    }
    // console.log(nums);
    return nums.length;
};

let nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
removeDuplicates(nums)

/*

[ 0, 1, 1, 1, 2, 2, 3, 3, 4 ]
[ 0, 1, 2, 2, 3, 3, 4 ]
[ 0, 1, 2, 3, 3, 4 ]
[ 0, 1, 2, 3, 4 ]
[ 0, 1, 2, 3, 4 ]
5
 */


// 方法二 双指针 
// 数组完成排序后，我们可以放置两个指针 i 和 j，其中 i 是慢指针，而 j 是快指针。
// 只要 nums[i] = nums[j]，我们就增加 j 以跳过重复项。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
};

