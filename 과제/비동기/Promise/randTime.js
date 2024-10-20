console.time('randTime');
const randTime = value =>
    new Promise(resolve => setTimeout(resolve, Math.random * value, value));

randTime(100).then(res => {
    console.log(res);
    console.timeEnd('randTime');
});

module.exports = randTime;
