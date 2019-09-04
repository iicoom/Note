
const someThingNeedTime = async (i) => {
    // 1. 相同时间
    // setTimeout(() => {
    //     console.log(`Mission ${i} Complete!`);
    // }, 1000);

    // 2. 不同耗时
    // setTimeout(() => {
    //     console.log(`Mission ${i} Complete!`);
    // }, 500*i);

    // 3. 玩点复杂的
    let info;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Mission ${i} Complete!`);
            info = `${i} Fetched`;
            resolve(info);
        }, 500*i);
    }) 
}

const getAllMissionDone = async (arr) => {
   
    for (let item of arr) {
        await someThingNeedTime(item);
    }
};



const setions = [1,2,3,4,5];
// getAllMissionDone(setions);

/*
1. 相同时间 1秒后全部打印
➜  ES7 git:(master) ✗ node async.js
Mission 1 Complete!
Mission 2 Complete!
Mission 3 Complete!
Mission 4 Complete!
Mission 5 Complete!
*/

/** 
2. 不同耗时 依次打印
➜  ES7 git:(master) ✗ node async.js
Mission 1 Complete!
Mission 2 Complete!
Mission 3 Complete!
Mission 4 Complete!
Mission 5 Complete!
 */

const getData = async (arr) => {
    
    let result = [];
    for (let item of arr) {
        const data = await someThingNeedTime(item);
        result.push(data)
    }
    console.log('result:', result);
};

const another = [1,3,5,4,2]

// getData(setions)
// result: [ '1 Fetched', '2 Fetched', '3 Fetched', '4 Fetched', '5 Fetched' ]

getData(another)
/**
Mission 1 Complete!
Mission 3 Complete!
Mission 5 Complete!
Mission 4 Complete!
Mission 2 Complete!
result: [ '1 Fetched', '3 Fetched', '5 Fetched', '4 Fetched', '2 Fetched' ]
 */

// 总结：await someThingNeedTime(item); 会按顺序执行，不是一起执行