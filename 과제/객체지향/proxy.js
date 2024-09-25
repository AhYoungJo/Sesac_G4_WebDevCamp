const assert = require('assert');

class Emp {
    firstName; //undefined
    lastName; //undefined
}
const HONG = new Emp();

const handler = {
    get(target, prop) {
        if (prop === 'fullName') {
            target.lastName = `${target.lastName}`.toUpperCase();
            return `${target.firstName} ${target.lastName}`;
        } else {
            return target[prop];
        }
    },
    set(target, prop, value) {
        if (prop === 'fullName') {
            const [first, last] = value.split(' ');
            if (value.split(' ').length > 1) {
                target.firstName = first;
                target.lastName = last.toUpperCase();
            } else {
                target.lastName = first.toUpperCase();
            }
        } else {
            target[prop] = value;
        }
        return target;
    },
};

const hong = new Proxy(HONG, handler);

hong.fullName = 'Kildong Hong';
assert.strictEqual(hong.fullName, 'Kildong HONG');

hong.fullName = 'Lee';
assert.strictEqual(hong.fullName, 'Kildong LEE');
