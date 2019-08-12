// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

// The global variable foo contains the number of widgets present.
// 全局变量 foo 存储 部件要展示的 数字
console.log("Half the number of widgets is " + (foo / 2));

// Global Variables
declare var foo: number;


// Global Functions
declare function greet(greeting: string): void;

greet("hello, world");



// Objects with Properties

// Use declare namespace to describe types or values accessed by dotted notation.
declare namespace myLib {
	function makeGreeting(s: string): string;
	let numberOfGreetings: number;
}

let result = myLib.makeGreeting("hello, fucker");
console.log("The computed greeting is:" + result);

let count = myLib.numberOfGreetings;



// Overloaded Functions

// The getWidget function accepts a number and returns a Widget, or accepts a string and returns a Widget array.
let x: Widget = getWidget(43);
let arr: Widget[] = getWidget("all of them");

// Declaration
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

declare const Widget: string;



// Reuseable Types(Interfaces)
greet({
	greeting: "hello world",
	duration: 4000
})

/*
1 - greeting: Mandatory string

2 - duration: Optional length of time (in milliseconds)

3 - color: Optional string, e.g. ‘#ff00ff’
 */
interface GreetingSettings {
	greeting: string;
	duration?: number;
	color?: string;
}

declare function greet(setting: GreetingSettings): void;





const g = new GreetingLib.Greeter("Hello");
g.log({ verbose: true })
g.alert({ modal: false, title: "Current Greeting" })

declare namespace GreetingLib {

	interface LogOptions {
		verbose?: boolean;
	}

	interface AlertOptions {
		modal: boolean;
		title: string;
		color: string;
	}

	function Greeter(s: string): void;

}











