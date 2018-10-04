// Note: You call this method directly on the Object constructor rather than on an instance of type Object.

// JavaScript Demo: Object.defineProperty()
// Object.defineProperty(obj, prop, descriptor)

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

/*****************************
	Object.keys(obj)
	**********************************/
var obj = {'a':'123','b':'345'};
console.log(Object.keys(obj));  //['a','b']


/******************************8
	实现对象的改造
	*******************************/
const ProductType_F = { 6: '果蔬类', 7: '叶菜类' }

this.state.ProductList = Object.keys(ProductType_F).map((key) => {
      return { key: parseInt(key, 0), value: ProductType_F[key] };
    });


Object.keys(ProductType_F)
=>
["6", "7"]

[{key: 6, value: "果蔬类"},{key: 7, value: "叶菜类"}]

