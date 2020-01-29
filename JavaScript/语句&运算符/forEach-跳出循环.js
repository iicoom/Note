var arr = [1,2,3,4,5,6,7,8,9];
var newArr = [];

arr.forEach((item) => {
	if (item < 5) {
		return;
	} else {
		newArr.push(item);
	}
})

console.log('newArr:', newArr)

// newArr: [ 5, 6, 7, 8, 9 ]

