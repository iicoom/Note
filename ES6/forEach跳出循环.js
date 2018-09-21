/* 问题引入

// Fetch all objects in SomeElements collection
var elementsCollection = SomeElements.find();
elementsCollection.forEach(function(element){
  if (element.shouldBeProcessed == false){
    // Here I would like to continue to the next element if this one 
    // doesn't have to be processed
  }else{
    // This part should be avoided if not neccessary
    doSomeLengthyOperation();
  }
});

解决方法
Each iteration of the forEach() will call the function that you have supplied. 
To stop further processing within any given iteration (and continue with the next item) 
you just have to return from the function at the appropriate point:

elementsCollection.forEach(function(element){
  if (!element.shouldBeProcessed)
    return; // stop processing this iteration

  // This part will be avoided if not neccessary
  doSomeLengthyOperation();
});

*/


var arr = [1,2,3,4,5,6,7,8,9];
var newArr = [];

arr.forEach((item) => {
	if (item < 5) {
		return;
	} else {
		newArr.push(item);
	}
})

console.log('newArr:', newArr)

