// console.time('randTimes');
const randTimes = value =>
    new Promise(resolve => setTimeout(resolve, Math.random * value, value));

// randTimes(100).then(res => {
//     console.log(res);
//     // console.timeEnd('randTimes');
// });

const randTime = value =>
    new Promise(resolve => {
        const rand_T = Math.random() * 1000;
        setTimeout(() => {
            resolve(value);
        }, rand_T);
    });

// randTime(100).then(res => {
//     console.log(res);
// });

module.exports = randTime;
