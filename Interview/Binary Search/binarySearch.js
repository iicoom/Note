/**
 * [binarySearch description]
 * @param  {[type]} arr    [description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length;
	let mid;
	while (low <= high) {
		mid = low + Math.ceil((high - low)/2)
		if (arr[mid] == target) {
			return mid;
		} else if (arr[mid] > target) {
			high = mid -1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

const Arr = [3, 5, 6, 7, 9, 12, 15];
console.log(binarySearch(Arr, 5))

/*

第一次：
low=0  high=7  mid=ceil(0+7/2=3.5)=4

arr[4]=9 > 5 => high=4-1=3

第二次：
low=0  high=3  mid=0+ceil(1.5)=2

arr[2]=6 > 5 => high=2-1=1

第三次：
low=0  high=1  mid=0+ceil(0.5)=1

arr[1]=5 = 5    return 1
 */