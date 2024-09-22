const assert = require('assert');

//MDN:
//initialValue를 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를
//실행하고 첫 번째 인덱스는 건너 뜁니다.
//initialValue를 제공하면 인덱스 0에서 시작합니다.

//만약 reduce() 함수 호출에서 initialValue를 제공한 경우,
//accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다.
//initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고
//currentValue는 두 번째와 같습니다.

const reduce = (arr, fn, initValue) => {
    const isValid_initValue = initValue !== undefined && initValue !== null;

    //초기 acc 값: initValue
    //initValue가 undefined일 때: 첫 번째 요소
    let acc = isValid_initValue ? initValue : arr[0];

    //초기 start 값: 첫 번째 요소
    //initValue가 undefined일 때: 두 번째 요소
    const start = isValid_initValue ? 0 : 1;

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
