// shallow copy
// Using the spread syntax or Object.assign() is a standard way of copying an object in JavaScript. 
// 1. Object.assign()
// The spread syntax and the Object.assign() method can only make shallow copies of objects.
//  This means that the deeply nested values inside the copied object are put there just as a reference to the source object. 
// If we modify a deeply nested value of the copied object, we will therefore end up modifying the value in the source object.
const pizzas = {
    margherita: {
       toppings: ['tomato sauce', 'mozzarella cheese'],
       prices: {
          small: '5.00',
          medium: '6.00',
          large: '7.00'
       }
    },
    prosciutto: {
       toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],
       prices: { 
          small: '6.50', 
          medium: '7.50',
          large: '8.50' 
       }
    }
}

// Let's try now to copy that pizzas object above using the spread syntax and 
// change the value of one of the prices in the copied object:
let pizzasCopy = {...pizzas};

// modify a value in the copy of pizzas
pizzasCopy.margherita.prices.small = '5.50';

// log the copied object to the console
console.log(pizzasCopy.margherita.prices.small); // This will log 5.50, as expected

// log the source object to the console
console.log(pizzas.margherita.prices.small); // This will also log 5.50 instead of 5.00!!



// The same will happen if we use Object.assign():
let pizzasCopy = Object.assign({}, pizzas);

// modify a value in the copy of pizzas
pizzasCopy.margherita.prices.small = '5.50';

// log the copied object to the console
console.log(pizzasCopy.margherita.prices.small); // This will log 5.50, as expected
 
// log the source object to the console
console.log(pizzas.margherita.prices.small); // This will also log 5.50 instead of 5.00!!


import update from 'immutability-helper';

const pizzasCopy = update(pizzas, {margherita: {prices: {small: {$set: '5.50'}}}});

// log the copied object to the console
console.log(pizzasCopy.margherita.prices.small); // This will log 5.50, as expected

// log the source object to the console
console.log(pizzas.margherita.prices.small); // This will correctly log 5.00, the original price!!


// Reliable cloning using a library
// Since cloning objects is not trivial (complex types, circular references, function etc.), 
// most major libraries provide function to clone objects. 
// Don't reinvent the wheel - if you're already using a library, check if it has an object cloning function.
// For example,

// lodash - cloneDeep; can be imported separately via the lodash.clonedeep module and is probably your best choice if you're not already using a library that provides a deep cloning function