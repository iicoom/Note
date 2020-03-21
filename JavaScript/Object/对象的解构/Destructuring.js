/***** 例1 ***************************************/
var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"


/***** 例2 ***************************************/
// 与数组解构一样，你可以随意嵌套并进一步组合对象解构：
var complicatedObj = {
      arrayProp: [
        "Zapp",
        { second: "Brannigan" }
      ]
    };
var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"


/***** 例3 ***************************************/
// 当你解构一个未定义的属性时，得到的值为undefined：
var { missing } = {};
console.log(missing);
// undefined


({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// 对象也能直接取key
const ProductStorageAction = {
  1: '任务奖励',
  2: '回购',
  3: '提取',
  4: '提取失败',
  5: '更新库存'
}

console.log(ProductStorageAction[1])
// =>
// '任务奖励'





