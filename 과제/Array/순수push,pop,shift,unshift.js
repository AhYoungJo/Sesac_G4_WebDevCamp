const assert = require('assert');

function push(arr, ...args) {
    // 중첩 배열을 flat(1)까지만 하는 것과, 모두 flat하는 두 가지 버전
    // return [...arr, ...args.flat(1)];
    return [...arr, ...args.flat(Infinity)];
}

function pop(arr, deleteCount = 1) {
    //뒤에서부터 자르기 때문에 default는 0이 아닌 1 , 음수 index: -4, -3, -2, -1
    //배열 길이를 넘어가면, [] 출력
    deleteCount =
        deleteCount < arr.length || -deleteCount >= -arr.length
            ? deleteCount
            : -arr.length;
    const removed = arr.slice(-deleteCount);
    return deleteCount === 1 ? removed[0] : removed;
}

function unshift(arr, ...args) {
    // return [...args.flat(1), ...arr];
    return [...args.flat(Infinity), ...arr];
}

function shift(arr, deleteCount = 1) {
    deleteCount =
        deleteCount < arr.length || -deleteCount >= -arr.length
            ? deleteCount
            : arr.length;
    const removed = arr.slice(deleteCount);
    return removed.length === 1 ? removed[0] : removed;
}

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(push(arr, [1, 2]), [1, 2, 3, 4, 1, 2]); // 배열이 들어가도 1, 2

// assert.deepStrictEqual(push(arr, [[1, 2], 2]), [1, 2, 3, 4, [1, 2], 2]);
assert.deepStrictEqual(push(arr, [[1, 2], 2]), [1, 2, 3, 4, 1, 2, 2]);

//pop은 pop 원래 메서드대로 작동 O
//내 생각: 2개를 pop한 후[1, 2]를 출력해줘야 하는거 아니야 ?
assert.deepStrictEqual(pop(arr), 4); // 기본값 -1
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(pop(arr, 5), []);

assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

//shift는 본래 shift 메서드대로 작동X
//내 생각: 얘는 또 shift된 배열을 반환함. 이게 맞는 듯?
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]); // 2개 shift

assert.deepStrictEqual(arr, [1, 2, 3, 4]);
