const assert = require('assert');

//깊은 복사 deepCopy 함수 작성
//(Map, Set, WeakMap, WeakSet도 복사)
const arr = [1, 2, 3, { aid: 1 }, [10, 20]];
const hong = { id: 1, name: 'Hong' };
const kim = {
    nid: 3,
    addr: 'Pusan',
    arr: arr, //[ 1, 2, 3, { aid: 1 }, [ 10, 20 ] ]
    oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
    xx: null, //null
    yy: function () { console.log(this.oo); },
    yyy() { console.log(this.oo); },
    [Symbol()]: 9,
    [Symbol()]: Symbol('symbol2'),
    zs: new Set([arr, hong]), //Set(2) { [ 1, 2, 3, { aid: 1 }, [ 10, 20 ] ], { id: 1, name: 'Hong' } }
    zws: new WeakSet([arr, hong]), //WeakSet { <items unknown> }
    zm: new Map([[hong, arr]]), //Map(1) { { id: 1, name: 'Hong' } => [ 1, 2, 3, { aid: 1 }, [ 10, 20 ] ] }
    zwm: new WeakMap([[hong, arr]]), //WeakMap { <items unknown> }
};



function copyObject(fn) {
    // let newObj = {};
    return function B(obj) {
        let newObj = {};
        Object.keys(kim).forEach(key => {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                if (Array.isArray(obj[key])) {
                    newObj[key] = Array.from(obj[key]);
                } else if (obj[key] instanceof Map) {
                    // newObj[key] = new Map(Array.from(obj[key]));
                    newObj[key] = new Map(obj[key].entries());
                } else if (obj[key] instanceof Set) {
                    newObj[key] = new Set(obj[key].keys());
                } else if (obj[key] instanceof WeakMap) {
                    newObj[key] = new WeakMap(Array.from(obj[key]));
                } else if (obj[key] instanceof WeakSet) {
                    newObj[key] = new WeakSet(Array.from(obj[key]));
                } else {
                    newObj[key] = fn(obj[key]);
                }
            } else {
                newObj[key] = obj[key];
            }
        });
        Object.getOwnPropertySymbols(kim).forEach(symbol =>
            newObj[symbol] = obj[symbol]
        );

        return newObj;
    };
}

const deepCopyObject = copyObject(function A(obj) {
    let newObj = {};
    for (const key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = A(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
});


const newKim = deepCopyObject(kim);
assert.deepStrictEqual(newKim, kim, 'deepCopy equal fail!');
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
assert.notDeepStrictEqual(newKim, kim, 'Not Valid Deep Copy!');




//------------------------------------------------------------
// const deepCopyKim = deepCopyObject(kim);
// deepCopyKim.addr.city = "Seoul";
// console.log("🚀 ~ deepCopyKim.addr.city:", deepCopyKim.addr.city);
// console.log(
//     "🚀 ~ deepCopyKim.addr.city !== kim.addr.city: ",
//     deepCopyKim.addr.city !== kim.addr.city
// );


// function shallowCopyObject(obj) {
//     let newObj = {};
//     for (let key in obj) {
//         newObj[key] = obj[key];
//     }
//     return newObj;
// }
// const shallowCopyKim = shallowCopyObject(kim);
// shallowCopyKim.addr = "Seoul";
// console.log("🚀 ~ newObj:", shallowCopyKim.addr);
// console.log(
//     "🚀 ~ shallowCopyKim.addr !== kim.addr: ",
//     shallowCopyKim.addr !== kim.addr
// ); // //true
