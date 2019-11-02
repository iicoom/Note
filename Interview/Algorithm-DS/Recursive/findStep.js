// Count ways to reach the nth stair using step 1, 2 or 3
// https://www.geeksforgeeks.org/count-ways-reach-nth-stair-using-step-1-2-3/

/*
There are two methods to solve this problem
1. Recursive Method
2. Dynamic Programming
*/

// 1. Recursive Method
// function findStep(n) {
//     if(n == 0 || n == 1) {
//         return 1;
//     } else if(n == 2) {
//         return 2;
//     }
//     return findStep(n-3) + findStep(n-2) + findStep(n-1);
// } 

// console.log(findStep(3))


// 2. Dynamic Programming
function countStep(n) {
    let res = {};
    res[0] = 1;
    res[1] = 1;
    res[2] = 2;

    for(var i = 3; i < n; i ++) {
        res[i] = res[i-1] + res[i-2] + res[i-3]
    }
    return res[n]
}

console.log(countStep(4))
