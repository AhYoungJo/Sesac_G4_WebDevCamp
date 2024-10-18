// class Promise {
//     thenFns = [];
//     catchFns = [];
//     constructor(f) {
//         //resolve와 reject는 함수.
//         //해당 함수가 호출될 때 this가 어떻게 바인딩될지
//         f(this.resolve.bind(this), this.reject.bind(this));
//     }
//     then(f1, f2) {
//         this.thenFns.push(f1);
//         this.catchFns.push(f2);
//     }

//     resolve(x) {
//         const f = this.thenFns.shift();
//         if (f) f(x);
//     }
//     reject(e) {
//         const f = this.catchFns.shift();
//         if (f) f(e);
//     }
// }

const promiseA = new Promise((resolve, reject) => {
    const time = new Date().getHours();
    time < 12 ?
        resolve(`Hello world! Now time is ${time}`) :
        reject(`Good bye world! Now time is ${time}`);
});

function msg(txt) {
    console.log(txt);
}

promiseA.then(msg, msg);
promiseA.then(msg, msg);



