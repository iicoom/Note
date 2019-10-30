/**
 * The Singleton is one of the most well known and hated design patterns amongst developers.
 */

var myInstance = {
    method1: function () {
      // ...
    },
    method2: function () {
      // ...
    }
  };

// If you want private members on your singleton instance, you can do something like this:
var myInstance = (function() {
    var privateVar = '';
  
    function privateMethod () {
      // ...
    }
  
    return { // public interface
      publicMethod1: function () {
        // all private members are accesible here
      },
      publicMethod2: function () {
      }
    };
  })();

//   This has been called the module pattern, it basically allows you to encapsulate 
//   private members on an object, by taking advantage of the use of closures.


// Perhaps the cleanest approach is to use a combination of ES6 classes, const and Object.freeze():
class Singleton {
    constructor(){
    //  ...
    }
  
    method1(){
    //   ...
    }
  
    method2(){
    //   ...
    }
  }
  
const singletonInstance = new Singleton();
Object.freeze(singletonInstance);

// We can go a little further and write this singleton in a module and then export it 
// with the ES6 export functionality.
export default singletonInstance;

// Then use that singleton by importing it:
// import mySingleton from './path-to-my-singleton-definition.js'; 
// mySingleton.method_1() // Now use your singletons

/*
Let’s start with the most basic implementation. 
Here’s (a cleaner and more powerful) modern interpretation of the above example:
*/
const _data = [];

const UserStore = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
}

Object.freeze(UserStore);
export default UserStore;

/**
 * it really shines is in the constraint imposed upon code that 
 * consumes our little singleton module here: the consuming code cannot reassign UserStore 
 * because of the const keyword. And as a result of our use of Object.freeze, 
 * its methods cannot be changed, nor can new methods or properties be added to it. 
 * Furthermore, because we’re taking advantage of ES6 modules, we know exactly where UserStore is used.
 */

class UserStore {
    constructor(){
      this._data = [];
    }
  
    add(item){
      this._data.push(item);
    }
  
    get(id){
      return this._data.find(d => d.id === id);
    }
  }
  
const instance = new UserStore();
Object.freeze(instance);

export default instance;

// https://www.sitepoint.com/javascript-design-patterns-singleton/