/**
 * 我们不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。
 * 工厂模式根据抽象程度的不同可以分为：简单工厂，工厂方法和抽象工厂
 */

 //User类
class User {
    //构造器
    constructor(opt) {
      this.name = opt.name;
      this.viewPage = opt.viewPage;
    }
  
    //静态方法
    static getInstance(role) {
      switch (role) {
        case 'superAdmin':
          return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] });
          break;
        case 'admin':
          return new User({ name: '管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据'] });
          break;
        case 'user':
          return new User({ name: '普通用户', viewPage: ['首页', '通讯录', '发现页'] });
          break;
        default:
          throw new Error('参数错误, 可选参数:superAdmin、admin、user')
      }
    }
  }

  //调用
let superAdmin = User.getInstance('superAdmin');
let admin = User.getInstance('admin');
let normalUser = User.getInstance('user');

// https://juejin.im/post/5b69c699e51d45348a301ef4