// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，
// 而具体如何行动需要由类（classes）去实现（implement）。

// 对象的类型

interface Person {
	name: string;
	age: number;
}

let tom: Person = {
	name: 'Tom',
	age: 25
}


let jack: Person = {
    name: 'Jack'
};

let herry: Person = {
    name: 'Herry',
    age: 25,
    gender: 'male'
};


// 上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。
// 这样，我们就约束了 tom 的形状必须和接口 Person 一致。


// 可选属性
interface Animal {
	name: string;
	age?: number;
}

let catty: Animal = {
	name: 'Catty',
}

// 用接口定义函数的形状
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	return source.search(subString) !== -1
}


// ==========================================================================
// Excess Property Checks  额外属性检查

interface SquareConfig {
    color?: string;
    width?: number;
}

interface SquareConfig1{
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	// ...
	return 
}

function createSquare1(config: SquareConfig1): { color: string; area: number } {
	// ...
	return 
}

let mySquare = createSquare({ colour: "red", width: 100 })

let yourSquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

let hisSquare = createSquare1({ colour: "red", width: 100 })


// Function Types


