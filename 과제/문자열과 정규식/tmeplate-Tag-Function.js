const assert = require('assert');

const total = {price: 45000, vat: 4500};

function fmt(txt, price) {
    return String.raw(txt, price);
}

assert.strictEqual(fmt`주문합계: ${total.price}원`, '주문합계: 45000원');
assert.strictEqual(fmt`세액합계: ${total.vat}원`, '세액합계: 4500원');
