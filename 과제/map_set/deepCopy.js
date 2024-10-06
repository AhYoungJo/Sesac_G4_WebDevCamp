const assert = require('assert');

//깊은 복사 deepCopy 함수 작성
//(Map, Set, WeakMap, WeakSet도 복사)
const arr = [1, 2, 3, {aid: 1}, [10, 20]];
const hong = {id: 1, name: 'Hong'};
const kim = {
    nid: 3,
    addr: 'Pusan',
    arr: arr, //[ 1, 2, 3, { aid: 1 }, [ 10, 20 ] ]
    oo: {id: 1, name: 'Hong', addr: {city: 'Seoul'}},
    xx: null, //null
    yy: function () {
        console.log(this.oo);
    },
    yyy() {
        console.log(this.oo);
    },
    [Symbol()]: 9,
    [Symbol()]: Symbol('symbol2'),
    zs: new Set([arr, hong]), //Set(2) { [ 1, 2, 3, { aid: 1 }, [ 10, 20 ] ], { id: 1, name: 'Hong' } }
    zws: new WeakSet([arr, hong]), //WeakSet { <items unknown> }
    zm: new Map([[hong, arr]]), //Map(1) { { id: 1, name: 'Hong' } => [ 1, 2, 3, { aid: 1 }, [ 10, 20 ] ] }
    zwm: new WeakMap([[hong, arr]]), //WeakMap { <items unknown> }
};

//내가 찾은 방법:
// const ctr = {
//     String: obj => String(obj),
//     Array: obj => obj.map(value => typeof value === 'object' ? deepCopy(value) : value),
//     Object: obj => {
//         let copy = {};
//         Reflect.ownKeys(obj).forEach(k => {
//             // console.log("Object");
//             if (obj[k] === 'null') copy[k] = k;
//             copy[k] = typeof obj[k] === "object" && obj[k] != null ? deepCopy(obj[k]) : obj[k];
//             // copy[k] = obj[k];
//         });
//         return copy;
//     },
//     Map: obj => new Map([...obj].map((value) => typeof value === "object" ? deepCopy(value) : value)),
//     Set: obj => new Set([...obj].map((key) => typeof key === "object" ? deepCopy(key) : key)),
//     WeakMap: () => new WeakMap(),
//     WeakSet: () => new WeakSet()
// };

// function deepCopy(obj) {
//     let copy = {};
//     // // console.log('------------------------');
//     if (obj != null && ctr[obj.constructor.name]) {
//         copy = ctr[obj.constructor.name](obj);
//     }
//     return copy;
// };

//스터디원 조언으로 찾은 방법:
const deepCopy = value => {
    if (
        value == null ||
        typeof value !== 'object' ||
        value instanceof WeakMap ||
        value instanceof WeakSet
    )
        return value;

    const copy = new value.constructor();

    if (value instanceof Map) {
        [...value].forEach(([k, v]) => [copy.set(deepCopy(k), deepCopy(v))]);
        return copy;
    }

    if (value instanceof Set) {
        [...value].map(k => copy.add(deepCopy(k)));
        return copy;
    }

    //배열이거나 Object일 때는 새로운 하위 스코프가 생성되고, 이 안에서 for of문을 처음부터 실행
    //종료되면 비로소 Object 또는 Array를 복사한 값이 반환
    //그런 뒤, kim의 다음 key를 순회
    for (const k of Reflect.ownKeys(value)) {
        copy[k] = deepCopy(value[k]);
    }
    return copy;
};

const newKim = deepCopy(kim);
// console.log(newKim);
// console.log(kim);

assert.deepStrictEqual(newKim, kim, 'deepCopy equal fail!');
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
assert.notDeepStrictEqual(newKim, kim, 'Not Valid Deep Copy!');
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
// console.log(newKim);
// console.log(kim);
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], 'pass2: 다르지 않아요!');
assert.notStrictEqual(
    kim.oo.addr.city,
    newKim.oo.addr.city,
    'Not Pass3: city가 다르지 않아요!',
);
