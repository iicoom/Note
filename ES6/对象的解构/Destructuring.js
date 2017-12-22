 var { foo, bar } = { foo: "lorem", bar: "ipsum" };
    console.log(foo);
    // "lorem"
    console.log(bar);
    // "ipsum"


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


 // 当你解构一个未定义的属性时，得到的值为undefined：
 var { missing } = {};
    console.log(missing);
    // undefined


 /*解构的实际应用 - 函数参数定义*/
 function removeBreakpoint({ url, line, column }) {
      // ...
    }

//多重返回值
function returnMultipleValues() {
      return {
        foo: 1,
        bar: 2
      };
    }
    var { foo, bar } = returnMultipleValues();


function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

// good
function processInput(input) {
// then a miracle occurs
return { left, right, top, bottom };
}

// 调用时只选择需要的数据
const { left, right } = processInput(input);

