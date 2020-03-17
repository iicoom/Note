## for of 迭代异步 顺序返回
```js
function asyncOperation(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`${num} opration complete!`)
			resolve()
		}, 1000)
	})
}

const arr = Array(5).fill().map((item, index) => index + 1)

console.log(arr)
// [ 1, 2, 3, 4, 5 ]

async function repeatWork() {
	for(let item of arr) {
		await asyncOperation(item)
	}
}

repeatWork()
/*
每隔一秒输出一条
1 opration complete!
2 opration complete!
3 opration complete!
4 opration complete!
5 opration complete!
*/

arr.forEach(async element => {
	await asyncOperation(element)
});
/*
瞬间输出
1 opration complete!
2 opration complete!
3 opration complete!
4 opration complete!
5 opration complete!
*/
```
