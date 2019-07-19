
// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。

// 布尔值
let isDone: boolean = false;

let createdByNewBoolean: boolean = new Boolean(1);

let createdByBoolean: boolean = Boolean(1);


// 数值
let num1: number = 6;
let num2: number = 0xf00d;


// 字符串
let username: string = 'Tom';
let age: number = 9;
let sentence: string = `Hello, my name is ${username}. I'll be ${age + 1} years old next month.` 


// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
	alert('My name is Tom')
}


// Null 和 Undefined
let u: undefined = undefined;
let n: null = null


// 数组的类型
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('9')

// 数组泛型
let arr1: Array<number> = [1, 2, '3', 4, 5]

let list: any[] = ['Xc Liu', 25, { website: 'http://xcatliu.com' }];


// 函数的类型
function sum(x: number, y: number): number {
	return x + y;
}
sum(1, 2, 3)
sum(1)


// 可选参数
function buildName(firstName: string = 'Fuck', lastName?: string) {
	if (lastName) {
		return firstName + " " + lastName;
	} else {
		return firstName;
	}
}
let tomcat = buildName('Tom', 'Cat');
let tomb = buildName('Tom');


