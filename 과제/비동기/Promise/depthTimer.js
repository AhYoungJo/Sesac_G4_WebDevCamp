const depthTimer = val =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`depth${val}`, new Date());
            val < 3
                ? resolve(val + 1)
                : reject(new Error('Already 3-depth!!'));
        }, 1000 * val);
    });

console.log('START!', new Date());

depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);

// setTimeout(function () {
//     console.log('depth1', new Date());
//     setTimeout(function () {
//         console.log('depth2', new Date());
//         setTimeout(function () {
//             console.log('depth3', new Date());
//             throw new Error('Already 3-depth!!');
//         }, 3000);
//     }, 2000);
// }, 1000);
