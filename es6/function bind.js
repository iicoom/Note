//箭头函数可以绑定this对象 大大减少了显式绑定this对象的写法（call,apply,bind）

foo::bar;
//等同于
bar.bind(foo);


foo::bar(...arguments);
//等同于
bar.apply(foo,arguments);


/*****************************************************
 call,apply,bind干什么的？为什么要学这个
 ***********************************************************/
//一般用来指定this的环境，在没有学之前，通常会有这些问题
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user);
    }
}
var b = a.fn;
b(); //undefined
//我们是想打印对象a里面的user却打印出来undefined是怎么回事呢？如果我们直接执行a.fn()是可以的。
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user);
    }
}
a.fn(); //追梦子
//http://www.cnblogs.com/pssp/p/5216085.html  彻底弄清this指向

/*****call()********/
//通过在call方法，给第一个参数添加要把b添加到哪个环境中，简单来说，this就会指向那个对象。
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user); //追梦子
    }
}
var b = a.fn;
b.call(a);

//call方法除了第一个参数以外还可以添加多个参数
var a = {
    user:"追梦子",
    fn:function(e,ee){
        console.log(this.user); //追梦子
        console.log(e+ee); //3
    }
}
var b = a.fn;
b.call(a,1,2);

/******apply()*******/
//apply方法和call方法有些相似，它也可以改变this的指向

var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user); //追梦子
    }
}
var b = a.fn;
b.apply(a);

//同样apply也可以有多个参数，但是不同的是，第二个参数必须是一个数组，如下
var a = {
    user:"追梦子",
    fn:function(e,ee){
        console.log(this.user); //追梦子
        console.log(e+ee); //11
    }
}
var b = a.fn;
b.apply(a,[10,1]);

//注意如果call和apply的第一个参数写的是null，那么this指向的是window对象
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this); //Window {external: Object, chrome: Object, document: document, a: Object, speechSynthesis: SpeechSynthesis…}
    }
}
var b = a.fn;
b.apply(null);

/************bind()*****************/
//bind方法和call、apply方法有些不同，但是不管怎么说它们都可以用来改变this的指向。
//先来说说它们的不同吧。
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user);
    }
}
var b = a.fn;
b.bind(a);
//我们发现代码没有被打印，对，这就是bind和call、apply方法的不同，实际上bind方法返回的是一个修改过后的函数。
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user); //追梦子
    }
}
var b = a.fn;
var c = b.bind(a);
c();

//ok，同样bind也可以有多个参数，并且参数可以执行的时候再次添加，但是要注意的是，参数是按照形参的顺序进行的
var a = {
    user:"追梦子",
    fn:function(e,d,f){
        console.log(this.user); //追梦子
        console.log(e,d,f); //10 1 2
    }
}
var b = a.fn;
var c = b.bind(a,10);
c(1,2);
//总结：call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，
// 并且可以将参数在执行的时候添加，这是它们的区别，根据自己的实际情况来选择使用