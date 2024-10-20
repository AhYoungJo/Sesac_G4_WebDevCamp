const assert = require('assert');
const randTime = require('./randTime');

const allSettledResults = [
    {
        status: 'fulfilled',
        value: 11,
    },
    {
        status: 'rejected',
        reason: 'RRR',
    },
    {
        status: 'fulfilled',
        value: 33,
    },
];

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
        console.log('여긴 과연 호출될까?!');
        assert.deepStrictEqual(array, allSettledResults);
    })
    .catch(error => {
        console.log('reject!!!!!!>>', error);
    });
