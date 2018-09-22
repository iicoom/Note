this.x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX()); // 返回 81

var retrieveX = module.getX;
// 返回 undefined, 在这种情况下，"this"指向全局作用域
console.log(retrieveX());

// 创建一个新函数，将"this"绑定到module对象
// 新手可能会被全局的x变量和module里的属性x所迷惑
var boundGetX = retrieveX.bind(module);
// 返回 81
console.log(boundGetX());