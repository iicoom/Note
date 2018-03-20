/*
Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.
*/
_.isEmpty(null);
// => true
 
_.isEmpty(true);
// => true
 
_.isEmpty(1);
// => true
 
_.isEmpty([1, 2, 3]);
// => false
 
_.isEmpty({ 'a': 1 });
// => false


_.isEmpty('123456')
//false
_.isEmpty('')
//true
_.isEmpty(' ')
//false
_.isEmpty([])
//true
_.isEmpty([1,2])
//false