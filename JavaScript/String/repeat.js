/*
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity
*/


let query = {id: 1, name: ['tom', 'jack'], score: {math: 28, english: 40}}
const DIALECT = {
  largerThan: '>?',
  lessThan: '<?',
  lessThanOrEqualTo: '<=?',
};

let arr = [];
let ret = {sql: '', values: []};
for (let key in query) {
	let str = '';
    if (Array.isArray(query[key])) {
      str = query[key].length > 0 ? `${key} IN (${',?'.repeat(query[key].length).substr(1)})` : '';
      ret.values = ret.values.concat(query[key]);
    } else if ((typeof query[key]) === 'object') {
      let node = query[key];
      for (let k in node) {
        str = key + DIALECT[k];
        ret.values.push(node[k]);
      }
    }
    if (str.length > 0) {
      arr.push(str);
		}
		console.log('str:', str)
}
console.log('arr:', arr)
console.log('ret:', ret)

// arr: [ 'name IN (?,?)', 'scoreundefined' ]
// ret: { sql: '', values: [ 'tom', 'jack', 28, 40 ] }