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


// Stage 3 proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c: 30, d: 40}


/***** 例4 ***************************************/
const { ProductStorageDetail: PSD } = this.props.common;
// 把ProductStorageDetail重命名为较短的PSD







