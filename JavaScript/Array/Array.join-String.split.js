/************** array.join()*********************/
var a, b;
a = new Array(0,1,2,3,4);
b = a.join("-");
// => "0-1-2-3-4"

var a, b;
a = new Array(0,1,2,3,4);
b = a.join("");
// => "01234"

function getType(array) {
	const newArr = [];
	['ww',false,'ssw',false].forEach(function(index){
		if (index) {
			newArr.push('1')
		} else {
			newArr.push('0')
		}
	})
	console.log(newArr);
	console.log(newArr.join(''));
	return newArr.join('');
}

/************** string.split()********split() 方法用于把一个字符串分割成字符串数组。*************/
stringObject.split(separator,howmany)


var str="How are you doing today?"
str.split(" ")

// => ["How", "are", "you", "doing", "today?"]

str.split(" ", 3)
// => ["How", "are", "you"]

"2:3:4:5".split(":")	//将返回["2", "3", "4", "5"]
"|a|b|c".split("|")		//将返回["", "a", "b", "c"]

"hello".split("")	//可返回 ["h", "e", "l", "l", "o"]
"hello".split("", 3)	//可返回 ["h", "e", "l"]