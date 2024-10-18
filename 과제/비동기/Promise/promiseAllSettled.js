const assert = require('assert');

const randTime = val =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(val);
        }, val);
    });

const vals = [1, 2, 3];

const promiseAllSettled = arr => {
    const promiseArr = [];
    return new Promise(resolve => {
        arr.forEach((promise, idx) =>
            promise
                .then(res => {
                    promiseArr[idx] = {status: 'fulfilled', value: res};
                })
                .catch(err => {
                    promiseArr[idx] = {status: 'rejected', reason: err};
                })
                .finally(() => {
                    if (promiseArr.length === arr.length) resolve(promiseArr);
                }),
        );
    });
};

promiseAllSettled([randTime(11), Promise.reject('RRR'), randTime(33)])
    .then(array => {
        console.table(array);
        // console.log(JSON.stringify(array, null, '  '));
        console.log('여긴 과연 호출될까?!');
        assert.deepStrictEqual(array, allSettledResults);
    })
    .catch(error => {
        console.log('reject!!!!!!>>', error);
    });
