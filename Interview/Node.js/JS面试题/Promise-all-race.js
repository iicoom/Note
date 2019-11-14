/**
 * https://alligator.io/js/promise-all-promise-race/
 * The Promise object in JavaScript offers a few useful built-in methods, 
 * with Promise.all and Promise.race being two such methods. 
 * Even though these two methods both take arrays of promises as argument, t
 * here’s a big difference between Promise.all vs Promise.race.
 */

// Promise.all accepts an array of promises, and will attempt to fulfill all of them. 
// Exits early if just 1 promise gets rejected.
// The design purpose of Promise.all is to fulfill many promises.
// For example, when a user logs into a web app like Facebook, 
// several network requests probably need to be made to populate the user’s personalized content:
const userContent = [
    new Promise(getFriendsList),
    new Promise(getGroups),
    new Promise(getLikedPages)
];

function initalizeUserContent() {
    Promise.all(userContent)  // 👈 gotta get em all!
    .then(displayHomepage)
    .catch(redirectLoginForm);
};

initalizeUserContent();

// 实例：
const foo = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '🍓')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
  ];
  
  Promise.all(foo)
    .then(console.log)
    .catch(console.log);

// [ '🍍', '🥝', '🍏', '🍇' ]

const foo1 = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(reject, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
  ];
  
  Promise.all(foo1)
    .then(console.log)
    .catch(console.log);
'🍏' // note: it's a "string" not an array
// It only takes one bad apple to exit from Promise.all!


// Promise.race also accepts an array of promises, but returns the first promise that is settled.
// A settled promise can either be resolved or rejected.
const myStockBrokers = [
    eTrade,
    fidelity,
    interactiveBrokers,
    ameritrade,
    tradeStation,
    vanguard
  ];
  
  function submitBuyOrder() {
    Promise.race(myStockBrokers)
      .then(updateMyPortfolio)
      .catch(cancelBuyOrder);
  };
  
  submitBuyOrder();
//   The method name Promise.race is befitting because it causes all of the promises to 
//   “race” against each other with only a single winner. 

// 例子：
const foo2 = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(reject, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
  ];
  
  Promise.race(foo2)
    .then(console.log)
    .catch(console.log);

// '🍍'