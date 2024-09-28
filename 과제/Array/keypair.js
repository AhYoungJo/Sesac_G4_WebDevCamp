const assert = require('assert');

// 최악의 경우 O(n^2).. failed!
// function keyPair(arr, N) {
//     if (N < 0) return;
//     if (!Array.isArray(arr)) return;

//     //보수 관계로 구하기
//     for (let i of arr) {
//         const a = arr.indexOf(i);
//         const b = arr.indexOf(N - i);
//         if (b > -1) return [a, b];
//     }
// }

// function keyPair(arr, N) {
//     const map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         const a = N - arr[i];

//         if (map.has(a)) {
//             return [map.get(a), i];
//         }
//         map.set(arr[i], i);
//     }
// }

function keyPair(arr, N) {
    const cache = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in cache) return [cache[arr[i]], i];
        cache[N - arr[i]] = i;
    }
}

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 5, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [1, 5]);
