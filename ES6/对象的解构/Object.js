// 简评：ES2017 提供了很多有用的方法，这里介绍几个有用的方法，了解它们对日常的开发很有帮助。

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


