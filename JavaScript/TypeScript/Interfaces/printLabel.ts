function printLabel(labeledObj: { label: string }) {
	console.log(labeledObj.label)
}

let myObj = { size: 10, label: "Size 10 Object"}
printLabel(myObj)


/**
 * The printLabel function has a single parameter that requires that the object passed in 
 * has a property called label of type string.
 */


/**
 * We can write the same example again, this time using an interface to describe 
 * the requirement of having the label property that is a string:
 */
interface LabeledValue {
	label: string;
}

function printLabel1(labeledObj: LabeledValue) {
	console.log(labeledObj.label)
}

printLabel1(myObj)