const assert = require('assert');
const {error} = require('console');

const randTime = val =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(val);
        }, val);
    });

const vals = [1, 2, 3];

// Promise.all([randTime(1), randTime(2), randTime(3)])
//     .then(arr => {
//         console.table(arr);
//         assert.deepStrictEqual(arr, vals);
//     })
//     .catch(console.error);

// Promise.all([randTime(11), Promise.reject('RRR'), randTime(33)])
//     .then(array => {
//         console.table(array);
//         console.log('여긴 과연 호출될까?!');
//     })
//     .catch(error => {
//         console.log('reject!!!!!!>>', error);
//     });

const promiseAll = arr => {
    const promiseArr = [];
    return new Promise((resolve, reject) => {
        //Promise.all 대신
        // Promise.all(arr)
        //     .then(res => resolve(res))
        //     .catch(reject);
        arr.forEach(promise =>
            promise
                .then(res => {
                    promiseArr.push(res);
                    if (promiseArr.length === arr.length) resolve(promiseArr);
                })
                .catch(err => reject({state: 'rejected', reason: err})),
        );
    });
};

promiseAll([randTime(1), randTime(2), randTime(3)])
    .then(arr => {
        console.table(arr);
        assert.deepStrictEqual(arr, vals);
    })
    .catch(console.error);

promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
    .then(array => {
        console.log('여긴 과연 호출될까?!');
        console.table(array);
    })
    .catch(error => {
        console.log('reject!!!!!!>>', error);
    });

//promise { <state>: "rejected", <reason>: 555 }
