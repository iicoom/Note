// 讨论遍历collection元素添加属性的方法 , 数据结构如下：
const arr = [
   {
     id: '1001@edf04735582deb42df597f77aabc5243',
     level: 1,
     nick_name: 'mxj01',
     sex: 0,
   },
   {
     id: '1001@e590750f250849918ee7eb165c2ff0f2',
     level: 1,
     nick_name: 'mxj02',
     sex: 0,
   }
]

// 本来没有num属性，现在遍历添加
// arr.map((item, index) => {
// 	Object.assign(item, { num: index + 1 })
// })

arr.forEach((item, index) => {
	Object.assign(item, { num: index + 1 })
})

// 这种方式却不可以实现
// arr.map((item, index) => {
// 	const add = { num: index + 1 }
// 	return {...item, ...add}
// })
console.log(arr)
/*
[
  {
    id: '1001@edf04735582deb42df597f77aabc5243',
    level: 1,
    nick_name: 'mxj01',
    num: 1
  },
  {
    id: '1001@e590750f250849918ee7eb165c2ff0f2',
    level: 1,
    nick_name: 'mxj02',
    sex: 0,
    num: 2
  }
]
*/	