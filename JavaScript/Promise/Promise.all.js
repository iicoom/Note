// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// 这篇文章使用setTimeout 来判断js执行的异步和同步区别：应该是判断stack为空时开始执行setTimeout，而处于stack种的内容都为同步执行

// Promise.all 等待所有都完成（或第一个失败）。
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10000, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values);  
});
// Promise {<pending>}
// 10s 后输出结果 [3, 1337, "foo"]


// 但是，Promise.all 当且仅当传入的可迭代对象为空时为同步：
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log('p:', p);
console.log('p2:', p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log('setTimeout-p2', p2);
});

// p: Promise {<fulfilled>: Array(0)}
// VM339:4 p2: Promise {<pending>}
// VM339:6 the stack is now empty
// VM339:7 setTimeout-p2 Promise {<fulfilled>: Array(2)}


// Promise.all() 应用
// 把串行操作并行，节省请求时间
let [product, student] = await Promise.all([
  req.service.product.getProductById(productId),  // 每个元素都是一个Promise.resolve()
  req.service.student.getStudentDetail(studentId)
]);

const [list, total] = await Promise.all([
  req.service.semForm.getSemFormList(query),
  req.service.semForm.getSemFormCount(query)
]);