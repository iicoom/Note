var f = v => v;

//等同于
var f = function (v) {
    return v;
}

//如果箭头函数不需要参数或者需要多个参数，就要使用圆括号代表参数部分
var fun = () => 5

//等同于
var f = function () {
    return 5;
}

var sum = (num1,num2) => num1 + num2;
//等同于
var sum = function(num1,mum2) {
    return num1+num2;
}


//正常函数的写法
[1,2,3].map(function (x) {
    return x*x;
})

//箭头函数写法
[1,2,3].map(x => x*x)