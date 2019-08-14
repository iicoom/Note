// https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/

/**
 * Symbols are new primitive type introduced in ES6. 
 * Symbols are completely unique identifiers. 
 * Just like their primitive counterparts (Number, String, Boolean), 
 * they can be created using the factory function Symbol() which returns a Symbol.
 */

const symbol = Symbol('description');

// Every symbol returned by Symbol() is unique, so every symbol has its own identity:

Symbol() === Symbol()
false


// Do we really need symbols?
// Use symbols when your requirement is one of these:

// 1. Enum
// To allow you to define constants with semantic names and unique values.
// 
const directions = {  UP   : Symbol( ‘UP’ ),  DOWN : Symbol( ‘DOWN’ ),  LEFT : Symbol( ‘LEFT’ ),  RIGHT: Symbol( ‘RIGHT’ )};

// 2. Name Clashes: when you wanted to prevent collisions with keys in objects

