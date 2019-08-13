interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred", 1];

let myStr: string = myArray[0];