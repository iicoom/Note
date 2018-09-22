console.log('==========例1输出===========')
var obj ={
	"name":"牛棚001",
	"desc":"海景牛棚，",
	"category_items":[
		{
			"field" : "扩展字段约束项",
			"name" : "🐂棚的尺寸把控在这里我们追求完美",
			"type" : "int",
			"priority" : 1,
			"desc" : "牛棚的尺寸参数，在这里精确到毫米",
			"is_required" : false,
			"is_display" : true,
			"max":10,
			"min":1,
			"max_length":6,
			"mix_length":1
		},
		{
			"field" : "假装换了一个",
			"name" : "🐂棚的尺寸把控在这里我们追求完美",
			"type" : "int",
			"priority" : 1,
			"desc" : "牛棚的尺寸参数，在这里精确到毫米",
			"is_required" : false,
			"is_display" : true,
			"max":10,
			"min":1,
			"max_length":6,
			"mix_length":1
		}
	]
}

const categoryItemIds = [];
obj.category_items.map(function(item){
	item.create_by = 'Mr.mao';
	item.category_id = Math.random();
	console.log(item)
	categoryItemIds.push(item.category_id)
})
console.log(categoryItemIds)


console.log('==========例2输出===========')
//例2
var ary = [12,23,24,42,1];
var res = ary.map(function (item,index) {
     return item*10;
})
console.log(res);//-->[120,230,240,420,10];
console.log(ary);//-->[12,23,24,42,1];


var ary = [12,23,24,42,1];
var res = ary.forEach(function (item,index,input) {
     input[index] = item*10;
})
console.log(res);//-->undefined;
console.log(ary);//-->会对原来的数组产生改变；
// =>
// undefined
// [ 120, 230, 240, 420, 10 ]


console.log('==========例3输出===========')
ary.map((item,index) => {
	console.log(item)
	console.log(index)
})
/* =>
120
0
230
1
240
2
420
3
10
4
*/

console.log('==========例4输出===========')
const kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map((obj) => { 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
console.log(reformattedArray)

// reformattedArray 数组为： [ { '1': 10 }, { '2': 20 }, { '3': 30 } ], 

// kvArray 数组未被修改: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

console.log('==========例5输出===========')
function returnInt(element) {
  return parseInt(element, 10);
}

// const intArr = ['1', '2', '3'].map(returnInt); // [1, 2, 3]
// const intArr = ['1', '2', '3'].map( str => returnInt(str)); // [1, 2, 3]
const intArr = ['1', '2', '3'].map(Number); // [1, 2, 3]
console.log(intArr)



