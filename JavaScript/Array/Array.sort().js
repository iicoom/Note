[11,2,22,1].sort((a, b) => a - b)
// [1, 2, 11, 22]

// 同样可以给集合排序
let arr = [
  { key: 'ups', fee: '45.95' },
  { key: 'usps', fee: '39.40' },
  { key: 'Fedex', fee: '43.20' }
]

function sortNumber(a,b)
{
  // console.log(a, b)
  // { key: 'usps', fee: '39.40' } { key: 'ups', fee: '45.95' }
  // { key: 'Fedex', fee: '43.20' } { key: 'usps', fee: '39.40' }
  // { key: 'Fedex', fee: '43.20' } { key: 'ups', fee: '45.95' }
  // { key: 'Fedex', fee: '43.20' } { key: 'usps', fee: '39.40' }
  return a.fee - b.fee 
  // return b.fee - a.fee 从大到小
}
console.log(arr.sort(sortNumber))
// [
//   { key: 'usps', fee: '39.40' },
//   { key: 'Fedex', fee: '43.20' },
//   { key: 'ups', fee: '45.95' }
// ]

console.log(arr.reverse())
// [
//   { key: 'ups', fee: '45.95' },
//   { key: 'Fedex', fee: '43.20' },
//   { key: 'usps', fee: '39.40' }
// ]