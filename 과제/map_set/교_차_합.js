const assert = require('assert');

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

function intersect(A, B) {
    //중복제거
    const a = new Set(A);
    const b = new Set(B);
    return [...a].filter(v => b.has(v));
}

function diff(A, B) {
    const a = new Set(A);
    const b = new Set(B);
    return [...a].filter(v => !b.has(v));
}

function union(A, B) {
    const a = new Set(A);
    for (const b of B) {
        a.add(b);
    }
    return [...a];
}

assert.deepStrictEqual(intersect(A, B), [1, 3, 5]);
assert.deepStrictEqual(intersect(A, C), [3, 4]);
assert.deepStrictEqual(diff(A, B), [2, 4]);
assert.deepStrictEqual(diff(B, A), [22, 44]);
assert.deepStrictEqual(diff(A, C), [1, 2, 5]);
assert.deepStrictEqual(diff(B, C), [1, 22, 44, 5]);
assert.deepStrictEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44]);
assert.deepStrictEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555]);
