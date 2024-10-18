console.time('randTime');
const randTime = value =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 800);
    });
randTime(100).then(res => {
    console.log(res);
    console.timeEnd('randTime');
});
