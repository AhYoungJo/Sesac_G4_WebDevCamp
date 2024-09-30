const assert = require('assert');

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
            // if (value.split(' ').length > 1) {
            //     target.firstName = first;
            //     target.lastName = last.toUpperCase();
            !value.includes(' ')
                ? [first, last]
                : [target.firstName, last];
        } else {
            target[prop] = value;
        }
        return target;
    },
};
// class Emp {
//     constructor() {
//         this.firstName;
//         this.lastName;
//         return new Proxy(this, {
//             get(target, prop) {
//                 console.log(target);
//                 if (prop === 'fullName') {
//                     target.lastName = `${target.lastName}`.toUpperCase();
//                     return `${target.firstName} ${target.lastName}`;
//                 } else {
//                     return target[prop];
//                 }
//             },
//             set(target, prop, value) {
//                 if (prop === 'fullName') {
//                     const [first, last] = value.split(' ');
//                     // if (value.split(' ').length > 1) {
//                     //     target.firstName = first;
//                     //     target.lastName = last.toUpperCase();
//                     !value.includes(' ')
//                         ? [first, last.toUpperCase()]
//                         : [target.firstName, last.toUpperCase()];
//                 } else {
//                     target[prop] = value;
//                 }
//                 return target;
//             }
//         });
//     }
// }
// const HONG = new Emp();

class Emp {
    firstName;
    lastName;
    get() {
        console.log(this);
    };
    constructor() {
        return new Proxy(this, {
            get(target, prop, receiver) {
                if (prop === "fullName")
                    return `${target.firstName} ${target.lastName}`;
                if (prop === "firstName") return `${target.firstName}`;
                if (prop === "lastName") return `${target.lastName}`;
            },
            set(target, prop, val, receiver) {
                if (prop === "fullName") {
                    let [f, l] = val.split(" ");
                    if (l === undefined) {
                        target.lastName = f.toUpperCase();
                    } else {
                        target.firstName = f;
                        target.lastName = l.toUpperCase();
                    }
                }
            },
        });
    }
}

// const hong = new Proxy(HONG, handler);
const hong = new Emp();
console.log("Dfd", hong.get);

hong.fullName = 'Kildong Hong';
console.log("ㅇㄹ", hong.fullName);
assert.strictEqual(hong.fullName, 'Kildong HONG');

hong.fullName = 'Lee';
assert.strictEqual(hong.fullName, 'Kildong LEE');