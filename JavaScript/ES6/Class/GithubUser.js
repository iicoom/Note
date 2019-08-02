// 我们创建一个GithubUser类，它拥有一个login方法，
// 和一个静态方法getPublicServices, 用于获取public的方法列表：

class GithubUser {
    static getPublicServices() {
        return ['login']
    }
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    login() {
        console.log(this.username + '要登录Github，密码是' + this.password)
    }
}

// ES6这个类的写法有一个弊病，实际上，
// 密码password应该是Github用户一个私有变量，接下来，我们用TypeScript重写一下：
class GithubUser {
    static getPublicServices() {
        return ['login']
    }
    public username: string
    private password: string
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    public login(): void {
        console.log(this.username + '要登录Github，密码是' + this.password)
    }
}

// 如此一来，password就只能在类的内部访问了。

// 如果结合原型讲解那一文的知识，来用ES5实现这个类呢
function GithubUser(username, password) {
    // private属性
    let _password = password
    // public属性
    this.username = username
    // public方法
    GithubUser.prototype.login = function () {
        console.log(this.username + '要登录Github，密码是' + _password)
    }
}

// 静态方法
GithubUser.getPublicServices = function () {
    return ['login']
}


// 继承
function JuejinUser(username, password) {
    // TODO need implementation
    this.articles = 3 // 文章数量
    JuejinUser.prototype.readArticle = function () {
        console.log('Read article')
    }
}

/*
由于 ES6/TS 的继承太过直观，本节将忽略。首先概述一下本文将要讲解的几种继承方法：

类式继承
构造函数式继承
组合式继承
原型继承
寄生式继承
寄生组合式继承
看起来很多，我们一一论述。
 */
// 类式继承
// 若通过 new Parent() 创建了 Child, 则 Child.__proto__ = Parent.prototype，
// 而原型链则是顺着 __proto__ 依次向上查找。
// 因此，可以通过修改子类的原型为父类的实例来实现继承。
function GithubUser(username, password) {
    let _password = password
    this.username = username
    GithubUser.prototype.login = function () {
        console.log(this.username + '要登录Github，密码是' + _password)
    }
}

function JuejinUser(username, password) {
    this.articles = 3 // 文章数量
    JuejinUser.prototype = new GithubUser(username, password)
    JuejinUser.prototype.readArticle = function () {
        console.log('Read article')
    }
}

// 另一种写法
function GithubUser(username, password) {
    let _password = password
    this.username = username
    GithubUser.prototype.login = function () {
        console.log(this.username + '要登录Github，密码是' + _password)
    }
}

function JuejinUser(username, password) {
    this.articles = 3 // 文章数量
    const prototype = new GithubUser(username, password)
    // JuejinUser.prototype = prototype // 这一行已经没有意义了
    prototype.readArticle = function () {
        console.log('Read article')
    }
    this.__proto__ = prototype
}

const juejinUser1 = new JuejinUser('ulivz', 'xxx', 3)


// 构造函数式继承
// 通过 call() 来实现继承 (相应的, 你也可以用apply)：
function GithubUser(username, password) {
    let _password = password
    this.username = username
    GithubUser.prototype.login = function () {
        console.log(this.username + '要登录Github，密码是' + _password)
    }
}

function JuejinUser(username, password) {
    GithubUser.call(this, username, password)
    this.articles = 3 // 文章数量
}

const juejinUser1 = new JuejinUser('ulivz', 'xxx')
console.log(juejinUser1.username) // ulivz
console.log(juejinUser1.password) // xxx
console.log(juejinUser1.login()) // TypeError: juejinUser1.login is not a function

//当然，如果继承真地如此简单，那么本文就没有存在的必要了，本继承方法也存在明显的缺陷——     构造函数式继承并没有继承父类原型上的方法。

// 寄生组合式继承
// 寄生组合式继承的核心方法
function inherit(child, parent) {
    // 继承父类的原型
    const p = Object.create(parent.prototype)
    // 重写子类的原型
    child.prototype = p
    // 重写被污染的子类的constructor
    p.constructor = child
}

// GithubUser, 父类
function GithubUser(username, password) {
    let _password = password
    this.username = username
}

GithubUser.prototype.login = function () {
    console.log(this.username + '要登录Github，密码是' + _password)
}

// GithubUser, 子类
function JuejinUser(username, password) {
    GithubUser.call(this, username, password) // 继承属性
    this.articles = 3 // 文章数量
}

// 实现原型上的方法
inherit(JuejinUser, GithubUser)

// 在原型上添加新方法
JuejinUser.prototype.readArticle = function () {
    console.log('Read article')
}

const juejinUser1 = new JuejinUser('ulivz', 'xxx')
console.log(juejinUser1)