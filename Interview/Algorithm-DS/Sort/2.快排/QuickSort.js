/**
 * 快速排序是对冒泡排序的一种改进，由 C.A.R.Hoare（Charles Antony Richard Hoare，东尼·霍尔）在 1962 年提出。
 * https://www.geeksforgeeks.org/quick-sort/
 */
const arr = [10, 80, 30, 90, 40, 50, 70]
// Indexes:      0   1   2   3   4   5   6 

// 1. 设置遍历起始位置，和基准值
// low = 0, high =  6, pivot = arr[h] = 70
// Initialize index of smaller element, i = -1

// 2. 设置遍历结束位置
// Traverse elements from j = low to high-1
// j = 0 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
// i = 0 
// arr = [10, 80, 30, 90, 40, 50, 70]   // No change as i and j are same

// 3. 遍历时arr[j] > pivot 不做任何操作
// j = 1 : Since arr[j] > pivot, do nothing
// No change in i and arr[]

// j = 2: Since arr[j] < pivot, do i++ and swap(arr[i], arr[j])  // We swap 80 and 30 
// i = 1
// arr = [10, 30, 80, 90, 40, 50, 70]

// j = 3: Since arr[j] > pivot, do nothing
// No change in i and arr[]

// j = 4: Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])  // 80 and 40 Swapped
// i = 2
// arr = [10, 30, 40, 90, 80, 50, 70]

// j = 5: Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])  // 90 and 50 Swapped
// i = 3
// arr = [10, 30, 40, 50, 80, 90, 70]
// We come out of loop because j is now equal to high-1.
// Finally we place pivot at correct position by swapping
// arr[i+1] and arr[high] (or pivot) 
// arr[] = {10, 30, 40, 50, 70, 90, 80} // 80 and 70 Swapped 

// Now 70 is at its correct place. All elements smaller than
// 70 are before it and all elements greater than 70 are after
// it.

/**
 * This function takes last element as pivot, 
 * places the pivot element at its correct position in sorted array, 
 * and places all smaller (smaller than pivot) to left of pivot 
 * and all greater elements to right of pivot 
 * @param {*} arr    Array to be sorted
 * @param {*} low    Starting index
 * @param {*} high   Ending index 
 */
function partition(arr, low, high) {
    let i = low -1;        // index of smaller element 
    let pivot = arr[high]; // pivot

    for (let j = low; j < high; j ++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            i = i + 1;          // increment index of smaller element
            let temp = arr[i];  // 把比pivot小的arr[j] 放到 arr[i]的位置，即放到了pivot左侧合适的位置
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;           // 完成pivot与arr[i + 1]的交换
    return i + 1;               // pivot 应在数组中所处的index
}

/**
 * 快速排序 分治思想 此方法一直在原数组arr上修改元素的位置 直到按顺序排好
 * @param {*} arr   当前要排序的数组
 * @param {*} low   当前数组最前边位置
 * @param {*} high  当前数组最后边位置
 */
function quickSort(arr, low, high) {

    if (low < high) {
        // pi is partitioning index, arr[p] is now at right place 
        let pi = partition(arr,low,high) 
        // partition 调用完成后 pi位置前的元素可能已经按顺序排好了，如果没有继续递归调用quickSort

        // Separately sort elements before  partition and after partition 
        quickSort(arr, low, pi-1) 
        quickSort(arr, pi+1, high)
    }
}

/**
 * 调用quickSort 输出结果方法
 * @param {*} arr   // 原数组
 * @param {*} low   // 0
 * @param {*} high  // arr.length - 1
 */
function pintResult(arr, low, high) {
    console.log("Before sort:", arr)
    quickSort(arr, low, high);

    console.log("Sorted arr:", arr)
}

// const rawArr = [10, 80, 30, 90, 40, 50, 70]
const rawArr = [10, 7, 8, 9, 1, 5]
pintResult(rawArr, 0, rawArr.length-1)


 /*
 快速排序是在冒泡排序的基础上改进而来的，冒泡排序每次只能交换相邻的两个元素，而快速排序是跳跃式的交换，交换的距离很大，
 因此总的比较和交换次数少了很多，速度也快了不少。

 时间复杂度：
 我们可以思考一下如果每次比较都需要交换，那么数列的平均时间复杂度是 O(nlogn)事实上在大多数时候，排序的速度要快于这个平均时间复杂度。
 但是快速排序在最坏情况下的时间复杂度和冒泡排序一样，是 O(n2)，实际上每次比较都需要交换，但是这种情况并不常见。

 空间复杂度：
 快速排序只是使用数组原本的空间进行排序，所以所占用的空间应该是常量级的，但是由于每次划分之后是递归调用，
 所以递归调用在运行的过程中会消耗一定的空间，在一般情况下的空间复杂度为 O(logn)，在最差的情况下，若每次只完成了一个元素，
 那么空间复杂度为 O(n)。所以我们一般认为快速排序的空间复杂度为 O(logn)。

 快速排序是一个不稳定的算法，在经过排序之后，可能会对相同值的元素的相对位置造成改变。

 快速排序基本上被认为是相同数量级的所有排序算法中，平均性能最好的。

 */
