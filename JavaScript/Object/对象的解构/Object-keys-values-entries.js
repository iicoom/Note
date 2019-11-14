// 简评：ES2017 提供了很多有用的方法，这里介绍几个有用的方法，了解它们对日常的开发很有帮助。

/***** 例1 ***************************************/
// 对象操作
const population = {
  tokyo: 37833000,
  delhi: 24953000,
  shanghai: 22991000
}

// Object.keys   Object.keys( ) 是一种迭代对象并返回对象所有键的简单方法。
Object.keys(population)
// => ['tokyo', 'delhi', 'shanghai']


// Object.values   它迭代对象并返回对象的值
Object.values(population)
// => [37833000, 24953000, 22991000]


// Object.entries   Object.entries( ) 这个方法会遍历对象，在数组中同时返回键和值：
Object.entries(population)
// => [['tokyo', 37833000],['delhi', 24953000],['shanghai', 22991000]]



/***** 例2 ***************************************/
const ob = { 
	ProductType: { 0: '育肥羊', 1: '屠宰羊', 2: '礼盒羊', 3: '繁育猪', 4: '育肥猪' },
	RoleType: { 1: 'admin', 2: 'owner', 3: 'worker' }, 
}

const { ProductType } = ob;

console.log('======Object.keys(ProductType)======')
console.log(Object.keys(ProductType))
// => [ '0', '1', '2', '3', '4' ]

const pType = Object.keys(ProductType).map((key) => { 
	return { key: parseInt(key, 0), value: ProductType[key] }; 
});
// => 
/*
[ { key: 0, value: '育肥羊' },
  { key: 1, value: '屠宰羊' },
  { key: 2, value: '礼盒羊' },
  { key: 3, value: '繁育猪' },
  { key: 4, value: '育肥猪' } ]
*/
console.log(pType)


