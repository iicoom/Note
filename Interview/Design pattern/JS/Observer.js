/**
 * 观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，
 * 这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
 * 
 * The instance (subject) maintains a collection of objects (observers) and notifies them all 
 * when changes to the state occurs. 
 * 
 * 使用观察者的好处：
 * 1. 支持简单的广播通信，自动通知所有已经订阅过的对象。
 * 2. 页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
 * 3. 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。
 */

// https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/
/**
 * Imagine that you have to update multiple elements simultaneously when some event occurs 
 * (typing inside the input field perhaps). You need to be able to add more (subscribe) elements that 
 * react (observe) to a change of an input value. Removing subscriptions (unsubscribe) can be handy if 
 * you no longer need to broadcast state changes to a particular object.
 */
class Observable {

  // each instance of the Observer class
  // starts with an empty array of things (observers)
  // that react to a state change
  constructor() {
      this.observers = [];
  }

  // add the ability to subscribe to a new object / DOM element
  // essentially, add something to the observers array
  subscribe(f) {
      this.observers.push(f);
  }

  // add the ability to unsubscribe from a particular object
  // essentially, remove something from the observers array
  unsubscribe(f) {
      this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // update all subscribed objects / DOM elements
  // and pass some data to each of them
  notify(data) {
      this.observers.forEach(observer => observer(data));
  }
}

// The usecase example goes like this…

// some DOM references
const input = document.querySelector('.js-input'); // 输入框
const p1 = document.querySelector('.js-p1');       // 展示标签
const p2 = document.querySelector('.js-p2');       // 展示标签
const p3 = document.querySelector('.js-p3');       // 展示标签

// some actions to add to the observers array
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instantiate new Observer class
const headingsObserver = new Observable();

// subscribe to some observers
headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

// notify all observers about new data on event
input.addEventListener('keyup', e => {
    headingsObserver.notify(e.target.value);
  });

