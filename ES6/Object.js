
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