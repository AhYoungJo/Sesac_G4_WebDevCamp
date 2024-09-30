const assert = require('assert');

// class Emp {
//     firstName; //undefined
//     lastName; //undefined
// }
// const HONG = new Emp();

const handler = {
    get(target, prop) {
        if (prop === 'fullName') {
            target.lastName = `${target.lastName}`.toUpperCase();
            return `${target.firstName} ${target.lastName}`;
        }
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === 'fullName') {
            const [first, last] = value.split(' ');
            value.split(' ').length > 1
                ? ((target.firstName = first),
                    (target.lastName = last.toUpperCase()))
                : (target.lastName = first.toUpperCase());
        } else {
            target[prop] = value;
        }
        return true;
    },
};
// const hong = new Proxy(HONG, handler);

class Emp {
    firstName; //undefined
    lastName; //undefined
    constructor() {
        return new Proxy(this, {
            get(target, prop) {
                if (prop === 'fullName') {
                    return `${target.firstName
                        } ${target.lastName?.toUpperCase()}`;
                }
                return target[prop];
            },
            set(target, prop, value) {
                if (prop === 'fullName')
                    // const [first, last] = value.split(' ');
                    // value.split(' ').length > 1
                    //     ? ((target.firstName = first),
                    //       (target.lastName = last.toUpperCase()))
                    //     : (target.lastName = first.toUpperCase());
                    [target.firstName, target.lastName] = value.includes(' ')
                        ? value.split(' ')
                        : [target.firstName, value];
                else target[prop] = value;
            },
        });
    }
}

const hong = new Emp();

hong.fullName = 'Kildong Hong';
console.log("ㅇㄹ", hong.fullName);
assert.strictEqual(hong.fullName, 'Kildong HONG');

hong.fullName = 'Lee';
assert.strictEqual(hong.fullName, 'Kildong LEE');