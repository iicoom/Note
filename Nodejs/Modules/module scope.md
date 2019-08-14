## dirname

```
The directory name of the current module. This is the same as the path.dirname() of the __filename.


console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr
```

## exports

A reference to the module.exports that is shorter to type. See the section about the exports shortcut for details on when to use exports and when to use module.exports.


## module

A reference to the current module, see the section about the module object. In particular, module.exports is used for defining what a module exports and makes available through require().

## require.cache
Modules are cached in this object when they are required. By deleting a key value from this object, the next require will reload the module. 

## module.parent
The module that first required this one.

➜  Test ls
module.js        parent_module.js

// module.js
console.log('module:', module)


// parent_module.js
require('./module.js')

➜  Test node parent_module.js
module: Module {
  id: '/Users/guitar/Repo/Test/module.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/Users/guitar/Repo/Test/parent_module.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ '/Users/guitar/Repo/Test/node_modules',
        '/Users/guitar/Repo/node_modules',
        '/Users/guitar/node_modules',
        '/Users/node_modules',
        '/node_modules' ] },
  filename: '/Users/guitar/Repo/Test/module.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/guitar/Repo/Test/node_modules',
     '/Users/guitar/Repo/node_modules',
     '/Users/guitar/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }

 