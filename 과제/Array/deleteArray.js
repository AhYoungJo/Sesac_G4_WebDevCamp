const assert = require('assert');

function deleteObjFromArray(arr, key, val) {
    const findId = (key, val) => obj => obj[key] === val;
    const startIdx = arr.findIndex(findId(key, val));
    return startIdx >= 0 ? arr.toSpliced(startIdx, 1) : arr;
}

function deleteArray(arr, ...args) {
    //시작하는 Index의 default: 0
    //끝나는 지점 default: 배열 길이
    //MDN: 만약 deleteCount가 생략되거나, deleteCount가 start 인덱스 뒤의 요소의 개수보다 크거나 같으면 배열의 시작부터 끝까지 모든 요소가 삭제됩니다.
    let [startIdx = 0, deleteCount = arr.length] = [...args];

    //만약 startIdx가 객체의 key면 key의 val값과 일치하는 객체의 index검색

    //v1. 중복 객체 없다 가정하고 1개만 삭제하는 조건문
    // if (typeof startIdx === 'string') {
    //     const key = startIdx;
    //     const val = deleteCount;
    //     return deleteObjFromArray(arr, key, val);
    // }

    //v2. 동일한 객체가 여러개일 수 있다 가정하고, 있다면 재귀하는 조건문
    if (typeof startIdx === 'string') {
        const key = startIdx;
        const val = deleteCount;
        let newArr;
        function deleteByKey(arr, key, val) {
            newArr = deleteObjFromArray(arr, key, val);
            if (newArr.length === arr.length) return newArr;
            return deleteByKey(newArr, key, val);
        }
        return deleteByKey(arr, key, val);
    }

    //toSpliced 메서드의 deleteCount보다 -1 만큼 제거
    return arr.toSpliced(startIdx, deleteCount - 1);
}

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = {id: 1, name: 'Hong'};
const Kim = {id: 2, name: 'Kim'};
const Lee = {id: 3, name: 'Lee'};
// const users = [Hong, Kim, Lee];
const users = [Hong, Kim, Lee, Hong];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee, Hong]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee, Hong]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim, Hong]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Hong'), [Kim, Lee]);
