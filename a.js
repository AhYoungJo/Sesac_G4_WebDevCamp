function keyPair(arr, N) {
    let map = {};
    let val = 0;
    for (const key of arr) {
        map[key] = val;
        val++;
    }

    for (const key of arr) {
        const 차이 = N - key;
        if (map[차이]) {
            return [map[key], map[차이]];
        }
    }
}


console.log("🚀 ~ keyPair([1, 3, 4, 5], 7), [1, 2];:", keyPair([1, 3, 4, 5], 7));


const assert = require('assert');

// function deleteObjFromArray(arr, key, val) {
//     const findId = (key, val) => obj => obj[key] === val;
//     const startIdx = arr.findIndex(findId(key, val));
//     return startIdx >= 0 ? arr.toSpliced(startIdx, 1) : arr;
// }

function deleteArray(arr, ...args) {
    //시작하는 Index의 default: 0
    //끝나는 지점 default: 배열 길이
    //MDN: 만약 deleteCount가 생략되거나, deleteCount가 start 인덱스 뒤의 요소의 개수보다 크거나 같으면 배열의 시작부터 끝까지 모든 요소가 삭제됩니다.
    let [startIdx = 0, deleteCount = arr.length] = [...args];

    //만약 startIdx가 객체의 key면 key의 val값과 일치하는 객체의 index검색

    //v1. 중복 객체 없다 가정하고 1개만 삭제하는 조건문
    if (startIdx === 'id') {
        return arr.filter((obj) => obj.id !== deleteCount);
    }
    if (startIdx === 'name') {
        return arr.filter((obj) => obj.name !== deleteCount);
    }

    //v2. 동일한 객체가 여러개일 수 있다 가정하고, 있다면 재귀하는 조건문
    // if (typeof startIdx === 'string') {
    //     const key = startIdx;
    //     const val = deleteCount;
    //     let newArr;
    //     function deleteByKey(arr, key, val) {
    //         newArr = deleteObjFromArray(arr, key, val);
    //         if (newArr.length === arr.length) return newArr;
    //         return deleteByKey(newArr, key, val);
    //     }
    //     return deleteByKey(arr, key, val);
    // }

    //toSpliced 메서드의 deleteCount보다 -1 만큼 제거
    return arr.toSpliced(startIdx, deleteCount - 1);
}

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];
// const users = [Hong, Kim, Lee, Hong];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Hong'), [Kim, Lee]);

const arr2 = [1, 2, 3, true];
const ret2 = arr2.map(e => e.toString());
const ret1 = arr2.map(String);
console.log("🚀 ~ ret1:", ret1);
console.log("🚀 ~ ret2:", ret2);

const classNames = (...args) => {
    return args.filter(Boolean).join(' '); //<--
};
const ret3 = classNames('', 'a b c', 'd', '', 'e');


const reduce = (arr, fn, initValue) => {
    const isValid_initValue = initValue !== undefined && initValue !== null;

    //초기 acc 값: initValue
    //initValue가 undefined일 때: 첫 번째 요소
    // let acc = isValid_initValue ? initValue : arr[0];
    let start = 0;
    let acc = initValue ?? (start++, arr[0]);

    //초기 start 값: 첫 번째 요소
    //initValue가 undefined일 때: 두 번째 요소
    // const start = isValid_initValue ? 0 : 1;

    for (let i = start; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    // acc = arr
    //     .slice(start)
    //     .map(n => (acc = fn(acc, n)))
    //     .at(-1);
    return acc;
};
assert.deepStrictEqual(
    reduce([1, 2, 3], (a, b) => a + b, 0),
    6,
);
assert.deepStrictEqual(
    reduce([1, 2, 3, 4, 5], (a, b) => a + b),
    15,
);
assert.deepStrictEqual(
    reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
    120,
);
assert.deepStrictEqual(
    reduce([2, 2, 2], (a, b) => a * b),
    8,
);
assert.deepStrictEqual(
    reduce([3, 3, 3], (a, b) => a * b, 0),
    0,
);


//function keyPair(arr, N) {
//     let cache = {}; //요소: 7-1: 0
//     for (let i = 0; i < arr.length; i++) {
//         const a = arr[i];  //요소
//         if (a in cache) {
//             return [i, cache[a]];
//         }
//         return map[N - arr[i]] = i;
//     }
// }


class Cat {
    static IDC = 2;
}

Cat.IDC; //2
Cat.prototype.IDC; // undefined
Cat.constructor;
console.log("🚀 ~ Cat.constructor:", Cat.constructor);

const arr3 = ['1', '2', '3'];

const rets = arr3.map(parseInt);
console.log(rets);   // [ 1, NaN, NaN ]

const unary = fn => fn.length === 1
    ? fn
    : (arg) => fn(arg);

const rets2 = arr3.map(unary(parseInt));
console.log(rets2);   // [ 1, 2, 3 ]


const obj = { id: 1, name: 'Hong' };
obj.__proto__; // [Object: null prototype]{}
console.log("🚀 ~ obj.__proto__:", obj.__proto__);
obj.prototye; // undefined
console.log("🚀 ~ obj.prototye:", obj.constructor());
console.log(obj.__proto__ === Object.prototype);

obj.__proto__ = { x: 11 };
console.log("new proto", obj.__proto__ === Object.prototype);;
console.log(obj.constructor === Object);

class Animal {
    constructor(name) {
        this.name = name || super.constructor.name;
    }
}

class Dog extends Animal {
    bark() { console.log('bark!!', this.name); }
}

const dog = new Animal('Dog');
const maxx = new Dog('maxx');

console.dir(Object.getPrototypeOf(dog));
console.dir(Object.getPrototypeOf(maxx));


class Triple {
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        console.log('11>>', super.constructor === BiggerTriple.constructor);
        return super.triple(n) * super.triple(n);
    }
}

class BiggerTripleX extends Triple {
    triple(n) {
        console.log('22>>', super.constructor, super.constructor.triple);
        // return super.triple(n) * super.triple(n);
    }
}
BiggerTriple.triple(9);


const btx = new BiggerTripleX();
btx.triple(9);
