const assert = require('assert');
const randTime = require('./randTime');

const vals = [1, 2, 3];

const promiseAll = arr => {
    const promiseArr = [];
    return new Promise((resolve, reject) => {
        //Promise.all 대신
        // Promise.all(arr)
        //     .then(res => resolve(res))
        //     .catch(reject);

        let length = arr.length;
        arr.forEach((promise, idx) =>
            promise
                .then(res => {
                    promiseArr[idx] = res;
                    length--;
                    if (length === 0) resolve(promiseArr);
                })
                .catch(err => reject({ state: 'rejected', reason: err })),
        );

    });
};

console.time('promiseAll');
promiseAll([randTime(1), randTime(2), randTime(3)])
    .then(arr => {
        console.table(arr);
        console.timeEnd('promiseAll');
        assert.deepStrictEqual(arr, vals);
    })
    .catch(console.error);

console.time('promiseAll2');
promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
    .then(array => {
        console.log('여긴 과연 호출될까?!');
        console.table(array);
        console.timeEnd('promiseAll2');
    })
    .catch(error => {
        console.log('reject!!!!!!>>', error);
    });

//promise { <state>: "rejected", <reason>: 555 }
