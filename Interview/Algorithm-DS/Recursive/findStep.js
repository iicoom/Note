// Count ways to reach the nth stair using step 1, 2 or 3  计算到达第n级台阶的方法总数(每次可选迈过1，2，3阶)
// https://www.geeksforgeeks.org/count-ways-reach-nth-stair-using-step-1-2-3/

/*
There are two methods to solve this problem
1. Recursive Method
2. Dynamic Programming
*/

// 1. Recursive Method  ：到达第n级的方法总数共有3种，即从n-3 => n; n-2 => n; n-1 => n. 依此类推
function findStep(n) {
    if(n == 0 || n == 1) {
        return 1;
    } else if(n == 2) {
        return 2;
    }   // 边界条件
    return findStep(n-3) + findStep(n-2) + findStep(n-1);
} 

// console.log(findStep(3))

// Complexity Analysis:

// Time Complexity: O(3^n).
// The time complexity of the above solution is exponential, 
// a close upper bound will be O(3^n). From each state, 3 recursive function are called. So the upperbound for n states is O(3n).

// Space Complexity:O(1).
// As no extra space is required.


// 2. Dynamic Programming 动态规划
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
// Complexity Analysis:

// Time Complexity: O(n).
// Only one traversal of the array is needed. So Time Complexity is O(n).

// Space Complexity: O(n).
// To store the values in a DP, n extra space is needed.
