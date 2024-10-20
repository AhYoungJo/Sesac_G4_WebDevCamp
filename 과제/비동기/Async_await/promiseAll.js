const assert = require('assert');
const randTime = require('../Promise/randTime.js');
const vals = [1, 2, 3];

const promiseAll = arr => {
    const promiseArr = [];
    return new Promise(async (resolve, reject) => {
        for (const promise of arr.values()) {
            try {
                const res = await promise;
                promiseArr.push(res);
            } catch (err) {
                reject({state: 'rejected', reason: err});
                return;
            }
        }
        resolve(promiseArr);
    });
};

// promiseAll([randTime(1), randTime(2), randTime(3)])
//     .then(arr => {
//         console.table(arr);
//         assert.deepStrictEqual(arr, vals);
//     })
//     .catch(console.error);

promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
    .then(array => {
        console.log('여긴 과연 호출될까?!');
    })
    .catch(error => {
        console.log('reject!!!!!!>>', error);
    });
