// ../common/model/Switch.js
class SwitchManager {
  constructor() { //默认配置的serverId=0
    this._config = null;
    this.initState = false;  // 记录类是否已经初始化
  }
  
  // static getInstance() {
  //   if (!this.instance) {
  //     this.instance = new this();
  //   }
  //   return this.instance;
  // }

  init(group, dbConn) {
    this.group = group;
    this.dbConn = dbConn;
    this.initState = true;
    return this;  // 链式调用
  }

  get config() {
    if (!this.initState) {
      throw new Error(`this module:${this.constructor.name} haven't init`);
    }
    return this._config;
  }

  loadFile() {
    this.loadFromDB();
    return this;
  }

  getSwitch() {
    let cof = this.config; // 如果没有实例化会抛出错误
    if (!cof) {
      return 1;
    }
    return cof;
  }

}

module.exports = new SwitchManager(); // 这样的导出方式就不需要再调用 getInstance方法实例化

// 初始化调用
require('../common/model/Switch').init(app.config.group, MF.UserMysql).loadFile();

// 其他模块使用
// let switch = require('../common/model/Switch');
// switch.getSwitch()



/**
 * The Singleton is one of the most well known and hated design patterns amongst developers.
 */

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