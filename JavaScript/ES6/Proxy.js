// Vue 2.0的版本所使用的数据劫持，说白了就是通过Object.defineProperty()来劫持对象属性的setter和getter操作，
// 在数据变动时做你想要做的事情，举个栗子：

var data = {
	name:'xiaoming'
}

Object.keys(data).forEach(function(key){
	Object.defineProperty(data,key,{
			get:function(){
					console.log('get');
			},
			set:function(){
					console.log('监听到数据发生了变化');
			}
	})
});
data.name //控制台会打印出 “get”
data.name = 'xiaohong' //控制台会打印出 "监听到数据发生了变化"


// 但是有没有比Object.defineProperty更好的实现方式呢？
// 在数据劫持这个问题上，Proxy 可以被认为是 Object.defineProperty() 的升级版。外界对某个对象的访问，都必须经过这层拦截。
let obj = {
  name: 'Eason',
  age: 30
}
let handler = {
  get (target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
}
let proxy = new Proxy(obj, handler)
proxy.name = 'Zoe' // set name Zoe
proxy.age = 18 // set age 18