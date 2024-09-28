const assert = require('assert');

// const UsersMethod = Object.create(Array.prototype);

// UsersMethod.addUser = function add(...args) {
//     return [...this, ...args];
// };
// UsersMethod.removeUser = function remove(value) {
//     console.log(value.toString());
//     return this.filter(thisVal => thisVal !== value);
// };
// UsersMethod.changeUser = function change(...args) {
//     return this.with(...args);
// };

const hong = {id: 1, name: 'Hong'};
const choi = {id: 5, name: 'Choi'};
const kim = {id: 2, name: 'kim'};
const lee = {id: 3, name: 'Lee'};
const park = {id: 4, name: 'Park'};
const users = [kim, lee, park];

users.addUser = function add(...user) {
    return [...this, ...user];
};

users.removeUser = function remove(user) {
    // return this.filter(thisUser => thisUser != user);
    return this.filter(({id}) => id != user.id);
};

// users.changeUser = function change(...user) {
//     return this.with(...user);
//};
users.changeUser = function change(before, after) {
    return this.map(user => (user.id === before.id ? after : user));
};

// Reflect.setPrototypeOf(users, UsersMethod); 원본이 아예 달라짐 Error!

Object.defineProperty(users, 'addUser', {enumerable: false});
Object.defineProperty(users, 'removeUser', {enumerable: false});
Object.defineProperty(users, 'changeUser', {enumerable: false});

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
