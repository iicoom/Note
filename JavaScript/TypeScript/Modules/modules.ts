/*

It’s important to note that in TypeScript 1.5, the nomenclature has changed. 

“Internal modules” are now “namespaces”. “External modules” are now simply “modules”, 

as to align with ECMAScript 2015’s terminology,
 */


// Modules are executed within their own scope, not in the global scope;

// this means that variables, functions, classes, etc. declared in a module are not 
// visible outside the module unless they are explicitly exported using one of the export forms. 
// Conversely, to consume a variable, function, class, interface, etc. 
// exported from a different module, 
// it has to be imported using one of the import forms.

//  Well-known module loaders used in JavaScript are Node.js’s loader for CommonJS modules and 
//  the RequireJS loader for AMD modules in Web applications.