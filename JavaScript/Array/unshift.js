// 将新项添加到数组起始位置:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

// Lemon,Pineapple,Banana,Orange,Apple,Mango

// shift
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

console.log(arr)
["George", "John", "Thomas"]

arr.shift()
"George"
arr
["John", "Thomas"]


要把一个或者多个元素添加到数组的尾部,请使用push()