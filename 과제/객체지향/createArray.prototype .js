const assert = require('assert');
const hong = { id: 1, name: 'Hing' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

//1) mapBy()
Array.prototype.mapBy = function mapBy(key) {
    return this.map(obj => obj[key]);
};
assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);

//2)findBy()
Array.prototype.findBy = function findBy(key, value) {
    return this.filter(obj => obj[key] === value);
};
assert.deepStrictEqual(users.findBy('name', 'Kim'), [kim]);

//3)filterBy()
Array.prototype.filterBy = function filterBy(key, value, boolean) {
    return this.filter(obj =>
        //true: name에 i가 있는 값만 남기고 싶을 때
        //false: name에 i가 없는 값만 남기고 싶을 때
        boolean == null
            ? obj[key] === value
            : boolean
                ? String(obj[key]).includes(value)
                : !String(obj[key]).includes(value),
    );
};
assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]);

//4)rejectBy()
Array.prototype.rejectBy = function rejectBy(key, value, boolean) {
    return this.filter(obj =>
        //true: name에 i가 있는 값만 지우고 싶을 때
        //false: name에 i가 없는 값만 지우고 싶을 때
        boolean == null
            ? obj[key] !== value
            : boolean
                ? !String(obj[key]).includes(value)
                : String(obj[key]).includes(value),
    );
};
assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', false), [hong, kim]);

//5) sortBy()
Array.prototype.sortBy = function sortBy(sortingCriteria) {
    const [key, desc] = sortingCriteria.split(':');
    this.toSorted((obj1, obj2) => {
        if (obj1[key] > obj2[key]) return desc ? -1 : 1;
        if (obj1[key] < obj2[key]) return desc ? 1 : -1;
        if (obj1[key] === obj2[key]) return 0;
    });
};
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);

//6) firstObject()
//이렇게는 정의 불가능..
// Array.prototype.firstObject = firstObject: function() {
//     // return this[0];
//     return this.find(v => v && v.constructor === Object);
// };
Object.defineProperty(Array.prototype, 'firstObject', {
    get: function () {
        //배열 안에 obj만 있다는 가정 아래
        return this[0];
    },
    set: function (obj) {
        this[0] = obj;
    },
});

// //7) lastObject()
Object.defineProperty(Array.prototype, 'lastObject', {
    get: function () {
        return this[this.length - 1];
    },
    set: function (obj) {
        this[this.length - 1] = obj;
    },
});
assert.deepStrictEqual(users.firstObject, hong);
//assert.deepStrictEqual(users.lastObject, lee); //테스트코드 잘못됨
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);

const arr = [1, 2, 3, 4, 5];
assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
