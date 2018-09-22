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