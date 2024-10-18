const assert = require('assert');

const replaceFormat = (str, length) => {
    const regExp = new RegExp(
        `^([0-9]{${length}})([0-9]{3,4})([0-9]{4})$`,
        'g',
    );
    return str.replace(regExp, `$1-$2-$3`);
};

const telfmt = str => {
    if (/\D+/.test(str)) return '잘못된 전화번호입니다. (숫자만 가능)';
    const start = str.slice(0, 2);
    switch (start) {
        case '02':
            return replaceFormat(str, 2);
        case '15':
            return str.replace(/^([0-9]{4})([0-9]{4})$/g, '$1-$2');
        case '05':
            return str.replace(/^([0-9]{4})([0-9]{4})([0-9]{4})$/g, '$1-$2-$3');
        default:
            return replaceFormat(str, 3);
    }
};

assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(
    telfmt('010-233df'),
    '잘못된 전화번호입니다. (숫자만 가능)',
);
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');

//리팩토링(전)
// const telfmt = str => {
//     if (/\D+/.test(str)) return '잘못된 전화번호입니다. (숫자만 가능)';
//     const start = str.slice(0, 2);
//     switch (start) {
//         case '02':
//             return str.replace(
//                 /^([0-9]{2})([0-9]{3,4})([0-9]{4})$/,
//                 '$1-$2-$3',
//             );
//         case '15':
//             return str.replace(/^([0-9]{4})([0-9]{4})$/, '$1-$2');
//         default:
//             return str.replace(
//                 /^([0-9]{3})([0-9]{3,4})([0-9]{4})$/,
//                 '$1-$2-$3',
//             );
//     }
// };
